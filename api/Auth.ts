import Axios from 'axios';



export function onUserSignOut() {
    return Axios.post('/api/auth/onUserSignOut')
}

