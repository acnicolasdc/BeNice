import React from 'react';
import HistoryList from './containers/HistoryList';
import CreatePost from '@/containers/CreatePost';
import { useStyles } from './Home.styles';
import GridBase from '@/components/Grid/GridBase'

const Home = () => {
  const { content } = useStyles();
  return (
    <GridBase SecondChildren={() =>(
      <>
      {/* <div className={content}>
        <CreatePost />
      </div> */}
      <HistoryList />
      </>
    )}/>
  );
};

export default Home;
