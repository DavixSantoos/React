
//Convenção: nomes de componentes sempre começa com LETRA MAÍSCULA

function Cabecalho(){

    const nomeDoCurso = "Técnico em Desenvolvimento de Sistemas";
    const descricaoCurso = "Lorem ipsum sit amet, consectetur adipiscing quaerat"
    const anoAtual = new Date().getFullYear();

    return(
        //Dentro do retorno, código JavaScript deve estar dentro do "{}"
    <header>
        <h1>{nomeDoCurso}</h1>
        <p>{descricaoCurso}</p>
        <p>{anoAtual}</p>
    </header>
    
    );
}


        //Exporta para ultilizar em outros locais
export default Cabecalho;