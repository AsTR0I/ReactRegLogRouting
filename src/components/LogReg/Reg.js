import React, { useState, useEffect } from 'react';

const Reg = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [name, setName] = useState('')
  const [user, setUser] = useState({
    name:'',
    email: '',
    password: ''
  });

  const handlerEmail = (e) => {
    setEmail(e.target.value);
  };

  const handlerPassword = (e) => {
    setPassword(e.target.value);
  };
  const handlerName = (e) => {
    setName(e.target.value);
  };

  const submitUser = () => {
    const keys = Object.keys(localStorage);
    let userFound = false;

    for (let i = 0; i < keys.length; i++) {
      const key = keys[i];
      const item = JSON.parse(localStorage.getItem(key));

      if (item && item.email === email || item && item.name === name) {
        userFound = true
        alert('Такой пользователь уже существует')
      }
    }

    if (!userFound) {
        setUser({
            name: name,
            email: email,
            password: password
          });
    }
    
  };

  useEffect(() => {
    if (user.email && user.password && user.name) {
      localStorage.setItem(`user${Date.now()}`, JSON.stringify(user));
    }
  }, [user]);

  return (
    <div>
      <div className='formContainer'>
        <form className='formStyle'>
          <span>Регистрация</span>
          <input
            className='inputStyle'
            type='text'
            placeholder='Введите ваше имя'
            value={name}
            onChange={(e) => { handlerName(e) }}
          ></input>
          <input
            className='inputStyle'
            type='text'
            placeholder='Введите ваш email'
            value={email}
            onChange={(e) => { handlerEmail(e) }}
          ></input>
          <input
            className='inputStyle'
            type='password'
            placeholder='Введите ваш пароль'
            value={password}
            onChange={(e) => { handlerPassword(e) }}
          ></input>
          <button type="button" onClick={() => { submitUser() }}>Зарегистрироваться</button>
        </form>
      </div>
    </div>
  );
}

export default Reg;
