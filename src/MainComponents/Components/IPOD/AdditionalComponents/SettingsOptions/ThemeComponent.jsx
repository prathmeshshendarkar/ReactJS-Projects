import React from 'react'
import { ThemeData } from '../../Assets/ThemeData/ThemeData';
import RadioButton from '../../ReusableComponents/RadioButton';

const ThemeComponent = () => {
  return (
    <div>
      <div>ThemeComponent</div>
      <div>
        <ul>
          {
            ThemeData.map((e) => {
              const currentTheme = e.theme;
              return <RadioButton key={e.id} name={currentTheme} />
            })
          }
        </ul>
      </div>
    </div>
  )
}

export default ThemeComponent