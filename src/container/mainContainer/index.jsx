import React from 'react';
import './index.css';
import './media.css';
import Header from '../header';
import Main from '../main';


export default class MainContainer extends React.Component{
    render(){
        return (
            <div className="main-container">
                <Header />
                <Main />
            </div>
        )
    }
}