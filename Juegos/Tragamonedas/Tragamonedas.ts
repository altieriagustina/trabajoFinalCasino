import { Casino } from "../../Casino";
import { IJuego } from "../../IJuego";

export abstract class Tragamonedas implements IJuego {
    protected nombre: string;
    protected apuestaMinima: number;
    protected resultado: string[];
    protected montoApostado: number;

    constructor(pNombre: string, pApuestaMinima: number, pResultado: string[], pMontoApostado: number) {
        this.nombre = pNombre;
        this.apuestaMinima = pApuestaMinima;
        this.resultado = pResultado
        this.montoApostado = pMontoApostado;
    }

    //Setters

    public setNombre(pNombre: string) {
        this.nombre = pNombre;
    }
    public setApuestaMinima(pApuestaMinima: number) {
        this.apuestaMinima = pApuestaMinima;
    }
    public setResultado(pResultado: string[]) {
        this.resultado = pResultado;
    }

    //Getters
    public getNombre(): string {
        return this.nombre;
    }
    public getApuestaMinima(): number {
        return this.apuestaMinima;
    }
    public getResultado(): string[] {
        return this.resultado;
    }

    //Metodos IJuego

    public apostar(monto: number): void {
        if (monto < this.apuestaMinima) {
            throw new Error(`La apuesta mínima para el juego ${this.nombre} es ${this.apuestaMinima}`);
        } //El monto aapostado tampoco puede ser mayor al saldo del jugador ----> falta verificacion
        this.montoApostado = monto;
    }

    public jugar(): void {
        this.resultado = this.girarRueda();
    }

    public mostrarResultado(): string {
        return `Su Resultado es:  ${this.resultado}`
    }

    public obtenerGanancia(): number {
        return this.esGanador(this.resultado) ? this.montoApostado * 2 : 0; // Ternaria, si esGanador devuelve TRUE el monto apostado se * 2, sino se vuelve 0
    }


    // Metodos abstractos
    abstract girarRueda(): string[];

    abstract esGanador(resultado: string[]): boolean;

}