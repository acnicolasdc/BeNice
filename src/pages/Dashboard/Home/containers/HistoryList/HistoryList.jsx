import React from 'react';
import PublicCard from '@/components/PublicCard';
import { useTrail, animated } from 'react-spring';
import { useStyles } from './HistoryList.style';

const HistoryList = () => {
  const trail = useTrail(10, {
    from: { marginLeft: -20, opacity: 0, transform: 'translate3d(0,-40px,0)' },
    to: { marginLeft: 20, opacity: 1, transform: 'translate3d(0,0px,0)' },
  });
  const { container } = useStyles();
  console.log(container);
  return (
    <div className={container}>
      {trail.map((props, index) => (
        <animated.div style={props} className={container} key={index}>
          <PublicCard />
        </animated.div>
      ))}
    </div>
  );
};

export default HistoryList;
