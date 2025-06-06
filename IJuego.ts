export interface IJuego {
    jugar(): void;
    apostar(monto: number): void;
    mostrarResultado(): string;
}
