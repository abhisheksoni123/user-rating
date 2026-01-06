const USER_KEY = "auth_user";

export const storage = {
  setUser: (user: any) => {
    localStorage.setItem(USER_KEY, JSON.stringify(user));
  },

  getUser: () => {
    const data = localStorage.getItem(USER_KEY);
    return data ? JSON.parse(data) : null;
  },

  removeUser: () => {
    localStorage.removeItem(USER_KEY);
  },

  isLoggedIn: () => {
    return !!localStorage.getItem(USER_KEY);
  },
};
