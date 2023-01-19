import { useEffect, useState } from "react"
import { useParams } from "react-router-dom";
import { Artikkel } from "./Artikkel";
import './Rediger.css';


export function Rediger(props) {
    const { id } = useParams()
    const [articles, setArticles]= useState([]);
    const [forfatter, setForfatter] = useState("");
    const [tittel, setTittel] = useState("");
    const [innhold, setInnhold] = useState("");


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

    var jsonData = {
        id: id,
        author: forfatter,
        title: tittel,
        content: innhold,
        imageURL: "url fra send inn",
        published:"2019-01-06T17:16:40"
    }

    function sendData(){
        fetch('https://localhost:7115/api/article/redigerartikkel', {
            method: 'POST', 
            headers: {'Content-Type': 'application/json'},
            body: JSON.stringify(jsonData)
          })

          document.getElementById("ForfatterInn").value = "";
          document.getElementById("TittelInn").value ="";
          document.getElementById("ContentInn").value = "";
          window.alert("Det funkaaa");
    }

    return(
        
        <div>
            <h1 class="h1Skrift">Saks-Id: {articles.id}</h1>
            <h3 class="h3Space">Forfatter</h3>
            <input id="ForfatterInn" placeholder={articles.author} onChange={() =>setForfatter(document.getElementById("ForfatterInn").value)}></input>
            <h3 class="h3Space">Tittel</h3>
            <input id="TittelInn" placeholder={articles.title} onChange={() =>setTittel(document.getElementById("TittelInn").value)}></input>
            <h3 class="h3Space">Content</h3>
            <textarea  id="ContentInn" onChange={() =>setInnhold(document.getElementById("ContentInn").value)} placeholder={articles.content}></textarea>
            
            <button type="button" onClick={() =>sendData()}>Rediger artikkel</button>
        </div>
    )
}
