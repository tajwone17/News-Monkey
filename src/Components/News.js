import NewsItem from "./NewsItem";
import React, { Component } from "react";
import Spinner from "./Spinner";
import PropTypes from "prop-types";
import InfiniteScroll from "react-infinite-scroll-component";

export default class News extends Component {
  static defaultProps = {
    country: "in",
    pageSize: 5,
    category: "science",
  };

  static propTypes = {
    country: PropTypes.string,
    pageSize: PropTypes.number,
    category: PropTypes.string,
  };

  Capitalize(str) {
    return str.charAt(0).toUpperCase() + str.slice(1);
  }

  constructor(props) {
    super(props);
    this.state = {
      articles: [],
      loading: false,
      page: 1,
      totalResults: 0,
    };
    document.title = `${this.Capitalize(this.props.category)} - NewsMonkey`;
  }

  async updateNews() {
    let url = `https://newsapi.org/v2/top-headlines?country=${this.props.country}&category=${this.props.category}&apiKey=c3afea7a50804043b9a890d09575a228&page=${this.state.page}&pageSize=${this.props.pageSize}`;
    
    this.setState({ loading: true });
    let data = await fetch(url);
    let parsedData = await data.json();

    this.setState({
      articles: parsedData.articles,
      loading: false,
      totalResults: parsedData.totalResults,
    });
  }

  async componentDidMount() {
    await this.updateNews();
  }

  handlePrevClick = async () => {
    this.setState({ page: this.state.page - 1 }, this.updateNews);
  };

  handleNextClick = async () => {
    this.setState({ page: this.state.page + 1 }, this.updateNews);
  };

  fetchMoreData = async () => {
    this.setState((prevState) => ({ page: prevState.page + 1 }));
    let url = `https://newsapi.org/v2/top-headlines?country=${this.props.country}&category=${this.props.category}&apiKey=c3afea7a50804043b9a890d09575a228&page=${this.state.page}&pageSize=${this.props.pageSize}`;
    
    this.setState({ loading: true });
    let data = await fetch(url);
    let parsedData = await data.json();

    this.setState((prevState) => ({
      articles: prevState.articles.concat(parsedData.articles || []),
      loading: false,
      totalResults: parsedData.totalResults,
    }));
  };

  render() {
    return (
      <>
        <h1 className="text-center my-5">
          NewsMonkey - Top {this.Capitalize(this.props.category)} Headlines
        </h1>
        <InfiniteScroll
          dataLength={this.state.articles.length}
          next={this.fetchMoreData}
          hasMore={this.state.articles.length < this.state.totalResults}
          loader={<Spinner />}
        >
          <div className="container">
            <div className="row">
              {this.state.articles.map((element) => {
                if (!element) return null; // Skip if the element is undefined
                return (
                  <div className="col-md-4" key={element.url}>
                    <NewsItem
                      title={element.title || ""}
                      description={element.description || ""}
                      imageUrl={element.urlToImage}
                      newsUrl={element.url}
                      author={element.author}
                      date={element.publishedAt}
                      source={element.source.name}
                    />
                  </div>
                );
              })}
            </div>
          </div>
        </InfiniteScroll>
        <div className="container d-flex justify-content-between">
          <button
            disabled={this.state.page <= 1}
            type="button"
            className="btn btn-dark"
            onClick={this.handlePrevClick}
          >
            &larr; Previous
          </button>
          <button
            disabled={this.state.page + 1 > Math.ceil(this.state.totalResults / this.props.pageSize)}
            type="button"
            className="btn btn-dark"
            onClick={this.handleNextClick}
          >
            Next &rarr;
          </button>
        </div>
      </>
    );
  }
}
