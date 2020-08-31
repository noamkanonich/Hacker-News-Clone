import React, { useState, useEffect } from "react";
import Metadata from "./Metadata";
import axios from "axios";

function Article(props) {
    const [article, setArticle] = useState([])

    useEffect(() => {
        // we will wait (promise) until axios will get the response from the api and than set the article
        axios.get('https://hacker-news.firebaseio.com/v0/item/' + props.article + '.json?print=pretty')
            .then(res => {
                console.log(res.data)
                setArticle(res.data)
            })
            .catch(err => {
                console.log(err)
            })
    }, [])


    function getArticleUrl() {
        var urlLink = String(article.url);
        const matches = urlLink.match(/^https?\:\/\/([^\/?#]+)(?:[\/?#]|$)/i);
        return matches && matches[1];
    }

    return (
        <div>
            <tr>
                <td>{props.id}. <span className="title">{article.title}</span>
                    <small> <a className="url" href={article.url}>({getArticleUrl()})</a> </small>
                </td>
            </tr>
            <tr>
                <Metadata
                    score={article.score}
                    by={article.by}
                    time={article.time}
                    comments={article.descendants}
                />
            </tr>
            <div className="space"></div>
        </div>
    );
}

export default Article;