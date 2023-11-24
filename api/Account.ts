import Axios from "axios";

export function getMyProfile() {
    return Axios.get('/api/account/myProfile')
}

export function updateMyProfile({data}:{data: any}) {
    return Axios.post('/api/account/myProfile', data)
}