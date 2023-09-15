import React, { useRef, useState } from 'react';
import './Register.css';
import axios from 'axios';
import Swal from 'sweetalert2';
import { useNavigate } from 'react-router-dom';
import logo from '../../img/logo.PNG';
import { Link as Anchor } from 'react-router-dom';
import Subrayado from '../Subrayado/Subrayado';
import IniciaSesionCon from '../IniciaSesionCon/IniciaSesionCon';
import Registrate from '../Registrate/Registrate';
import Descargar from '../Descargar/Descargar';
import Spiral from '../Spiral/Spiral'
export default function Register() {
  const navigate = useNavigate();
  const dataForm = useRef();
  const [showPassword, setShowPassword] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const [buttonColor, setButtonColor] = useState(''); // Estado para el color de fondo
  const [errorMessage, setErrorMessage] = useState('');
  const [successMessage, setSuccessMessage] = useState('');

  async function handleSubmit(e) {
    e.preventDefault();

    let formInputs = [];

    Object.values(dataForm.current.elements).forEach((e) => {
      if (e.nodeName === 'INPUT' && e.name) {
        formInputs.push(e);
      }
    });
    formInputs.pop();
    let data = {
      [formInputs[0].name]: formInputs[0].value,
      [formInputs[1].name]: formInputs[1].value,
    };

    let url = 'https://count-save.onrender.com/users/signup';
    try {
      await axios.post(url, data);
      setIsLoading(true);
      setButtonColor('');

      setSuccessMessage('Registro Exitoso');

      setTimeout(() => {
        setIsLoading(false);
      }, 1500);
      dataForm.current.reset();
    } catch (error) {
      setIsLoading(false);

      console.error(error);
      let errorMessage = '';
      if (
        error.response &&
        error.response.data &&
        error.response.data.message
      ) {
        if (typeof error.response.data.message === 'string') {
          errorMessage = error.response.data.message;
        } else {
          errorMessage = error.response.data.message.join(' ');
        }
      } else {
        errorMessage = 'Se produjo un error al procesar la solicitud.';
      }
      console.log(errorMessage);

      setErrorMessage(errorMessage); // Mensaje de error
    }

  }

  const togglePasswordVisibility = () => {
    setShowPassword(!showPassword);
  };

  return (
    <div className="form-register-contain">
      <form action="" className="form-register" onSubmit={handleSubmit} ref={dataForm}>
        <Anchor className="logo">
          <img src={logo} alt="logo" />
        </Anchor>
        <input
          // type="email"
          placeholder="Teléfono, usuario o correo electrónico"
          name="mail"
          id="mail"
          className='input'
        />
        <fieldset className='input'>
          <input
            type={showPassword ? 'text' : 'password'}
            placeholder="Contraseña"
            name="password"
            id="password"
          />
          <div className="password-toggle" onClick={togglePasswordVisibility}>
            {showPassword ? 'Ocultar ' : 'Mostrar '}
          </div>
        </fieldset>
        <div className="enviar" style={{ backgroundColor: buttonColor }}>
          {isLoading ? (
            <Spiral />
          ) : (
            <input type="submit" value="Entrar" />
          )}
        </div>

        <Subrayado />
        <IniciaSesionCon />
        {errorMessage && <div className="error-message">{errorMessage}</div>}
        {successMessage && <div className="success-message">Error de conección intenta de nuevo más tarde.</div>}
        <Anchor className="olvidado">¿Has olvidado tu contraseña?</Anchor>
      </form>
      <Registrate />
      <Descargar />
    </div>
  );
}
