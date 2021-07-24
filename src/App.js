import React from 'react';
import News, { newsCategory } from './components/news/index.js';
import Header from './components/header.jsx'
import NewsList from './components/newsList.jsx'
import Pagination from './components/pagination.jsx'
import Loading from './components/loading.jsx'


const news = new News(newsCategory.technology)

class App extends React.Component{
    state = {
        data: {},
        isLoading: true
    }
     
    
    componentDidMount() {
        news.getNews()
            .then((data) => {
                this.setState({data, isLoading: false})
            })
            .catch((e) => {
                console.log(e);
                alert('something went wrong');
                this.setState({isLoading: false})
        })
    }

    next = () => {
        if (this.state.data.isNext) {
            this.setState({isLoading: true})
        }
        news.next()
            .then(data => {
                this.setState({data, isLoading: false  })
            })
            .catch(e => {
                console.log(e);
                alert('something went wrong');
                this.setState({isLoading: false  })
            })
        
    }

     prev = () => {
        if (this.state.data.isPrev) {
            this.setState({isLoading: true})
        }
        news.prev()
            .then(data => {
                this.setState({data, isLoading: false  })
            })
            .catch(e => {
                console.log(e);
                alert('something went wrong');
                this.setState({isLoading: false  })
            })
        
     }
    
    handlePageChange = value => {
        this.setState({
            data: {
                ...this.state.data,
                currentPage: Number.parseInt(value)
            }
        })
    }

    goToPage = () => {
        this.setState({ isLoading: true })
        news.setCurrentPage(this.state.data.currentPage)
            .then(data => {
                this.setState({data, isLoading: false})
            })
            .catch((e) => {
                console.log(e);
                alert('something wen wrong');
                this.setState({isLoading: false})
            })
        
    }

    changeCategory = category => {
        this.setState({ isLoading: true })
        news.changeCategory(category)
            .then(data => {
                this.setState({data, isLoading: false})
            })
            .catch(e => {
                console.log(e);
                alert('something went wrong');
                this.setState({isLoading: false})
            })
        
    }

    search = searchTerm => {
        this.setState({ isLoading: true })
        news.search(searchTerm)
            .then(data => {
                this.setState({data, isLoading: false})
            })
            .catch(e => {
                console.log(e);
                alert('something went wrong');
                this.setState({isLoading: false})
            })
    }

    render() {
        
        const {
            article,
            isNext,
            isPrev,
            category,
            currentPage,
            totalPage,
            totalResults,

         } = this.state.data 

        return (
            <div className="container">
                <div className="row">
                    <div className="col-sm-6 offset-md-3">
                        <Header category={category}
                            changeCategory={this.changeCategory}
                            search={this.search}
                        />
                        <div className="d-flex">
                            <p className="text-black-50">
                                About {totalResults} results found
                            </p>
                            <p className="text-black-50" style={{ marginLeft: 'auto'}}>
                                {currentPage} page of {totalPage}
                            </p>


                        </div>
                        {this.state.isLoading ? (
                             <Loading />
                        ) : (
                                <div>
                                <NewsList news={article} />
                                    <Pagination
                                    
                                        next={this.next}
                                        prev={this.prev}
                                        isPrev={isPrev}
                                        isNext={isNext}
                                        totalPage={totalPage}
                                        currentPage={currentPage}
                                        handlePageChange={this.handlePageChange}
                                        goToPage={this.goToPage }
                                    />
                               </div>     
                        ) }
                        
                       
                    </div>

                </div>

            </div>
        );
    }
}

export default App

