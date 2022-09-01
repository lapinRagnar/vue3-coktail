import axios from 'axios'
import { accountService } from '@/_services'
import router from '@/router'
import store from '@/store'

const Axios = axios.create({
  // baseURL: 'https://dummyjson.com'
  // baseURL: 'https://reqres.in'
  baseURL: 'http://localhost:8989'
})

/**
 * permet d'ajouter le token dans l'entete headers Authorization
 */
Axios.interceptors.request.use(request => {
  
  console.log('je suis dans caller.service', request)
  console.log('je suis connecté ? : ', accountService.isLogged())

  if (accountService.isLogged()) {
    console.log('je suis dans le if')
    request.headers.Authorization = `Bearer ${accountService.getToken()}`
  }

  return request
})

/**
 * interceptor des reponses de l'api
 */
Axios.interceptors.response.use(response => {

  return response
}, error => {

  console.log('je suis dans axios interceptors response',error.response.status)
  console.log('nom de l erreur', error)

  if (!error.response){

    // le cas d'une erreur réseau
    store.commit('displayNotif', {d: true, mes: error})
    return Promise.reject(error)

  } else {

    if (error.response.status == 401) {
      accountService.logout()
      router.push('/login')
    } else {

      console.log(error)
      
      // erreur de l'api
      store.commit('displayNotif', {d: true, mes: error.message})
      store.commit('displayNotif', {d: true, mes: error.response.data.message})

      return Promise.reject(error)
    }
  }

  

})

export default Axios