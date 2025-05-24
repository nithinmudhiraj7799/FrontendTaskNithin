// import axios from 'axios';
// import { useState } from 'react';
// import { useNavigate } from 'react-router-dom';
// import Navbar from './Navbar';

// import { ToastContainer, toast } from 'react-toastify';
// import 'react-toastify/dist/ReactToastify.css';

// function Signup() {
//   const [formData, setFormData] = useState({
//     username: '',
//     email: '',
//     password: ''
//   });

//   const [loading, setLoading] = useState(false);
//   const navigate = useNavigate();

//   const handleChange = (e) => {
//     setFormData(prev => ({ ...prev, [e.target.name]: e.target.value }));
//   };

//   const handleSubmit = async (e) => {
//     e.preventDefault();
//     setLoading(true);

//     try {
//       console.log('Sending formData:', formData); // debug
//       const response = await axios.post(
//         'https://nithinprojectbackend.onrender.com/api/auth/signup',
//         formData
//       );

//       toast.success(response.data.message || 'Signup successful!');
//       setFormData({ username: '', email: '', password: '' });

//       setTimeout(() => {
//         navigate('/login'); // Redirect after toast
//       }, 1500);
//     } catch (error) {
//       console.error('Signup error:', error); // debug
//       const message =
//         error.response?.data?.message ||
//         error.message ||
//         'Signup failed. Please try again.';
//       toast.error(message);
//     } finally {
//       setLoading(false);
//     }
//   };

//   return (
//     <>
//       <Navbar />
//       <div className="flex items-center justify-center min-h-screen px-4 bg-gray-100">
//         <div className="w-full max-w-md bg-white p-8 rounded-lg shadow-lg">
//           <h2 className="text-2xl font-bold text-center text-gray-800 mb-6">Signup</h2>
//           <form onSubmit={handleSubmit} className="space-y-4">
//             <input
//               name="username"
//               value={formData.username}
//               onChange={handleChange}
//               placeholder="Username"
//               required
//               className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
//             />
//             <input
//               name="email"
//               type="email"
//               value={formData.email}
//               onChange={handleChange}
//               placeholder="Email"
//               required
//               className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
//             />
//             <input
//               name="password"
//               type="password"
//               value={formData.password}
//               onChange={handleChange}
//               placeholder="Password"
//               required
//               className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
//             />
//             <button
//               type="submit"
//               disabled={loading}
//               className={`w-full py-2 rounded-md transition duration-200 ${
//                 loading
//                   ? 'bg-gray-400 cursor-not-allowed'
//                   : 'bg-green-600 hover:bg-green-700 text-white'
//               }`}
//             >
//               {loading ? 'Signing up...' : 'Signup'}
//             </button>
//           </form>
//         </div>
//         <ToastContainer position="top-center" autoClose={3000} />
//       </div>
//     </>
//   );
// }

// export default Signup;

import axios from 'axios';
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import Navbar from './Navbar';

import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

function Signup() {
  const [formData, setFormData] = useState({
    name: '',     // changed username -> name
    email: '',
    password: ''
  });

  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();

  const handleChange = (e) => {
    setFormData(prev => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);

    try {
      console.log('Sending formData:', formData); // debug
      const response = await axios.post(
        'https://nithinprojectbackend.onrender.com/api/auth/signup',
        formData
      );

      toast.success(response.data.message || 'Signup successful!');
      setFormData({ name: '', email: '', password: '' });

      setTimeout(() => {
        navigate('/login'); // Redirect after toast
      }, 1500);
    } catch (error) {
      console.error('Signup error:', error); // debug
      const message =
        error.response?.data?.message ||
        error.message ||
        'Signup failed. Please try again.';
      toast.error(message);
    } finally {
      setLoading(false);
    }
  };

  return (
    <>
      <Navbar />
      <div className="flex items-center justify-center min-h-screen px-4 bg-gray-100">
        <div className="w-full max-w-md bg-white p-8 rounded-lg shadow-lg">
          <h2 className="text-2xl font-bold text-center text-gray-800 mb-6">Signup</h2>
          <form onSubmit={handleSubmit} className="space-y-4">
            <input
              name="name"               // changed here too
              value={formData.name}
              onChange={handleChange}
              placeholder="Name"
              required
              className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
            <input
              name="email"
              type="email"
              value={formData.email}
              onChange={handleChange}
              placeholder="Email"
              required
              className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
            <input
              name="password"
              type="password"
              value={formData.password}
              onChange={handleChange}
              placeholder="Password"
              required
              className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
            <button
              type="submit"
              disabled={loading}
              className={`w-full py-2 rounded-md transition duration-200 ${
                loading
                  ? 'bg-gray-400 cursor-not-allowed'
                  : 'bg-green-600 hover:bg-green-700 text-white'
              }`}
            >
              {loading ? 'Signing up...' : 'Signup'}
            </button>
          </form>
        </div>
        <ToastContainer position="top-center" autoClose={3000} />
      </div>
    </>
  );
}

export default Signup;
