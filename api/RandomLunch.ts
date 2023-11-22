import Axios from 'axios'

export function getMealResultStatus({category}:{category: string}) {
    return Axios.get('/api/randomLunch/mealResultStatus',{
        params: {
            randomLunchType:category
        }
    })
}

export function getMyGroupList() {
    return Axios.get('/api/randomLunch/myGroupList')
}
