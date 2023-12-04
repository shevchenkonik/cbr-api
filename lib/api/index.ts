import axios from "axios"
import { XMLParser } from 'fast-xml-parser'

import {Currency, Daily, DailyCurrency} from "../types";
import { formatDate } from '../utils'

export const getDailyCurrencyRate = async (currency: string, date: Date): Promise<DailyCurrency | undefined> => {
    const today = formatDate(date)

    try {
        const data = await axios.get(`http://www.cbr.ru/scripts/XML_daily.asp?date_req=${today}&VAL_NM_RQ=${currency}`)
        const parser = new XMLParser()
        const parsedData: Daily = parser.parse(data.data)
        const currenciesList = parsedData.ValCurs.Valute
        const result = currenciesList.filter(i => i.NumCode === 978)

        return result[0]
    } catch (e) {
        console.error(e)
    }
}