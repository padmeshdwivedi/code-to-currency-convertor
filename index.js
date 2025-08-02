import Freecurrencyapi from '@everapi/freecurrencyapi-js';
const freecurrencyapi = new Freecurrencyapi('fca_live_RCXO0xNxoInEVYv6JLub3wbyhNDzaoqkWRHMmgiY');

let var1=convertCurrency("INR","USD",3);

/**
 * Converts currency from one type to another.
 * @param {string} fromCurrency - The base currency (e.g., 'USD').
 * @param {string} toCurrency - The target currency (e.g., 'INR').
 * @param {number} units - The amount to convert.
 * @returns {Promise<number>} - Converted amount.
 */

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

