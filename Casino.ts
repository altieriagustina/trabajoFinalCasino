import * as rs from "readline-sync"
import { IJuego } from "./IJuego";
import { Jugador } from "./Jugador";
import { TragamonedasBasico } from "./Juegos/Tragamonedas/TragamonedasBasico";
//import { FabricaDeJuegos } from "./Juegos/FabricaDeJuegos";
import { MayorMenor } from "./Juegos/MayorMenor";
import { TragamonedasPro } from "./Juegos/Tragamonedas/TragamonedasPro";
import { CaraCruz } from "./Juegos/CaraCruz";

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
        console.log(`Estos son los juegos disponibles`)
        let menu = ['1 - SlotBasic', '2 - SlotPro', '3 - MayorMenor', '4 - Cara Cruz'];
        let index = rs.keyInSelect(menu, `Selecciona el juego al que desea jugar: `);

        this.seleccionarJuego(Number(menu[index]))
    }

    //Metodo que según el indice que reciba debe instanciar el juego seleccionado NO FUNCIONA
    public seleccionarJuego(index: number): void {
        if (index === 1) {
            console.log(`Usted selecciono el juego SlotBasic`)
            let nuevoTM = new TragamonedasBasico(`SlotBasic`, 5000, [], 0);
            return nuevoTM.jugar()
        } if (index === 2) {
            console.log(`Usted selecciono el juego SlotPro`)
            let nuevoTM = new TragamonedasPro(`SlotPro`, 10000, [], 0);
            return nuevoTM.jugar()
        } if (index === 3) {
            console.log(`Usted selecciono el juego MayorMenor`)
            let nuevoMM = new MayorMenor()
            return nuevoMM.jugar();
        } if (index === 4) {
            console.log(`Usted selecciono el juego MayorMenor`)
            let nuevoCC = new CaraCruz();
            return nuevoCC.jugar();
        }
    }
}