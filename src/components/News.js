import React, { useEffect,useLayoutEffect,useState } from 'react'
import Newsitems from './Newsitems'
import Spinner from './Spinner'
import PropTypes from 'prop-types';
import InfiniteScroll from "react-infinite-scroll-component";
import { useFormState } from 'react-hook-form';


const News =(props)=> {
  // make a variable
    const [articles,setArticle]= useState([])
    const [loading,setLoading] = useState(false)
    const [page,setPage] = useState(1)
    const [totalResults,setTotalresults] = useState(0)

  // constructor(){
  //   super()
  //   console.log("hey this is constructor")
  //   this.state ={
  //     articles :[],
  //     loading :false,
  //     page:1,
  //     totalResults:0
  //   }
  // }

  const  new_update= async()=>{
    // props.setProgress(0)
    // const url = `https://newsapi.org/v2/top-headlines?country=${props.country}&category=${props.category}&apiKey=918b381d47554ea18f0046e809dd1e38&page=${this.state.page}&pageSize=${props.size}`;
    // let url  =`https://newsapi.org/v2/top-headlines?country=${props.country}&category=${props.category}&apiKey=918b381d47554ea18f0046e809dd1e38&page=1&pageSize=${props.size}`;
    const url = `https://newsapi.org/v2/top-headlines?country=${props.country}&category=${props.category}&apiKey=918b381d47554ea18f0046e809dd1e38&page=1&pageSize=${props.size}`
    setLoading(true)
    let data = await fetch(url)
    let parsedData = await data.json()
    console.log(parsedData)
    setArticle(parsedData.articles)
    setLoading(false)
    setTotalresults(parsedData.totalResults)
    // this.setState ({articles:parsedData.articles,loading:false,totalResults:parsedData.totalResults})
    // props.setProgress(100)
  }
  
  useEffect(()=>{
    new_update()
  },[])

  

const handlePrevClick =async ()=>{
  console.log("Prev")
  // let url = `https://newsapi.org/v2/top-headlines?country=${props.country}&category=${props.category}&apiKey=918b381d47554ea18f0046e809dd1e38&page=${this.state.page -1}&pageSize=${props.size}`;
  //   // let url  ="https://newsapi.org/v2/top-headlines?country=in&category=${props.category}&apiKey=918b381d47554ea18f0046e809dd1e38";
  //   this.setState({loading:true})
  //   let data = await fetch(url)
  //   let parsedData = await data.json()
  //   console.log(parsedData)
    
  // this.setState({
  //   page:this.state.page-1,
  //   articles:parsedData.articles,
  //   loading:false
  // })
  // this.setState({page:this.state.page - 1});
  // this.new_update()
}

const handleNextClick= async ()=>{
  console.log("next")
  // let url = `https://newsapi.org/v2/top-headlines?country=${props.country}&category=${props.category}&apiKey=918b381d47554ea18f0046e809dd1e38&page=${this.state.page +1}&pageSize=${props.size}`;
  //   // let url  ="https://newsapi.org/v2/top-headlines?country=in&category=${props.category}&apiKey=918b381d47554ea18f0046e809dd1e38";
  //   this.setState({loading:true})
  //   let data = await fetch(url)
  //   let parsedData = await data.json()
  //   console.log(parsedData)
    
  // this.setState({
  //   page:this.state.page+1,
  //   articles:parsedData.articles,
  //   loading:false
  // })
  // this.setState({page:this.state.page+1});
  // this.new_update()
}
const fetchMoreData = async()=>{
  setPage(page+1)
  // this.setState({page : this.state.page+1})
  // let url = `https://newsapi.org/v2/top-headlines?country=${props.country}&category=${props.category}&apiKey=918b381d47554ea18f0046e809dd1e38&page=1&pageSize=${props.size}`;
    // let url  ="https://newsapi.org/v2/top-headlines?country=in&category=${props.category}&apiKey=918b381d47554ea18f0046e809dd1e38";
    // this.setState({loading:true})
    const url = `https://newsapi.org/v2/top-headlines?country=${props.country}&category=${props.category}&apiKey=918b381d47554ea18f0046e809dd1e38&page=1&pageSize=${props.size}`;
    let data = await fetch(url)
    let parsedData = await data.json()
    console.log(parsedData)
    setArticle(articles.concat(parsedData.articles))
    setLoading(false)
    setTotalresults(parsedData.totalResults)
    // this.setState ({articles : this.state.articles.concat(parsedData.articles),
    //   loading:false,
    //   totalResults:parsedData.totalResults})
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
          <div className="container">
        <div className="row">
          { articles.map((element)=>{
            
            return <div className="col-md-4" key ={element.url}>
              <Newsitems  title={element.title?element.title.slice(0,45):""} description={element.description?element.description.slice(0,88):""} imgset={element.urlToImage} newUrl={element.url} 
              author={element.author} publishedAt ={element.publishedAt} source ={element.source.name}/>

            </div>
          
          })}

        </div>
        </div>
        </InfiniteScroll>

          {/* <div className="container d-flex justify-content-between">
          <button disabled={this.state.page<=1} type="button" className="btn btn-info " onClick={this.handlePrevClick}>&larr; Prev</button>
          <button type="button" className="btn btn-info" onClick={this.handleNextClick}>Next &rarr;</button>
          </div> */}

      //</div>
      </>

    )
  }


News.deafaultProps ={
  country :'us',
  pageSize :9,
  category:'general'
}

News.propsTypes = {
  country: PropTypes.string,
  pageSize : PropTypes.number,
  category:PropTypes.string
}


export default News
