import React, { useState } from 'react';
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
import { useStylesCard } from '../../pages/Dashboard/Home/containers/HistoryList/HistoryList.style';
import MenuItem from '@material-ui/core/MenuItem';

const CreatePost = ({ loading, name, date, avatar, image, description }) => {
  const classes = useStyles();

  const currencies = [
    {
      value: 'Environment',
    },
    {
      value: 'Clean transport',
    },
    {
      value: 'Community',
    },
  ];
  const [currency, setCurrency] = React.useState('EUR');

  const handleChange = (event) => {
    setCurrency(event.target.value);
  };

  const { container } = useStylesCard();
  const [imagen, setImagen] = useState('');
  const uploadFile = async (e) => {
    const files = e.target.files;
    const data = new FormData();
    data.append('file', files[0]);
    data.append('upload_preset', 'sickfits');
    const response = await fetch(
      'https://api.cloudinary.com/v1_1/nreyes-lean/image/upload/',
      {
        method: 'POST',
        body: data,
      }
    );
    const file = await response.json();
    console.log(file.secure_url);
    setImagen(file.secure_url);
  };

  return (
    <div className={container}>
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
          <TextField
            id="standard-basic"
            label="Standard"
            className={classes.inputHeader}
          />
        </div>
        <br />
        {imagen && (
          <img
            style={{
              padding: '0% 7% 1% 13%',
              maxWidth: '100%',
              maxHeight: '200px',
            }}
            src={imagen}
            alt="Upload Preview"
          />
        )}
        <CardContent>
          <TextField
            id="standard-select-currency"
            select
            label="Good Action"
            value={currency}
            onChange={handleChange}
            style={{
              position: 'relative',
              float: 'left',
              left: '11%',
              width: '25ch',
            }}
          >
            {currencies.map((option) => (
              <MenuItem key={option.value} value={option.value}>
                {option.value}
              </MenuItem>
            ))}
          </TextField>
          <div className={classes.mediaOption}>
            <label className="custom-file-upload">
              <input
                type="file"
                style={{ display: 'none' }}
                onChange={(e) => uploadFile(e)}
              />
              <AddAPhotoIcon className={classes.divider} color="secondary" />
            </label>
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
    </div>
  );
};

export default CreatePost;
