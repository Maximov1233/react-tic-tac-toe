import { useState } from 'react'
import {cells} from '../data'

export default function Game() {

    let player = true,
    playerIcon = player ? 'X' : 'O'

    function elementShow(e) {
       e.target.innerHTML = playerIcon
    }
    
    function elementHide(e) {
        e.target.innerHTML = ''
    }

    function elementAdd(e) {
        console.log(e.target.innerHTML)
    }

    return (
        <section className="game">
      <div className="cells">

        {cells.map((cell) => {
            return (
            <div 
                key={cell} 
                className="cell" 
                onMouseEnter={elementShow} 
                onMouseLeave={elementHide}
                onClick={elementAdd}
            >
            </div>
            )
        })}
      </div>
    </section>
    )
}