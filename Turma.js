import {Aluno} from './Aluno';

class Turma {
    
    constructor(codigo, nota){
        this.codigo = codigo;
        this.nota = nota;
    }
    
    aprovado(){
        if(nota < 6){
            return false
        } else {
            return true
        }
    }

}