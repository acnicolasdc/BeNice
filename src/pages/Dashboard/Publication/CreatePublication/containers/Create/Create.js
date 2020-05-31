import React, { useState } from 'react';
import Avatar from '@material-ui/core/Avatar';
import Button from '@material-ui/core/Button';
import CssBaseline from '@material-ui/core/CssBaseline';
import TextField from '@material-ui/core/TextField';
import LockOutlinedIcon from '@material-ui/icons/LockOutlined';
import Typography from '@material-ui/core/Typography';
import Container from '@material-ui/core/Container';
import { useStyles } from './Create.style';
import Chip from '@material-ui/core/Chip';
import DoneIcon from '@material-ui/icons/Done';

const CreatePublication = () => {

    const [imagen, setImagen] = useState('');
    const { paper, avatar, form, submit } = useStyles();
    const [dataUser, setData] = useState({ nombre: '', userName: '', correo: '', password: '' });
 
    const handleOnChange = (e) => {
        setData({ ...dataUser, [e.target.name]: e.target.value });
      };

    const arTag = ["Medio ambiente", "Transporte limpio"];
    const uploadFile = async (e) => {
        const files = e.target.files;
        const data = new FormData();
        data.append('file', files[0]);
        data.append('upload_preset', 'sickfits');
        const response = await fetch(
            'https://api.cloudinary.com/v1_1/nreyes-lean/image/upload/',
            {
                method: 'POST',
                body: data
            }
        );
        const file = await response.json();
        console.log(file.secure_url)
        setImagen(
            file.secure_url,
        );
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
                        value={dataUser.nombre}
                        onChange={handleOnChange}
                    />
                     <input
          className="csv-input"
          type="file"
          onChange={ (e) => uploadFile(e) }
          name="file"
          style={{color: "transparent"}}
         
        />
                    <br />
                    {imagen && <img width='400' src={imagen} alt='Upload Preview' />}


                </form>
            </div>
            <br />
            {arTag.map((item) => (
                <Chip
                    variant="outlined"
                    size="small"
                    label={item}
                    clickable
                    color="primary"
                    deleteIcon={<DoneIcon />}
                    style={{ margin: "0 20px 0 0" }}
                />
            ))}
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
