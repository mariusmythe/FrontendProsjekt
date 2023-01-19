import React, { Component } from 'react';
import { Rediger } from './Rediger';
import './artikkel.css';
import { useNavigate } from "react-router-dom";

export function Artikkel(props) {
    const navigate = useNavigate();
    function SlettArtikkel() {
        fetch('https://localhost:7115/api/article/'+props.id, {
            method: 'DELETE'
          })

        document.location.reload(true);
    }
    function RedigerArtikkel(){

            navigate("/RedigerArtikkel/"+props.id)
        
    }

        return ( 
            
            <div class="parent">
                <div >
                    <div>
                        <img class="image" src={props.imageURL}/>
                    </div>
                    <div class ="innholdUnderBilde">
                        <span class="date">{props.date}</span>
                        <h1 class="title">{props.title}</h1>
                        <div class="content">
                            <span>{props.content}</span>
                        </div>                    
                        <div class="author">Skrevet av: {props.author}</div> 
                    </div>
                </div>
                <button  onClick={() =>RedigerArtikkel()} className="editKnapp" type="button">Edit Item</button>
                <button  onClick={() =>SlettArtikkel()} className="deleteKnapp" type="button">Delete Item</button>
            </div>
            
         
        );
}
