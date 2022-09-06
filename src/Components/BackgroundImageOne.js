import { Parallax } from 'react-parallax';
import AboveClouds from "../Images/AboveClouds.jpg";

const BGImgOne = () => (
    <Parallax className='image' blur={.5} bgImage={AboveClouds} bgImageAlt="Falling Leaf" strength={900}>
        <div className='content'>
            
            <p className='img-txt'>Good Morning!!!</p>

            <p className='img-txt'>Anno</p>
        </div>
    </Parallax>
);

export default BGImgOne;