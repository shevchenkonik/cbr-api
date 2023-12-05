# Non-Official CBR API (Central Bank of Russia)

> This is a minimalistic API wrapper written on TypeScript for getting currency rates from the Central Bank of Russia

<img src="images/logo.png" width="300" height="300">

## Installation

```shell
npm install cbr-api
```

## Usage

### Creating an instance

```typescript
import { CbrApi, Currency } from 'cbr-api';

const cbrApi = new CbrApi();
```

### Instance methods

* [.getDailySpecificCurrencyRate(currency)](#getdailyspecificcurrencyratecurrency)
* [.getDailyCurrencyRates()](#getdailycurrencyrates)

#### .getDailySpecificCurrencyRate(currency)
> Get specific currency rate for today

```typescript
cbrApi.getDailySpecificCurrencyRate(Currency.USD)
  .then((rate) => {
    console.log(rate);
  })
  .catch((err) => {
    console.log(err);
  });
```

#### .getDailyCurrencyRates()
> Get all currency rates for today

## Resources

* [https://www.cbr.ru/development/sxml](https://www.cbr.ru/development/sxml)

## Legal
This API is in no way affiliated with, authorized, maintained, sponsored or endorsed by Central Bank of Russia or any of its affiliates or subsidiaries. 
This is an independent and unofficial API. Please use at your own risk.