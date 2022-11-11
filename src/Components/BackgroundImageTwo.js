import { Parallax } from 'react-parallax';
import BelowClouds from "../Images/BelowClouds.jpg";

const BGImgTwo = () => (
    <Parallax className='image' blur={.5} bgImage={BelowClouds} bgImageAlt="Below Clouds" strength={800}>
        <div className='content'>
            <p className='img-txt'> You must Have A Great Day!!!</p>

            <p className='img-txt'> View Old Site @ <a href='https://enigmatic-everglades-80113.herokuapp.com/GameDevelopment'>Darron Portfolio!!!!</a></p>
  
        </div>
    </Parallax>
);

export default BGImgTwo;
