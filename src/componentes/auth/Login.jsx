import { useForm } from 'react-hook-form';
import { NavLink } from 'react-router-dom';
import { useState } from 'react';
import axios from 'axios';

function Login() {
  const [username, setUsername] = useState(null);
  const [isLoggedin, setIsLoggedin] = useState(true);
  const [userId, setUserId] = useState(null);
  
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const onSubmit = (dataLogin) => {
    console.log(dataLogin);

    axios.post('http://localhost:9000/api/users', dataLogin)
    .then(res => {
      console.log(res.data[0])
      if (res.data.length === 0) {
        alert('Usuario o contraseña incorrecta');
      } else {

        const userData = {
          usuario: res.data[0].usuario,
          id_usuario: res.data[0]._id
        };

        setIsLoggedin(true);

        localStorage.setItem('token-info', JSON.stringify(userData));

        // console.log(userData);
        console.log(localStorage);
        window.location.reload();

      }
    })
    .catch(err => console.log(err));
  }

  const logout = () => {
    localStorage.removeItem('token-info');
    setIsLoggedin(false);
    window.location.reload();
  };



  if (isLoggedin === false || localStorage.length === 0) {
    return (
      <form className='form' onSubmit={handleSubmit(onSubmit)}>
        {/* 'handleSubmit' will validate your inputs before invoking 'onSubmit' */}
        <h1>
          <i className='text-danger'>InstaYA!</i>
        </h1>
        <div className='form-item'>
          <label>Usuario</label>
          {/* register your input into the hook by invoking the 'register' function */}
          <input
            {...register('usuario', { required: true })}
            aria-invalid={errors.usuario ? 'true' : 'false'}
          />
          {errors.usuario && <span>This field is required</span>}
        </div>
        <div className='form-item'>
          <label>Contraseña</label>
          {/* include validation with required or other standard HTML validation rules */}
          <input type='password' {...register('password', { required: true })} />
          {/* errors will return when field validation fails  */}
          {errors.password && <span>This field is required</span>}
        </div>
        <input type='submit' value='Accede ya!' />
        <NavLink to='/register'>Registrate!</NavLink>
      </form>
    );
  } else {
    return(
      <>
        <h1>User is logged in</h1>
        <button onClickCapture={logout}>logout user</button>
      </>
    );   
  } 
}


export default Login;