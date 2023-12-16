import React, { useState } from 'react';

const Login = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [user, setUser] = useState({
    email: '',
    password: ''
  });
  const [userEmail, setUserEmail] = useState('');
  const [userName, setUserName] = useState('')

  const handlerEmail = (e) => {
    setEmail(e.target.value);
  };

  const handlerPassword = (e) => {
    setPassword(e.target.value);
  };

  const submitUser = () => {
    const keys = Object.keys(localStorage);
    let userFound = false;

    for (let i = 0; i < keys.length; i++) {
      const key = keys[i];
      const item = JSON.parse(localStorage.getItem(key));

      if (item && item.email === email && item.password === password) {
        setUser(item);
        setUserEmail(item.email);
        setUserName(item.name)
        userFound = true;
        break;
      }
    }

    if (!userFound) {
        setUserEmail(null);
        setUserName(null)
      alert('Пользователь не найден');
    }
  };

  return (
    <div>
      <div className='formContainer'>
        <form className='formStyle'>
          <span>Войти</span>
          <input
            className='inputStyle'
            type='text'
            placeholder='Введите ваш email'
            value={email}
            onChange={handlerEmail}
          ></input>
          <input
            className='inputStyle'
            type='password'
            placeholder='Введите ваш пароль'
            value={password}
            onChange={handlerPassword}
          ></input>
          <button type="button" onClick={submitUser}>Войти</button>
        </form>
      </div>
      <span>`Привет ${userName},\n вот ваша почта: ${userEmail}`</span>
    </div>
  );
};

export default Login;
