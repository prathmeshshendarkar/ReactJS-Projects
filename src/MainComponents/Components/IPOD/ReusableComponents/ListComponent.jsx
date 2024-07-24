import React from 'react';

const ListComponent = (props) => {
    const {name, IconProp} = props;
    return (
        <div className='flex space-x-2 justify-center items-center'>
            <img src={IconProp} className='w-7 h-7' />
            <div className='flex justify-center items-center rounded-sm bg-slate-100 w-52 h-10'>
                    <li className='text-center list-none'>{name}</li>
            </div>
        </div>
    )
}

export default ListComponent