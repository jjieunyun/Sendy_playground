import Axios from 'axios'

export function getMealResultStatus({randomLunchType}: { randomLunchType: string }) {
    return Axios.get('/api/randomLunch/mealResultStatus', {
        params: {
            randomLunchType
        }
    })
}

export function getMyGroupList({randomLunchType}: { randomLunchType: string }) {
    return Axios.get('/api/randomLunch/myGroupList',{
        params: {
            randomLunchType
        }
    })
}

export function getExcludeGroupList({randomLunchType}: { randomLunchType: string }) {
    return Axios.get('/api/randomLunch/excludedUsers', {
        params: {
            randomLunchType
        }
    })
}

export function getAllGroupList({randomLunchType}: { randomLunchType: string }) {
    return Axios.get('/api/randomLunch/allGroup', {
        params: {
            randomLunchType
        }
    })
}

//점심제외자리스트에 추가해달라고 요청
export function addToExcludeGroup({randomLunchType}: { randomLunchType: string }) {
    return Axios.post('/api/randomLunch/exclusion', {
        randomLunchType,
    })
}

export function removeFromExcludeGroup({randomLunchType}: { randomLunchType: string }) {
    return Axios.post('/api/randomLunch/inclusion', {
        randomLunchType,
    })
}

