import * as readline from "readline-sync";
import { IJuego } from "../IJuego";

export class MayorMenor implements IJuego {
    private nombre: string;
    private carta: number;
    private resultado: string;
    constructor() {
        this.nombre = "Mayor o Menor";
        this.carta = 0;
        this.resultado = "";
    }
    jugar(): void {
        this.carta = this.sacarCarta();
        console.log(`Tu carta es: ${this.carta}`);
    }
    apostar(monto: number): void {
        const eleccion = readline.question("¿La siguiente sera mayor o menor?: ").toLowerCase();
        const nuevaCarta = this.sacarCarta();
        console.log(`La nueva carta es: ${nuevaCarta}`);
        if (nuevaCarta === this.carta) {
            this.resultado = "Empate";
        } else if (
            (eleccion === "mayor" && nuevaCarta > this.carta) ||
            (eleccion === "menor" && nuevaCarta < this.carta)
        ) {
            this.resultado = "¡Ganaste!";
        } else {
            this.resultado = "Perdiste.";
        }
    }
    mostrarResultado(): string {
        return this.resultado;
    }
    private sacarCarta(): number {
        return Math.floor(Math.random() * 13) + 1;
    }
}