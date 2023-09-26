import './Jogo.css'
function Jogo(props) {
    return(
        <div className="container">
            <h1 className="nomeJogo">{props.nomeJogo}</h1>
            <p className="descricaoJogo">{props.descricaoJogo}</p>
            <h4 className="precoJogo">{props.precoJogo}</h4>
            <p className="categoriaJogo">{props.categoriaJogo}</p>
        </div>
    )
}

export default Jogo