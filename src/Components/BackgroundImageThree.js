import { Parallax } from 'react-parallax';
import FallingLeaf from "../Images/FallingLeaf.jpg";

const BGImgThree = () => (
    <Parallax className='image' blur={.5} bgImage={FallingLeaf} bgImageAlt="Falling Leaf" strength={800}>
        <div className='content'>

            <p className='img-txt'> 11-11-2022</p>
       


        </div>
    </Parallax>
);

export default BGImgThree;
