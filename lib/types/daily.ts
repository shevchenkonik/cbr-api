import { CBRCurrency } from './currencies'

export interface Daily {
  ValCurs: DailyCurrencyCurs
}

export interface DailyCurrencyCurs {
  Valute: CBRCurrency[]
}
