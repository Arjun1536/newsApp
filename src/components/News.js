import React, { Component } from 'react'
import Newsitems from './Newsitems'
import Spinner from './Spinner'
import PropTypes from 'prop-types';
import InfiniteScroll from "react-infinite-scroll-component";


export class News extends Component {
  // make a variable
    static deafaultProps ={
      country :'us',
      pageSize :9,
      category:'general'
    }

    static propsTypes = {
      country: PropTypes.string,
      pageSize : PropTypes.number,
      category:PropTypes.string
    }


  constructor(){
    super()
    console.log("hey this is constructor")
    this.state ={
      articles :[],
      loading :false,
      page:1,
      totalResults:0
    }
  }

  async new_update(){
    // this.props.setProgress(0)
    // const url = `https://newsapi.org/v2/top-headlines?country=${this.props.country}&category=${this.props.category}&apiKey=918b381d47554ea18f0046e809dd1e38&page=${this.state.page}&pageSize=${this.props.size}`;
    // let url  =`https://newsapi.org/v2/top-headlines?country=${this.props.country}&category=${this.props.category}&apiKey=918b381d47554ea18f0046e809dd1e38&page=1&pageSize=${this.props.size}`;
    const url = `https://newsapi.org/v2/top-headlines?country=${this.props.country}&category=${this.props.category}&apiKey=918b381d47554ea18f0046e809dd1e38&page=1&pageSize=${this.props.size}`
    this.setState({loading:true})
    let data = await fetch(url)
    let parsedData = await data.json()
    console.log(parsedData)
    this.setState ({articles:parsedData.articles,loading:false,totalResults:parsedData.totalResults})
    // this.props.setProgress(100)
  }
  

  async componentDidMount(){
   
    this.new_update()

  }

handlePrevClick =async ()=>{
  console.log("Prev")
  // let url = `https://newsapi.org/v2/top-headlines?country=${this.props.country}&category=${this.props.category}&apiKey=918b381d47554ea18f0046e809dd1e38&page=${this.state.page -1}&pageSize=${this.props.size}`;
  //   // let url  ="https://newsapi.org/v2/top-headlines?country=in&category=${this.props.category}&apiKey=918b381d47554ea18f0046e809dd1e38";
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

handleNextClick= async ()=>{
  console.log("next")
  // let url = `https://newsapi.org/v2/top-headlines?country=${this.props.country}&category=${this.props.category}&apiKey=918b381d47554ea18f0046e809dd1e38&page=${this.state.page +1}&pageSize=${this.props.size}`;
  //   // let url  ="https://newsapi.org/v2/top-headlines?country=in&category=${this.props.category}&apiKey=918b381d47554ea18f0046e809dd1e38";
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
fetchMoreData = async()=>{
  this.setState({page : this.state.page+1})
  // let url = `https://newsapi.org/v2/top-headlines?country=${this.props.country}&category=${this.props.category}&apiKey=918b381d47554ea18f0046e809dd1e38&page=1&pageSize=${this.props.size}`;
    // let url  ="https://newsapi.org/v2/top-headlines?country=in&category=${this.props.category}&apiKey=918b381d47554ea18f0046e809dd1e38";
    // this.setState({loading:true})
    const url = `https://newsapi.org/v2/top-headlines?country=${this.props.country}&category=${this.props.category}&apiKey=918b381d47554ea18f0046e809dd1e38&page=1&pageSize=${this.props.size}`;
    let data = await fetch(url)
    let parsedData = await data.json()
    console.log(parsedData)
    this.setState ({articles : this.state.articles.concat(parsedData.articles),
      loading:false,
      totalResults:parsedData.totalResults})
}


  render() {    
    return (
      <>
      <div className='container my-3'>
        <h2>News headlines</h2>
        {this.state.loading && <Spinner />} 
        <InfiniteScroll
          dataLength={this.state.articles.length}
          next={this.fetchMoreData}
          hasMore={this.state.articles.length !== this.state.totalResults}
          loader={<Spinner />}
        >
          <div className="container">
        <div className="row">
          { this.state.articles.map((element)=>{
            
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
}

export default News
