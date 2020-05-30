import React, {useState} from 'react';
import Avatar from '@material-ui/core/Avatar';
import Button from '@material-ui/core/Button';
import CssBaseline from '@material-ui/core/CssBaseline';
import TextField from '@material-ui/core/TextField';
import LockOutlinedIcon from '@material-ui/icons/LockOutlined';
import Typography from '@material-ui/core/Typography';
import Container from '@material-ui/core/Container';
import { useStyles } from './Create.style';
import FormGroup from '@material-ui/core/FormGroup';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import Checkbox from '@material-ui/core/Checkbox';
import {Image} from 'cloudinary-react';
import {CloudinaryContext, Transformation} from 'cloudinary-react';
import { createRequest } from '@/redux/duck/create.duck';
import { useDispatch, useSelector } from 'react-redux';


const CreatePublication = () => {

    const [imagen, setImagen] = useState(false);
    const dispatch = useDispatch();
  const { paper, avatar, form, submit } = useStyles();
  
  const arTag=["Medio ambiente","Transporte limpio"];
  var image='';
  const uploadFile =async(e) => {
    const files = e.target.files;
    image=e.target.files;
    const data = new FormData();
    data.append('file', files[0]);
    data.append('upload_preset', 'sickfits');
   var response= dispatch(createRequest(data));
   debugger
    /* const response = await fetch(
        'https://api.cloudinary.com/v1_1/nreyes-lean/image/upload/',
        {
            method: 'POST',
            body: data
        }
    ); */
    /* const file =  response.json();
    this.setImagen(file.secure_url); */
};  

  return (
    <Container component="main" maxWidth="xs">
      <CssBaseline />
      <div className={paper}>
        <Avatar className={avatar}>
          <LockOutlinedIcon />
        </Avatar>
        <Typography component="h1" variant="h5">
          Publication to BeNice
        </Typography>
        <form className={form} noValidate>
          <TextField
            variant="outlined"
            margin="normal"
            required
            fullWidth
            id="publication"
            label="Description of the publication"
            name="publication"
            autoComplete="publication"
            autoFocus
            multiline
          />
          <input
          className="csv-input"
          type="file"
          onChange={ (e) =>{console.log( uploadFile(e)); }}
          name="file"
          placeholder={null}
        >
        
        </input>
        {image&&<img width='200' src={image} alt='Upload Preview' />}

      
        </form>
      </div>
      <FormGroup row>
{arTag.map((item)=>(
      <FormControlLabel control={<Checkbox name={item}  />} label= {item} key={item}/>
      )) }
    </FormGroup>
    <Button
            type="submit"
            fullWidth
            variant="contained"
            color="primary"
            className={submit}
          >
            Enviar
          </Button>
    </Container>
  );
}


export default CreatePublication;
