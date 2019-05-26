export function setNavbarOpen(navbarOpen) {
  return { type: "NAVBAR_OPEN", payload: navbarOpen };
}

export function Logout() {
  localStorage.removeItem("userName");
  localStorage.removeItem("type");
  localStorage.removeItem("userId");
  return { type: "LOGIN_OK", payload: false };
}

export function setLogin(logado) {
  return { type: "LOGIN_OK", payload: logado };
}