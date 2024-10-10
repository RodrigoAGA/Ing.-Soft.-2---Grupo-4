const AuthService = {
    login: (email, password) => {
      const users = JSON.parse(localStorage.getItem('users')) || [];
      return users.find(user => user.email === email && user.password === password);
    },
    generate2FACode: () => {
      return Math.floor(100000 + Math.random() * 900000).toString();
    },
    resetPassword: (email, newPassword) => {
      const users = JSON.parse(localStorage.getItem('users')) || [];
      const updatedUsers = users.map(user => user.email === email ? { ...user, password: newPassword } : user);
      localStorage.setItem('users', JSON.stringify(updatedUsers));
    }
  };
  export default AuthService;
  