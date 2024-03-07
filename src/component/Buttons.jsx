import React from 'react'
import style from './Buttons.module.css';

export default function Buttons({btnClick}) {
    let btn=["1","2","3","+","4","5","6","-","7","8","9","*",".","0","=","/","⇽","C"]
    return (
        <div className={style.boxbtn}>
            {btn.map((val,index)=><button className={val==='C'?style.clearbtn:style.calcbtn}key={index} onClick={()=>btnClick(val)}>{val}</button>)}
        </div>
    )
}
