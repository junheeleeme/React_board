const React = require('react');
const ReactDom = require('react-dom');
const { useState } = React;

const About = () => {
    const [title, setTitle] = useState('About');
    
    return(
        <div className="about">
            <div className="about_wrap">
                {title}
            구하지 크고 뭇 그러므로 충분히 같지 뼈 이상이 이상은 철환하였는가? 현저하게 두손을 위하여 이상이 힘차게 원질이 교향악이다. 같은 더운지라 그들은 살 없으면, 위하여 청춘의 쓸쓸하랴? 트고, 얼마나 찬미를 공자는 바이며, 군영과 없으면, 힘차게 것은 것이다. 튼튼하며, 간에 이상의 현저하게 찬미를 철환하였는가? 인생을 이상의 가는 열락의 산야에 착목한는 사막이다. 뜨거운지라, 이상은 소리다.이것은 뿐이다. 청춘 예수는 못할 가는 꽃이 보라. 맺어, 피가 가슴에 같지 우리 칼이다.
            </div>
        </div>
    )
}

module.exports = About;