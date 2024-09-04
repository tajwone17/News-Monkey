import NewsItem from './NewsItem'
import React, { Component } from 'react'
import Spinner from './Spinner';
import PropTypes from 'prop-types'

export default class News extends Component {
  static defaultProps={
    country:'in',
    pageSize:5,
    category:"science"
  }
  static propsTypes={
    country:PropTypes.string,
    pageSize:PropTypes.number,
    category:PropTypes.string
  }
  constructor(){
    super();
    this.state = {
      articles: [],
      loading: false,
      page:1
  }
}
async updateNews(){
  let url = `https://newsapi.org/v2/top-headlines?country=${this.props.country}&category=${this.props.category}&apiKey=c3afea7a50804043b9a890d09575a228
  &page=${this.state.page - 1}&pageSize=${this.props.pageSize}`;
    this.setState({loading:true});
    let data = await fetch(url);
    let parsedData = await data.json()
     
    this.setState({
        articles: parsedData.articles,
        loading:false
    })
  
}
async componentDidMount(){ 
  let url = `https://newsapi.org/v2/top-headlines?country=${this.props.country}&category=${this.props.category}&apiKey=c3afea7a50804043b9a890d09575a228
&page=1&pageSize=${this.props.pageSize}`;
  this.setState({loading:true});
  let data = await fetch(url);
  let parsedData = await data.json()
 
  this.setState({articles: parsedData.articles, totalResults: parsedData.totalResults, loading:false})
}

handlePrevClick = async ()=>{
 

this.updateNews();
this.setState({
  page: this.state.page - 1

})}

handleNextClick = async ()=>{
  

this.updateNews();
this.setState({
  page: this.state.page + 1

})
}

render() { 
  return (
    <div className="container my-3">
        
        <h1 className='text-center my-5'>NewsMonkey - Top Headlines</h1>
       {this.state.loading &&<Spinner/> } 
        <div className="row"> 
        {!this.state.loading && this.state.articles.map((element)=>{
                    return <div className="col-md-4" key={element.url}>
                        <NewsItem title={element.title?element.title:""} description={element.description?element.description:""} imageUrl={element.urlToImage} newsUrl={element.url} author={element.author} date={element.publishedAt} source={element.source.name}/>
                    </div> 
                })} 
                </div> 
                <div className="container d-flex justify-content-between">
                <button disabled={this.state.page<=1} type="button" className="btn btn-dark" onClick={this.handlePrevClick}> &larr; Previous</button>
                <button disabled={this.state.page + 1 > Math.ceil(this.state.totalResults/20)} type="button" className="btn btn-dark" onClick={this.handleNextClick}>Next &rarr;</button>
                </div>
            </div>
        )
    }

}