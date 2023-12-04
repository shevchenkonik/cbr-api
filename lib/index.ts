import { getDailyCurrencyRate } from './api'


const result = async () => {
    try {
        const data = await getDailyCurrencyRate('R01239', new Date())
        const val = parseFloat(data?.Value ?? '0')
        console.log(10000 / val)
    } catch (e) {}
}

result()