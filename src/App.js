import logo from './logo.svg';
import './App.css';


// $("#mobile_code").intlTelInput({
//   initialCountry: "in",
//   separateDialCode: true,
// });

function App() {
  return (
    <div className='Outer flex'>
      <div className='illustration'>
        <div className='image'>
          <img className='im' src={require('./images/Mobile login-pana 2.png')} />
        </div>
      </div>
      <div className='sign-up-side flex'>
        <div className='content'>
          <div className='first'>
            <sapn className='head'>Sign up to improve your</sapn>
            <span className='head'>Financial decisions</span>
          </div>
          <div className='second'>
            <p className='mob'>Enter your Mobile Number</p>
          </div>
          <div className='third'>
            <input type="text" id="mobile_code" class="form-control" placeholder="Phone Number" name="name" />
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

        </div>
      </div>

    </div>
  );
}

export default App;
