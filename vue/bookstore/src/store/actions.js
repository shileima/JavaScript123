import axios from 'axios';
axios.defaults.baseURL = 'http://localhost:8000';

export const getBanner = ({ commit }, option) => {
    axios.get('/api/banner').then(data => {
        option && option(data.data)
    })
}

export const getHot = ({ commit }, option) => {
    axios.get('/hot').then(data => {
        option && option(data.data)
    })
}

export const getList = ({ commit }, option) => {
    axios.get('/list').then(data => {
        //option && option(data.data)
        commit('initList', data.data.data)
    })
}

export const getCollectList = ({ commit }, option) => {
    axios.get('/collect').then(data => {
        option && option(data.data)
        commit('getCollect', data.data.data)
    })
}