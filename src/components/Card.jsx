import React from 'react';

const Card = ({ data }) => {
    console.log(data);

    const readmore = (url) => {
        window.open(url, "_blank"); // Opens in a new tab
    };

    return (
        <div className='cardconatiner'>
            {data.map((curvalue, index) => (
                <div className="card" key={index}>
                    {curvalue.urlToImage && <img src={curvalue.urlToImage} alt="News" />}
                    <div className="cardname">
                        <a onClick={() => readmore(curvalue.url)}  >{curvalue.title} </a>
                        <p>{curvalue.description}</p>
                        <button onClick={() => readmore(curvalue.url)} >Read More</button> 
                    </div>
                </div>
            ))}
        </div>
    );
};

export default Card;
