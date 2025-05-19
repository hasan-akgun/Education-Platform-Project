import {Link} from 'react-router-dom';
import './SignUp.css';

export function SignUp() {
  return(
    <div className="signup-page">
      <form className="signup-container">
        <h2>KAYIT OL</h2>
        <div className='signup-form'>

          <label htmlFor="name">Ad</label>
          <input type="text" id="name" name="name" required />

          <label htmlFor="surname">Soyad</label>
          <input type="text" id="surname" name="surname" required />

          <label htmlFor="password">Şifre</label>
          <input type="password" id="password" name="password" minLength={8} required />

          <label htmlFor="password-check">Şifre Tekrar</label>
          <input type="password" id="password-check" name="password-check" minLength={8} required />

          <Link to="/" className='signup-form-link'>
            <button type='submit' className="signup-form-button">Kayıt Ol</button>
          </Link>

        </div>
      </form>
    </div>
  );
}