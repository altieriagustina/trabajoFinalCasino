import * as rs from "readline-sync"
import { IJuego } from "./IJuego";
import { Jugador } from "./Jugador";
import { TragamonedasBasico } from "./Juegos/Tragamonedas/TragamonedasBasico";
//import { FabricaDeJuegos } from "./Juegos/FabricaDeJuegos";
import { MayorMenor } from "./Juegos/MayorMenor";
import { TragamonedasPro } from "./Juegos/Tragamonedas/TragamonedasPro";
import { CaraOCruz } from "./Juegos/CaraOCruz";

export class Casino {
    private juegos: IJuego[];
    private jugador: Jugador;

    constructor(juegos: IJuego[], pJugador: Jugador) {
        this.juegos = juegos;
        this.jugador = pJugador;
    }

    // Presentación: pide la edad y la valida, si es menor de 18años muestra mensaje y termina, si es mayor pide ingresar saldo a adquirir
    public presentacion(pEdad: number): void {
        const edad: number = rs.questionInt(`Ingrese su edad: `)
        if (edad >= 18) {
            console.log(`
                🎰 Bienvenido al Casino Timberos 🎰
                ----------------------------------------------
                Ya puede adquirir saldo para empezar a apostar
                ----------------------------------------------
                Le rogamos que juegue con moderacion \n`);

            const saldo = rs.questionInt(`Ingrese el monto que desea adquirir: `);

            this.jugador.cargarSaldo(saldo);

            this.mostrarJuegos();

        } else {
            console.log(`Debe ser mayor de 18 años para ingresar`)
        }
    }

    public agregarJuego(pJuego: IJuego): void {
        this.juegos.push(pJuego);
    }

    //Muestra menu de juegos disponibles y pide al usuario seleccionar el juego deseado
    public mostrarJuegos(): void {
        console.log(`\n` + `Estos son los juegos disponibles`)
        let menu = [`Slot Basic`, `Slot Pro`, `Mayor o Menor`, `Cara O Cruz`];
        let index = rs.keyInSelect(menu, `Selecciona el juego al que desea jugar: `);

        this.seleccionarJuego(index + 1);
    }

    //Metodo que, según el indice que reciba, instancia el juego seleccionado 
    public seleccionarJuego(index: number): void {
        
        // TrabamonedasBasico
        if (index === 1) {
            console.log(`Usted selecciono el juego Slot Basic` + `\n`)
            let nuevoTM = new TragamonedasBasico(`Slot Basic`, 5000, [], 0);
            nuevoTM.apostar(nuevoTM.getMontoApostado(), this.jugador.getSaldo());
            nuevoTM.jugar();
            console.log(nuevoTM.mostrarResultado());
            
            if (nuevoTM.esGanador(nuevoTM.getResultado()) === true) {
                console.log(`Usted ha ganado ${nuevoTM.obtenerGanancia()}`)
            } else {
                console.log(`\n` + `Siga participando`)
            }
        } 
        
        // TrabamonedasPro
        if (index === 2) {
            console.log(`Usted selecciono el juego Slot Pro` + `\n`)
            let nuevoTM = new TragamonedasPro(`Slot Pro`, 10000, [], 0);
            nuevoTM.apostar(nuevoTM.getMontoApostado(), this.jugador.getSaldo());
            nuevoTM.jugar();
            console.log(nuevoTM.mostrarResultado());
            
            if (nuevoTM.esGanador(nuevoTM.getResultado()) === true) {
                console.log(`Usted ha ganado ${nuevoTM.obtenerGanancia()}`)
            } else {
                console.log(`\n` + `Siga participando`)
            }
        } 
        
        // MayorMenor
        if (index === 3) {
            console.log(`Usted selecciono el juego Mayor o Menor` + `\n`)
            let nuevoMM = new MayorMenor()
            console.log(nuevoMM.mostrarResultado());
        } 
        
        // CaraOCruz
        if (index === 4) {
            console.log(`Usted selecciono el juego Cara o Cruz` + `\n`)
            let nuevoCC = new CaraOCruz();
            console.log(nuevoCC.mostrarResultado());
        }
    }
}