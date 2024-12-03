// import React from 'react';
// import { useNavigate } from 'react-router-dom';

// const AdminLogin = () => {
//   const navigate = useNavigate();

//   const handleBackToAppClick = () => {
//     navigate('/');
//   };

//   const handleTrainerLoginClick = () => {
//     navigate('/trainer-login');
//   };

//   return (
//     <div className='login-form'>
//       <div className='left-side'>
//         <div className='logo'>
//           <img src='./vdei-logo.png' alt='logo'></img>
//         </div>
//         <div className='contact-form'>
//           <form>
//             <div className='login-id'>
//               <label>
//                 Login ID<br></br>
//                 <input type="text" name="login-id" placeholder="Enter Your Id...." />
//               </label>
//             </div>
//             <div className='login-password'>
//               <label>
//                 Login Password<br></br>
//                 <input type="text" name="login-password" placeholder="Enter Your Password...." />
//               </label>
//             </div>
//             <div className='forget-password'>
//               <span>Forget Password?</span>
//             </div>
//             <div className='submit-btn'>
//               <input type="submit" value="Submit" />
//               <img src='./arrow.png' alt='arrow'></img>
//             </div>
//             <div className='help'>
//               <span>Need Any help?? Contact Us...</span>
//             </div>
//             <div className='social-logo'>
//               <img src='./mail.png' alt='mail'></img>
//               <img src='./whatsapp.png' alt='whatsapp'></img>
//               <img src='./call.png' alt='call'></img>
//             </div>
//           </form>
//           <div className='optional-btn'>
//             <button className="admin-login-btn" onClick={handleBackToAppClick}>Student Login</button>
//             <button className="trainer-login-btn" onClick={handleTrainerLoginClick}>Trainer Login</button>
//           </div>
//         </div>
//       </div>
//       <div className='right-side'>
//         <div className='banner-img'>
//           <img src='./admin-login-banner-img.png' alt='banner-img'></img>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default AdminLogin;



import React from 'react';
import { useNavigate } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { login } from './lib/actions';
import { toast, ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';


const AdminLogin = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const { error, user } = useSelector((state) => state.data);

  const handleSubmit = (e) => {
    e.preventDefault();
    const email = e.target.elements['login-id'].value;
    const password = e.target.elements['login-password'].value;
    console.log('Submitting login:', email, password); // Debugging log
    dispatch(login(email, password));
  };


  React.useEffect(() => {
    if (user) {
      toast.success('Admin logged in successfully!');
    }
    if (error) {
      toast.error(error);
    }
  }, [user, error]);

  const handleBackToAppClick = () => {
    navigate('/');
  };

  const handleTrainerLoginClick = () => {
    navigate('/trainer-login');
  };

  return (
    <div className='login-form'>
      <ToastContainer />
      <div className='left-side'>
        <div className='logo'>
          <img src='./vdei-logo.png' alt='logo'></img>
        </div>
        <div className='contact-form'>
          <form onSubmit={handleSubmit}>
            <div className='login-id'>
              <label>
                Login ID<br></br>
                <input type="text" name="login-id" placeholder="Enter Your Id...." />
              </label>
            </div>
            <div className='login-password'>
              <label>
                Login Password<br></br>
                <input type="password" name="login-password" placeholder="Enter Your Password...." />
              </label>
            </div>
            <div className='forget-password'>
              <span>Forget Password?</span>
            </div>
            <div className='submit-btn'>
              <input type="submit" value="Submit" />
              <img src='./arrow.png' alt='arrow'></img>
            </div>
            <div className='help'>
              <span>Need Any help?? Contact Us...</span>
            </div>
            <div className='social-logo'>
              <img src='./mail.png' alt='mail'></img>
              <img src='./whatsapp.png' alt='whatsapp'></img>
              <img src='./call.png' alt='call'></img>
            </div>
          </form>
          <div className='optional-btn'>
            <button className="admin-login-btn" onClick={handleBackToAppClick}>Student Login</button>
            <button className="trainer-login-btn" onClick={handleTrainerLoginClick}>Trainer Login</button>
          </div>
        </div>
      </div>
      <div className='right-side'>
        <div className='banner-img'>
          <img src='./admin-login-banner-img.png' alt='banner-img'></img>
        </div>
      </div>
    </div>
  );
};

export default AdminLogin;