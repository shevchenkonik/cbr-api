/**
 * Interface based on CBR XML data
 */
export interface CBRCurrency {
  NumCode: CurrencyNumCode
  CharCode: CurrencyCharCode
  Nominal: number
  Name: string
  Value: string
  VunitRate: string
  ID: CurrencyID
}

export type PartialCBRCurrency = Pick<
  CBRCurrency,
  'NumCode' | 'CharCode' | 'Nominal' | 'Name' | 'ID'
>

/**
 * Modified Interface based on CBR Interface with correct floats instead of strings
 */
export type Currency = PartialCBRCurrency & {
  Value: number
  VunitRate: number
}

/**
 * Currency IDs parsed from https://www.cbr.ru/scripts/XML_daily.asp
 */
export enum CurrencyID {
  AED = 'R01230',
  AMD = 'R01060',
  AUD = 'R01010',
  AZN = 'R01020A',
  BGN = 'R01100',
  BRL = 'R01115',
  BYN = 'R01090B',
  CAD = 'R01350',
  CHF = 'R01775',
  CNY = 'R01375',
  CZK = 'R01760',
  DKK = 'R01215',
  EGP = 'R01240',
  EUR = 'R01239',
  GBP = 'R01035',
  GEL = 'R01210',
  HKD = 'R01200',
  HUF = 'R01135',
  IDR = 'R01280',
  INR = 'R01270',
  JPY = 'R01820',
  KGS = 'R01370',
  KRW = 'R01815',
  KZT = 'R01335',
  MDL = 'R01500',
  NOK = 'R01535',
  NZD = 'R01530',
  PLN = 'R01565',
  QAR = 'R01355',
  RON = 'R01585F',
  RSD = 'R01805F',
  SEK = 'R01770',
  SGD = 'R01625',
  THB = 'R01675',
  TJS = 'R01670',
  TMT = 'R01710A',
  TRY = 'R01700J',
  UAH = 'R01720',
  USD = 'R01235',
  UZS = 'R01717',
  VND = 'R01150',
  XDR = 'R01589',
  ZAR = 'R01810',
}

/**
 * Currency Char Codes parsed from https://www.cbr.ru/scripts/XML_daily.asp
 */
export enum CurrencyCharCode {
  AED = 'AED',
  AMD = 'AMD',
  AUD = 'AUD',
  AZN = 'AZN',
  BGN = 'BGN',
  BRL = 'BRL',
  BYN = 'BYN',
  CAD = 'CAD',
  CHF = 'CHF',
  CNY = 'CNY',
  CZK = 'CZK',
  DKK = 'DKK',
  EGP = 'EGP',
  EUR = 'EUR',
  GBP = 'GBP',
  GEL = 'GEL',
  HKD = 'HKD',
  HUF = 'HUF',
  IDR = 'IDR',
  INR = 'INR',
  JPY = 'JPY',
  KGS = 'KGS',
  KRW = 'KRW',
  KZT = 'KZT',
  MDL = 'MDL',
  NOK = 'NOK',
  NZD = 'NZD',
  PLN = 'PLN',
  QAR = 'QAR',
  RON = 'RON',
  RSD = 'RSD',
  SEK = 'SEK',
  SGD = 'SGD',
  THB = 'THB',
  TJS = 'TJS',
  TMT = 'TMT',
  TRY = 'TRY',
  UAH = 'UAH',
  USD = 'USD',
  UZS = 'UZS',
  VND = 'VND',
  XDR = 'XDR',
  ZAR = 'ZAR',
}

/**
 * Currency Num Codes parsed from https://www.cbr.ru/scripts/XML_daily.asp
 */
export enum CurrencyNumCode {
  AED = 784,
  AMD = 51,
  AUD = 36,
  AZN = 944,
  BGN = 975,
  BRL = 986,
  BYN = 933,
  CAD = 124,
  CHF = 756,
  CNY = 156,
  CZK = 203,
  DKK = 208,
  EGP = 818,
  EUR = 978,
  GBP = 826,
  GEL = 981,
  HKD = 344,
  HUF = 348,
  IDR = 360,
  INR = 356,
  JPY = 392,
  KGS = 417,
  KRW = 410,
  KZT = 398,
  MDL = 498,
  NOK = 578,
  NZD = 554,
  PLN = 985,
  QAR = 634,
  RON = 946,
  RSD = 941,
  SEK = 752,
  SGD = 702,
  THB = 764,
  TJS = 972,
  TMT = 934,
  TRY = 949,
  UAH = 980,
  USD = 840,
  UZS = 860,
  VND = 704,
  XDR = 960,
  ZAR = 710,
}
