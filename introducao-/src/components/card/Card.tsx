import './Card.css'

interface CardProps{
    nomeAluno: string; //obrigatório, texto
    cursoAluno: string; //obrigatório
    statusAluno?: boolean; //opcional
}



function Card({nomeAluno,cursoAluno,statusAluno = true}: CardProps){
 
    return( 
    <div className="Card-aluno">
        
        <h2>{nomeAluno}</h2>
        <p>{cursoAluno}</p>
        <p>Status aluno: {statusAluno ? "✅" : "⛔" }</p>
    </div>
    );
}

export default Card;