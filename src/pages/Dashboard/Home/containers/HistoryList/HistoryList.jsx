import React, { useState, useEffect } from 'react';
import PublicCard from '@/components/PublicCard';
import { useDispatch, useSelector } from 'react-redux';
import { useTrail, animated } from 'react-spring';
import { useStyles } from './HistoryList.style';
import { historyRequest } from '@/redux/duck/history.duck';

const HistoryList = () => {
  const dispatch = useDispatch();
  const { fetching, data } = useSelector((state) => state.history);
  console.log(data, fetching);
  useEffect(() => {
    dispatch(historyRequest());
  }, [dispatch]);
  const trail = useTrail(fetching ? 5 : data.length, {
    from: { opacity: 0, transform: 'translate3d(0,-40px,0)' },
    to: { opacity: 1, transform: 'translate3d(0,0px,0)' },
  });
  const { container } = useStyles();

  return (
    <div className={container}>
      {trail.map((props, index) => (
        <animated.div style={props} className={container} key={index}>
          {fetching ? (
            <PublicCard loading={true} />
          ) : (
            <PublicCard description={data[index].descripcion} />
          )}
        </animated.div>
      ))}
    </div>
  );
};

export default HistoryList;
