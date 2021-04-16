// Counter
class Counter extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            count: 0
        }
        this.increment = this.increment.bind(this)
        this.decrement = this.decrement.bind(this)
        this.reset = this.reset.bind(this)
    }

    increment() {
        this.setState(function (state) { return { count: state.count + 1 } })
    }

    decrement() {
        if (this.state.count > 0) {
            this.setState(function (state) { return { count: state.count - 1 } })
        }
    }

    reset() {
        this.setState({ count: 0 })
    }
    render() {
        return <div>
            <button className="btn btn-primary" onClick={this.increment}>+</button>
            <button className="btn btn-primary" onClick={this.decrement}>-</button>
            <button className="btn btn-danger" onClick={this.reset}>Reset</button>
            <h1> Number of items: {this.state.count} </h1>
        </div>
    }
}

ReactDOM.render(<Counter />, document.getElementById('counter'))