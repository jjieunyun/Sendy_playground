import Axios from 'axios';

export function onUserSignIn({id, password}: {id: string, password: string}) {
    return Axios.post('/api/auth/onUserSignIn', {id, password})
}

export function onUserSignOut() {
    return Axios.post('/api/auth/onUserSignIn')
}

export function validateSession() {
    return Axios.get('/api/auth/validateSession')
}
