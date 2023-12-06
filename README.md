# Non-Official CBR API (Central Bank of Russia)

<img src="images/logo.png" height="200" width="200">

> This is a minimalistic API wrapper written on TypeScript for getting currency rates from the Central Bank of Russia

## Installation

```shell
npm install cbr-api
```

## Usage

### Creating an instance

```typescript
import { CbrApi } from 'cbr-api';

const cbrApi = new CbrApi();
```

### Instance methods

* [.getDailySpecificCurrencyRate(currency, date)](#getdailyspecificcurrencyratecurrency)
* [.getDailyCurrencyRates(date)](#getdailycurrencyrates)

#### .getDailySpecificCurrencyRate(currency)
> Get specific currency rate for particular day or today (default)

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
> Get all currency rates for particular day or today (default)

## Resources

* [https://www.cbr.ru/development/sxml](https://www.cbr.ru/development/sxml)

## Legal
This API is in no way affiliated with, authorized, maintained, sponsored or endorsed by Central Bank of Russia or any of its affiliates or subsidiaries. 
This is an independent and unofficial API. Please use at your own risk.