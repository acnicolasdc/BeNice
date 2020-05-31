import React, { useEffect } from 'react';
import PublicCard from '@/components/PublicCard';
import { useDispatch, useSelector } from 'react-redux';
import { useTrail, animated } from 'react-spring';
import { useStyles } from './HistoryList.style';
import { historyRequest } from '@/redux/duck/history.duck';
import { likeRequest } from '@/redux/duck/like.duck';
import { dislikeRequest } from '@/redux/duck/dislike.duck';
import { getStorage } from '@/utils/localStorage';

const HistoryList = () => {
  const dispatch = useDispatch();
  const { fetching, data } = useSelector((state) => state.history);
  useEffect(() => {
    let userSession = getUser();
    if (userSession) {
      dispatch(historyRequest({ usuario_id: userSession.usuario_id }));
    }
  }, [dispatch]);
  const trail = useTrail(fetching ? 5 : data.length, {
    from: { opacity: 0, transform: 'translate3d(0,-40px,0)' },
    to: { opacity: 1, transform: 'translate3d(0,0px,0)' },
  });
  const getUser = () => {
    let userSession = getStorage('user-session-benice');
    if (userSession) {
      userSession = JSON.parse(userSession);
    }
    return userSession;
  };
  const sendLike = (id, index, isLiked) => {
    let userSession = getUser();
    if (userSession) {
      if (isLiked === 'true') {
        dispatch(
          dislikeRequest({
            like: { publicacion_id: id, usuario_id: userSession.usuario_id },
            index: index,
          })
        );
      } else {
        dispatch(
          likeRequest({
            like: { publicacion_id: id, usuario_id: userSession.usuario_id },
            index: index,
          })
        );
      }
    }
  };
  console.log(data);
  const { container } = useStyles();
  return (
    <div className={container}>
      {trail.map((props, index) => (
        <animated.div style={props} className={container} key={index}>
          {fetching ? (
            <PublicCard loading={true} />
          ) : (
            <PublicCard
              description={data[index].descripcion}
              count_likes={data[index].count_likes}
              liked={data[index].like_estado === 'true'}
              onClick={() =>
                sendLike(
                  data[index].publicacion_id,
                  index,
                  data[index].like_estado
                )
              }
            />
          )}
        </animated.div>
      ))}
    </div>
  );
};

export default HistoryList;
