import axios from 'axios'
import { accountService } from '@/_services'
import router from '@/router'

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

  if (accountService.isLogged()) {
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
  console.log(error.response.status)
  if (error.response.status == 401) {
    accountService.logout()
    router.push('/login')
  }
})

export default Axios