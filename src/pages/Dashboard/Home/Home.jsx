import React from 'react';
import HistoryList from './containers/HistoryList';
import ProfileContainer from './../Profile/containers/ProfileSide';
import { useStyles } from './Home.styles';
import GridBase from '@/components/Grid/GridBase';
import TableSideContainer from '@/pages/Dashboard/TableLikes/containers/TableSide';
import CreatePost from '@/containers/CreatePost';
import { getStorage } from '@/utils/localStorage';

const Home = () => {
  const { content } = useStyles();
  const getUser = () => {
    let userSession = getStorage('user-session-benice');
    if (userSession) {
      userSession = JSON.parse(userSession);
    }
    return userSession;
  };
  return (
    <GridBase
      FirstChildren={ProfileContainer}
      SecondChildren={() => (
        <>
          <div className={content}>
            <CreatePost
              avatar={`https://api.adorable.io/avatars/268/abott@${
                getUser().nombre
              }.png`}
            />
          </div>
          <HistoryList />
        </>
      )}
      ThirdChildren={TableSideContainer}
    />
  );
};

export default Home;
