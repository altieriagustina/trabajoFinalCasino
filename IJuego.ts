export interface IJuego {
    jugar(): void;
    apostar(monto: number, saldoJugador: number): void;
    mostrarResultado(): string;
}
