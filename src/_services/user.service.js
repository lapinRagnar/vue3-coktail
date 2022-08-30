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
    url: `/users/+${user.id}`,
    data: user
  })
} 


export const userService = {
  getAllUsers,
  getUser,
  updateUser,
}
