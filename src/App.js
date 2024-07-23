import { Component } from "react"

class Input extends Component {
    render() {
        return (
            <input
            value={this.props.value}
            onChange={this.props.onChange}
            />
        )
    }
}

class App extends Component {
    state = {
        nombre: "",
        apellido: "",
    }

    updateNombre = (v) => {
        this.updateValues("nombre", v.target.value)
    }
    updateValues = (prop, value) => {
        this.setState({[prop]: value})
    }
    render() {
        return (
            <p>
                Nombre completo: {`${this.state.nombre} ${this.state.apellido}`} 
                <Input 
                value={this.state.nombre}
                onChange={this.updateNombre} 
                />
                <Input 
                value={this.state.apellido}
                onChange={e => this.updateValues("apellido", e.target.value)}
                />
            </p>
        )
    }
}

export default App