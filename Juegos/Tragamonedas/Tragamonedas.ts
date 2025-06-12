import { Casino } from "../../Casino";
import { IJuego } from "../../IJuego";
import { Jugador } from "../../Jugador";
import * as rs from "readline-sync"

export abstract class Tragamonedas implements IJuego {
    protected nombre: string;
    protected apuestaMinima: number;
    protected resultado: string[];
    protected montoApostado: number;

    constructor() {
        this.nombre = ` `;
        this.apuestaMinima = 0;
        this.resultado = [];
        this.montoApostado = 0;
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
    public setMontoApostado(pMOntoApostado: number) {
        this.montoApostado = pMOntoApostado;
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
    public getMontoApostado(): number {
        return this.montoApostado;
    }

    //Metodos IJuego

    public apostar(monto: number, saldoJugador: number): void {
        monto = rs.questionInt(`Ingrese el monto que desea apostar: `)

        //El monto aapostado no puede ser mayor al saldo del jugador 
        if (monto > saldoJugador) {
            throw new Error(`Su saldo es insuficiente`)
        }

        //El monto aapostado no puede ser menor a la apuesta minima
        if (monto < this.apuestaMinima) {
            throw new Error(`La apuesta mínima para el juego ${this.nombre} es ${this.apuestaMinima}`);
        }

        this.montoApostado = monto;

    }

    //El resultado obtiene el valor que retorna el método abstracto girar rueda (un string[])
    public jugar(): void {
        this.resultado = this.girarRueda();
    }

    public mostrarResultado(): string {
        return `Su Resultado es: ${this.resultado}`
    }
    // Si esGanador devuelve TRUE (el jugador ganó) el monto apostado se * 2, sino se vuelve 0
    public obtenerGanancia(): number {
        return this.esGanador(this.resultado) ? this.montoApostado * 2 : 0; //Operacion ternaria
    }


    // Metodos abstractos
    abstract girarRueda(): string[];

    abstract esGanador(resultado: string[]): boolean;

}