/** les imports */
import Axios from './caller.service'

let getAllUsers = () => {
  return Axios.get('/users')
}

let getUser = (uid) => {
  return Axios.get('/users/' + uid)
}

let updateUser = (user) => {
  // return Axios.patch('/users/' + user.id)
  return Axios({
    method: 'patch',
    url: `/users/${user.id}`,
    data: user
  })
} 

let createUser = (user) => {
  console.log('je suis dans userservice createUser', user)
  return Axios({
    method: 'put',
    url: `/users`,
    data: user
  })
}

let delUser = (uid) => {
  return Axios({
    method: 'delete',
    url: `/users/${uid}`,
  })

}


export const userService = {
  getAllUsers,
  getUser,
  updateUser,
  createUser,
  delUser
}
