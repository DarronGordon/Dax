import { Parallax } from 'react-parallax';
import BelowClouds from "../Images/BelowClouds.jpg";

const BGImgTwo = () => (
    <Parallax className='image' blur={.5} bgImage={BelowClouds} bgImageAlt="Below Clouds" strength={900}>
        <div className='content'>
            <p className='img-txt'> You must Have A Great Day!!!</p>

            <a href='https://www.youtube.com/watch?v=RfoqELZWcp8'>CLICK ME!!!</a>
        </div>
    </Parallax>
);

export default BGImgTwo;
