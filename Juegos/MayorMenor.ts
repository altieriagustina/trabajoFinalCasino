import { IJuego } from "../IJuego";
import * as rs from "readline-sync";

export class MayorMenor implements IJuego {
  private nombre: string;
  private cartaActual: number;
  private resultado: string;
  private ganancia: number;
  private montoApostado: number;
  private eleccion: "mayor" | "menor" | null;

  constructor() {
    this.nombre = "Mayor o Menor";
    this.resultado = "";
    this.ganancia = 0;
    this.cartaActual = 0;
    this.montoApostado = 0;
    this.eleccion = null;
  }

  public getNombre(): string {
    return this.nombre;
  }

  public getMontoApostado(): number {
    return this.montoApostado;
  }

  public setEleccion(eleccion: string): void {
    const eleccionLower = eleccion.toLowerCase();
    if (eleccionLower !== "mayor" && eleccionLower !== "menor") {
      throw new Error("Eleccion invalida");
    }
    this.eleccion = eleccionLower as "mayor" | "menor";
  }

  public apostar(monto: number, saldo: number): void {
    if (monto > saldo) {
      throw new Error("Saldo insuficiente");
    }
    if (monto <= 0) {
      throw new Error("Monto debe ser mayor a 0");
    }
    if (this.eleccion === null) {
      throw new Error("No se ha seleccionado mayor o menor");
    }
    this.montoApostado = monto;
  }

  public jugar(): void {
    this.cartaActual = this.sacarCarta();
    const nuevaCarta = this.sacarCarta();

    if (this.eleccion === null) {
      this.resultado = "No se realizo ninguna apuesta";
      return;
    }

    console.log(`Carta actual: ${this.cartaActual}`);
    console.log(`Nueva carta: ${nuevaCarta}`);

    if (nuevaCarta === this.cartaActual) {
      this.resultado = "Empate. Recuperas tu apuesta.";
      this.ganancia = this.montoApostado;
    } else if (
      (this.eleccion === "mayor" && nuevaCarta > this.cartaActual) ||
      (this.eleccion === "menor" && nuevaCarta < this.cartaActual)
    ) {
      this.resultado = "Gano";
      this.ganancia = this.montoApostado * 2;
    } else {
      this.resultado = "Perdio";
      this.ganancia = 0;
    }
  }

  public mostrarResultado(): string {
    return `Resultado: ${this.resultado}`;
  }

  public obtenerGanancia(): number {
    return this.ganancia;
  }

  public esGanador(resultado: string): boolean {
    return this.ganancia > 0;
  }

  public getResultado(): string {
    return this.resultado;
  }

  private sacarCarta(): number {
    return Math.floor(Math.random() * 13) + 1;
  }
}
