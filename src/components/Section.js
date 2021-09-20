import React from 'react';
import Article from './Article';

import './section.scss';


function Section(props) {
    
    return (
        <section className="section-notasx6">
            <div className = "hero-title">
                {props.link === true ? <a href={props.url}><h1>{props.title}</h1></a> : ""}
            </div>
            <div className= "section-grid">
                <Article article = {props.articles.data[4]}/>
                <Article article = {props.articles.data[2]}/>
                <Article article = {props.articles.data[0]}/>
            </div>
            <div className= "section-grid">
                <Article article = {props.articles.data[3]}/>
                <Article article = {props.articles.data[1]}/>
                <Article article = {props.articles.data[5]}/>
            </div>
            
        
        </section>
    );
}
    
export default Section;