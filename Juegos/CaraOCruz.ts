import { IJuego } from "../IJuego";

export class CaraOCruz implements IJuego {
  private nombre: string;
  private resultado: string;
  private eleccion: "cara" | "cruz" | null;
  private montoApostado: number;

  constructor() {
    this.nombre = "Cara o Cruz";
    this.resultado = "";
    this.eleccion = null;
    this.montoApostado = 0;
  }

  public getNombre(): string {
    return this.nombre;
  }

  public getMontoApostado(): number {
    return this.montoApostado;
  }

  public setEleccion(eleccion: string): void {
    const eleccionLower = eleccion.toLowerCase();
    if (eleccionLower !== "cara" && eleccionLower !== "cruz") {
      throw new Error("Eleccion invalida");
    }
    this.eleccion = eleccionLower as "cara" | "cruz";
  }

  public apostar(monto: number, saldoJugador: number): void {
    if (monto > saldoJugador) {
      throw new Error("Saldo insuficiente");
    }
    if (monto <= 0) {
      throw new Error("Monto debe ser mayor a 0");
    }
    if (this.eleccion === null) {
      throw new Error("No se ha seleccionado cara o cruz");
    }
    this.montoApostado = monto;
  }

  public jugar(): void {
    const moneda = Math.random() < 0.5 ? "cara" : "cruz";

    if (this.eleccion === null) {
      this.resultado = "No se realizo ninguna apuesta";
      return;
    }

    if (this.eleccion === moneda) {
      this.resultado = "Gano";
    } else {
      this.resultado = "Perdio";
    }
  }

  public mostrarResultado(): string {
    return `Resultado: ${this.resultado}`;
  }

  public obtenerGanancia(): number {
    return this.resultado === "Gano" ? this.montoApostado * 2 : 0;
  }

  public esGanador(resultado: string): boolean {
    return resultado === "Gano";
  }

  public getResultado(): string {
    return this.resultado;
  }
}
