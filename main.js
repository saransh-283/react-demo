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

// Bulb

class Bulb extends React.Component {
    constructor(props) {
        super(props)
        this.something=this.something.bind(this)
    }

    something(){
        console.log(this.props.onOrOff)
    }
    render() {
        return <div>
            <div onClick={this.something} id="bulb-circle" className={"bulb-"+this.props.onOrOff} style={{ background: "rgb("+(255-(15*(10-this.props.brightness)))+','+(255-(15*(10-this.props.brightness)))+',0)' }}></div>
        </div>
    }
}

class BulbContainer extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            brightness: 10,
            on: false
        }
        this.brightnessChange = this.brightnessChange.bind(this)
        this.onOffBtn = this.onOffBtn.bind(this)
    }

    brightnessChange(event) {
        this.setState({
            brightness: event.target.value
        })
    }

    onOffBtn() {
        this.setState(function (state) {
            return {
                on: !state.on,
            }
        })
        console.log(this.state.on)
        console.log(this.state.brightness)
    }

    render() {
        return <div>
            <button onClick={this.onOffBtn}>On/Off</button>
            <input disabled={!this.state.on} onChange={this.brightnessChange} type="range" name="brightness" min="1" max="10" value={this.state.brightness} />
            <Bulb onOrOff={this.state.on} brightness={this.state.brightness} />
        </div>
    }

}

ReactDOM.render(<BulbContainer />, document.getElementById('bulb'))