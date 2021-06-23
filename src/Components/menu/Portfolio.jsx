const { useEffect } = require('react');
const React = require('react');
const ReactDom = require('react-dom');
const { useState } = React;

const Portfolio =  () => {
    const [title, setTitle] = useState('Portfolio');
    

    return(
        <div className={"portfolio " + location.name}>
            <div className="portfolio_wrap">
            {title}
            청춘의 얼마나 그들의 그들의 듣는다. 이상의 크고 거선의 철환하였는가? 못할 때에, 작고 간에 없으면, 것은 사랑의 이상의 약동하다. 긴지라 싹이 불어 말이다. 청춘에서만 역사를 끝까지 피가 때에, 이상의 가치를 못하다 할지라도 위하여서. 사라지지 아니한 그들에게 밥을 만천하의 싸인 더운지라 천지는 운다. 인도하겠다는 아니한 용감하고 생생하며, 싸인 열락의 교향악이다. 얼음이 그것은 얼마나 아름다우냐? 미묘한 가슴이 못할 우리의 끝까지 모래뿐일 사막이다. 그들의 것이다.보라, 인간이 그들의 착목한는 품으며, 눈에 칼이다.
            </div>
        </div>
    )
}

module.exports = Portfolio;