import React, { useState,useEffect } from "react";
import NewItem from "./NewItem";
import Spinner from "./Spinner";
import InfiniteScroll from "react-infinite-scroll-component";

const News = (props) => {


  const capitilizeFirstLetter = (str) => {
    return str.charAt(0).toUpperCase() + str.slice(1);
  };

  const [articles, setArticles] = useState([]);
  const [loading, setLoading] = useState(true);
  const [page, setPage] = useState(1);
  const [totalResults, setTotalResults] = useState(0)



  

  const updateNews = async() => {
    props.setProgress(10);
    const url = `https://newsapi.org/v2/top-headlines?country=${props.country}&category=${props.category}&apiKey=${props.apikey}&page=${page}&pageSize=${props.pageSize}`;
    setLoading(true);
    let data = await fetch(url);
    props.setProgress(30);
    let parsedData = await data.json();
    props.setProgress(50);
    //console.log(parsedData)
    setArticles(parsedData.articles);
    setTotalResults(parsedData.totalResults);
    setLoading(false);
    props.setProgress(100);
  }


  useEffect(() => {
    updateNews();
    document.title = `NewsReader2 - ${capitilizeFirstLetter(props.category)}`;
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [])



  const fetchMoreData = async () => {
    let url = `https://newsapi.org/v2/top-headlines?country=${props.country}&category=${props.category}&apiKey=${props.apikey}&page=${page+1}&pageSize=${props.pageSize}`;
    setPage(page+1);
    let data = await fetch(url);
    let parsedData = await data.json();
    //console.log(parsedData)
    setArticles(articles.concat(parsedData.articles));
    setTotalResults(parsedData.totalResults);
  };

    return (
      <>
        <h1 className="text-center" style={{ margin: "35px 0px", marginTop:'5%' }}>
          New Reader2 - By Mohit Maroliya
        </h1>

        <div
          className="alert alert-success text-center"
          role="alert"
          style={{ fontSize: "150%", fontWeight: 700 }}
        >
          News from {capitilizeFirstLetter(props.category)} world
        </div>

        {loading && <Spinner />}

        <InfiniteScroll
          next={fetchMoreData}
          dataLength={
            articles.length ? articles.length : 15
          }
          hasMore={articles.length !== totalResults}
          loader={<Spinner />}
        >
          <div className="container">
            <div className="row">
              {articles.map((item) => {
                return (
                  <div className="col-md-4" key={item.url}>
                    <NewItem
                      title={item.title ? item.title.slice(0, 45) : ""}
                      description={
                        item.description ? item.description.slice(0, 88) : ""
                      }
                      imageUrl={
                        item.urlToImage
                          ? item.urlToImage
                          : "https://www.eastmojo.com/wp-content/uploads/2021/08/space-pen-5.jpg"
                      }
                      newsUrl={item.url}
                      publishedAt={item.publishedAt}
                      author={item.author ? item.author : "Anonymous"}
                      source={item.source.name}
                    />
                  </div>
                );
              })}
            </div>
          </div>
        </InfiniteScroll>
      </>
    );
  
}

export default News;
