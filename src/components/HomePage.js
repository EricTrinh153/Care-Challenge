import Input from 'antd/lib/input/Input';
import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { useGetCryptosQuery } from '../services/apiRequest';
function HomePage() {

  //Handle Row Click
  const navigate = useNavigate();
  const handleRowClick = (data) => {
    navigate(`/crypto/${data.uuid}`);
  }
  //get data from Redux
  const { data: cryptoList, isFetching } = useGetCryptosQuery();

  const [cryptos, setCryptos] = useState([]);
  const [order, setOrder] = useState("ASC");

  //Searching function
  const [term, setTerm] = useState('');
  useEffect(() => {
    const filteredData = cryptoList?.data?.coins.filter((coin) => coin.name.toLowerCase().includes(term.toLowerCase()));
    setCryptos(filteredData);
  }, [cryptoList, term])
  if (isFetching) return 'Loading ...';

  //Sorting table

  const sorting = (col) => {
    if (order === "ASC") {
      const sorted = [...cryptos].sort((a, b) =>
        a[col] > b[col] ? 1 : -1
      );
      setCryptos(sorted);
      setOrder("DSC")
    }
    if (order === "DSC") {
      const sorted = [...cryptos].sort((a, b) =>
        a[col] < b[col] ? 1 : -1
      );
      setCryptos(sorted);
      setOrder("ASC")
    }
  }



  return (
    <div className='container-fluid'>
      <div className='search-bar'>
        <Input placeholder='Search ...' onChange={(e) => setTerm(e.target.value)} />
      </div>
      <table className='table table-bordered'>
        <thead>
          <th>Coin Name</th>
          <th>Coin Symbol</th>
          <th>Coin Logo</th>
          <th onClick={() => sorting("price")}> Current price</th>
          <th onClick={() => sorting("marketCap")}>Current total market cap</th>
          <th onClick={() => sorting("change")}>The price changes</th>
        </thead>
        <tbody>
          {cryptos?.map((coins) => (
            <tr onClick={() => handleRowClick(coins)} key={coins.uuid}>
              <td>{coins.name}</td>

              <td>{coins.symbol}</td>
              <td><img src={coins.iconUrl} alt="new" width="50" height="40" /></td>
              <td>{coins.price}</td>
              <td>{coins.marketCap}</td>
              <td>{coins.change}%</td>

            </tr>

          ))}
        </tbody>
      </table>
    </div>
  )
}

export default HomePage;