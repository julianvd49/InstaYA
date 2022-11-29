import { useForm } from 'react-hook-form';
import { NavLink } from "react-router-dom";

function Login() {
  const { register, handleSubmit, formState: { errors } } = useForm();
  const onSubmit = data => console.log(data);

  return (
    /* "handleSubmit" will validate your inputs before invoking "onSubmit" */
    <form className='form' onSubmit={handleSubmit(onSubmit)}>
      <div className="form-item">
      <label>Usuario</label>
        {/* register your input into the hook by invoking the "register" function */}
        <input {...register("username", { required: true })}
                      aria-invalid={errors.firstName ? "true" : "false"} />
        {errors.username && <span>This field is required</span>}
      </div>
      <div className="form-item">
        <label>Contraseña</label>
        {/* include validation with required or other standard HTML validation rules */}
        <input type='password' {...register("password", { required: true })} />
        {/* errors will return when field validation fails  */}
        {errors.password && <span>This field is required</span>}
      </div> 
      <input type="submit" value='Accede ya!' />
      <NavLink to='/register'>
        Registrate!
      </NavLink>
    </form>
  );
}

export default Login;