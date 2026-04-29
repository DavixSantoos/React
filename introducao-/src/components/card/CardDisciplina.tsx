import './Carddisciplina.css'

interface CardProfessor{
    Professor: string; 
    CargaHoraria: number; 
    Disciplina: string;
    concluida: boolean; 
}



function CardDisciplina({Professor,CargaHoraria, Disciplina,concluida}: CardProfessor){
 
    return( 
    <div className="CardProfessor">
        
        <h2>{Professor}</h2>
        <p>{CargaHoraria}</p>
        <p>{Disciplina}</p>
        <p>: {concluida ? "✅" : "⛔" }</p>
       
    </div>
    );
}

export default CardDisciplina;