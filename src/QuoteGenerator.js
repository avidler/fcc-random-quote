import React, {Component} from 'react'
import './App.css'

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

        fetch('http://quotes.stormconsultancy.co.uk/quotes.json')
            .then(response => response.json())
            .then(data => {
                console.log(data)
                this.setState({
                    allQuotes: data,
                    quote: data[0].quote,
                    author: data[0].author
                })
                
            })
            .catch(err => {console.log(err)})
            console.log(this.state)
        
    }

    generateQuote() {
        
        const randNum = Math.floor(Math.random() * this.state.allQuotes.length)
        const randQuote = this.state.allQuotes[randNum].quote
        const randAuthor = this.state.allQuotes[randNum].author
        this.setState({ quote: randQuote, author: randAuthor })
    }

    handleClick(event){
        event.preventDefault()
        this.generateQuote()
    }




    render(){
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