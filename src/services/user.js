import axios from 'axios';
import { authHeader } from '../helpers/auth-header';

function logout() {
  localStorage.removeItem('token');
}

function handleResponse(response) {
  if (response.response.status === 401) {
    logout();
    window.location.reload(true);
    const error = (response && response.message) || response.statusText;
    return Promise.reject(error);
  }
  return response;
}

function register(email, name, password) {
  const requestOptions = {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({ email, name, password })
  };

  return fetch('/api/users/signup', requestOptions)
    .then(res => res.json())
    .then(data => {
      return data;
    });
}

function login(email, password) {
  const requestOptions = {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({ email, password })
  };

  return fetch('/api/users/login', requestOptions)
    .then(res => res.json())
    .then(user => {
      if (user.token) {
        localStorage.setItem('token', JSON.stringify(user.token));
      }
      return user;
    });
}

function changePassword(oldPassword, newPassword) {
  const body = JSON.stringify({ oldPassword, newPassword });

  const options = {
    headers: authHeader()
  };

  return axios.put('/api/users/change-password', body, options)
    .then(data => {
      return data;
    })
    .catch(err => {
      console.log(err);
    });
}

export const userService = {
  register,
  login,
  changePassword,
  logout,
  handleResponse
};
