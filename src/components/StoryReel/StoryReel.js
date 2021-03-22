import React from 'react';
import Story from '../Story/Story';
import './StoryReel.css';

const StoryReel = () => {
  return (
    <div className='storyReel'>
      <Story
        backgroundImage='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSrPYPiZGnJGosUdKbHh0yqD_AbhhHnvltLnw&usqp=CAU'
        profileImage='https://randomuser.me/api/portraits/women/68.jpg'
        title='Jane Doe'
      />
      <Story 
         backgroundImage='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRSevHfyEH47OF84t2QbzTsEMw94gUxjMJoNg&usqp=CAU'
         profileImage='https://randomuser.me/api/portraits/men/43.jpg'
         title='Ed Morris'
      />
      <Story
         backgroundImage='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT5YQEJJq_eftd4Tu6tr3smLUZ12DIMrQrUGg&usqp=CAU'
         profileImage='https://randomuser.me/api/portraits/women/93.jpg'
         title='Amy Smith'
      />
      <Story
         backgroundImage='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRFw8vup_0S95JiT4solGrtfKHrs32bRjtJ1g&usqp=CAU'
         profileImage='https://randomuser.me/api/portraits/men/12.jpg'
         title='James Arthur'
      />
      <Story 
         backgroundImage='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcScfg9pgso-V9ojUaubRY3dU0NDJW47xJ36RQ&usqp=CAU'
         profileImage='https://randomuser.me/api/portraits/men/47.jpg'
         title='David Brooks'
      />
    </div>
  );
};

export default StoryReel;


