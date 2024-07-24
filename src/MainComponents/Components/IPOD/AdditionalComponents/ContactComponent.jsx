import React from 'react'
import ListComponent from '../ReusableComponents/ListComponent';
import PhoneIcon from '../Assets/phone.svg';
import {PhoneData} from '../Assets/Phone/PhoneData';

const ContactComponent = () => {
  return (
    <div className='overflow-scroll scrollbar-none'>
      <div className='flex flex-col space-y-2 justify-center items-center'>
        {
          PhoneData.map((phoneObj) => {
            return <ListComponent key={phoneObj.id} name={phoneObj.name} IconProp={PhoneIcon} />
          })
        }
      </div>
    </div>
  )
}

export default ContactComponent