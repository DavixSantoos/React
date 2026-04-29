interface Aluno{
    id: number;
    nome: string;
    curso: string;
    ativo: boolean;
}

export const alunos: Aluno[] = [
    {id:1,nome:"David Carlos",curso:"Desenvolvimento de Sistemas", ativo: true,},
    {id:2,nome:"Jefferson Carlos",curso:"Desenvolvimento de Sistemas", ativo: true,},
    {id:3,nome:"Jhonata Carlos",curso:"Tecnico de informatica", ativo: true,},
    {id:4,nome:"Thiago Carlos",curso:"Desenvolvimento de Sistemas", ativo: false,},
    {id:5,nome:"Rick",curso:"Desenvolvimento de Sistemas", ativo: false,},
    {id:6,nome:"Dalve",curso:"Desenvolvimento de Sistemas", ativo: true,},
]