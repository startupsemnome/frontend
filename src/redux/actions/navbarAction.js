export function setNavbarOpen(navbarOpen) {
  return { type: "NAVBAR_OPEN", payload: navbarOpen };
}

export function Logout() {
  localStorage.removeItem("user");
  return { type: "LOGOUT", payload: null };
}