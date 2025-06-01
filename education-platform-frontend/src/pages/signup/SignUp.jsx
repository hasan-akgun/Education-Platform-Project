import {Link} from 'react-router-dom';
import './SignUp.css';
import { useState } from 'react';

export function SignUp() {

  const [formData, setFormData]= useState({
    username: '',
    name: '',
    password: '',
    passwordCheck: ''
  });

  const handleChange = (e) =>{
    const {name, value} = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));

  }

  const handleSubmit = (e) => {
    console.log(formData)
    e.preventDefault();
    
  }

  return(
    <div className="signup-page">
      <form className="signup-container" onSubmit={handleSubmit}>
        <h2>KAYIT OL</h2>
        <div className='signup-form'>

          <label htmlFor="username">Kullanıcı Adı</label>
          <input type="text" id="username" name="username" onChange={handleChange} required />

          <label htmlFor="name">Ad</label>
          <input type="text" id="name" name="name" onChange={handleChange} required />

          <label htmlFor="password">Şifre</label>
          <input type="password" id="password" name="password" minLength={8} onChange={handleChange} required />

          <label htmlFor="password-check">Şifre Tekrar</label>
          <input type="password" id="passwordCheck" name="passwordCheck" minLength={8} onChange={handleChange} required />

         
          <button type='submit' className="signup-form-button">Kayıt Ol</button>

        </div>
      </form>
    </div>
  );
}