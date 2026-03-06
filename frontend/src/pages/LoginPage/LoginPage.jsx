import React from 'react'
import './LoginPage.css'

const LoginPage = () => {
  return (
    <div className='login-page'>
      <div className="login-page-contents">
        <img className='logo' src="/src/assets/GhorerBazar_assets/logo.webp" />
        <h3 className='sign-in'>Sign in</h3>
        <p className='sign-in-p'>Sign in or create an account</p>
        <button><span>Continue with</span> <img src="/src/assets/GhorerBazar_assets/shop-app-seeklogo-removebg-preview.png" alt="" /></button>
        <div className='or-div'>
          <div className="line-div"></div>
          <p>or</p>
          <div className="line-div"></div>
        </div>
        <form>
          <input type="email" className='email-input' placeholder='Email' />
          <input type="submit" className='type-btn' value='Continue' />
        </form>
      </div>
      <p className='terms-of-service'>Terms of service</p>
    </div>
  )
}

export default LoginPage