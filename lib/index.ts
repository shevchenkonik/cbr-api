import { getDailySpecificCurrencyRate } from './api'
import { CurrencyCharCode } from './types'

;(async () => {
  try {
    const data = await getDailySpecificCurrencyRate(CurrencyCharCode.EUR)
    console.log(data)
  } catch (e) {}
})()
