const TOKEN_KEY = "auth_token";

export const storage = {
  setUser: (token: any) => {
    localStorage.setItem(TOKEN_KEY, JSON.stringify(token));
  },

  getUser: () => {
    const data = localStorage.getItem(TOKEN_KEY);
    return data ? JSON.parse(data) : null;
  },

  removeUser: () => {
    localStorage.removeItem(TOKEN_KEY);
  },

  isLoggedIn: () => {
    return !!localStorage.getItem(TOKEN_KEY);
  },
};
