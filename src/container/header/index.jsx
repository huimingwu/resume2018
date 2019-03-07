import React from 'react';
import './index.css';
import './media.css';
import BasicInfoDetail from '../../components/BasicInfoDetail'
import imgUrl from '../../resource/img/IMG_1038.jpg';

export default class Header extends React.Component{
    render(){
        return (
            <div className="basciInfo">
                <BasicInfoDetail />
                <img src={imgUrl} alt="" className="profile-picture" />
            </div>
        )
    }
}