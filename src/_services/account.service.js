import Axios from './caller.service'


let login = (credentials) => {  
  console.log('mes credentials', credentials)
  return Axios({
    method: 'post',
    url: '/auth/login',
    data: credentials,
    headers: {
      "Content-Type": "application/json",

    }
  })
}

let logout = () => {
  localStorage.removeItem('token')
}

let getToken = () => {
  return localStorage.getItem('token')
}

let saveToken = (token) => {
  localStorage.setItem('token', token)
}

let isLogged = () => {
  let token = localStorage.getItem('token')
  return !!token // le !! c'est pour tranformer une variable en booleen
}

export const accountService = {
  login,
  logout,
  saveToken,
  isLogged,
  getToken
}
