// const axios = require('axios');
// const token = "coinrankinge96d57f9e71623814fbe1ec4eb909c9626d76b77a108d2f2";

//         const res = await axios.get(`https://api.coinranking.com/v2/coins`, {
//             headers: {
//                 'x-access-token': `${token}`
//             }
//         })
import {createApi, fetchBaseQuery} from '@reduxjs/toolkit/query/react';

const cryptoApiHeaders = {
    'X-RapidAPI-Host': 'coinranking1.p.rapidapi.com',
    'X-RapidAPI-Key': 'f0021db587msh781fb1cbef39856p11c183jsn45521d5d1c85'
}
const baseUrl = 'https://coinranking1.p.rapidapi.com';

const createRequest = (url) =>({url, headers:cryptoApiHeaders});

export const cryptoApi = createApi({
    reducerPath:'cryptoApi',
    baseQuery: fetchBaseQuery({baseUrl}),
    endpoints:(builder)=>({
        getCryptos : builder.query({
            query: ()=>createRequest('/coins')
        }),
        getCryptoDetails: builder.query({
            query: (coinId) => createRequest(`/coin/${coinId}`),
          }),
    })
})

export const {
    useGetCryptosQuery,
    useGetCryptoDetailsQuery,
} = cryptoApi;