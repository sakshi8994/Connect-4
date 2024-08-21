import React from 'react'
import '../Game.css';

const GameCircle = ({id,children,className,onCircleClicked}) => {
    
    // oncircleClicked(id);
  return (
    <div className={`gameCircle ${className}`}onClick={()=>onCircleClicked(id)}>
     
      {children}
    </div>
    
  )
}

export default GameCircle
