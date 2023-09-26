import './Noticia.css'

function Noticia(props) {
    return (
        <div className="content">
            <h2>{props.title}</h2>
            <p>{props.newsBody}</p>
            <p className="category">{props.category}</p>
        </div>
    )
}

export default Noticia