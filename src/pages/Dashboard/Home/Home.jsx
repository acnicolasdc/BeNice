import React from 'react';
import HistoryList from './containers/HistoryList';

const Home = () => {
  return (
    <div
      style={{
        width: '100%',
        display: 'flex',
        justifyContent: 'center',
        paddingTop: 80,
      }}
    >
      <HistoryList />
    </div>
  );
};

export default Home;
