import React, { Component, useEffect } from 'react';
import { useState } from "react";
import './SendInn.css';
import './forms.css';

export function SendInn() {
    const [forfatter, setForfatter] = useState("");
    const [tittel, setTittel] = useState("");
    const [innhold, setInnhold] = useState("");
    const [bilde, setBilde] = useState("");
    function handleChange(e) {
        console.log(e.target.files);
        setBilde(URL.createObjectURL(e.target.files[0]));
        
    }

    var jsonData = {
        author: forfatter,
        title: tittel,
        content: innhold,
        imageURL: "url fra send inn",
        published:"2019-01-06T17:16:40"
    }
   
    
    function sendData() { 
        fetch('https://localhost:7115/api/article/publiserartikkel', {
            method: 'POST', 
            headers: {'Content-Type': 'application/json'},
            body: JSON.stringify(jsonData)
          })
          document.getElementById("ForfatterInn").value = "";
          document.getElementById("TittelInn").value ="";
          document.getElementById("TextInn").value = "";
          window.alert("Det funkaaa");
    }

        return (
            <div class="parentSend">
                <form>
                    <h1>
                        Ny artikkel
                    </h1>
                    <div className="SpacingTop">Forfatter</div>
                    <input id="ForfatterInn" onChange={() =>setForfatter(document.getElementById("ForfatterInn").value)} type="text" placeholder="Forfatter" />

                    <div className="BoxSpace">Overskrift</div>
                    <input id="TittelInn" onChange={() =>setTittel((document.getElementById("TittelInn").value))} type="text"placeholder="Tittel" />

                    <div>Innhold</div>
                    <textarea className="TekstStor" id="TextInn" onChange={() =>setInnhold(document.getElementById("TextInn").value)} type="text" placeholder="Tekst" />

                    <div>Bilde</div>
                    <input id="BildeInn" onChange={handleChange} type="file" />

                    <button type="button" onClick={() =>sendData()}>Publiser artikkel</button>
                    
                </form>
            </div>
        );
}


