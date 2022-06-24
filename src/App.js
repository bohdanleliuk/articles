import './App.css';
import React, {useEffect, useState} from "react";
import {BrowserRouter as Router, Routes, Route} from "react-router-dom";
import axios from "axios";
import ArticlesList from "./components/ArticlesList";
import Article from "./components/Article";


function App() {

    const [articles, setArticles] = useState([]);

    const [refreshArticles, setRefreshArticles] = useState(false);

    useEffect(() => {
        axios.get("https://baconipsum.com/api/?type=meat-and-filler")
            .then((resp) => setArticles(resp.data));
    }, [refreshArticles]);

    const articleRoutes = articles.map((article, index) =>
        <Route path={`/article/${index}`} element={<Article article={article}/>}></Route>
    )

  return (
    <div className="App">
        <Router>
            <Routes>
                <Route path="/" element={<ArticlesList articles={articles} refresh={refreshArticles} setRefresh={setRefreshArticles}/>}></Route>
                {articleRoutes}
            </Routes>
        </Router>
    </div>
  );
}

export default App;
