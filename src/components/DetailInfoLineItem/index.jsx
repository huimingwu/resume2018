import React from 'react';
import './index.css';
import '../../resource/iconfont/iconfont.css';
import data from '../../data/detail.json';

class DetailInfoLineItemLi extends React.Component {
    render() {
        const data = this.props.data;
        return (
            <div><i className="iconfont icon-lingxing"></i>{data}</div>
        );
    }
}
export default class DetailInfoLineItem extends React.Component {
    render() {
        var index = this.props.index;
        switch (index) {
            case "自我评价": var indexClass = "evaluation"; break;
        }
        const detail = data.detail[indexClass];
        return (
            <div className="DetailInfoLine">
                <h3 className="small-title">{detail.name}</h3>
                <section className="DetailInfoLine_detail">
                    {
                        true && detail.detailDet.map(
                            describeValue => <DetailInfoLineItemLi data={describeValue}  key={describeValue} />
                        )
                    }
                </section>
            </div>
        )
    }
}