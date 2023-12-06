import axios from 'axios'
import { XMLParser } from 'fast-xml-parser'

import { BASE_URL, DAILY_CURRENCY_URL, POSTFIX_URL } from './constants'
import { CbrAPIConfig, Currency, CurrencyCharCode, Daily } from './types'
import { formatDate, formatToFloat } from './utils'

export * from './types'

export default class CbrAPI {
  readonly config: CbrAPIConfig = {}

  constructor() {
    this.config = {
      url: `${BASE_URL}/${POSTFIX_URL}`,
    }
  }

  /**
   * Get daily currency rates of all registered currencies
   */
  public async getDailyCurrenciesRate(
    date?: Date,
  ): Promise<Currency[] | undefined> {
    const dateData = date || new Date()

    try {
      const response = await axios.get(
        `${this.config.url}/${DAILY_CURRENCY_URL}?date_req=${formatDate(
          dateData,
        )}`,
      )

      const parser = new XMLParser({
        ignoreAttributes: false,
        attributeNamePrefix: '',
      })

      const {
        ValCurs: { Valute },
      }: Daily = parser.parse(response.data)

      return Valute.map(currency => {
        return {
          ...currency,
          Value: formatToFloat(currency.Value),
          VunitRate: formatToFloat(currency.VunitRate),
        }
      })
    } catch (error) {
      console.error(error)

      return undefined
    }
  }

  /**
   * Get daily currency rate of specific currency
   */
  public async getDailySpecificCurrencyRate(
    currency: CurrencyCharCode,
    date?: Date,
  ): Promise<Currency | undefined> {
    try {
      const data = await this.getDailyCurrenciesRate(date)

      return data?.filter(item => item.CharCode === currency)[0]
    } catch (error) {
      console.error(error)

      return undefined
    }
  }
}
