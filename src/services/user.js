function login(email, password) {
  const requestOptions = {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({ email, password })
  };

  return fetch('http://localhost:3000/api/users/login', requestOptions)
    // .then(handleResponse)
    .then(res => res.json())
    .then(user => {
      if (user.token) {
        localStorage.setItem('token', JSON.stringify(user.token));
      }
      return user;
    });
}

function logout() {
  localStorage.removeItem('user');
}

// function handleResponse(response) {
//     return response.then(text => {
//         const data = text && JSON.parse(text);
//         if (!response.ok) {
//             if (response.status === 401) {
//                 logout();
//                 location.reload(true);
//             }

//             const error = (data && data.message) || response.statusText;
//             return Promise.reject(error);
//         }

//         return data;
//     });
// }

export const userService = {
  login,
  logout
};
