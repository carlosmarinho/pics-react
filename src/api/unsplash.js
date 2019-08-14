import axios from 'axios';

export default axios.create({
    baseURL: 'https://api.unsplash.com',
    headers:{
        Authorization: 'Client-ID fa90c6286d67560995361e655eff62502629d84fd910bca6bc77c326a1702c19'
    }
});