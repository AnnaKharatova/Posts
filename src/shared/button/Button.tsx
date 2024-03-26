import React, {ReactNode} from 'react';
import './Button.scss'

type PropsType = { children: ReactNode }

export const Button = ({children}:PropsType) => {
  return (
      <button className='button'>
        {children}
      </button>
  );
};