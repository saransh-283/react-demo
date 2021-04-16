class Counter extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            count: 3
        }
        this.increment = this.increment.bind(this)
        this.decrement = this.decrement.bind(this)
        this.reset = this.reset.bind(this)
    }

    increment() {
        this.setState(function (state) { return { count: state.count + 1 } })
    }

    decrement() {
        this.setState(function (state) { return { count: state.count - 1 } })
    }

    reset() {
        this.setState({ count: 0 })
    }
    render() {
        return <div>
            <button onClick={this.increment}>+</button>
            <button onClick={this.decrement}>-</button>
            <button onClick={this.reset}>Reset</button>
            <h1> Number of items: {this.state.count} </h1>
        </div>
    }
}

ReactDOM.render(<Counter />, document.getElementById('react-node'))