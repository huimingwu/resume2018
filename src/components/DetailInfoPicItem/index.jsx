import React from 'react';
import './index.css';
import '../../resource/iconfont/iconfont.css';
import data from '../../data/detail.json';

class DetailInfoPicLi extends React.Component {
    render() {
        const data = this.props.data;
        const imgClass = this.props.imgClass;
        return (
            <li className="DetailInfoPicLi_li" key={data} >
                <i className={"iconfont "+imgClass}></i>
                <p className="hobby">{data}</p>
            </li>
        );
    }
}
export default class DetailInfoPicItem extends React.Component {
    render() {
        var index = this.props.index;
        switch (index) {
            case "兴趣爱好": var indexClass = "hobbies"; break;
        }
        const detail = data.detail[indexClass];
        return (
            <div className="DetailInfoPicLi">
                <h3 className="small-title">{detail.name}</h3>
                <section className="DetailInfoPicLi_detail">
                    {
                        true && detail.detailDet.map(
                            describeValue => <DetailInfoPicLi data={describeValue.name} imgClass={describeValue.imgClass} key={describeValue.name} />
                        )
                    }
                </section>
            </div>
            
        )
    }
}