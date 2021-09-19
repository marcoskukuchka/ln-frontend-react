import React from 'react';
import './article.scss';

function Article(props) {
    let component_hero_img;
    let component_autor;
    let component_vajada;
    console.log(props);
    const article = props.article;
    if (article.img_nota) {
        component_hero_img = <div className="hero_img"><img  alt={article.titulo} src={article.img_nota}/></div>;
    }
    if (!article.img_nota) {
        component_vajada = <p>{article.bajada}</p>;
    }

    if (article.img_autor && article.nombre_autor ){
        component_autor =  <div className="autor-container">
                                <img className="autor-img" alt={article.nombre_autor} src={article.img_autor}></img>
                                <a className="article-autor" href={article.url_nota}>Por {article.nombre_autor}</a>
                            
</div>
          
    }else if(article.nombre_autor){
        component_autor = <div className="marquesina-container">
                            <a href={article.url_nota}>Por {article.nombre_autor}</a>
                        </div>
    }else{
        component_autor = <div className="marquesina-container">
                            <a href={article.asd}>{article.marquesina}</a>
                        </div>
    }

    

    return (
        <article>
            <div className={article.img_autor && ("borders")}>
                <a href={article.url_nota}>
                    {component_hero_img}
                </a>
                <a href={article.url_nota}>
                    <h2 className="article-title"><em>{article.volanta}.</em> {article.titulo}</h2>   
                </a>
                {component_vajada}
                {component_autor}
                {article.img_autor && <div className="border-bottom"></div>}
            </div>
        </article>
    );
}
    
export default Article;