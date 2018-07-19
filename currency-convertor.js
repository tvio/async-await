//http://data.fixer.io/api/latest?access_key=57223ed7baf23fcb5545d74e757d54a9

const axios = require ('axios');


//sync
// const getExchangeRate = (from,to) => {
//    return  axios.get('http://data.fixer.io/api/latest?access_key=57223ed7baf23fcb5545d74e757d54a9').then((response)=>{
//         const euro = 1 / response.data.rates[from];
//         const rate = euro * response.data.rates[to];
//         return rate;
//     }); 
// };

//async
const getExchangeRate = async (from,to) => {
    const response = await axios.get('http://data.fixer.io/api/latest?access_key=57223ed7baf23fcb5545d74e757d54a9');
        const euro = 1 / response.data.rates[from];
        const rate = euro * response.data.rates[to];
        return rate;
   
};

//sync
// const getCountries = (currencyCode) => {
//  return axios.get(`https://restcountries.eu/rest/v2/currency/${currencyCode}`).then((response)=>{
//     return response.data.map((country)=>country.name);
//  });
// };

//async
const getCountries =  async(currencyCode) => {
 const response = await axios.get(`https://restcountries.eu/rest/v2/currency/${currencyCode}`);
    return response.data.map((country)=>country.name);
};

//sync
// const convertCurrency = (from,to, amount) =>{
//     let convertedAmount;
//     return getExchangeRate(from,to).then((rate)=>{
//         convertedAmount = (amount * rate).toFixed(2);
//        // console.log(convertedAmount);
//         return getCountries(to);
//     }).then((countries)=>{
//     //console.log(countries);
//     return `${amount} v ${from} je ${convertedAmount} v ${to}. Menu muzeme pouzit v nize uvedenych statech: ${countries.join(', ')}`;
//     });
// };

//async
const convertCurrency = async (from,to, amount) =>{
    const rate = await getExchangeRate(from,to);
    convertedAmount = (amount * rate).toFixed(2);
    const countries = await getCountries(to);
   
    //console.log(countries);
    return `${amount} v ${from} je ${convertedAmount} v ${to}. Menu muzeme pouzit v nize uvedenych statech: ${countries.join(', ')}`;
    };


convertCurrency('EUR','CZK',200).then((odpoved)=>{
    console.log(odpoved);
}).catch((e)=>{
    console.log(e);
});


// getExchangeRate('EUR','CZK').then((rate)=>{
//     console.log(rate);
// }).catch((e)=>{
//     console.log(e);
// });

// getCountries('EUR').then((countries)=>{
//     console.log(countries);
// });