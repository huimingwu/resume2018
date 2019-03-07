import React from 'react';
import './index.css';
import '../../resource/iconfont/iconfont.css';
import data from '../../data/detail.json';

class BasciInfoLi extends React.Component{
    render(){
        const data = this.props.data;
        switch(data.dataUrl!=""){
            case true:return (<li key={data.name}><i className={"iconfont"+" "+data.iconClass}></i><a href={data.dataUrl}>{data.text}</a></li>);
            case false:return (<li><i className={"iconfont"+" "+data.iconClass}></i>{data.text}</li>);
        }
    }
}
export default class BasicInfoDetail extends React.Component{
    render(){
        const header = data.header;
        const moreInfoLeft = header.moreLeft;
        const moreInfoRight = header.moreRight;
        return (
            <div className="basicInfoDet">
                <section className="title">
                    <h1>{header.name}</h1>
                    <h2>{header.job}</h2>
                </section>
                <section className="contact">
                    <ul className="contact-left">
                        {
                            true && moreInfoLeft.map((value) => 
                                <BasciInfoLi data={value} key={value.name}/>
                            )
                        }
                    </ul>
                    <ul className="contact-right">
                    {
                        true && moreInfoRight.map((value) => 
                            <BasciInfoLi data={value} key={value.name}/>
                        )
                    }
                    </ul>
                </section>
            </div>
        )
    }
}