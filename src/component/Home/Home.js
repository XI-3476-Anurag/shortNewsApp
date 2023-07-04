import React, { useEffect, useState } from 'react'
import NewsCard from '../NewsCard/NewsCard';
import './Home.scss'

const Home = () => {
    const [data, setData] = useState([]);
    // const today = new Date();
    // const formattedDate = today.toLocaleDateString('en-US', {
    // year: 'numeric',
    // month: 'numeric',
    // day: 'numeric',
    // });

// console.log(formattedDate); // 2022-12-01

    useEffect(()=>{
        const fetchData = async() => {
            const response = await fetch(`https://newsapi.org/v2/everything?q=tesla&from=2023-06-05&sortBy=publishedAt&apiKey=4592a44d77b140ce818f50a7f9b9ed53`);
            const jsonData = await response.json();
            // console.log(jsonData, 'from home');
            setData(jsonData.articles);
            // setData(jsonData.articles);
        };
        fetchData();
    },[]);
  return (
    <>
     
        <div className="card-container">
            {data.map((item) => (
                <NewsCard key={item.url} data={item} className='newsCard'/>
            ))}
        </div>
        home
    </>
  )
}

export default Home
