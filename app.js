class Calculator extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            currentVal: '0',
            currentOpe: '',
            preVal: '0',
            preOpe: '',
            formula: ''
        }
        this.initialize = this.initialize.bind(this);
        this.handleNumbers = this.handleNumbers.bind(this);
        this.handleOperators = this.handleOperators.bind(this);
        this.evaluate = this.evaluate.bind(this);
        this.handleDecimal = this.handleDecimal.bind(this);
    }

    initialize() {
        this.setState({
            currentVal: '0',
            currentOpe: '',
            preVal: '0',
            preOpe: '',
            formula: ''
        })
    }

    evaluate() {
        if (this.state.preOpe == "+") {
            this.setState({
                currentVal: (parseFloat(this.state.preVal) + parseFloat(this.state.currentVal)).toString(),
                currentOpe: '',
                preVal: '0',
                preOpe: ''
            })
        }
        else if (this.state.preOpe == "-") {
            this.setState({
                currentVal: (parseFloat(this.state.preVal) - parseFloat(this.state.currentVal)).toString(),
                currentOpe: '',
                preVal: '0',
                preOpe: ''
            })
        }
        else if (this.state.preOpe == "*") {
            this.setState({
                currentVal: (parseFloat(this.state.preVal) * parseFloat(this.state.currentVal)).toString(),
                currentOpe: '',
                preVal: '0',
                preOpe: ''

            })
        }
        else if (this.state.preOpe == "/") {
            this.setState({
                currentVal: (parseFloat(this.state.preVal) / parseFloat(this.state.currentVal)).toString(),
                currentOpe: '',
                preVal: '0',
                preOpe: ''
            })
        }
    }


    handleDecimal(e) {
        if (this.state.currentVal.includes('.') == false) {
            this.setState({
                currentVal: this.state.currentVal + e.target.value,
                formula: this.state.formula + e.target.value
            })
        }
    }

    // update the current Val and change the status of the operator
    handleNumbers(e) {
        if (this.state.currentOpe == '') {
            if (this.state.currentVal == "0") {
                this.setState({
                    currentVal: e.target.value,
                    formula: this.state.formula + e.target.value
                })
            } else if (this.state.currentVal !== "0") {
                this.setState({
                    currentVal: this.state.currentVal + e.target.value,
                    formula: this.state.formula + e.target.value
                })
            }
        } else if (this.state.currentOpe !== '') {
            this.setState({
                currentOpe: '',
                preOpe: this.state.currentOpe,
                currentVal: e.target.value,
                formula: this.state.formula + e.target.value
            })
        }
    }

    handleOperators(e) {

        if (this.state.formula[this.state.formula.length - 1] == '*' && e.target.value == "-") {
            this.setState({
                preVal: e.target.value + this.state.preVal
            }
            )
        } else if (this.state.formula[this.state.formula.length - 1] == '/' && e.target.value == "-") {
            this.setState({
                preVal: e.target.value + this.state.preVal
            }
            )
        } else {

            if (this.state.preOpe == '') {
                this.setState({
                    currentOpe: e.target.value,
                    preVal: this.state.currentVal,
                    formula: this.state.formula + e.target.value
                })
            } else if (this.state.preOpe == '+') {
                this.setState({
                    currentOpe: e.target.value,
                    preVal: (parseFloat(this.state.currentVal) + parseFloat(this.state.preVal)).toString(),
                    formula: this.state.formula + e.target.value
                })
            }
            else if (this.state.preOpe == '-') {
                this.setState({
                    currentOpe: e.target.value,
                    preVal: (parseFloat(this.state.preVal) - parseFloat(this.state.currentVal)).toString(),
                    formula: this.state.formula + e.target.value
                })
            }
            else if (this.state.preOpe == '*') {
                this.setState({
                    currentOpe: e.target.value,
                    preVal: (parseFloat(this.state.preVal) * parseFloat(this.state.currentVal)).toString(),
                    formula: this.state.formula + e.target.value
                })
            }
            else if (this.state.preOpe == '/') {
                this.setState({
                    currentOpe: e.target.value,
                    preVal: (parseFloat(this.state.preVal) / parseFloat(this.state.currentVal)).toString(),
                    formula: this.state.formula + e.target.value
                })
            }

        }


    }

    render() {
        return (
            <div className="calculator">
                <Formula formula={this.state.formula} />
                <Output currentValue={this.state.currentVal} />

                <Buttons initialize={this.initialize}
                    numbers={this.handleNumbers}
                    operators={this.handleOperators}
                    evaluate={this.evaluate}
                    decimal={this.handleDecimal} />
            </div>
        );
    }
}

class Buttons extends React.Component {
    render() {
        return (
            <div class="button-container">
                <button
                    id="clear"
                    onClick={this.props.initialize}
                    value="AC">
                    AC
                </button>
                <button
                    id="leftBracket"
                    value="(">
                    (
                </button>
                <button
                    id="rightBracket"
                    value=")">
                    )
                </button>
                <button
                    id="divide"
                    onClick={this.props.operators}
                    value="/">
                    /
                </button>
                <button
                    id="seven"
                    onClick={this.props.numbers}
                    value="7">
                    7
                </button>
                <button
                    id="eight"
                    onClick={this.props.numbers}
                    value="8">
                    8
                </button>
                <button
                    id="nine"
                    onClick={this.props.numbers}
                    value="9">
                    9
                </button>
                <button
                    id="multiply"
                    onClick={this.props.operators}
                    value="*">
                    *
                </button>
                <button
                    id="four"
                    onClick={this.props.numbers}
                    value="4">
                    4
                </button>
                <button
                    id="five"
                    onClick={this.props.numbers}
                    value="5">
                    5
                </button>
                <button
                    id="six"
                    onClick={this.props.numbers}
                    value="6">
                    6
                </button>
                <button
                    id="subtract"
                    onClick={this.props.operators}
                    value="-">
                    -
                </button>
                <button
                    id="one"
                    onClick={this.props.numbers}
                    value="1">
                    1
                </button>
                <button
                    id="two"
                    onClick={this.props.numbers}
                    value="2">
                    2
                </button>
                <button
                    id="three"
                    onClick={this.props.numbers}
                    value="3">
                    3
                </button>
                <button
                    id="add"
                    onClick={this.props.operators}
                    value="+">
                    +
                </button>
                <button
                    id="zero"
                    onClick={this.props.numbers}
                    value="0">
                    0
                </button>
                <button
                    id="decimal"
                    onClick={this.props.decimal}
                    value=".">
                    .
                </button>
                <button
                    id="equals"
                    onClick={this.props.evaluate}
                    value="=">
                    =
                </button>
            </div>
        );
    }
}


class Output extends React.Component {
    render() {
        return (
            <div id="display">
                {this.props.currentValue}
            </div>)
    }
}

class Formula extends React.Component {
    render() {
        return (
            <div id="formula">{this.props.formula}</div>
        )
    }
}

ReactDOM.render(<Calculator />, document.getElementById('app'));