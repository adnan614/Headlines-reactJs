import React from 'react';
import { newsCategory } from './components/news/index.js';
import Header from './components/header.jsx'
import NewsList from './components/newsList.jsx'
import Pagination from './components/pagination.jsx'
import Loading from './components/loading.jsx'
import axios from 'axios';



class App extends React.Component{
    state = {
        news: [],
        category: newsCategory.technology
    }
     
    changeCategory = (category) =>{
        this.setState({category})
    }

    componentDidMount() {
        const url = `${process.env.REACT_APP_NEWS_URL}?apiKey=${process.env.REACT_APP_NEWS_API_KEY}&category=${this.state.category}&pageSize=5`;
       
        

        axios.get(url)
            .then((response) => {
                this.setState({
                    news: response.data.articles
                })
            })
            .catch((e) => {
            console.log(e);
        })
    }

    componentDidUpdate(prevProps,prevState) {
        if (prevState.category !== this.state.category) {
             const url = `${process.env.REACT_APP_NEWS_URL}?apiKey=${process.env.REACT_APP_NEWS_API_KEY}&category=${this.state.category}&pageSize=5`;
       
        

        axios.get(url)
            .then((response) => {
                this.setState({
                    news: response.data.articles
                })
            })
            .catch((e) => {
            console.log(e);
        })
        }
    }
    render() {
        return (
            <div className="container">
                <div className="row">
                    <div className="col-sm-6 offset-md-3">
                        <Header category={this.state.category} changeCategory={ this.changeCategory} />
                        <div className="d-flex">
                            <p className="text-black-50">
                                About {0} results found
                            </p>
                            <p className="text-black-50" style={{ marginLeft: 'auto'}}>
                                {1} page of {100 }
                            </p>


                        </div>
                        <NewsList news={this.state.news} />
                        <Pagination />
                        <Loading />
                    </div>

                </div>

            </div>
        );
    }
}

export default App

