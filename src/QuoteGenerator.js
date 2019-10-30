import React, {Component} from 'react'
import './App.css'

//const axios = require('axios')

class QuoteGenerator extends Component{
    constructor(){
        super()
        this.state = {
            quote: "",
            author: "",
            allQuotes: []
        }
        this.handleClick = this.handleClick.bind(this)
       
    }


    componentDidMount() {

        this.generateQuote()
            
        
    }

    generateQuote() {
        
        fetch('https://api.quotable.io/random')
        .then(response => response.json())
        .then(data => {
            console.log(data)
            this.setState({
                allQuotes: data,
                quote: data.content,
                author: data.author
            })
            console.log("mounted",this.state)
            
        })
        .catch(err => {console.log(err)})
    }

    handleClick(event){
        console.log(this.state)
        event.preventDefault()
        this.generateQuote()
    }




    render(){
        console.log("here it is",this.state)
        return(
            <>
                <div id="quote-box">
                    <div id="main-quote">
                        <div id="text">
                            <p>
                                {this.state.quote}
                                
                            </p>
                        </div>
                        <div id="author">
                            <p>
                                {this.state.author}
                            </p>
                        </div>
                    </div>
                    <div id="quote-footer">
                        <div id="button-wrap">
                            <div>
                                <button id="new-quote" onClick={this.handleClick}>New Quote</button>
                            </div>
                            <div>
                                <a 
                                    href={"https://www.twitter.com/intent/tweet?text="+this.state.quote} 
                                    id="tweet-quote"
                                    className="fa fa-twitter"
                                >Tweet Quote</a>
                            </div>
                        </div>
                    </div>
                </div>
            </>
        )
    }

}

export default QuoteGenerator