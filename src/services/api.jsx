//Se simula solicitud al servidor 

function api() {
  //se genera BD donde se almacenaran los usuarios que ingresen a la APP
  const users = JSON.parse(window.localStorage.getItem("fakedb")) || [];

  //sirve para simular la solicitud del metodo post para enviarle los datos al servidor del usuario que se está registrando
  //esta funcion normalmente es asincrona donde se tendria dos posibles respuestas una seria los datos si la solicitud es correcta y un error si la solicitud es incorrecta
  function createUser(user) {
    const userExist = users.find((u) => u.email === user.email);
    if (userExist) {
      throw new Error("User already exists");
    }
    users.push(user);
    window.localStorage.setItem("fakedb", JSON.stringify(users));
  }

  //solicitud asincrona al servidor donde le enviamos el correo y la contraseña para que pueda validarlo y regresarnos la información solicitada
  //usualmente seria el token y los datos del usuario
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
