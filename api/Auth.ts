import Axios from 'axios';

export function onUserSignIn({id, password}: {id: string, password: string}) {
    return Axios.post('/api/auth/onUserSignIn', {id, password})
}

export function onUserSignOut({id, password}: {id: string, password: string}) {
    return Axios.post('/api/auth/onUserSignIn', {id, password})
}