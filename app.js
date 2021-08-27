
class App extends React.Component{
    constructor(props){
        super(props);
        this.state = {
            number: 0
        }
        this.plusOne = this.plusOne.bind(this);
    }

    plusOne(){
        this.setState(
            {
                number: this.state.number + 1
            }
        );
    }

    render(){
        return (
            <div>
                <h1>{this.state.number}</h1>
                <button onClick={this.plusOne}>plusOne</button>
            </div>
        )
    }
}

class Buttons extends React.Component {
    constructor(props){
        super(props);
    }
    render() { 
        return ( <h1>hello</h1> );
    }
}

ReactDOM.render(<App />, document.getElementById('app'));