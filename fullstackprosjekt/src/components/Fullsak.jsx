import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { Artikkel } from "./Artikkel";
import './Rediger.css';
import './fullsak.css';



export function Fullsak(props) {
    const { id } = useParams()
    const [articles, setArticles]= useState([]);

    useEffect(() => {
        async function FetchData(){
            console.log("heeei");
            const response = await fetch('https://localhost:7115/api/article/'+id, {
                method: 'GET'
              })
            const body = await response.json();
            setArticles(body);
        }
        FetchData();
    },[])

    return(
        <div>
            <img class="fullSakBilde" src="../../public/bilde.jpg"></img>
            <h1 class="midten">{articles.title}</h1>
            <div class="authorFullsak">Skrevet av: {articles.author}</div>
            <div class="contentFullsak">{articles.content}</div>
            <div class="publishedFullsak">Publisert: {articles.published}</div>
        </div>
    )
}