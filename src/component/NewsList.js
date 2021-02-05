import React, {useContext, useEffect} from "react";

import newsContext from "../context/News/NewsContext";

const NewsList = () => {
    const NewsContext = useContext(newsContext);

    useEffect(()=>{
        NewsContext.getNews();
    });

    return(
        <>
        <div className="list-group h-100">
            {NewsContext.news.length
            ? NewsContext.news.map((news) => (
                  <a
                     key={news.id}
                     href="#!"
                     onClick={()=> NewsContext.getDescription(news.id)}>
                         {news.title}
                     </a>
            ))
        : null}
        </div>
        </>
    );
}

export default NewsList;