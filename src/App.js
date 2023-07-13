import './App.css';
import { createContext, useState } from 'react';
import ReactSwitch from 'react-switch';


export const ThemeContext = createContext(null);


// $("#mobile_code").intlTelInput({
//   initialCountry: "in",
//   separateDialCode: true,
// });

function App() {
  const [theme, setTheme] = useState("light");

  const toggleTheme = () => {
    setTheme((curr) => (curr === "light" ? "dark" : "light"));
  };
  return (
    <ThemeContext.Provider value={{ theme, setTheme }}>
      <div className='Outer flex' id={theme}>
        <div className='illustration'>
          <div className='image'>
            <img className='im' src={require('./images/Mobile login-pana 2.png')} />
          </div>
        </div>
        <div className='sign-up-side flex'>
          <div className='content'>
            <div className='first'>
              <span className='head'>Sign up to improve your</span>
              <span className='head'>Financial decisions</span>
            </div>
            <div className='second'>
              <p className='mob'>Enter your Mobile Number</p>
            </div>
            <div className='third'>
              <input className="form-control" placeholder="Phone Number" />
            </div>
            <div className='fourth'>
              <span className='terms'>By proceeding, you agree with Ready Wealth’s terms </span>
              <span className='terms'>and conditions and privacy policy</span>
            </div>
            <div className='fifth'>
              <button className='btn-1' type="button" disabled><span className='btn'>Send OTP</span></button>
            </div>
            <div className='sixth flex'>
              <span className='already-login'>Already have an account ? <span className='login'>Log In</span></span>
            </div>
            <div className='seventh'>
              <label>{theme === "light" ? "Light Mode " : "Dark Mode "}</label>
              <ReactSwitch onChange={toggleTheme} checked={theme === "dark"}></ReactSwitch>
            </div>
          </div>
        </div>
      </div>
    </ThemeContext.Provider>
  );
}

export default App;
