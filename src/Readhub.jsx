import axios from "axios";
import React, { useState, useEffect } from 'react';
import './Readhub.css';
import img1 from './logo.png'

import { createRoot } from 'react-dom/client';
const container = document.getElementById('root');
const root = createRoot(container);

export default function Readhub() {
    const [data, setData] = useState([]);
    useEffect(() => {
        axios.get("/api")
            .then(res => {
                console.log(res.data.data[0])
                setData(res.data.data[0])
            })
            .catch(function (error) {
                console.log(error);
            });
    }, [])
    // var a = 
    return (
        <div>
            <div className="nav">
                <div className="container">
                    <div className="left1">
                        <div className="logo">
                            <img src={img1} width="130px" />
                        </div>
                        <a href="#" className="header"><div className="hot" >热门话题</div></a>
                        <a href="#"><div className="header">每日早报</div></a>
                        <a href="#"><div className="header">科技动态</div></a>
                        <a href="#"><div className="header">技术资讯</div></a>
                    </div>
                    <div className="right1">
                        <div className="searchImg"></div>
                        <a href="#"><div className="login">登陆</div></a>
                    </div>
                </div>
            </div>
            <div className="box">
                <div className="right2">
                    <div className="sponsor">年度赞助商</div>
                    <div className="adBox">
                        <div className="ad1"><img src="https://resource.nocode.com/upload/20210402/39eb5103-5f8f-4492-9866-0c72061ca8b0" alt="error" className="adImg" /></div>
                        <div className="ad2"><img src="https://resource.nocode.com/assets/partner/jksjqyb-retina.png" alt="error" className="adImg" /></div>
                        <div className="ad1"><img src="https://resource.nocode.com/upload/20210402/9fe5c26c-8d14-4659-9ee2-17fe15e9d96d" alt="error" className="adImg" /></div>
                        <div className="ad2"><img src="https://resource.nocode.com/upload/20210402/fd9f97a3-6438-4cc9-a251-7b8f3f9033c8" alt="error" className="adImg" /></div>
                        <div className="ad1"><img src="https://resource.nocode.com/upload/20210402/70f78256-062a-478e-aaca-ebbf68bdf2f6" alt="error" className="adImg" /></div>
                        <div className="ad2"><img src="https://resource.nocode.com/upload/20210402/62052206-9d08-42ca-b647-0f89f8cf8f5c" alt="error" className="adImg" /></div>
                        <div className="ad1"><img src="https://resource.nocode.com/upload/20210402/9c1db9ae-dc07-4c2f-b858-902fc0a8c885" alt="error" className="adImg" /></div>
                        <div className="ad2"><img src="https://resource.nocode.com/upload/20210402/6f4c3437-5efb-451f-947c-329ed73a6426" alt="error" className="adImg" /></div>
                        <div className="ad1"><img src="https://resource.nocode.com/upload/20210402/675b7a33-f221-459e-839f-f1e3e627ee4b" alt="error" className="adImg" /></div>
                        <div className="ad3">
                            <img src="https://cdn.readhub.cn/next_images/minaCodeFromTopicsScan@2x.png" alt="error" className="adImg2" />
                            <div className="adText">
                                <p>扫描二维码，</p>
                                <p>打开Readhub小程序</p>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="left2">
                    <div className="text">
                        <div className="head">
                            <div className="title">{data.title}</div>
                            {}
                        </div>
                        <div className="content">{data.summary}</div>
                    </div>
                </div>
            </div>
        </div>
    )


}
root.render(<Readhub />);