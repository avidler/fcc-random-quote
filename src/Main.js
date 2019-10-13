import React from 'react'
import QuoteGenerator from './QuoteGenerator'
import './App.css'

function Main(){
    return(
    <div className="quote-container">
        <section className="quote">
            
                <QuoteGenerator />

            
        </section>
    </div>
    )
}

export default Main