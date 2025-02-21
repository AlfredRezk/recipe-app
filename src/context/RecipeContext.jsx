import axios from 'axios'
import { createContext, useContext, useEffect, useState } from 'react'
import { toast } from 'react-toastify'

const RecipeContext = createContext()

export const RecipeProvider = ({ children }) => {
  const [recipes, setRecipes] = useState([])
  const mealTypes = ['Breakfast', 'Lunch', 'Dinner', 'Snacks', 'Teatime']

  const APP_ID = import.meta.env.VITE_APP_ID
  const APP_KEY = import.meta.env.VITE_APP_KEY
  const baseUrl = import.meta.env.VITE_APP_BASE_URL

  const getData = async (query, meal) => {
    let url = `${baseUrl}?type=public&q=${query}&app_id=${APP_ID}&app_key=${APP_KEY}`
    if (meal) url += `&mealType=${meal}`

    if (query != '') {
      const { data } = await axios.get(url)
      if (data.count === 0) {
        toast.error(`No recipe with name ${query}`)
        getData('any')
      }
      setRecipes(data.hits)
    } else {
      toast.error('Please Fill in the Form')
    }
  }

  useEffect(() => {
    getData('pizza')
  }, [])
  return (
    <RecipeContext.Provider value={{ mealTypes, recipes, getData }}>
      {children}
    </RecipeContext.Provider>
  )
}

export const useRecipe = () => useContext(RecipeContext)
