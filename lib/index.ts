import { Currency, CurrencyCharCode, Daily } from './types'
import axios from 'axios'
import { DAILY_CURRENCY_URL } from './constants'
import { formatDate, formatToFloat } from './utils'
import { XMLParser } from 'fast-xml-parser'

export * from './types'

export default class CbrAPI {
  constructor() {}

  /**
   * Get daily currency rates of all registered currencies
   */
  public async getDailyCurrencyRate(): Promise<Currency[] | undefined> {
    const today = new Date()

    try {
      const response = await axios.get(
        `${DAILY_CURRENCY_URL}?date_req=${formatDate(today)}`,
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
  ): Promise<Currency | undefined> {
    try {
      const data = await this.getDailyCurrencyRate()

      return data?.filter(i => i.CharCode === currency)[0]
    } catch (error) {
      console.error(error)

      return undefined
    }
  }
}
