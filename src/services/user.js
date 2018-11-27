function logout() {
  localStorage.removeItem('token');
}

// function handleResponse(response) {
//   return response.then(text => {
//     const data = text && JSON.parse(text);
//     if (!response.ok) {
//       if (response.status === 401) {
//         logout();
//         location.reload(true);
//       }

//       const error = (data && data.message) || response.statusText;
//       return Promise.reject(error);
//     }

//     return data;
//   });
// }

function register(email, name, password) {
  const requestOptions = {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({ email, name, password })
  };

  return fetch('/api/users/signup', requestOptions)
    // .then(handleResponse)
    .then(res => res.json())
    .then(user => {
      if (user.token) {
        localStorage.setItem('token', JSON.stringify(user.token));
      }
      return user;
    });
}

function login(email, password) {
  const requestOptions = {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({ email, password })
  };

  return fetch('/api/users/login', requestOptions)
    // .then(handleResponse)
    .then(res => res.json())
    .then(user => {
      if (user.token) {
        localStorage.setItem('token', JSON.stringify(user.token));
      }
      return user;
    });
}

export const userService = {
  register,
  login,
  logout
};
