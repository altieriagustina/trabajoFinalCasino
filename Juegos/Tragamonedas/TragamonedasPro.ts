import { Casino } from "../../Casino";
import { Tragamonedas } from "./Tragamonedas";
import { Jugador } from "../../Jugador";
import { IJuego } from "../../IJuego";

export class TragamonedasPro extends Tragamonedas {
    constructor(pNombre: string, pApuestaMinima: number, pResultado: string[], pMontoApostado: number) {
        super(pNombre, pApuestaMinima, pResultado, pMontoApostado)
        this.apuestaMinima = 10000;
    }

    public girarRueda(): string[] {
        const simbolos = ["🔮", "💎", "❤️", "⭐", "🍀", "🚀", "🎁"];
        return Array.from({ length: 5 }, () => simbolos[Math.floor(Math.random() * simbolos.length)]); // Metodo from: crea un nuevo arreglo de 3 elementos y llena cada elemento con lo que devuelve la funcion flecha
    }

    public esGanador(resultado: string[]): boolean {
        return resultado.every(s => s === resultado[0]); // Metodo every: revisa que cada simbolo (s) sea igual al primero, si son todos iguales devuelve TRUE
    }
}