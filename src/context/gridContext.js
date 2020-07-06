import React, { useContext, createContext, useState } from 'react'

const GridContext = createContext({})
export const useStyle = () => useContext(GridContext)

export const StyleProvider = ({ children }) => {

  const [styles, setStyles] = useState({})


  return (
    <GridContext.Provider value={[styles, setStyles]} >
      {children}
    </GridContext.Provider>
  )
}



