import Freecurrencyapi from '@everapi/freecurrencyapi-js';
const freecurrencyapi = new Freecurrencyapi('fca_live_RCXO0xNxoInEVYv6JLub3wbyhNDzaoqkWRHMmgiY');

let var1=convertCurrency("INR","USD",3);

let var2=convertCurrency("USD","INR",3);
console.log(var1,var2);
async function convertCurrency(fromCurrency,toCurrecny,units) {
    const res= await freecurrencyapi.latest({
                base_currency: fromCurrency,
                currencies: toCurrecny
            });
    const multiplier=res.data[toCurrecny];
    console.log(multiplier);
    return multiplier*units;
}

