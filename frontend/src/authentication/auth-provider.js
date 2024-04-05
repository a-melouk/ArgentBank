const API_URL = "https://argentbank-production.up.railway.app/api/v1/user/";

function getToken() {
  return (
    sessionStorage.getItem("argentBank-token") ||
    localStorage.getItem("argentBank-token")
  );
}

function setToken(token, location) {
  switch (location) {
    case "session":
      sessionStorage.setItem("argentBank-token", token);
      break;
    case "local":
      localStorage.setItem("argentBank-token", token);
      break;
    default:
      return;
  }
}

function getUser() {
  return (
    JSON.parse(sessionStorage.getItem("argentBank-user")) ||
    JSON.parse(localStorage.getItem("argentBank-user"))
  );
}

function setUser(user, location) {
  switch (location) {
    case "session":
      sessionStorage.setItem("argentBank-user", JSON.stringify(user));
      break;
    case "local":
      localStorage.setItem("argentBank-user", JSON.stringify(user));
      break;
    default:
      return;
  }
}

async function logout() {
  sessionStorage.removeItem("argentBank-token");
  sessionStorage.removeItem("argentBank-user");
  localStorage.removeItem("argentBank-token");
  localStorage.removeItem("argentBank-user");
}

async function login({ email, password }) {
  const data = await client("login", "POST", { email, password });
  return data.body.token;
}

async function getProfile(token) {
  const result = await client(
    "profile",
    "POST",
    {},
    {
      Authorization: `Bearer ${token}`,
    }
  );
  return {
    user: {
      firstName: result.body.firstName,
      lastName: result.body.lastName,
    },
  };
}

async function updateProfile(body, token) {
  const result = await client("profile", "PUT", body, {
    Authorization: `Bearer ${token}`,
  });
  return {
    status: result.status,
    message: result.message,
  };
}

async function client(endpoint, method, body, headers) {
  const config = {
    method: method,
    body: JSON.stringify(body),
    headers: {
      "Content-Type": "application/json",
      Accept: "application/json",
      ...headers,
    },
  };

  const response = await fetch(`${API_URL}${endpoint}`, config);
  const data = await response.json();
  if (response.ok) return data;
  else return Promise.reject(data);
}

export {
  login,
  getProfile,
  updateProfile,
  logout,
  setToken,
  getToken,
  setUser,
  getUser,
};
