class Compra {
    constructor(nome, quantidade, valor) {
        this.nome = nome
        this.quantidade = quantidade
        this.valor = valor
        this.id = Math.floor(Math.random() * 100)
    }

    digaOi = () => {
        console.log("Diga Oi")
    }
}

export default Compra

const compra3 = new Compra("Dadinho", 20, 1)

console.log(new Compra("Farinha", 3, 4));
console.log(new Compra("Arrozinho", 2, 1));
compra3.digaOi()