import React from 'react'
import { useContext } from 'react'
import myContext from './store/myContext'
function List3() {
    const crtx = useContext(myContext)
  return (
    <div>{crtx.value}</div>
  )
}

export default List3