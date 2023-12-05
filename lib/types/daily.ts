import { Currency } from './currencies'

export interface Daily {
  ValCurs: DailyCurrencyCurs
}

export interface DailyCurrencyCurs {
  Valute: Currency[]
}
