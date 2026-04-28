import './Card.css'
function Card(){
    const nomeAluno = "David Carlos dos santos de jesus"
    const cursoAluno = "TDS02"
    const ativo = true;
    
    
    return( 
    <div className="Card-aluno">
        
        <h2>{nomeAluno}</h2>
        <p>{cursoAluno}</p>
        <p>Status aluno: {true ? "✅" : "⛔" }</p>
    </div>
    );
}

export default Card;