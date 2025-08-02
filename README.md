# @padmesh123/currency-convertor

A simple and lightweight NPM package for converting currency using [FreeCurrencyAPI](https://freecurrencyapi.com/).

---

## 📦 Installation

```bash
npm install @padmesh123/currency-convertor

🚀 Usage
js
Copy
Edit
import Freecurrencyapi from '@everapi/freecurrencyapi-js';
const freecurrencyapi = new Freecurrencyapi('YOUR_API_KEY_HERE');

async function convertCurrency(fromCurrency, toCurrency, units) {
    const res = await freecurrencyapi.latest({
        base_currency: fromCurrency,
        currencies: toCurrency
    });
    const multiplier = res.data[toCurrency];
    return multiplier * units;
}

// Example:
const amount = await convertCurrency("INR", "USD", 3);
console.log(amount);