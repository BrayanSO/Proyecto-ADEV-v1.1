import React, { useState } from 'react';
import firebase from 'firebase/compat/app'; // Importa el módulo de Firebase en la versión "compat"
import 'firebase/compat/auth'; // Importa el módulo de autenticación de Firebase en la versión "compat"
import "../Style/LoginForm.css" // Importa el archivo CSS

const Login = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState(null);

  const handleLogin = async (e) => {
    e.preventDefault();
    try {
      await firebase.auth().signInWithEmailAndPassword(email, password);
    } catch (error) {
      setError(error.message);
    }
  };

  return (
    <div className="container"> {/* Aplica la clase container */}
      <div className="form-container"> {/* Aplica la clase form-container */}
        <h2>Login</h2>
        <form onSubmit={handleLogin}>
          <div className="form-group"> {/* Aplica la clase form-group */}
            <label>Email:</label>
            <input
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
            />
          </div>
          <div className="form-group"> {/* Aplica la clase form-group */}
            <label>Password:</label>
            <input
              type="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required
            />
          </div>
          <button type="submit">Login</button>
          {error && <div className="error-message">{error}</div>} {/* Aplica la clase error-message */}
        </form>
      </div>
    </div>
  );
};

export default Login;
