import { IJuego } from "../IJuego";
import * as rs from "readline-sync"

export class MayorMenor implements IJuego {
    private nombre: string;
    private cartaActual: number;
    private resultado: string;
    private ganancia: number;
    private montoApostado: number;
    
    constructor() {
        this.nombre = "Mayor o Menor";
        this.resultado = "";
        this.ganancia = 0;
        this.cartaActual = 0;
        this.montoApostado = 0;
    }
    
    public getNombre(): string {
        return this.nombre;
    }
    
    public getMontoApostado(): number {
        this.montoApostado = rs.questionInt("Ingrese el monto a apostar: ");
        return this.montoApostado;
    }
    
    public apostar(monto: number, saldo: number): void {
        if (monto > saldo) {
            this.resultado = "No tiene saldo suficiente.";
            return;
        }
        this.cartaActual = this.sacarCarta();
        console.log(`Tu carta es: ${this.cartaActual}`);
        const eleccion = rs.question("¿La siguiente será 'mayor' o 'menor'?: ").toLowerCase();
        const nuevaCarta = this.sacarCarta();
        console.log(`La nueva carta es: ${nuevaCarta}`);
        if (nuevaCarta === this.cartaActual) {
            this.resultado = "Empate. Recuperás tu apuesta.";
            this.ganancia = monto;
        } else if (
            (eleccion === "mayor" && nuevaCarta > this.cartaActual) ||
            (eleccion === "menor" && nuevaCarta < this.cartaActual)
        ) {
            this.resultado = " ¡Ganaste!";
            this.ganancia = monto * 2;
        } else {
            this.resultado = "Perdiste.";
            this.ganancia = 0;
        }
    }
    
    public jugar(): void {
    }
    
    public mostrarResultado(): string {
        return this.resultado;
    }
    
    public obtenerGanancia(): number {
        return this.ganancia;
    }
    
    private sacarCarta(): number {
        return Math.floor(Math.random() * 13) + 1;
    }
    
    public esGanador(resultado: string): boolean {
        return this.ganancia > 0;
    }
    
    public getResultado(): string {
        return this.resultado;
    }
}