const API_URL = "http://localhost:3001/api/v1/user/";

function getToken() {
  return localStorage.getItem("argentBank-token");
}

function setToken(token) {
  localStorage.setItem("argentBank-token", token);
}

function getUser() {
  return JSON.parse(localStorage.getItem("argentBank-user"));
}

function setUser(user) {
  localStorage.setItem("argentBank-user", JSON.stringify(user));
}

async function logout() {
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
