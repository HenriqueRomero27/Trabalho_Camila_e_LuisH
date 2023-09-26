import './App.css';
import Jogo from './Components/Jogo';
import Noticia from './Components/Noticia';
import Produto from './Components/Produto';

function App() {
  return (
    <div className="App">
      <Jogo nomeJogo="EAFC 24 Ultimate" descricaoJogo="EA SPORTS FC™ 24 marca o início do futuro do futebol. Feito com base em inovação e autenticidade, o jogo vai deixar você mais perto dos gramados, na experiência futebolística mais fiel já vista, com os melhores jogadores dos maiores times, ligas e competições pelo mundo." precoJogo="R$528,90" categoriaJogo="Esportes" />
      <Noticia title="COM GOLAÇOS DE KAUAN SANTOS, PALMEIRAS VENCE CORINTHIANS NA FAZENDINHA PELO PAULISTA SUB-20"  newsBody="O time Sub-20 do Verdão derrotou o Corinthians por 3 a 0, nesta sexta-feira (22), na Fazendinha, pela terceira rodada da terceira fase do Campeonato Paulista da categoria. Kauan Santos marcou dois golaços, um olímpico e outro em arrancada desde o campo de defesa, e David Kauã sacramentou o placar." 
       category="Esportes" />
      <Produto nomeProduto="Camiseta Palmeiras" precoProduto="R$349,99" descricaoProduto="Uma camiseta muito linda e esbelta do melhor time do estado de SP e do Brasil da atualidade 👌😉💚" categoriaProduto="Esportes" /> 
    </div>
  );
}

export default App;
