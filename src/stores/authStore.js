import { makeAutoObservable} from 'mobx';
import instance from './instance';
import jwt_decode from 'jwt-decode';
// import { Redirect } from 'react-router/cjs/react-router';
class AuthStore {
  constructor() {
    makeAutoObservable(this);
  }
  user = null;

  signup = async (userData) => {
    try {
      const response = await instance.post('/signup', userData);
      this.signin(response.data);
    } catch (error) {}
  };

  signin = async (userData) => {
    try {
      const response = await instance.post('/signin', userData);
      this.setUser(response.data);
    } catch (error) {}
  };

  setUser = async (token) => {
    localStorage.setItem('myToken', token);
    instance.defaults.headers.common.Authorization = `Bearer ${token}`;
    const decoded = jwt_decode(token);
    this.user = decoded;
  };

  signout = () => {
    delete instance.defaults.headers.common.Authorization;
    window.localStorage.removeItem('myToken');
    this.user = null;
    window.location.replace('/');
  };

  checkForToken = () => {
    const token = localStorage.getItem('myToken');
    if (token) {
      const currentTime = Date.now();
      const user = jwt_decode(token);
      if (user.exp >= currentTime) {
        this.setUser(token);
      } else {
        this.signout();
      }
    }
  };
}

const authStore = new AuthStore();
authStore.checkForToken();
export default authStore;
