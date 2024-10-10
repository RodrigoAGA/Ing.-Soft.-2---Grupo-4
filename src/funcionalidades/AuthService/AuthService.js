const AuthService = {
  login: (email, password) => {
    const users = JSON.parse(localStorage.getItem('users')) || [];
    return users.find(user => user.email === email && user.password === password);
  },

  generate2FACode: () => {
    return Math.floor(100000 + Math.random() * 900000).toString();
  },

  verify2FACode: (inputCode, generatedCode) => {
    return inputCode === generatedCode;
  },

  getUserByEmail: (email) => {
    const users = JSON.parse(localStorage.getItem('users')) || [];
    return users.find(user => user.email === email);
  }
};

export default AuthService;
