import React, { useEffect,useLayoutEffect,useState } from 'react'
import Newsitems from './Newsitems'
import Spinner from './Spinner'
import PropTypes from 'prop-types';
import InfiniteScroll from "react-infinite-scroll-component";



const News =(props)=> {
  // make a variable
    const [articles,setArticle]= useState([])
    const [loading,setLoading] = useState(false)
    const [page,setPage] = useState(1)
    const [totalResults,setTotalresults] = useState(0)



  const  new_update= async()=>{
    // props.setProgress(0)
    // const url = `https://newsapi.org/v2/top-headlines?country=${props.country}&category=${props.category}&apiKey=918b381d47554ea18f0046e809dd1e38&page=${this.state.page}&pageSize=${props.size}`;
    // let url  =`https://newsapi.org/v2/top-headlines?country=${props.country}&category=${props.category}&apiKey=918b381d47554ea18f0046e809dd1e38&page=1&pageSize=${props.size}`;
    const url = `https://newsapi.org/v2/top-headlines?country=${props.country}&category=${props.category}&apiKey=918b381d47554ea18f0046e809dd1e38&page=1`
    setLoading(true)
    let data = await fetch(url)
    let parsedData = await data.json()
    console.log(parsedData)
    setArticle(parsedData.articles)
    setLoading(false)
    setTotalresults(parsedData.totalResults)
   
  }
  
  useEffect(()=>{
    new_update()
  },[])


const fetchMoreData = async()=>{
  setPage(page+1)
  
    const url = `https://newsapi.org/v2/top-headlines?country=${props.country}&category=${props.category}&apiKey=918b381d47554ea18f0046e809dd1e38&page=1`;
    let data = await fetch(url)
    let parsedData = await data.json()
    console.log(parsedData)
    setArticle(articles.concat(parsedData.articles))
    setLoading(false)
    setTotalresults(parsedData.totalResults)
    
}


    
    return (
      <>
      <div className='container my-3'>
        <h2 style ={{marginTop:'68px',color:'Highlight'}}>News headlines</h2>
        {loading && <Spinner />} 
        <InfiniteScroll
          dataLength={articles.length}
          next={fetchMoreData}
          hasMore={articles.length !== totalResults}
          loader={<Spinner />}
        >
          <div className="">
        <div className="flex flex-wrap md:hidden: inset-0 ">
          { articles.map((element)=>{
            
            return <div className="p-4" key ={element.title}>
              <Newsitems  title={element.title?element.title.slice(0,45):""} description={element.description?element.description.slice(0,88):""} imgset={element.urlToImage} newUrl={element.url} 
              author={element.author} publishedAt ={element.publishedAt} source ={element.source.name}/>

            </div>
          
          })}

        </div>
        </div>
        </InfiniteScroll>

        

      </div>
      </>

    )
  }


// News.deafaultProps ={
//   country :'us',
//   pageSize :9,
//   category:'general'
// }

// News.propsTypes = {
//   country: PropTypes.string,
//   pageSize : PropTypes.number,
//   category:PropTypes.string
// }


export default News
