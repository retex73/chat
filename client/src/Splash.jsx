import React from 'react'
import hero from '../media/chat-hero.jpg'

export default function Splash() {
    return (
        <header>
            <div className="her0__content">
                <h1>Chat-o-matic</h1>
                <p>Enter your name to begin chatting</p>
                <input type="text" className="text" placeholder="Enter your name" />
                <a href="#" className="button">Enter</a>
            </div>
            <img src={hero} alt="chat-o-matic" />
        </header>
    )
}
