class Coche {

    constructor(marca, modelo, consumoPor100){
        this.marca = marca;
        this.modelo = modelo;
        this.consumoPor100 = consumoPor100;
        this.totalGasolinaDisponible = 100;
    }

    reposta(litros){
        console.log(`Litros disponibles: ` + (this.totalGasolinaDisponible+=litros))
    }

    move(distancia){
        console.log(`Litros gastados: ` + (this.totalGasolinaDisponible-=distancia * (this.consumoPor100/100)))
    }

    restante(){
        console.log(`Distancia restante: ` + ((this.totalGasolinaDisponible / this.consumoPor100) * 100))
    }
}

let coche = new Coche("ford", "focus", 8);

coche.reposta(20);
coche.move(500);
coche.restante();
