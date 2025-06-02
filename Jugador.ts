import { IJuego } from "./IJuego";

export class Jugador {
    private saldo: number;
    private resultado: number;

    public constructor(pSaldo: number, pResultado: number) {
        this.saldo = pSaldo;
    }

    //Getters
    public getSaldo(): number {
        return this.saldo;
    }

    //Setters
    public setSaldo(pSaldo: number) {
        this.saldo = pSaldo;
    }

    //Metodos de Jugador
    public cargarSaldo(pMonto: number): number {
        this.saldo += pMonto;
        return this.saldo;
    }

    public mostrarSaldo(): string {
        return `Su saldo es ...`;
    }

    public retirarSaldo(): string {
        return `Retiró xxx saldo`;
    }
}