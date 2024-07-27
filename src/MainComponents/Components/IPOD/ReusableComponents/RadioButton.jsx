import React, { useContext } from 'react'
import { ThemeContext } from '../Providers/MyProvider.jsx'

const RadioButton = (props) => {
  const {theme, setTheme} = useContext(ThemeContext);
  const {name} = props
  return (
    <div>
        <input type='radio' name={name} onClick={() => setTheme(name)}/> {name}
    </div>
  )
}

export default RadioButton