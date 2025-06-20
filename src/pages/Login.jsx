import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { login } from '../store/authSlice';
// Pagina di login/registrazione fittizia

const Login = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const { mode } = useSelector(state => state.theme);
  
  const [formData, setFormData] = useState({
    email: '',
    password: '',
    isRegister: false
  });
  
  const [errors, setErrors] = useState({});

  // Controlla che i campi del form siano validi
  const validateForm = () => {
    const newErrors = {};
    
    if (!formData.email) {
      newErrors.email = 'Email richiesta';
    } else if (!/\S+@\S+\.\S+/.test(formData.email)) {
      newErrors.email = 'Email non valida';
    }
    
    if (!formData.password) {
      newErrors.password = 'Password richiesta';
    } else if (formData.password.length < 6) {
      newErrors.password = 'La Password deve essere almeno 6 caratteri';
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  // Invocato al submit del form
  const handleSubmit = (e) => {
    e.preventDefault();
    
    if (!validateForm()) return;

    // Simuliamo l'autenticazione
    const role = formData.email === 'admin@coinsphere.com' ? 'admin' : 'user';
    const username = formData.email.split('@')[0];

    dispatch(login({
      user: username,
      role: role
    }));

    navigate('/dashboard');
  };

  // Aggiorniamo lo stato del form ad ogni input
  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  return (
    <div className={`min-h-screen flex items-center justify-center ${
      mode === 'dark' ? 'bg-gray-900' : 'bg-gradient-to-br from-blue-50 to-purple-50'
    }`}>
      <div className={`max-w-md w-full mx-4 p-8 rounded-lg shadow-xl ${
        mode === 'dark' ? 'bg-gray-800' : 'bg-white'
      }`}>
        <div className="text-center mb-8">
          <h2 className={`text-3xl font-bold ${
            mode === 'dark' ? 'text-white' : 'text-gray-900'
          }`}>
            {formData.isRegister ? 'Registrati' : 'Accedi'}
          </h2>
          <p className={`mt-2 ${mode === 'dark' ? 'text-gray-400' : 'text-gray-600'}`}>
            {formData.isRegister 
              ? 'Crea il tuo account CoinSphere' 
              : 'Benvenuto in CoinSphere Exchange'
            }
          </p>
        </div>

        <form onSubmit={handleSubmit} className="space-y-6">
          <div>
            <label className={`block text-sm font-medium mb-2 ${
              mode === 'dark' ? 'text-gray-300' : 'text-gray-700'
            }`}>
              Email
            </label>
            <input
              type="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              className={`w-full px-3 py-2 border rounded-lg transition-colors ${
                errors.email
                  ? 'border-red-500'
                  : mode === 'dark'
                  ? 'bg-gray-700 border-gray-600 text-white'
                  : 'bg-white border-gray-300 text-gray-900'
              }`}
              placeholder="inserisci@email.com"
            />
            {errors.email && (
              <p className="text-red-500 text-sm mt-1">{errors.email}</p>
            )}
          </div>

          <div>
            <label className={`block text-sm font-medium mb-2 ${
              mode === 'dark' ? 'text-gray-300' : 'text-gray-700'
            }`}>
              Password
            </label>
            <input
              type="password"
              name="password"
              value={formData.password}
              onChange={handleChange}
              className={`w-full px-3 py-2 border rounded-lg transition-colors ${
                errors.password
                  ? 'border-red-500'
                  : mode === 'dark'
                  ? 'bg-gray-700 border-gray-600 text-white'
                  : 'bg-white border-gray-300 text-gray-900'
              }`}
              placeholder="Password"
            />
            {errors.password && (
              <p className="text-red-500 text-sm mt-1">{errors.password}</p>
            )}
          </div>

          <button
            type="submit"
            className="w-full bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white py-3 px-4 rounded-lg font-medium transition-all duration-300"
          >
            {formData.isRegister ? 'Registrati' : 'Accedi'}
          </button>
        </form>

        <div className="mt-6 text-center">
          <button
            type="button"
            onClick={() => setFormData(prev => ({ ...prev, isRegister: !prev.isRegister }))}
            className={`text-sm hover:underline ${
              mode === 'dark' ? 'text-blue-400' : 'text-blue-600'
            }`}
          >
            {formData.isRegister 
              ? 'Hai già un account? Accedi' 
              : 'Non hai un account? Registrati'
            }
          </button>
        </div>

        {/* Demo credentials */}
        <div className={`mt-6 p-4 rounded-lg ${
          mode === 'dark' ? 'bg-gray-700' : 'bg-gray-50'
        }`}>
          <p className={`text-sm font-medium mb-2 ${
            mode === 'dark' ? 'text-gray-300' : 'text-gray-700'
          }`}>
            Credenziali Demo:
          </p>
          <p className={`text-xs ${mode === 'dark' ? 'text-gray-400' : 'text-gray-600'}`}>
            User: user@demo.com / password123
          </p>
          <p className={`text-xs ${mode === 'dark' ? 'text-gray-400' : 'text-gray-600'}`}>
            Admin: admin@coinsphere.com / admin123
          </p>
        </div>
      </div>
    </div>
  );
};

export default Login;