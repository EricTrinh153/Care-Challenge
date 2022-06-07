import React from 'react';

import { useParams } from 'react-router-dom';
import { useGetCryptoDetailsQuery } from '../services/apiRequest';

const CryptosDetails =()=>{
    const {coinId} = useParams();
    const { data, isFetching } = useGetCryptoDetailsQuery(coinId);
    
    const cryptoDetails = data?.data?.coin;
   if(isFetching) return "loading ...";
    return(
        <div>
            <h1>Ranking {cryptoDetails.rank}</h1>
            <h2>{cryptoDetails.name}</h2>
            <p></p>
            <p><img src={cryptoDetails.iconUrl} width="100" height="100" alt="new"/></p>
            <ul>
                <li><strong>Price:</strong> {cryptoDetails.price}</li>
                <li><strong>Changes:</strong> {cryptoDetails.change}%</li>
                <li><strong>Description:</strong> {cryptoDetails.description}%</li>
            </ul>
        </div>
    )
}
export default CryptosDetails;