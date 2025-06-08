import * as rs from "readline-sync";
import { IJuego } from "../IJuego";

export class CaraOCruz implements IJuego {
  private nombre: string;
  private resultado: string;
  constructor() {
    this.nombre = "Cara o Cruz";
    this.resultado = "";
  }
  public getNombre(): string {
    return this.nombre;
  }
  public jugar(): void {
    console.log("Bienvenido a Cara o Cruz.");
    console.log("Elegí entre 'cara' o 'cruz'. Si acertás, ganás.");
  }
  public apostar(monto: number): void {
    const eleccion = rs.question("Tu elección (cara/cruz): ").toLowerCase();
    if (eleccion !== "cara" && eleccion !== "cruz") {
      this.resultado = " Elección inválida.";
      return;
    }
    const moneda = Math.random() < 0.5 ? "cara" : "cruz";
    console.log(` La moneda cayó en: ${moneda}`);
    if (eleccion === moneda) {
      this.resultado = " Ganaste";
    } else {
      this.resultado = " Perdiste.";
    }
  }
  public mostrarResultado(): string {
    return this.resultado;
  }
}