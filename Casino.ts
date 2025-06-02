import * as rs from "readline-sync"
import { IJuego } from "./IJuego";
import { Jugador } from "./Jugador";

export class Casino {
    private juegos: IJuego[];
    private jugador: Jugador;

    constructor(juegos: IJuego[], pJugador: Jugador) {
        this.juegos = juegos;
        this.jugador = pJugador;
    }


    public presentacion(): string {
        const edad: number = rs.questionInt(`Ingrese su edad: `)
        if (edad < 18) {
            console.log(`Debe ser mayor de 18 años para ingresar`)
        }
        return `🎰 Bienvenido al Casino Timberos 🎰
        ----------------------------------------------
        Ya puede adquirir saldo para empezar a apostar
        ----------------------------------------------
        Le rogamos que juegue con moderacion`;
    }

    public agregarJuego(pJuego: IJuego): void {
        this.juegos.push(pJuego);
    }

    public mostrarJuegos(): string {
    return this.juegos.map((juego, index) => `${index + 1}. ${(juego as any).getNombre()}`).join("\n"); // Esto es provisorio
    }

    public seleccionarJuego(index: number): void {
        if (index < 0 || index > this.juegos.length) {
            throw new Error(`Seleccione un juego valido`)
        }
    }

}