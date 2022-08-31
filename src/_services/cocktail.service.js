/** les imports */
import Axios from './caller.service'

let getAllCocktails = () => {
  return Axios.get('/cocktails')
}

let getCocktail = (cid) => {
  return Axios.get('/cocktails/' + cid)
}

let updateCocktail = (cocktail) => {
  // return Axios.patch('/users/' + user.id)
  return Axios({
    method: 'patch',
    url: `/cocktails/${cocktail.id}`,
    data: cocktail
  })
} 

let createCocktail = (cocktail) => {
  console.log('je suis dans cocktai createUser', cocktail)
  return Axios({
    method: 'put',
    url: `/cocktails`,
    data: cocktail
  })
}

let delCocktail = (cid) => {
  return Axios({
    method: 'delete',
    url: `/cocktails/${cid}`,
  })

}


export const cocktailService = {
  getAllCocktails,
  getCocktail,
  updateCocktail,
  createCocktail,
  delCocktail
}
