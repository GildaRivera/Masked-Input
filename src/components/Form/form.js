import { useEffect, useState, useRef } from "react";
import { Notify } from 'notiflix/build/notiflix-notify-aio';
import "../Form/form.css";
import Input from "../Input/input";
export default function Form(props) {
  const [form, setForm] = useState({});
  const [valid, setValid] = useState(false);
  const emergenciaCheck = useRef()
  const f1 = useRef()
  const [showEmergencia, setShowEmergencia] = useState(false)
  const handleForm = (value, valid, name,required) => {
    setForm((prev) => {
      prev[name] = { value: value, valid: valid, required:required };
      return prev;
    });
  };
  const handleSubmit = () => {
    let flag = true;
    for (let i in form) {
      if(form[i].required ===true){
        if (!form[i].valid || form[i].value===undefined) {
          flag = false;
          break;
        }
      }else{
        if (!form[i].valid) {
          flag = false;
          break;
        }
      }
   

    }
    if(flag===false){

        Notify.failure("Form is not valid")
        
      
    }else{ Notify.success('Form is valid');}
    setValid(flag);

  };
useEffect(()=>{
    if(valid){
       window.localStorage.setItem(JSON.stringify(form["Email"].value), JSON.stringify(form))
        Notify.success('Form is valid');
        setValid(false)
        f1.current.reset()
    }
   
  
},[valid])

const handleCheck = (e)=>{

  if(e.target.checked === true){
    setShowEmergencia(true)
  }
  else{
    setShowEmergencia(false)
  }
}
  return (
    <>
      <div className="w-full  relative form__container">
        <form className="bg-white shadow-md rounded px-8 pt-6 pb-8 mb-4" ref={f1}>
          <h2 className="indent-8 text-lg font-bold text-[#000000]">
            Información general
          </h2>
          <div className="mb-4 form__multiple__inputs">
            <Input
              id="nombres"
              name="Nombres"
              label="Nombres"
              placeholder=""
              maxlength="15"
              regex="^[a-zA-Z\s]*$"
              errorMessage="Los nombres no pueden contener números"
              required={true}
              handleForm={handleForm}
            />
            <Input
              id="apellido1"
              name="Primer apellido"
              label="Primer apellido"
              placeholder=""
              maxlength="10"
              regex="^[a-zA-Z\s]*$"
              errorMessage="Los apellidos no pueden contener números"
              required={true}
              handleForm={handleForm}
            />
            <Input
              id="apellido2"
              name="Segundo apellido"
              label="Segundo apellido"
              placeholder=""
              maxlength="10"
              regex="^[a-zA-Z\s]*$"
              errorMessage="Los apellidos no pueden contener números"
              required={true}
              handleForm={handleForm}
            />
          </div>
          <div className="mb-4 form__multiple__inputs">
            <Input
              id="fecha"
              name="Fecha"
              label="Fecha"
              placeholder=""
              type="date"
              required={true}
              handleForm={handleForm}
            />
            <Input
              id="email"
              name="Email"
              label="Email"
              placeholder=""
              regex="^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$"
              errorMessage="El email no cumple con el patron"
              required={true}
              handleForm={handleForm}
            />
            <Input
              id="direccion"
              name="Dirección"
              label="Dirección"
              placeholder=""
              regex="^[a-zA-Z\s]*$"
              required={true}
              handleForm={handleForm}
            />
          </div>
          <h2 className="indent-8 text-lg font-bold text-[#000000]">
            Información de numero
          </h2>
          <div className="mb-4 form__multiple__inputs">
            <Input
              id="codigoMarcado"
              name="Codigo de marcado"
              label="Codigo de marcado"
              placeholder=""
              regex="^[a-zA-Z\s]*$"
              handleForm={handleForm}
              type="select"
              required={true}
              options={["501","502","503","504","505","506", "507"]}
            />
            <Input
              id="numeroTel"
              name="Número de telefono"
              label="Número de telefono"
              placeholder=""
              regex="^[0-9]*$"
              handleForm={handleForm}
              required={true}
              errorMessage="El número no puede contener letras"
            />
            <Input
              id="numeroCasa"
              name="Número de telefono de casa"
              placeholder=""
              label="Número de telefono de casa"
              regex="^[0-9]*$"
              required={false}
              errorMessage="El número no puede contener letras"
              handleForm={handleForm}
            />
          </div>
          <h2 className="indent-8 text-lg font-bold text-[#000000]">
            Información de contacto{" "}
          </h2>
          <div className="mb-4 form__multiple__inputs" style={{display: "flex",
    justifyContent: "flex-start",
    marginLeft: "125px"}}>
            <Input
              id="numeroIdentificacion"
              name="Número de identificación"
              label="Número de identificación"
              placeholder=""
              maxlength="13"
              regex="^[0-9]+$"
              required={true}
              errorMessage="Número de identificación no valido"
              handleForm={handleForm}
            />
            <div id="pass">
            <Input
              id="numeroPasaporte"
              name="Número de pasaporte"
              label="Número de pasaporte"
              placeholder=""
              handleForm={handleForm}
              regex="^[0-9]+$"
              required={true}
              errorMessage="Número de pasaporte no valido"
       
            /></div>
         
          </div>
          <h2 className="indent-8 text-lg font-bold text-[#000000]">
            Información de pago{" "}
          </h2>
          <div className="mb-4 form__multiple__inputs">
            <Input
              id="numeroTarjeta"
              name="Número de tarjeta de credito"
              label="Número de tarjeta de credito"
              placeholder=""
              type="password"
              maxlength="16"
              regex="^[0-9]+$"
              required={true}
              errorMessage="Número de tarjeta invalido"
              handleForm={handleForm}
            />
            <Input
              id="fechaVencimiento"
              name="Fecha de vencimiento"
              label="Fecha de vencimiento"
              placeholder=""
              type="month"
              required={true}
              handleForm={handleForm}
            />
            <Input
              id="CVC"
              name="CVC"
              label="CVC"
              placeholder=""
              type="password"
              maxlength={3}
              required={true}
              regex="^[0-9]+$"
              errorMessage="CVC solo puede contener números"
              handleForm={handleForm}
            />
          </div>





          <h2 className="indent-8 text-lg font-bold text-[#000000]">
            Datos de contacto de emergencia<input className="form-check-input" id="check" type="checkbox" onChange={handleCheck} ref={emergenciaCheck} id="flexCheckDefault" />
          </h2>
          {showEmergencia ? 
          <div>
          <div className="mb-4 form__multiple__inputs">
            <Input
              id="nombresE"
              name="NombresE"
              label="Nombres"
              placeholder=""
              maxlength="15"
              regex="^[a-zA-Z\s]*$"
              errorMessage="Los nombres no pueden contener números"
              required={false}
              handleForm={handleForm}
            />
            <Input
              id="apellido1E"
              name="Primer apellidoE"
              label="Priemr apellido"
              placeholder=""
              maxlength="10"
              regex="^[a-zA-Z\s]*$"
              errorMessage="Los apellidos no pueden contener números"
              required={false}
              handleForm={handleForm}
            />
            <Input
              id="apellido2E"
              name="Segundo apellidoE"
              label="Segundo apellido"
              placeholder=""
              maxlength="10"
              regex="^[a-zA-Z\s]*$"
              errorMessage="Los apellidos no pueden contener números"
              required={false}
              handleForm={handleForm}
            />
          </div>





          <div className="mb-4 form__multiple__inputs">
            <Input
              id="fechaE"
              name="FechaE"
              label="Fecha"
              placeholder=""
              type="date"
              required={false}
              handleForm={handleForm}
            />
            <Input
              id="emailE"
              name="EmailE"
              label="Email"
              placeholder=""
              regex="^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$"
              errorMessage="El email no cumple con el patron"
              required={false}
              handleForm={handleForm}
            />
            <Input
              id="direccionE"
              name="DirecciónE"
              label="Dirección"
              placeholder=""
              regex="^[a-zA-Z\s]*$"
              required={false}
              handleForm={handleForm}
            />
          </div>
        
          <div className="mb-4 form__multiple__inputs" style={{display: "flex",
    justifyContent: "flex-start",
    marginLeft: "125px"}}>
            <Input
              id="codigoMarcadoE"
              name="Codigo de marcadoE"
              label="Codigo de marcado"
              placeholder=""
              regex="^[a-zA-Z\s]*$"
              handleForm={handleForm}
              type="select"
              required={false}
            options={["501","502","503","504","505","506", "507"]}
            />
            <div id="numeroTel1">
            <Input
              id="numeroTelE"
              name="Número de telefonoE"
              label="Número de telefono"
              placeholder=""
              regex="^[0-9]*$"
              handleForm={handleForm}
              required={false}
              errorMessage="El número no puede contener letras"
            /></div>
         
          </div>
          


          </div>
: <></>}







          <div className="flex items-center justify-between" style={{justifyContent:"flex-end"}}>
            <button
              className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
              type="button"
              onClick={handleSubmit}
             style={{    position: "relative",
              right: "9%",    
              marginTop:"8px"}}
            >
              Guardar
            </button>
          </div>

  
        </form>
      </div>
    </>
  );
}
