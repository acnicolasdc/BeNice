import React from 'react';
import HistoryList from './containers/HistoryList';
import ProfileContainer from './../Profile/containers/ProfileSide';
import { useStyles } from './Home.styles';
import GridBase from '@/components/Grid/GridBase'
import TableSideContainer from '@/pages/Dashboard/TableLikes/containers/TableSide'
import CreatePost from '@/containers/CreatePost'


const Home = () => {
  const { content } = useStyles();
  return (
    <GridBase 
    FirstChildren={ProfileContainer}
  
    SecondChildren={() =>(
      <>
       <div className={content}>
        <CreatePost />
      </div> 
      <HistoryList />
      </>
    )}
    ThirdChildren={TableSideContainer}
    />
  );
};

export default Home;
