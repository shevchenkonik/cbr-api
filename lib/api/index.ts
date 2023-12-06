import axios from 'axios'
import { XMLParser } from 'fast-xml-parser'

import { BASE_URL, POSTFIX_URL } from '../constants'
import { CbrAPIConfig, Currency, CurrencyCharCode, Daily } from '../types'
import { formatDate, formatToFloat } from '../utils'

export class CbrAPI {
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
    date = new Date(),
  ): Promise<Currency[]> {
    try {
      const response = await axios.get(
        `${this.config.url}/XML_daily.asp?date_req=${formatDate(
          date,
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
      throw new Error('CBR API: while getting daily currencies rate')
    }
  }

  /**
   * Get daily currency rate of specific currency
   */
  public async getDailySpecificCurrencyRate(
    currency: CurrencyCharCode,
    date?: Date
  ): Promise<Currency> {
    try {
      const data = await this.getDailyCurrenciesRate(date)

      return data?.filter(item => item.CharCode === currency)[0]
    } catch (error) {
      throw new Error('CBR API: while getting daily specific currency rate')
    }
  }
}
