import axios from 'axios';

export default {
    state: {
        status: '',
        token: localStorage.getItem('token') || '',
        user: {}
    },
    getters: {
        isLoggedIn: state => !!state.token,
        authStatus: state => state.status,
        dataUser: state => state.user,
    },
    mutations: {
        auth_request(state) {
            state.status = 'loading'
          },
          auth_success(state, token, user) {
            state.status = 'success'
            state.token = token
            state.user = user
          },
          auth_error(state) {
            state.status = 'error'
          },
          logout(state) {
            state.status = ''
            state.token = ''
          },
    },
    actions: {
        LOGIN: ({commit}, payload) => {
            return new Promise( (resolve, reject) => {
                commit('auth_request');
                axios.post(`auth/login`, payload)
                .then(({data, status}) => {
                    console.log("Esta es la data ", data);
                    
                    if(status === 200) {
                        const token = data.access_token
                        const user = {
                            name: data.name,
                            lastname: data.lastname,
                            username: data.username,
                        }
                        localStorage.setItem('token', JSON.stringify(data));
                        axios.defaults.headers.common['Authorization'] = token
                        commit('auth_success', token, user)
                        resolve(true);
                    }
                })
                .catch(error => {
                    commit('auth_error')
                    localStorage.removeItem('token')
                    reject(error);
                })
            })
        },
        REGISTER: ({commit}, {username, password}) => {
            return new Promise((resolve, reject) => {
                console.log(commit);
                axios.post(`user`, {
                    username, password
                })
                .then(({data, status}) => {
                    console.log(data);
                    if(status === 201){
                        resolve(true);
                    }
                })
                .catch(error => {
                    reject(error);
                })
            })
        }

    }
}