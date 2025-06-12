import * as rs from "readline-sync"

export class Jugador {
    private saldo: number;

    public constructor(pSaldo: number) {
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
        return `Su saldo es ${this.getSaldo()}`;
    }

    public retirarSaldo(): string {
        return `Retiró xxx saldo`;
    }
}