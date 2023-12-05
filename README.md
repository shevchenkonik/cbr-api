# CBR API (Central Bank of Russia)

> This is a minimalistic API wrapper written on TypeScript for getting currency rates from the Central Bank of Russia

<img src="images/logo.png" width="300" height="300">

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

* `.getDailySpecificCurrencyRate(currency)`
* `.getDailyCurrencyRates()`

## Source Data
> https://www.cbr.ru/development/sxml/