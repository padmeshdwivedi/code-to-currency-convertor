import Freecurrencyapi from '@everapi/freecurrencyapi-js';
const freecurrencyapi = new Freecurrencyapi('fca_live_RCXO0xNxoInEVYv6JLub3wbyhNDzaoqkWRHMmgiY');

convertCurrency("INR","USD",3);
async function convertCurrency(fromCurrency,toCurrecny,units) {
    const res= await freecurrencyapi.latest({
                base_currency: fromCurrency,
                currencies: toCurrecny
            });
    const multiplier=res.data[toCurrecny];
    console.log(multiplier);
    return multiplier*units;
}

