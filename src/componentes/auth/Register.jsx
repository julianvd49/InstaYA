import axios from 'axios';
import { useForm } from 'react-hook-form';
import { NavLink } from 'react-router-dom';

function Register() {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();
  const onSubmit = (dataRegister) => {
    console.log(dataRegister);
    axios.post('http://localhost:9000/api/users', dataRegister)
    .then(res => console.log(res))
    .catch(err => console.log(err));
  }

  return (
    <form className='form' onSubmit={handleSubmit(onSubmit)}>
      <h1>
        <i className='text-danger'>InstaYA!</i>
      </h1>
      <div className='form-item'>
        <label>Nombre</label>
        <input
          {...register('nombre', { required: true })}
          aria-invalid={errors.nombre ? 'true' : 'false'}
        />
        {errors.nombre && <span>This field is required</span>}
      </div>
      <div className='form-item'>
        <label>Usuario</label>
        <input
          {...register('usuario', { required: true, min:4, max: 8 })}
          aria-invalid={errors.usuario ? 'true' : 'false'}
        />
        {errors.usuario && <span>This field is required, min: 4, max: 8</span>}
      </div>
      <div className='form-item'>
        <label>Contraseña</label>
        <input
          type='password'
          {...register('password', { required: true, min: 6, max: 10 })}
          aria-invalid={errors.password ? 'true' : 'false'}
        />
        {errors.password && <span>This field is required, min: 6, max: 8</span>}
      </div>
      <div className='form-item'>
        <label>Correo</label>
        <input
          type='email'
          {...register('email', { required: true, pattern: /^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/ } )}
          aria-invalid={errors.email ? 'true' : 'false'}
        />
        {errors.email && <span>This field is required</span>}
      </div>
      <input type='submit' value='Registrarse' />
      <NavLink to='/login'>Tienes cuenta? Inicia sesion!</NavLink>
    </form>
  );
}

export default Register;
