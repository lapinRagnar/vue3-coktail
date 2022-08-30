import axios from 'axios'
import { accountService } from '@/_services'

const Axios = axios.create({
  // baseURL: 'https://dummyjson.com'
  // baseURL: 'https://reqres.in'
  baseURL: 'http://localhost:8989'
})

// permet d'ajouter le token dans l'entete headers Authorization
Axios.interceptors.request.use(request => {
  
  console.log('je suis dans caller.service', request)

  if (accountService.isLogged()) {
    request.headers.Authorization = `Bearer ${accountService.getToken()}`
  }

  return request
})

export default Axios