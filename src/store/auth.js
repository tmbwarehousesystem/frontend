// import axios from 'axios'
export default {
    namespaced: true,
    state: {
        userData: {
            logged: false,
            username: null,
            token: localStorage.getItem('token') || '',
            status: null
        }
    },
    mutations: {
        auth_success(state, payload) {
            // state.userData.logged = payload.logged;
            // state.userData.username = payload.user;

            state.userData.status = 'success';
            // state.userData.token = payload.token;
            state.userData.username = payload.user;
            state.userData.logged = payload.logged;
        },
        auth_error(state) {
            state.userData.status = 'error';
        },
        logout(state) {
            state.userData.status = '';
            state.userData.token = '';
            state.userData.username = null;
            state.userData.logged = false;
        },
    },
    actions: {
        // authenticate({ commit }, auth) {
        authenticate({ commit }, auth) {
            return new Promise((resolve) => {
                // axios({ url: 'http://localhost:3000/login', data: user, method: 'POST' })
                // .then(resp => {
                // const token = resp.data.token
                // const user = resp.data.user
                let payload = {
                    user: auth.username,
                    logged: true,
                    // token: resp.data.token
                }
                // localStorage.setItem('token', token)
                // axios.defaults.headers.common['Authorization'] = token
                commit('auth_success', payload);
                // resolve(resp)
                resolve(payload.user);
                // })
                // .catch(err => {
                // commit('auth_error')
                // localStorage.removeItem('token')
                // throw { error: true, message: 'Invalid login' }
                // })
            })
        },
        logout({ commit }) {
            return new Promise((resolve) => {
                commit('logout');
                // localStorage.removeItem('token')
                // delete axios.defaults.headers.common['Authorization']
                resolve();
            })
        }
    },
    getters: {
        isLoggedIn: state => !!state.userData.logged,
        // isLoggedIn: state => !!state.token,
        authStatus: state => state.userData.status,
        getUser: state => state.userData.username
    }
}