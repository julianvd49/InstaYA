import { useForm } from "react-hook-form";
import axios from "axios";
import { useEffect } from "react";
import { useParams } from "react-router-dom";
import dateFormat from "dateformat";

function OrderEdit() {
  const { id } = useParams();

  const {
    register,
    formState: { errors },
    handleSubmit,
    setValue,
  } = useForm();
  const onSubmit = (dataForm) => {
    axios
      .put(`http://localhost:9000/api/orders/${id}`, dataForm)
      .then((res) => console.log(res.data))
      .catch((err) => console.log(err));
  };

  useEffect((data) => {
    axios
      .get(`http://localhost:9000/api/orders/${id}`)
      .then((res) => {
        console.log(res.data);
        setValue("fecha", dateFormat(res.data.fecha, "yyyy-mm-dd"));
        // setValue('hora', dateFormat(res.data.hora, 'HH'));
        // setValue('hora', res.data.hora);
        setValue("estado", res.data.estado);
        setValue("largo", res.data.largo);
        setValue("ancho", res.data.ancho);
        setValue("largo", res.data.largo);
        setValue("alto", res.data.alto);
        setValue("peso", res.data.peso);
        setValue("dir_recogida", res.data.dir_recogida);
        setValue("ciudad_recogida", res.data.ciudad_recogida);
        setValue("destinatario", res.data.destinatario);
        setValue("cc", res.data.cc);
        setValue("dir_entrega", res.data.dir_entrega);
        setValue("ciudad_entrega", res.data.ciudad_entrega);
      })
      .catch((err) => console.log(err));
  });

  return (
    <form className="form-order" onSubmit={handleSubmit(onSubmit)}>
      <h1>
        <i>Cambio al instante!</i>
      </h1>
      <div className="form-item-date-time">
        <label>Fecha</label>
        <input
          type="date"
          {...register("fecha", { required: true })}
          aria-invalid={errors.fecha ? "true" : "false"}
        />
        {errors.fecha && <span>This field is required</span>}
      </div>
      <div className="form-item-date-time">
        <label>Hora</label>
        <input
          type="time"
          {...register("hora", { required: true })}
          aria-invalid={errors.hora ? "true" : "false"}
        />
        {errors.hora && <span>This field is required</span>}
      </div>
      <div className="form-item-horizontal">
        <label>Estado</label>
        <input
          {...register("estado", { required: true })}
          aria-invalid={errors.estado ? "true" : "false"}
        />
        {errors.estado && <span>This field is required</span>}
      </div>
      <div className="form-item-dimensions">
        <label>Largo</label>
        <input
          type="number"
          {...register("largo", { required: true })}
          aria-invalid={errors.largo ? "true" : "false"}
        />
        {errors.largo && <span>This field is required</span>}

        <label>Ancho</label>
        <input
          type="number"
          {...register("ancho", { required: true })}
          aria-invalid={errors.ancho ? "true" : "false"}
        />
        {errors.ancho && <span>This field is required</span>}

        <label>Alto</label>
        <input
          type="number"
          {...register("alto", { required: true })}
          aria-invalid={errors.alto ? "true" : "false"}
        />
        {errors.alto && <span>This field is required</span>}

        <label>Peso</label>
        <input
          type="number"
          {...register("peso", { required: true })}
          aria-invalid={errors.peso ? "true" : "false"}
        />
        {errors.peso && <span>This field is required</span>}
      </div>
      <div className="form-item-horizontal">
        <label>Direccion de recogida</label>
        <input
          {...register("dir_recogida", { required: true })}
          aria-invalid={errors.dir_recogida ? "true" : "false"}
        />
        {errors.dir_recogida && <span>This field is required</span>}
      </div>
      <div className="form-item-horizontal">
        <label>Ciudad de recogida</label>
        <input
          {...register("ciudad_recogida", { required: true })}
          aria-invalid={errors.ciudad_recogida ? "true" : "false"}
        />
        {errors.ciudad_recogida && <span>This field is required</span>}
      </div>
      <div className="form-item-horizontal">
        <label>Nombre de destinatario</label>
        <input
          {...register("destinatario", { required: true })}
          aria-invalid={errors.destinatario ? "true" : "false"}
        />
        {errors.destinatario && <span>This field is required</span>}
      </div>
      <div className="form-item-horizontal">
        <label>CC/NIT destinatario</label>
        <input
          {...register("cc", { required: true })}
          aria-invalid={errors.cc ? "true" : "false"}
        />
        {errors.cc && <span>This field is required</span>}
      </div>
      <div className="form-item-horizontal">
        <label>Direccion de entrega</label>
        <input
          {...register("dir_entrega", { required: true })}
          aria-invalid={errors.dir_entrega ? "true" : "false"}
        />
        {errors.dir_entrega && <span>This field is required</span>}
      </div>
      <div className="form-item-horizontal">
        <label>Ciudad de entrega</label>
        <input
          {...register("ciudad_entrega", { required: true })}
          aria-invalid={errors.ciudad_entrega ? "true" : "false"}
        />
        {errors.ciudad_entrega && <span>This field is required</span>}
        <input type="submit" value="Actualizar" />
      </div>
    </form>
  );
}

export default OrderEdit;