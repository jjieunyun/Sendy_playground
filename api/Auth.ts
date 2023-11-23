import Axios from 'axios';

export function onUserSignOut() {
    return Axios.post('/api/auth/onUserSignOut')
}

export function getUserInfo() {
    return Axios.get('/api/auth/userInfo')
}

export function updatePassword(){
    return Axios.post('/api/auth/password')
}
