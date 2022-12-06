
import React from 'react';
import { TagCloud } from 'react-tagcloud';

const data = [
  { value: 'jQuery', count: 25 },
  { value: 'MongoDB', count: 18 },
  { value: 'JavaScript', count: 38 },
  { value: 'React', count: 30 },
  { value: 'Nodejs', count: 28 },
  { value: 'Express.js', count: 25 },
  { value: 'HTML5', count: 33 },
  { value: 'CSS', count: 20 },
  { value: 'WebGL', count: 22 },
  { value: 'Babel.js', count: 7 },
  { value: 'SASS', count: 25 },
  { value: 'Git', count: 15 },
  { value: 'React Native', count: 27 },
  { value: 'C#/.Net', count: 30 },
  { value: 'TypeScript', count: 15 },
  { value: 'FlexBox', count: 30 },
  { value: 'NPM', count: 11 },
  { value: 'OOP', count: 33 },
  { value: 'SQL', count: 20 },
  { value: 'C#/.Net', count: 30 },
  { value: 'TypeScript', count: 15 },
  { value: 'FlexBox', count: 30 },
  { value: 'NPM', count: 11 },
  { value: 'FlexBox', count: 30 },
  { value: 'NPM', count: 11 },
  { value: 'Unity', count: 33 },
  { value: 'Nodejs', count: 28 },
  { value: 'Express.js', count: 25 },
  { value: 'Git', count: 15 },
  { value: 'Mocha', count: 17 },
  { value: 'jQuery', count: 25 },
  { value: 'MongoDB', count: 18 },
  { value: 'JavaScript', count: 38 },
  { value: 'Android', count: 30 },
  { value: 'React Native', count: 27 },
  { value: 'SQL', count: 20 },
  { value: 'HTML5', count: 33 },
  { value: 'CSS', count: 20 },
  { value: 'WebGL', count: 22 },
  { value: 'Babel.js', count: 7 },
  { value: 'SASS', count: 25 },
  { value: 'C#/.Net', count: 27 },



]
/* CSS:
@keyframes blinker {
  50% { opacity: 0.0; }
}
*/

// custom renderer is function which has tag, computed font size and
// color as arguments, and returns react component which represents tag
const customRenderer = (tag, size, color) => (
  <span
    key={tag.value}
    style={{
      animation: 'blinker 3s linear infinite',
      animationDelay: `${Math.random() * 2}s`,
      fontSize: `${size / 2}em`,
      border: `2px solid ${color}`,
      margin: '3px',
      padding: '3px',
      display: 'inline-block',
      color: 'black',
    }}
  >
    {tag.value}
  </span>
)

export default () => (<div className="wordBubble">
  <TagCloud tags={data} minSize={1} maxSize={4} renderer={customRenderer} />
  </div>
)
