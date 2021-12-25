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

    GetInfoFavoritePlaceUser = async (user) => {
        return axios({
            method: 'get',
            url: `http://188.186.7.171/travelhelperbackend/api/User/Favorites`,
            headers: {
                'Authorization': `Bearer ${user}`
            }
        })
    }

    CreateTrip = async (user, datastart,dataend ,city, nametrip) => {
        const bodyFormData = {
            'tripDestanation': city,
            "name": nametrip,
            "startDate": datastart,
            "endDate": dataend
        }
        return axios({
            method: 'post',
            url: `http://188.186.7.171/travelhelperbackend/api/Trips/Create`,
            headers: {
                'Authorization': `Bearer ${user}`
            },
            data: bodyFormData
        })
    }

    GetTripInfo = async (user,id) => {
        return axios({
            method: 'get',
            url: `http://188.186.7.171/travelhelperbackend/api/Trips/${id}`,
            headers: {
                'Authorization': `Bearer ${user}`
            }
        })
    }
}

