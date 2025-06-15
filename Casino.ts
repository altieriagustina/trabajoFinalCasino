import * as rs from "readline-sync"
import { IJuego } from "./IJuego";
import { Jugador } from "./Jugador";
import { FabricaDeJuegos } from "./FabricaDeJuegos";
import * as fs from "fs";

export class Casino {
    private juegos: IJuego[];
    private jugador: Jugador;

    constructor(juegos: IJuego[], pJugador: Jugador) {
        this.juegos = juegos;
        this.jugador = pJugador;
    }

    // Presentación: pide la edad y la valida, si es menor de 18años muestra mensaje y termina, si es mayor pide ingresar saldo a adquirir
    public presentacion(pEdad: number): void {
        const edad: number = rs.questionInt(`Ingrese su edad: `)
        if (edad >= 18) {
            console.log(`
                🎰 Bienvenido al Casino Timberos 🎰
                ----------------------------------------------
                Ya puede adquirir saldo para empezar a apostar
                ----------------------------------------------
                Le rogamos que juegue con moderacion \n`);

            const saldo = rs.questionInt(`Ingrese el monto que desea adquirir: `);

            this.jugador.cargarSaldo(saldo);

            this.mostrarJuegos();

        } else {
            console.log(`Debe ser mayor de 18 años para ingresar`)
        }
    }

    public agregarJuego(pJuego: IJuego): void {
        this.juegos.push(pJuego);
    }

    //Muestra menu de juegos disponibles y pide al usuario seleccionar el juego deseado
    public mostrarJuegos(): void {
        console.log(`\n` + `Estos son los juegos disponibles`)
        let menu = [`Slot Basic`, `Slot Pro`, `Mayor o Menor`, `Cara O Cruz`];
        let index = rs.keyInSelect(menu, `Selecciona el juego al que desea jugar: `);

        this.seleccionarJuego(index + 1);
    }

    //Metodo que, según el indice que reciba, instancia el juego seleccionado 
    public seleccionarJuego(index: number): void {
        let fabrica = new FabricaDeJuegos();
try {
        // TrabamonedasBasico
        switch (index) {
            case 1:
                let nuevoTMB = fabrica.crearJuego(`Tragamonedas Basico`);
                console.log(`Usted selecciono el juego ${nuevoTMB.getNombre()}` + `\n`)

                nuevoTMB.apostar(nuevoTMB.getMontoApostado(), this.jugador.getSaldo());
                nuevoTMB.jugar();
                console.log(nuevoTMB.mostrarResultado());

                let total: number = this.jugador.getSaldo() + (nuevoTMB.obtenerGanancia() - nuevoTMB.getMontoApostado());
                let saldoFInal: string = `Usted tiene un saldo acumulado de $ ${total}`; // Saldo original mas ganancia

                if (nuevoTMB.esGanador(nuevoTMB.getResultado()) === true) {
                    console.log(`Usted ha ganado $ ${nuevoTMB.obtenerGanancia()}`);
                    console.log(saldoFInal);

                    // Archivo TXT PRUEBA
                    fs.writeFileSync("info.txt", saldoFInal);

                } else {
                    console.log(`\n` + `Siga participando`)
                };

                break;

            // TrabamonedasPro
            case 2:
                let nuevoTMP = fabrica.crearJuego(`Tragamonedas Pro`);
                console.log(`Usted selecciono el juego ${nuevoTMP.getNombre()}` + `\n`)

                nuevoTMP.apostar(nuevoTMP.getMontoApostado(), this.jugador.getSaldo());
                nuevoTMP.jugar();
                console.log(nuevoTMP.mostrarResultado());

                if (nuevoTMP.esGanador(nuevoTMP.getResultado()) === true) {
                    console.log(`Usted ha ganado $ ${nuevoTMP.obtenerGanancia()}`)
                } else {
                    console.log(`\n` + `Siga participando`)
                };
                break;

            // MayorOMenor    
            case 3:
                let nuevoMM = fabrica.crearJuego(`Mayor o Menor`);
                console.log(`Usted selecciono el juego Mayor o Menor` + `\n`)
                nuevoMM.apostar(nuevoMM.getMontoApostado(), this.jugador.getSaldo());
                nuevoMM.jugar();
                console.log(nuevoMM.mostrarResultado());
                break;

            // CaraOCruz
            case 4:
                let nuevoCC = fabrica.crearJuego(`Cara O Cruz`);
                console.log(`Usted selecciono el juego Cara o Cruz` + `\n`)
                console.log(nuevoCC.mostrarResultado());
                break;
        } }
        catch (error) {
            console.error(`Error al apostar: ${(error as Error).message}`);
    }
}}