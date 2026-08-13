import JiminJungkook from '../assets/jimin-e-jungkook-em-show.jpg'; //adição de imagem

import '../assets/FirstComponent.css'; //adição de css

const FirstComponent = () => {

    return(
        <div className="frame">
            <h1>Se liga no Jimin+Jungkook</h1>
            <img src={JiminJungkook} alt="Jimin e Jungkook" />
            <p>Eles são um belo casal</p>
        </div>    
    );
};

export default FirstComponent;