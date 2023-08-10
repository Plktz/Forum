export const Token = {
  setToken({ userToken }) {
    sessionStorage.setItem("token", userToken);
  },

  getToken() {
    const tokenString = sessionStorage.getItem("token");
    // const userToken = JSON.parse(tokenString);
    return tokenString;
  },
};
