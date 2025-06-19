import { Tragamonedas } from "./Tragamonedas";


export class TragamonedasPro extends Tragamonedas {
    constructor() {
        super()
        this.nombre = `Slot Pro`;
        this.apuestaMinima = 2000;
    }

    public girarRueda(): string[] {
        let resultado: string[] = [];

        if (this.montoApostado >= this.apuestaMinima) {
            console.log(`\n` + `¡GIRANDO LA RUEDA DE LA SUERTE!` + `\n`)

            const simbolos = [" 🔮 ", " 💎 ", " ❤️ ", " ⭐ ", " 🍀 ", " 🚀 "];
            //const simbolos = [" 💎 ", " 💎 ", " 💎 ", " 💎 ", " 💎 ", " 💎 "];

            resultado = Array.from({ length: 5 }, () => simbolos[Math.floor(Math.random() * simbolos.length)]); // Metodo from: crea un nuevo arreglo de 3 elementos y llena cada elemento con lo que devuelve la funcion flecha
        }
        return resultado;
    }

    public esGanador(resultado: string[]): boolean {
        return resultado.every(s => s === resultado[0]); // Metodo every: revisa que cada simbolo (s) sea igual al primero, si son todos iguales devuelve TRUE
    }
}