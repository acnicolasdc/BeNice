import React from 'react';
import HistoryList from './containers/HistoryList';

const Home = () => {
  return (
    <div style={{ width: '100%', display: 'flex', justifyContent: 'center' }}>
      <HistoryList />
    </div>
  );
};

export default Home;
