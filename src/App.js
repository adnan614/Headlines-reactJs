import React from 'react';
import { newsCategory } from './components/news/index.js';
import Header from './components/header.jsx'
import NewsList from './components/newsList.jsx'




const fakeNews = [
    {
        Title: 'Title',
        content: 'Content',
        url: 'https://linktoimage.com',
        urlToImage: 'https://linktoimage.com',
        publishedAt: 'published date and time',
        source: {
            name:'CNN',
        },
    },
    {
       Title: 'Title',
        content: 'Content',
        url: 'https://linktoimage.com',
        urlToImage: 'https://linktoimage.com',
        publishedAt: 'published date and time',
        source: {
            name:'CNN',
        }, 
    },
];

class App extends React.Component{
    render() {
        return (
            <div className="container">
                <div className="row">
                    <div className="col-sm-6 offset-md-4">
                        <Header category={newsCategory.technology} />
                        <NewsList news={fakeNews }/>
                    </div>

                </div>

            </div>
        );
    }
}

export default App

