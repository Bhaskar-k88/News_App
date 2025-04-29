import React, { useState ,useEffect } from 'react';
import Card from './Card';

const News = () => {
    
    const [search, setSearch] = useState("india");
    const [newsdata, setnewsdata] = useState(null)

    const api_key = "822ba348c2884d0e882e3a48d9afc85a";

    const handleClick = async () => {
        const res = await fetch(`https://newsapi.org/v2/everything?q=${search}&apiKey=${api_key}`);
        const apiData = await res.json();
        console.log(apiData.articles);
        setnewsdata(apiData.articles)
    };

    useEffect(() => {
         handleClick()
    }, [])
    

    const handleChange = (e) => {
        console.log(e.target.value);
        setSearch(e.target.value);
    };

    const handleinput = (e)=>{
        setSearch(e.target.value)
    }
    
    return (
        <div className='conatiner'>
            <nav>
                <div><h1>All Trending News</h1></div>
                
                <div className="inputs">
                    <input 
                        type="text" 
                        placeholder="Search Any News"
                        value={search}
                        onChange={handleChange} 
                    />
                </div>

                <div className="btn">
                    <button className='button' onClick={handleClick}>Search</button>
                </div>
            </nav>

            <button className='bt' onClick={handleinput} value="sports" >Sports</button>
            <button className='bt' onClick={handleinput}  value="politics" >Politics</button>
            <button className='bt' onClick={handleinput} value="entertainment" >Entertainment</button>
            <button className='bt' onClick={handleinput} value="health" >Health</button>
            <button className='bt' onClick={handleinput} value="fitness" >Fitness</button>

            <div>
               {newsdata ?  <Card data={newsdata}/> : null}
            </div>
        </div>
    );
}

export default News; 