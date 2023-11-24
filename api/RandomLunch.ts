import Axios from 'axios'

export function getMealResultStatus({randomLunchType}: { randomLunchType: string }) {
    return Axios.get('/api/randomLunch/mealResultStatus', {
        params: {
            randomLunchType
        }
    })
}

// export function getMyGroupList() {
//     return Axios.get('/api/randomLunch/myGroupList')
// }

export function getExcludeGroupList({randomLunchType}: { randomLunchType: string }) {
    return Axios.get('/api/randomLunch/excludedUsers', {
        params: {
            randomLunchType
        }
    })
}

//점심제외자리스트에 추가해달라고 요청
export function addToExcludeGroup({randomLunchType, userId}: { randomLunchType: string, userId: number }) {
    return Axios.post('/api/randomLunch/exclusion', {
        randomLunchType,
        userId
    })
}

export function removeFromExcludeGroup({randomLunchType, userId}: { randomLunchType: string, userId: number }) {
    return Axios.post('/api/randomLunch/inclusion', {
        randomLunchType,
        userId
    })
}

