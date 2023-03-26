//Simulacion de backend

function api() {
  const users = window.localStorage.getItem("fakedb")
    ? JSON.parse(window.localStorage.getItem("fakedb"))
    : [];

  function createUser(user) {
    const userExist = users.find((u) => u.email === user.email);
    if (userExist) {
      throw new Error("User already exists");
    }
    users.push(user);
    window.localStorage.setItem("fakedb", JSON.stringify(users));
  }

  function authentication({ email, password }) {
    const findUser = users.find(
      (u) => u.email === email && u.password === password
    );
    if (!findUser) {
      throw new Error("Email or Password are incorrect");
    }
  }
  return {
    createUser,
    authentication,
  };
}

export default api;
