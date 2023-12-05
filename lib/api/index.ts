import axios from 'axios'
import { XMLParser } from 'fast-xml-parser'

import { Daily, Currency, CurrencyCharCode } from '../types'
import { formatDate, formatToFloat } from '../utils'
import { DAILY_CURRENCY_URL } from '../constants'

export const getDailyCurrencyRate = async (): Promise<Currency[] | undefined> => {
  const today = new Date()

  try {
    const data = await axios.get(
      `${DAILY_CURRENCY_URL}?date_req=${formatDate(today)}`,
    )

    const parser = new XMLParser({
      ignoreAttributes: false,
      attributeNamePrefix: '',
    })

    const { ValCurs: { Valute } }: Daily = parser.parse(data.data)

    return Valute.map(currency => {
      return {
        ...currency,
        Value: formatToFloat(currency.Value),
        VunitRate: formatToFloat(currency.VunitRate)
      }
    })
  } catch (e) {
    console.error(e)

    return undefined
  }
}

export const getDailySpecificCurrencyRate = async (
  currency: CurrencyCharCode,
): Promise<Currency | undefined> => {
  try {
    const data = await getDailyCurrencyRate()

    return data?.filter(i => i.CharCode === currency)[0]
  } catch (e) {
    console.error(e)

    return undefined
  }
}
