import React from 'react';
import { useStyles } from './PublicCard.style';
import Card from '@material-ui/core/Card';
import CardHeader from '@material-ui/core/CardHeader';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Avatar from '@material-ui/core/Avatar';
import Typography from '@material-ui/core/Typography';
import IconButton from '@material-ui/core/IconButton';
import MoreVertIcon from '@material-ui/icons/MoreVert';
import FavoriteBorderIcon from '@material-ui/icons/FavoriteBorder';
import FavoriteIcon from '@material-ui/icons/Favorite';
import Skeleton from '@material-ui/lab/Skeleton';

const PublicCard = ({
  loading,
  name,
  date,
  avatar,
  image,
  description,
  liked,
  count_likes,
  onClick,
}) => {
  const classes = useStyles();

  return (
    <Card className={classes.card}>
      <CardHeader
        avatar={
          loading ? (
            <Skeleton
              animation="wave"
              variant="circle"
              width={40}
              height={40}
            />
          ) : (
            <Avatar alt="Ted talk" src={avatar} />
          )
        }
        action={
          loading ? null : (
            <div
              style={{
                display: 'flex',
                flexDirection: 'row',
                justifyContent: 'center',
                alignItems: 'center',
              }}
            >
              {count_likes > 0 && (
                <Typography variant="body2" color="textSecondary" component="p">
                  {count_likes} likes
                </Typography>
              )}
              <IconButton aria-label="settings" onClick={onClick}>
                {liked ? <FavoriteIcon /> : <FavoriteBorderIcon />}
              </IconButton>
            </div>
          )
        }
        title={
          loading ? (
            <Skeleton
              animation="wave"
              height={10}
              width="80%"
              style={{ marginBottom: 6 }}
            />
          ) : (
            name
          )
        }
        subheader={
          loading ? <Skeleton animation="wave" height={10} width="40%" /> : date
        }
      />
      {loading ? (
        <Skeleton animation="wave" variant="rect" className={classes.media} />
      ) : (
        <CardMedia className={classes.media} image={image} title={name} />
      )}

      <CardContent>
        {loading ? (
          <React.Fragment>
            <Skeleton
              animation="wave"
              height={10}
              style={{ marginBottom: 6 }}
            />
            <Skeleton animation="wave" height={10} width="80%" />
          </React.Fragment>
        ) : (
          <Typography variant="body2" color="textSecondary" component="p">
            {description}
          </Typography>
        )}
      </CardContent>
    </Card>
  );
};

export default PublicCard;
