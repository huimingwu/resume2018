import React from 'react';
import './index.css';
import '../../resource/iconfont/iconfont.css';
import data from '../../data/detail.json';

class DetailInfoLi extends React.Component {
    render() {
        const data = this.props.data;
        return (
            <li className="prize_li" key={data}>
                <i className="iconfont icon-lingxing"></i>
                <span className="prize">{data}</span>
            </li>
        );
    }
}
export default class DetailInfoBasicItem extends React.Component {
    render() {
        var index = this.props.index;
        switch (index) {
            case "教育背景": var indexClass = "edu"; break;
            case "工作经验":var indexClass = "work";break;
            case "项目经验":var indexClass = "project";break;
            case "技能清单":var indexClass = "skill";break;
            case "其他":var indexClass = "others";break;
        }
        const detail = data.detail[indexClass];
        return (
            <div className="detailItem">
                <h3 className="small-title">{detail.name}</h3>
                <section className="detailItemDet">
                    {
                        true && detail.detailDet.map(
                            value => {
                                return (
                                    <div key={value.title}>
                                        <span className="left">{value.date}</span>
                                        <div className="right">
                                            <h4 className="detail-title">{value.title}</h4>
                                            <ul className="edu_prize">
                                                {
                                                    true && value.describe.map(
                                                        describeValue => <DetailInfoLi data={describeValue} key={describeValue} />
                                                    )
                                                }
                                            </ul>
                                            <span className="dot"></span>
                                        </div>
                                    </div>
                                );
                            }
                        )
                    }
                </section>
            </div>
        )
    }
}