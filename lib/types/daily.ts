export interface Daily {
    ValCurs: DailyCurrencyCurs;
}

export interface DailyCurrencyCurs {
    Valute: DailyCurrency[];
}

export interface DailyCurrency {
    NumCode: number;
    CharCode: string;
    Nominal: number;
    Name: string;
    Value: string;
    VunitRate: string;
}

export enum Currency {
    EUR = 978
}