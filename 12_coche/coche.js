class Coche {
    totalGasolinaDisponible = 100;

    constructor(marca, modelo, consumoPor100){
        this.marca = marca;
        this.modelo = modelo;
        this.consumoPor100 = consumoPor100;
    }

    reposta(litros){
        let litrosTotal = litros + this.totalGasolinaDisponible;
        console.log(`Litros disponibles : ` + litrosTotal)
    }
}

let coche = new Coche("ford", "focus", 8);

coche.reposta(20);
