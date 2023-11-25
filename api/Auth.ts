import Axios from 'axios';

export function onUserSignOut() {
    return Axios.post('/api/auth/onUserSignOut')
}

export function getUserInfo() {
    return Axios.get('/api/auth/userInfo')
}

export function updatePassword({password, newPassword}: { password: string, newPassword: string }) {

    return Axios.post('/api/auth/password',{
        password,
        newPassword
    })
}
