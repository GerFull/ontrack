import axios from 'axios';
import Cookies from 'js-cookie'

export default class OnTrackService {

    constructor() {
        this._apibase = 'localhost/';
        this.client = axios.create();
    }



    /**
     * Метод для авторизации
     * @param {string} email 
     * @param {string} password 
     * @returns Возвращает Promise с JSON {username: string, token: string}
     */
    Sign = async (email, password) => {
        const bodyFormData = { 'email': email, 'password': password }
        return axios({
            method: 'post',
            url: 'http://188.186.7.171/travelhelperbackend/api/Auth/SignIn',
            data: bodyFormData,
            config: {
                headers: {
                    'Content-Type': 'application/json',
                }
            }
        }).then(response => {
            Cookies.set('auth-token', response.data.access_token)
            return response.data.username
        })
    }

    /**
     * 
     * @param {*} email 
     * @param {*} password 
     * @param {*} username 
     */
    Registration = async (email, password, username) => {
        const bodyFormData = { 'email': email, 'password': password, 'username': username }
        axios({
            method: 'post',
            url: 'http://188.186.7.171/travelhelperbackend/api/Auth/register',
            data: bodyFormData,
            config: {
                headers: {
                    'Content-Type': 'application/json',
                }
            }
        }).catch(error => { console.log('the error has occured: ' + error) })
    }

    /**
     * 
     * @param {*} id 
     * @returns 
     */
    GetCityiInfo = async (id) => {
        return axios({
            method: 'get',
            url: `http://188.186.7.171/travelhelperbackend/api/cities/${id}`,
            config: {
                headers: {
                    'Content-Type': 'application/json',
                }
            }
        })
    }

    /**
     * 
     * @param {*} id 
     * @returns 
     */
    GetPlacesInfo = async (id) => {
        return axios({
            method: 'get',
            url: `http://188.186.7.171/travelhelperbackend/api/cities/${id}/places`,
            config: {
                headers: {
                    'Content-Type': 'application/json',
                }
            }
        })
    }

    /**
     * 
     * @param {*} name 
     * @returns 
     */
    GetPlaces = async (name) => {
        const bodyFormData = { 'name': name }
        return axios({
            method: 'post',
            url: `http://188.186.7.171/travelhelperbackend/api/Cities/searchPlaces`,
            data: bodyFormData,
            config: {
                headers: {
                    'Content-Type': 'application/json',
                }
            }
        }).catch((e) => console.log('error:', e.message))
    }


    /**
     * 
     * @param {*} id 
     * @returns 
     */
    GetInfoIdPlace = async (id) => {
        return axios({
            method: 'get',
            url: `http://188.186.7.171/travelhelperbackend/api/cities/places/${id}`,
            config: {
                headers: {
                    'Content-Type': 'application/json',
                }
            }
        })
    }

    /**
     * 
     * @param {*} user 
     * @returns 
     */
    GetInfoUser = async (user) => {
        return axios({
            method: 'get',
            url: `http://188.186.7.171/travelhelperbackend/api/User`,
            headers: {
                'Authorization': `Bearer ${user}`
            }
        })
    }


