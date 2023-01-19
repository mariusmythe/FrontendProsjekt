import React, { Component, useEffect } from 'react';
import { useState } from "react";
import { Artikkel } from './Artikkel';
import './home.css';


export function Home() {
    const [articles, setArticles]= useState([]);
    
    useEffect(() => {
        async function FetchData(){
            const response = await fetch(`https://localhost:7115/api/article/getarticles`)
            const body = await response.json();

            setArticles(body)
            
            
        }
        FetchData();
    },[])


    return (
        <div>
            <div class="sidelengschilds">
                {
                articles.filter((item, index) => index < 9).map(article => 
                    (
                        <Artikkel  imageURL="../../public/bilde.jpg"//imageURL={article.urlToImage}
                                  date={article.published}
                                  id={article.id}
                                  title={article.title} 
                                  content={article.content} 
                                  author={article.author} />
                    )
                    )
                }
            </div>
            
        </div>
                    
    );
}
