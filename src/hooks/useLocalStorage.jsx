import { useState } from 'react'

const getValues = (key, initalValue) => {
  const item = localStorage.getItem(key)
  return item ? JSON.parse(item) : initalValue
}

const useLocalStorage = (key, initialValue) => {
  // State to store our value
  const [localStorageValue, setLocalStorageValue] = useState(() =>
    getValues(key, initialValue),
  )

  const setValue = (value) => {
    // Update the state
    setLocalStorageValue(value)
    // Update localStorage
    localStorage.setItem(key, JSON.stringify(value))
  }

  return [localStorageValue, setValue]
}

export default useLocalStorage
