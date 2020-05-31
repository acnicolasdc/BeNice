import React, { useContext,useState } from 'react';
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
import { loadUsers } from '@/redux/thunk/auth.thunk';
import { useDispatch, useSelector } from 'react-redux';
import { SessionContext } from '@/providers/session';
import { publicationRequest } from '@/redux/duck/publication.duck';
import { getStorage, setStorage } from '@/utils/localStorage';

const CreatePost = ({ loading, name, date, avatar, image, description, onSuccess, onFailure }) => {
  const classes = useStyles();
  
    const handleOnChange = (e) => {
      setDataPublication({ ...dataPublication, [e.target.name]: e.target.value });
      };
      const [user, setUser] = useState({});

      const getUserData = () => {
        let userData = getStorage('user-session-benice');
        userData = JSON.parse(userData);
        setUser(userData);
    }
  const currencies = [
    {
      value: 'Environment',
      id:1,
    },
    {
      value: 'Clean transport',
      id:2,
    },
    {
      value: 'Community',
      id:3,
    },
  ];
  const [currency, setCurrency] = React.useState('Environment');

  const handleChange = (event) => {

    setCurrency(event.target.value);
    setDataPublication({ ...dataPublication, tema_id: '1'});
  };

  const { container } = useStylesCard();
  const [imagen, setImagen] = useState('');
  const [dataPublication, setDataPublication] = useState({ imagen_url: imagen, tema_id: '1', descripcion: '',ubicacion_id:'1' });
 
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
    
    setDataPublication({ ...dataPublication, imagen_url: file.secure_url, ubicacion_id: '1', fecha_registro: new Date().getDate().toString(), usuario_id: user.usuario_id});

    setImagen(file.secure_url);
    console.log('datos : '+dataPublication);
  };
  const dispatch = useDispatch();
  const handleSubmit = (e) => {
    e.preventDefault();
    if (!dataPublication) return;
    dispatch(publicationRequest(dataPublication));
    console.log('dataPublication ',dataPublication);
    setDataPublication({imagen_url: '', tema_id: '', descripcion: '',ubicacion_id:'' });
    setImagen('');

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
            name={"descripcion"}
            value={dataPublication.descripcion}
            onChange={handleOnChange}
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
              onClick={handleSubmit}
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
