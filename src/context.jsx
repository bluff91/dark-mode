import { useEffect } from 'react'
import { useState } from 'react'
import { useContext, createContext } from 'react'

const AppContext = createContext()

export const useAppContext = () => {
  return useContext(AppContext)
}

export const AppProvider = ({ children }) => {
  const [toggle, setToggle] = useState(localStorage.getItem('toggle'))
  localStorage.setItem('toggle', toggle)

  useEffect(() => {
    setToggle(localStorage.getItem('toggle'))
  }, [])

  const changeTheme = () => {
    setToggle((prevState) => {
      if (prevState === 'light-theme') return 'dark-theme'
      if (prevState === 'dark-theme') return 'light-theme'
    })
  }
  return (
    <AppContext.Provider value={{ toggle, changeTheme }}>
      {children}
    </AppContext.Provider>
  )
}
