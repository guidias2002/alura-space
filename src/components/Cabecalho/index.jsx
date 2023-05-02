import logo from './logo.png' 
import search from './search.png' 

export default function cabecalho() {
    return (
        <header>
            <img src={logo} alt="Logo do Alura space"/>
            <div>
                <input type="text" placeholder="O que você procura?"/>
                <img src={search} alt="Ícone de lupa"/>
            </div>
        </header>
    )
}