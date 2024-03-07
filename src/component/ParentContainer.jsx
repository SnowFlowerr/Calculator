import React from 'react'
import style from './ParentContainer.module.css'
// import Display from './Display'

export default function ParentContainer({children}) {
    
    return (
        <div className={style.parent}>
            {children}
        </div>
    )
}