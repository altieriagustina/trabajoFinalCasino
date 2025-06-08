import { Casino } from "../../Casino";
import { Tragamonedas } from "./Tragamonedas";
import { Jugador } from "../../Jugador";
import { IJuego } from "../../IJuego";

export class TragamonedasBasico extends Tragamonedas {
    constructor(pNombre: string, pApuestaMinima: number, pResultado: string[], pMontoApostado: number) {
        super(pNombre, pApuestaMinima, pResultado, pMontoApostado)
        this.apuestaMinima = 5000;
    }

    public girarRueda(): string[] {
        let resultado: string[] = [];

        if (this.montoApostado > this.apuestaMinima) {
            console.log(`\n` + `¡Esta girando la rueda magica!` + `\n`)

            const frutas = ["🍒", "🍋", "🍇", "🍉"];
            resultado = Array.from({ length: 3 }, () => frutas[Math.floor(Math.random() * frutas.length)]);
        }
        return resultado
    }


    // Recibe el resultado de girar rueda (un string[]) y el metodo every revisa que cada fruta (f) sea igual a la primera, si son todas iguales devuelve TRUE---> Ganó
    public esGanador(resultado: string[]): boolean {
        return resultado.every(f => f === resultado[0]);
    }
}