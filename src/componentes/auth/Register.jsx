import { useForm } from 'react-hook-form';
import { NavLink } from 'react-router-dom';

function Register() {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();
  const onSubmit = (data) => console.log('Register data', data);

  return (
    <form className='form' onSubmit={handleSubmit(onSubmit)}>
      <h1>
        <i className='text-danger'>InstaYA!</i>
      </h1>
      <div className='form-item'>
        <label>Nombre</label>
        <input
          {...register('nombres', { required: true })}
          aria-invalid={errors.nombre ? 'true' : 'false'}
        />
        {errors.nombre && <span>This field is required</span>}
      </div>
      <div className='form-item'>
        <label>Usuario</label>
        <input
          {...register('username', { required: true })}
          aria-invalid={errors.username ? 'true' : 'false'}
        />
        {errors.username && <span>This field is required</span>}
      </div>
      <div className='form-item'>
        <label>Contraseña</label>
        <input
          type='password'
          {...register('password', { required: true })}
          aria-invalid={errors.password ? 'true' : 'false'}
        />
        {errors.password && <span>This field is required</span>}
      </div>
      <div className='form-item'>
        <label>Correo</label>
        <input
          {...register('email', { required: true })}
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