    /**
     * 
     * @param {*} placeId 
     * @param {*} user 
     * @returns 
     */
    PostFavoritePalce = async (placeId, user) => {
        return axios({
            method: 'get',
            url: `http://188.186.7.171/travelhelperbackend/api/User/Favorites/AddOrRemove?placeId=${placeId}`,
            headers: {
                'Authorization': `Bearer ${user}`,
                'Content-Type': 'application/json'
            },
        })
    }
    /**
     * 
     * @param {*} user 
     * @returns 
     */
    GetInfoFavoritePlaceUser = async (user) => {
        return axios({
            method: 'get',
            url: `http://188.186.7.171/travelhelperbackend/api/User/Favorites`,
            headers: {
                'Authorization': `Bearer ${user}`
            }
        })
    }
    /**
     * 
     * @param {*} user 
     * @param {*} datastart 
     * @param {*} dataend 
     * @param {*} city 
     * @param {*} nametrip 
     * @returns 
     */
    CreateTrip = async (user, datastart, dataend, city, nametrip) => {
        const bodyFormData = {
            'tripDestanation': city,
            "name": nametrip,
            "startDate": datastart,
            "endDate": dataend
        }
        console.log(bodyFormData)
        return axios({
            method: 'post',
            url: `http://188.186.7.171/travelhelperbackend/api/Trips/Create`,
            headers: {
                'Authorization': `Bearer ${user}`
            },
            data: bodyFormData
        })
    }
    /**
     * 
     * @param {*} user 
     * @param {*} id 
     * @returns 
     */
    GetTripInfo = async (user, id) => {
        return axios({
            method: 'get',
            url: `http://188.186.7.171/travelhelperbackend/api/Trips/${id}`,
            headers: {
                'Authorization': `Bearer ${user}`
            }
        })
    }
    /**
     * 
     * @param {*} user 
     * @param {*} id 
     * @returns 
     */
    DeleteTrip = async (user, id) => {
        return axios({
            method: 'delete',
            url: `http://188.186.7.171/travelhelperbackend/api/Trips/${id}`,
            headers: {
                'Authorization': `Bearer ${user}`
            }
        })
    }
    /**
     * 
     * @param {*} user 
     * @param {*} id 
     * @param {*} nameQuiz 
     * @param {*} Answer 
     * @returns 
     */
    CreateQuiz = async (user, id, nameQuiz, Answer) => {
        const bodyFormData = {
            "actionId": id,
            "name": nameQuiz,
            "pollVariants": Answer
        }
        return axios({
            method: 'post',
            url: `http://188.186.7.171/travelhelperbackend/api/Trips/CreatePoll`,
            headers: {
                'Authorization': `Bearer ${user}`
            },
            data: bodyFormData
        })
    }
    /**
     * 
     * @param {*} user 
     * @param {*} id 
     * @returns 
     */
    DeleteQuiz = async (user, id) => {
        return axios({
            method: 'delete',
            url: `http://188.186.7.171/travelhelperbackend/api/Trips/DeletePoll/${id}`,
            headers: {
                'Authorization': `Bearer ${user}`
            }
        })
    }
    /**
     * 
     * @param {string} user 
     * @param {number} pollid 
     * @param {number} variant 
     * @returns 
     */
    ChoiseQuiz = async (user, pollid, variant) => {
        const bodyFormData = {
            "pollId": pollid,
            "variantIndex": variant
        }
        console.log(bodyFormData)
        return axios({
            method: 'post',
            url: `http://188.186.7.171/travelhelperbackend/api/Trips/Vote`,
            headers: {
                'Authorization': `Bearer ${user}`
            },
            data: bodyFormData
        })
    }

    /**
     * 
     * @param {*} user 
     * @param {*} tripId 
     * @param {*} userID 
     * @param {*} newRole 
     * @returns []
     */
    ChengeRole = async (user, tripId, userID, newRole) => {
        const bodyFormData = {
            "tripId": tripId,
            "userToChangeId": userID,
            "newRoleId": newRole
        }
        console.log(bodyFormData)
        return axios({
            method: 'post',
            url: `http://188.186.7.171/travelhelperbackend/api/Trips/ChangeRole`,
            headers: {
                'Authorization': `Bearer ${user}`
            },
            data: bodyFormData
        })
    }


    EditAction = async (user, actionId, name, time, decr,) => {
        const bodyFormData = {
            "actionId": actionId,
            "name": name,
            "description": decr,
            "timeOfAction": time
        }
        console.log(bodyFormData)
        return axios({
            method: 'post',
            url: `http://188.186.7.171/travelhelperbackend/api/Trips/EditAction`,
            headers: {
                'Authorization': `Bearer ${user}`
            },
            data: bodyFormData
        })
    }

    AddAction = async (user, DayId, name, time, decr,) => {
        const bodyFormData = {
            "tripDayId": DayId,
            "name": name,
            "description": decr,
            "timeOfAction": time
        }
        console.log(bodyFormData)
        return axios({
            method: 'post',
            url: `http://188.186.7.171/travelhelperbackend/api/Trips/AddAction`,
            headers: {
                'Authorization': `Bearer ${user}`
            },
            data: bodyFormData
        })
    }

    JoinCode = async (user, code) => {
        return axios({
            method: 'get',
            url: `http://188.186.7.171/travelhelperbackend/api/Trips/Join/${code}`,
            headers: {
                'Authorization': `Bearer ${user}`
            }
        })
    }


    EditTtrip = async (user,id,name,descr,destination) => {
        const bodyFormData = {
            "id": id,
            "name": name,
            "description": descr,
            "destination": destination
        }
        return axios({
            method: 'post',
            url: `http://188.186.7.171/travelhelperbackend/api/Trips/EditTrip`,
            headers: {
                'Authorization': `Bearer ${user}`
            },
            data: bodyFormData
        })
    }

    DeleteAction = async (user,id) => {
        return axios({
            method: 'delete',
            url: `http://188.186.7.171/travelhelperbackend/api/Trips/DeleteAction/${id}`,
            headers: {
                'Authorization': `Bearer ${user}`
            },
        })
    }

    GenerateCode = async (user,id) => {
        return axios({
            method: 'get',
            url: `http://188.186.7.171/travelhelperbackend/api/Trips/${id}/GenerateInvite`,
            headers: {
                'Authorization': `Bearer ${user}`
            },
        })
    }
}

