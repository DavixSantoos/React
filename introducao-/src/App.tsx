import './App.css'
import Cabecalho from './components/cabecalho/Cabecalho';
import Card from './components/card/Card';
import CardDisciplina from './components/card/CardDisciplina';
import Rodape from './components/rodape/Rodape';
import { alunos } from './data/listaAlunos';
import { professores } from './data/listaProfessor';
function App()
{
return(
  <>
  <div className='componentes'>
      <Cabecalho/>
      {alunos.map((aluno) => (
      <Card 
      key={aluno.id}
      nomeAluno={aluno.nome}
      cursoAluno={aluno.curso}
      statusAluno={aluno.ativo}
      /> 
        //Aqui eu digo o que a função irá realizar
      ))}
      {professores.map((professor) => (
      <CardDisciplina
      key={professor.id}
      Professor={professor.Professor}
      CargaHoraria={professor.CargaHoraria}
      Disciplina={professor.Professor}
      concluida={professor.concluida}

      />
      ))}
      <Rodape/>
 </div>
 </> //Fragment -> Não aparece no código HTML
);
}

export default App;