import logo from './logo.svg';
//import './App.css';
import "./main.css";

const estilo2 = {
  boxShadow: "0 5px 3px rgba(0,0,0,0.5)"
}

const estilo = (bg = "#888") => ({
  backgroundColor: bg,
  color:"#fff",
  padding:"10px 15px",
  margin: "10px 15px",
})

const Li = ({ children }) => {
  return (
    <li //style={{ ...estilo2, ...estilo({ bg: "#555"}) }} 
    className="clase-li" > {children}
    </li>
  )
}

const App = () => {
  const valor = "triste"
  return (
    <ul //style={estilo("#555")} 
    className="clase-css">
      <Li estado="feliz">valor de li</Li>
    </ul>
  )
}
export default App;
