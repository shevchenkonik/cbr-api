import axios from 'axios'
import { XMLParser } from 'fast-xml-parser'

import { DAILY_CURRENCY_URL, BASE_URL } from './constants'
import { Currency, CurrencyCharCode, Daily } from './types'
import { formatDate, formatToFloat } from './utils'

export * from './types'

interface CbrAPIConfig {
  baseURL?: string
}

export default class CbrAPI {
  readonly config: CbrAPIConfig = {}

  constructor() {
    this.config = {
      baseURL: BASE_URL
    }
  }

  /**
   * Get daily currency rates of all registered currencies
   */
  public async getDailyCurrencyRate(): Promise<Currency[] | undefined> {
    const today = new Date()

    try {
      const response = await axios.get(
        `${this.config.baseURL}?date_req=${formatDate(today)}`,
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