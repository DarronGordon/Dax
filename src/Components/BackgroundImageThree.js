import { Parallax } from 'react-parallax';
import FallingLeaf from "../Images/FallingLeaf.jpg";

const BGImgThree = () => (
    <Parallax className='image' blur={.5} bgImage={FallingLeaf} bgImageAlt="Falling Leaf" strength={900}>
        <div className='content'>

            <p className='img-txt'> I Love You!!!</p>
            <p className='img-txt'> Soooo Much!!!</p>


        </div>
    </Parallax>
);

export default BGImgThree;
