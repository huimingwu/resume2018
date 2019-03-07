import React from 'react';
import './index.css';
import './media.css';
import DetailInfoBasicItem from '../../components/DetailInfoBasicItem';
import DetailInfoPicItem from '../../components/DetailInfoPicItem';
import DetailInfoLineItem from '../../components/DetailInfoLineItem';

export default class Main extends React.Component {
    render() {
        return (
            <div className="detail">
                <div className="detInfoL">
                    <DetailInfoBasicItem index="项目经验" />
                    <DetailInfoBasicItem index="技能清单" />
                </div>
                <div className="detInfoR">
                    <DetailInfoBasicItem index="教育背景" />
                    <DetailInfoBasicItem index="工作经验" />
                    <DetailInfoBasicItem index="其他" />
                    
                </div>
            </div>
        )
    }
}