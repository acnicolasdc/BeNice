import React from 'react';
import HistoryList from './containers/HistoryList';
import CreatePost from '@/containers/CreatePost';
import { useStyles } from './Home.styles';

const Home = () => {
  const { container, content } = useStyles();
  return (
    <div className={container}>
      <div className={content}>
        <CreatePost />
      </div>
      <HistoryList />
    </div>
  );
};

export default Home;
