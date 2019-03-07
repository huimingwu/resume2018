import React from 'react';
import ReactDOM from 'react-dom';
import data from '../../data/detail.json';
import './index.css';
import DetailInfoItem from '../../components/DetailInfoItem';

export default class Main extends React.Component {
    render() {
        return (
            <div className="detail">
                <div  className="detInfoL">
                    <div className="edu">
                        <h3 className="small-title">教育背景：EDUCATION BACKGROUND</h3>
                        <section className="edu_detail">
                            <span className="left">2018.09-2020.06</span>
                            <div className="right">
                                <h4 className="detail-title">中央民族大学 现代教育技术(硕士)</h4>
                                <ul className="edu_prize">
                                    <li className="prize_li">
                                        <i className="iconfont icon-lingxing"></i>
                                        <span className="prize">国家<span className="emphasize"> “双一流” </span>、<span className="emphasize">
                                            “985工程” </span>和<span className="emphasize"> “211工程” </span>重点建设大学</span>
                                    </li>
                                    <li className="prize_li">
                                        <i className="iconfont icon-lingxing"></i>
                                        <span className="prize">信息工程学院 研究<span className="emphasize"> 数据挖掘 </span>方向</span>
                                    </li>
                                    <li className="prize_li">
                                        <i className="iconfont icon-lingxing"></i>
                                        <span className="prize">研究生入学考试复试，综合面试<span className="emphasize"> 第一 </span></span>
                                    </li>
                                </ul>
                                <span className="dot"></span>
                            </div>
                        </section>
                        <section className="edu_detail">
                            <span className="left">2013.09-2017.06</span>
                            <div className="right">
                                <h4 className="detail-title">重庆邮电大学 软件工程(学士)</h4>
                                <ul className="edu_prize">
                                    <li className="prize_li"><i className="iconfont icon-lingxing"></i><span className="prize">优秀学生奖学金</span></li>
                                    <li className="prize_li"><i className="iconfont icon-lingxing"></i><span className="prize">优秀学生干部</span></li>
                                    <li className="prize_li"><i className="iconfont icon-lingxing"></i><span className="prize">青年志愿者先进个人</span></li>
                                    <li className="prize_li"><i className="iconfont icon-lingxing"></i><span className="prize">校第四届智能终端应用设计大赛二等奖</span></li>
                                    <li className="prize_li"><i className="iconfont icon-lingxing"></i><span className="prize">校第十届大学生创业大赛三等奖</span></li>
                                </ul>
                                <span className="dot"></span>
                            </div>
                        </section>
                    </div>
                    <div className="work">
                        <h3 className="small-title">工作经验：WORK EXPERIENCE</h3>
                        <section className="work_detail">
                            <span className="left">2018.09-至今</span>
                            <div className="right">
                                <h4 className="detail-title">中央民族大学 · 班长</h4>
                                <ul className="work_prize">
                                    <li className="prize_li"><i className="iconfont icon-lingxing"></i><span className="prize">班级核心成员，主管班级事物，积极带头参与多项活动。</span></li>
                                </ul>
                                <span className="dot"></span>
                            </div>
                        </section>
                        <section className="work_detail">
                            <span className="left">2015.09-2017.06</span>
                            <div className="right">
                                <h4 className="detail-title">重庆邮电大学 · 辅导员助理</h4>
                                <ul className="work_prize">
                                    <li className="prize_li"><i className="iconfont icon-lingxing"></i><span className="prize">协助辅导员处理年级事务和辅导员工作</span></li>
                                    <li className="prize_li"><i className="iconfont icon-lingxing"></i><span className="prize">负责召开例会，与任课教师统筹协调，考研、外出实习管理、推进等工作。</span></li>
                                </ul>
                                <span className="dot"></span>
                            </div>
                        </section>
                        <section className="work_detail">
                            <span className="left">2015.09-2016.06</span>
                            <div className="right">
                                <h4 className="detail-title">重庆邮电大学 · 班学长</h4>
                                <ul className="work_prize">
                                    <li className="prize_li"><i className="iconfont icon-lingxing"></i><span className="prize">引导新生过渡，辅助新生规划大学生涯，助力新生踏入稳定发展的轨道。</span></li>
                                    <li className="prize_li"><i className="iconfont icon-lingxing"></i><span className="prize">认真负责，获得所带班级多数同学的认可。</span></li>
                                </ul>
                                <span className="dot"></span>
                            </div>
                        </section>
                        <section className="work_detail">
                            <span className="left">2014.09-2017.06</span>
                            <div className="right">
                                <h4 className="detail-title">重庆邮电大学 · 班长</h4>
                                <ul className="work_prize">
                                    <li className="prize_li"><i className="iconfont icon-lingxing"></i><span className="prize">班级核心成员，主管班级事物，积极带头参与包括软件工程学院灯笼节、软件工程学院篮球赛、优秀班集体答辩、五四红旗团支部答辩在内的多项活动。</span></li>
                                    <li className="prize_li"><i className="iconfont icon-lingxing"></i><span className="prize">所在班级大学期间收获校先进班集体<span
                                     className="emphasize"> 2 </span>次、五四红旗团支部<span className="emphasize"> 3 </span>次。代表班级答辩<span
                                         className="emphasize"> 5 </span>次，获奖<span className="emphasize"> 5 </span>次，获奖概率<span
                                             className="emphasize"> 100% </span>。</span></li>
                                </ul>
                                <span className="dot"></span>
                            </div>
                        </section>
                    </div>
                    <div className="project">
                        <h3 className="small-title">项目经验：PROJECT EXPERIENCE</h3>
                        <section className="project_detail">
                            <span className="left">2015.09-2016.04</span>
                            <div className="right">
                                <h4 className="detail-title">钱鹰院长实验室 · 得乐商务系统</h4>
                                <ul className="project_prize">
                                    <li className="prize_li">
                                        <i className="iconfont icon-lingxing"></i>
                                        <span className="prize">S：重庆市市级某连锁超市内部管理系统，研究生前端团队3人负责，本科生前端团队3人负责，该生为项目核心团队成员之一。</span>
                                    </li>
                                    <li className="prize_li">
                                        <i className="iconfont icon-lingxing"></i>
                                        <span className="prize">T：基于用户需求，完成需求分析、概要设计、详细设计、编码、测试和软件交付的全流程。</span>
                                    </li>
                                    <li className="prize_li">
                                        <i className="iconfont icon-lingxing"></i>
                                        <span className="prize">A：编码前组织团队成员进行需求分析、概要设计、详细设计等，出系列文档，并开始确定编码规范及页面风格，最后根据成员能力，组织分配团队成员完成界面设计及代码编写等工作。</span>
                                    </li>
                                    <li className="prize_li">
                                        <i className="iconfont icon-lingxing"></i>
                                        <span className="prize">R：如期交付，客户满意度较高。在沟通、协作、领导及主动解决问题方面获得一定心得。</span>
                                    </li>
                                </ul>
                                <span className="dot"></span>
                            </div>
                        </section>
                        <section className="project_detail">
                            <span className="left">2015.09-2016.04</span>
                            <div className="right">
                                <h4 className="detail-title">黄颖老师实验室 · 测评报告自动导出系统</h4>
                                <ul className="project_prize">
                                    <li className="prize_li"><i className="iconfont icon-lingxing"></i><span className="prize">S：重庆市市级医院测评报告系统，项目核心团队成员，研究生学长带队，独立负责系统数据数据可视化部分。</span></li>
                                    <li className="prize_li"><i className="iconfont icon-lingxing"></i><span className="prize">T：对系统进行分析，负责数据库、Web界面等的设计，使用ecahrts对测评报告评分进行数据可视化。</span></li>
                                    <li className="prize_li"><i className="iconfont icon-lingxing"></i><span className="prize">A：分析现有系统，分析数据展示可能用到数据，完成数据库设计，而后使用使用ecahrts对重庆市地图进行展示、对测评报告评分/数据进行可视化。</span></li>
                                    <li className="prize_li"><i className="iconfont icon-lingxing"></i><span className="prize">R：如期交付，在系统分析、数据库设计、web后端等方面积累了一些经验。</span></li>
                                </ul>
                                <span className="dot"></span>
                            </div>
                        </section>
                        <section className="project_detail">
                            <span className="left">2015.09-2015.09</span>
                            <div className="right">
                                <h4 className="detail-title">红岩网校工作站 · 新生笑脸</h4>
                                <ul className="project_prize">
                                    <li className="prize_li"><i className="iconfont icon-lingxing"></i><span className="prize">S：重庆邮电大学一年一度校级迎新系统，项目组成团队含1名产品、2名UI、3名前端、3名后台以及2名运维测试，项目前端核心团队成员。</span></li>
                                    <li className="prize_li"><i className="iconfont icon-lingxing"></i><span className="prize">T：7天内从产品开始，完成并上线迎新系统，包含PC端和微信端项目。</span></li>
                                    <li className="prize_li"><i className="iconfont icon-lingxing"></i><span className="prize">A：独立负责PC端前端项目，完成多次需求更改，使用LESS
                                    编写模块化样式，使用 Git 协同开发，与后台小伙伴完成交互工作。</span></li>
                                    <li className="prize_li"><i className="iconfont icon-lingxing"></i><span className="prize">R：如期交付，在图片压缩，图片剪切及性能优化方面积累一定经验。</span></li>
                                </ul>
                                <span className="dot"></span>
                            </div>
                        </section>
                    </div>
                </div>
                <div className="detInfoR">
                    <div className="skills">
                        <h3 className="small-title">技能清单：SKILL INVENTORY</h3>
                        <section className="skills_detail">
                            <span className="left">2014.09-至今</span>
                            <div className="right">
                                <h4 className="detail-title">WEB前端</h4>
                                <ul className="skills_prize">
                                    <li className="prize_li"><i className="iconfont icon-lingxing"></i><span className="prize">能编写语义化的<span className="emphasize">
                                        HTML </span>，模块化的<span className="emphasize"> CSS </span>，熟悉<span className="emphasize"> 移动端与PC端 </span>差异；熟悉常见的浏览器<span className="emphasize"> 兼容性 </span>问题及解决方案，了解<span className="emphasize"> Webp</span>，<span className="emphasize"> Sprite</span>，<span className="emphasize"> Iconfont</span>
                                        等优化方案，了解<span className="emphasize"> flex </span>布局；熟悉<span className="emphasize"> HTML5 </span>特性，熟悉<span className="emphasize"> CSS3 </span>特性及<span className="emphasize"> Canvas</span>、<span className="emphasize"> Cocos2d-JS</span>、<span className="emphasize"> WebGL</span>、<span className="emphasize"> Three.js</span>动画制作；熟悉<span className="emphasize"> Postcss</span>、<span className="emphasize"> CSS modules</span>、<span className="emphasize"> H5 rem</span>
                                        等方案。</span></li>
                                    <li className="prize_li"><i className="iconfont icon-lingxing"></i><span className="prize">熟悉<span className="emphasize"> ECMA
                                    </span>规范、<span className="emphasize"> DOM API </span>，能熟练使用<span className="emphasize"> 原生JS </span>编码；熟悉<span className="emphasize"> 面向对象 </span>的JavaScript，使用过<span className="emphasize"> 前端模块化 </span>方案；熟悉
                                    <span className="emphasize"> TypeScript</span>、<span className="emphasize"> React</span>、<span className="emphasize"> Vue</span>、<span className="emphasize"> Zepto</span>、<span className="emphasize"> jQuery </span>等类库、框架，熟悉<span className="emphasize"> Webpack4</span>、<span className="emphasize"> Gulp</span>、<span className="emphasize"> Grunt</span>、<span className="emphasize"> Babel</span>。</span></li>
                                </ul>
                                <span className="dot"></span>
                            </div>
                        </section>
                        <section className="skills_detail">
                            <span className="left">2015.09-至今</span>
                            <div className="right">
                                <h4 className="detail-title">WEB后端 · Node.js</h4>
                                <ul className="skills_prize">
                                    <li className="prize_li"><i className="iconfont icon-lingxing"></i><span className="prize">熟悉<span className="emphasize"> JavaScript</span>、<span className="emphasize"> Nodejs API</span>，能熟练使用<span className="emphasize"> 原生JS </span>编写<span className="emphasize"> Nodejs 应用</span>；熟悉 Nodejs 框架<span className="emphasize"> Express</span>、<span className="emphasize"> Koa</span>、<span className="emphasize"> Koa2</span>，能使用过<span className="emphasize"> Express</span>、<span className="emphasize"> Koa</span>、<span className="emphasize"> Koa2 </span>开发应用。</span></li>
                                    <li className="prize_li"><i className="iconfont icon-lingxing"></i><span className="prize">尝试过阅读<span className="emphasize"> Nodejs 源码</span>，使用<span className="emphasize"> Hapi</span>、<span className="emphasize"> Egg</span>开发简单的应用。</span></li>
                                </ul>
                                <span className="dot"></span>
                            </div>
                        </section>
                        <section className="skills_detail">
                            <span className="left">2014.09-至今</span>
                            <div className="right">
                                <h4 className="detail-title">WEB后端 · Java</h4>
                                <ul className="skills_prize">
                                    <li className="prize_li"><i className="iconfont icon-lingxing"></i><span className="prize">熟悉<span className="emphasize"> Java</span>
                                        ，能用<span className="emphasize"> Java </span>编写原生后端代码，掌握常见的<span className="emphasize"> Spring</span>、<span className="emphasize"> SpringMVC</span>、<span className="emphasize"> MyBatis </span>等类库、框架；能使用<span className="emphasize"> Spring</span>、<span className="emphasize"> SpringMVC</span>、<span className="emphasize"> MyBatis </span>等类库、框架开发Web项目，有使用
                                    <span className="emphasize"> Mysql</span>、<span className="emphasize"> MongoDB</span>、<span className="emphasize"> Sql Server </span>等数据库的经验。</span></li>
                                </ul>
                                <span className="dot"></span>
                            </div>
                        </section>
                        <section className="skills_detail">
                            <span className="left">2013.09-至今</span>
                            <div className="right">
                                <h4 className="detail-title">运营维护 & 其他</h4>
                                <ul className="skills_prize">
                                    <li className="prize_li"><i className="iconfont icon-lingxing"></i><span className="prize">熟悉<span className="emphasize">  *nix</span>
                                        ，了解常用<span className="emphasize"> Linux </span>命令及运维方法，有管理运维服务器的经验；熟悉<span className="emphasize"> 科学上网</span>，常年<span className="emphasize"> FQ</span>，默认<span className="emphasize"> 谷歌 </span>；能查询并阅读英文文档。</span></li>
                                    <li className="prize_li"><i className="iconfont icon-lingxing"></i><span className="prize">熟悉<span className="emphasize"> Git </span>
                                        基本命令，了解<span className="emphasize"> SVN</span>，有<span className="emphasize"> Github </span>开源作品；以<span className="emphasize"> OS X </span>为日常工作环境，使用<span className="emphasize"> Visual Stidio</span>、<span className="emphasize"> WebStorm</span>、<span className="emphasize"> Sublime</span>、<span className="emphasize"> IntelliJ IDEA </span>进行开发，使用
                                    <span className="emphasize"> Markdown </span>进行日常写作。</span></li>
                                </ul>
                                <span className="dot"></span>
                            </div>
                        </section>
                    </div>
                    <div className="hobbies">
                        <h3 className="small-title">兴趣爱好：INTERESTS AND HOBBIES</h3>
                        <section className="hobbies_detail">
                            <li className="hobbies_li">
                                <i className="iconfont icon-icon-"></i>
                                <p className="hobby">交友</p>
                            </li>
                            <li className="hobbies_li">
                                <i className="iconfont icon-coding"></i>
                                <p className="hobby">代码</p>
                            </li>
                            <li className="hobbies_li">
                                <i className="iconfont icon-blog"></i>
                                <p className="hobby">写博客</p>
                            </li>
                            <li className="hobbies_li">
                                <i className="iconfont icon-reading"></i>
                                <p className="hobby">阅读</p>
                            </li>
                        </section>
                    </div>
                    <div className="evaluation">
                        <h3 className="small-title">自我评价：EVALUATION</h3>
                        <section className="evaluation_detail">
                            <div><i className="iconfont icon-lingxing"></i>该生性格开朗、做事认真踏实、工作兢兢业业、有较强的组织能力、沟通能力和团队协作精神，能迅速的适应各种环境并融合其中。</div>
                            <div><i className="iconfont icon-lingxing"></i>期望职业是软件开发工程师，开发界活跃成员，坚信追求卓越，成功就会在不经意间追上自己。</div>
                        </section>
                    </div>
                </div>
            </div>
        )
    }
}