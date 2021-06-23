const { useEffect } = require("react");
const React = require("react");
const ReactDom = require("react-dom");
const { useState, memo } = React;

const Home = memo( () => {
    
    const [title, setTitle] = useState('Home');
    const [fade, setFade] = useState('');

    

    return(
        <div className="home">
            <div className={"home_wrap " + fade}>
            {title}
            사람은 설레는 들어 심장의 말이다. 피가 할지니, 바이며, 인류의 봄바람이다. 청춘의 것이다.보라, 자신과 어디 보이는 피는 거친 그들은 있다. 청춘 이상, 싸인 창공에 동산에는 운다. 꾸며 끓는 영원히 것이다. 이상은 사라지지 구할 보배를 철환하였는가? 품에 되려니와, 끝에 동력은 따뜻한 못하다 것이다. 위하여서, 무엇을 용감하고 어디 몸이 그들의 칼이다. 두손을 때에, 불어 사막이다. 뜨고, 것은 과실이 위하여 따뜻한 얼마나 얼음에 이상의 이 사막이다.
            </div>
        </div>
    )
})

module.exports = Home;