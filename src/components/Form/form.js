import "../Form/form.css";
import Input from "../Input/input";
export default function Form(props) {
  return (
    <>
      <div className="w-full max-w-6xl relative form__container">
        <form className="bg-white shadow-md rounded px-8 pt-6 pb-8 mb-4">
        <h2 className="indent-8 text-lg font-bold text-[#000000]">General data</h2>
          <div className="mb-4 form__multiple__inputs">
              <Input id="nombres" name="Nombres" placeholder="" maxlength="15" regex="^[a-zA-Z\s]*$" errorMessage="Los nombres no pueden contener números" required={true}/>
              <Input id="apellido1" name="Primer apellido" placeholder=""  maxlength="10"/>
              <Input id="apellido2" name="Segundo apellido" placeholder="" maxlength="10"/>
          </div>
          <div className="mb-4 form__multiple__inputs">
              <Input id="fecha" name="Fecha" placeholder="" type="date" />
              <Input id="email" name="Email" placeholder="" />
              <Input id="direccion" name="Dirección" placeholder=""/>
          </div>
          <h2 className="indent-8 text-lg font-bold text-[#000000]">Información de numero</h2>
          <div className="mb-4 form__multiple__inputs">
              <Input id="codigoMarcado" name="Codigo de marcado" placeholder="" />
              <Input id="numeroTel" name="Número de telefono" placeholder="" />
              <Input id="numeroCasa" name="Número de telefono de casa" placeholder=""/>
          </div>
          <h2 className="indent-8 text-lg font-bold text-[#000000]">Información de contacto </h2>
          <div className="mb-4 form__multiple__inputs">
              <Input id="numeroIdentificacion" name="Número de identificación personal" placeholder="" />
              <Input id="numeroPasaporte" name="Número de pasaporte" placeholder="" />
              <Input id="datosEmergencia" name="Datos de emergencia" placeholder=""/>
          </div>
          <h2 className="indent-8 text-lg font-bold text-[#000000]">Información de pago </h2>
          <div className="mb-4 form__multiple__inputs">
          <Input id="numeroTarjeta" name="Número de tarjeta de credito" placeholder="" type="password"/>
              <Input id="fechaVencimiento" name="Fecha de vencimiento" placeholder="" type="date" />
              <Input id="CVC" name="CVC" placeholder="" type="password"/>

          </div>

      
          {/* <div className="mb-4">
      <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="password">
        Password
      </label>
      <input className="shadow appearance-none border border-red-500 rounded w-full py-2 px-3 text-gray-700 mb-3 leading-tight focus:outline-none focus:shadow-outline" id="password" type="password" placeholder="******************" />
      <p className="text-red-500 text-xs italic">Please choose a password.</p>
    </div>
    <div className="flex items-center justify-between">
      <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline" type="button">
        Sign In
      </button>
   
    </div> */}
        </form>
      </div>
    </>
  );
}
