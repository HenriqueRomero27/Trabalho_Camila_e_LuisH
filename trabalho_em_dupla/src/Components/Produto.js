import './Produto.css'
function Produto(props) {
    return (
        <div className="Container">
            <h2 className="nomeProduto">{props.nomeProduto}</h2>
            <h4 className="precoProduto">{props.precoProduto}</h4>
            <p className="descricaoProduto">{props.descricaoProduto}</p>
            <p className="categoriaProduto">{props.categoriaProduto}</p>
        </div>
    )
}

export default Produto