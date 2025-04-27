class Heroi{
    constructor(nome,idade,tipo){
        this.nome = nome;
        this.idade = idade;
        this.tipo = tipo;
    }
    atacar(){
        let ataque;
        if(this.tipo === "guerreiro"){
            ataque = "espada";
        }else if(this.tipo === "mago"){
            ataque = "magia";
        }else if(this.tipo === "monge"){
            ataque = "artes marciais";
        }else{
            ataque = "shuriken";
        }
        console.log(`O ${this.tipo} atacou usando ${ataque}.`);
    }
}

let heroi1 = new Heroi("Oswaldo", 19, "monge")

heroi1.atacar()