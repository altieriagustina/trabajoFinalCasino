import { IJuego } from "../IJuego";

export class CaraCruz implements IJuego{
    
    jugar(): void {
        throw new Error("Method not implemented.");
    }
    apostar(monto: number): void {
        throw new Error("Method not implemented.");
    }
    mostrarResultado(): string {
        throw new Error("Method not implemented.");
    }
    
}