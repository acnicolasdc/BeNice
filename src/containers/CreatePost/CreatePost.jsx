import React from 'react';
import { useStyles } from './CreatePost.style';
import Card from '@material-ui/core/Card';
import CardHeader from '@material-ui/core/CardHeader';
import CardContent from '@material-ui/core/CardContent';
import Divider from '@material-ui/core/Divider';
import Avatar from '@material-ui/core/Avatar';
import Skeleton from '@material-ui/lab/Skeleton';
import Button from '@material-ui/core/Button';
import AddAPhotoIcon from '@material-ui/icons/AddAPhoto';
import TextField from '@material-ui/core/TextField';

const CreatePost = ({ loading, name, date, avatar, image, description }) => {
  const classes = useStyles();

  return (
    <Card className={classes.card}>
      <div className={classes.cardHeader}>
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
      />
        <TextField id="standard-basic" label="Standard" 
        className={classes.inputHeader}/>
        </div>
      <CardContent>
        <div className={classes.mediaOption}>
          <AddAPhotoIcon className={classes.divider} color="secondary" />
          <Divider orientation="vertical" flexItem />
          <Button
            variant="contained"
            color="secondary"
            className={classes.button}
          >
            Publish
          </Button>
        </div>
      </CardContent>
    </Card>
  );
};

export default CreatePost;
