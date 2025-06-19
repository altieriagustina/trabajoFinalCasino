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
        console.log(`\n` + `Estos son los juegos disponibles: `)
        let menu = [`Slot Basic`, `Slot Pro`, `Mayor o Menor`, `Cara O Cruz`];
        let index = rs.keyInSelect(menu, `Seleccione el juego al que desea jugar: `);

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
                    console.log(`\n` + `Selecciono el juego ${nuevoTMB.getNombre()}
Recuerde que este juego tiene una apuesta minima de $ ${nuevoTMB.apuestaMinima}` + `\n`)

                    nuevoTMB.apostar(this.jugador.getSaldo());
                    nuevoTMB.jugar();
                    console.log(nuevoTMB.mostrarResultado());

                    let total: number = this.jugador.getSaldo() + (nuevoTMB.obtenerGanancia() - nuevoTMB.getMontoApostado());
                    let saldoFInal: string = `Tiene un saldo acumulado de $ ${total}`; // Saldo original mas ganancia
                    let perdedor: number = this.jugador.getSaldo() - nuevoTMB.getMontoApostado();

                    if (nuevoTMB.esGanador(nuevoTMB.getResultado()) === true) {
                        console.log(`💲💲💲 Ha ganado $ ${(nuevoTMB.obtenerGanancia() - nuevoTMB.getMontoApostado())} 💲💲💲` + `\n`);

                        // ACTUALIZAR SALDO, SUMARLE SALDO QUE GANA

                        console.log(saldoFInal);


                    } else {
                        console.log(`\n` + `PERDIO ---> Siga participando` + `\n`)
                        console.log(`Tiene un saldo de $ ${perdedor}`)
                        // ACTUALIZAR SALDO, RESTARLE SALDO QUE YA USO
                        // PONER SALDO - APUESTA
                        let auxiliar = rs.question(`Desea seguir jugagando? (Y / N): ` + `\n`)

                        if (auxiliar === `Y`) {
                            if (perdedor !== 0) {
                                this.seleccionarJuego(1);
                            } else { console.log(`No tiene saldo para seguir jugando`) }
                        } else {
                            this.mostrarJuegos();
                        }
                        // Archivo TXT PRUEBA
                        fs.writeFileSync("info.txt", saldoFInal);

                    }

                    break;

                // TrabamonedasPro
                case 2:
                    let nuevoTMP = fabrica.crearJuego(`Tragamonedas Pro`);
                    console.log(`\n` + `Selecciono el juego ${nuevoTMP.getNombre()}
Recuerde que este juego tiene una apuesta minima de $ ${nuevoTMP.apuestaMinima}` + `\n`)


                    nuevoTMP.apostar(this.jugador.getSaldo());
                    nuevoTMP.jugar();
                    console.log(nuevoTMP.mostrarResultado());

                    let total1: number = this.jugador.getSaldo() + (nuevoTMP.obtenerGanancia() - nuevoTMP.getMontoApostado());
                    let saldoFInal1: string = `Tiene un saldo acumulado de $ ${total1}`; // Saldo original mas ganancia
                    let perdedor1: number = this.jugador.getSaldo() - nuevoTMP.getMontoApostado();



                    if (nuevoTMP.esGanador(nuevoTMP.getResultado()) === true) {
                        console.log(`💲💲💲 Ha ganado $ ${(nuevoTMP.obtenerGanancia() - nuevoTMP.getMontoApostado())} 💲💲💲` + `\n`);

                        // ACTUALIZAR SALDO, SUMARLE SALDO QUE GANA

                        console.log(saldoFInal1);


                    } else {
                        console.log(`\n` + `PERDIO ---> Siga participando` + `\n`)
                        console.log(`Tiene un saldo de $ ${perdedor1}`)

                        // ACTUALIZAR SALDO, RESTARLE SALDO QUE YA USO
                        // PONER SALDO - APUESTA
                        let auxiliar = rs.question(`Desea seguir jugagando? (Y / N): `)

                        if (auxiliar === `Y`) {if (perdedor1 !== 0) {
                                this.seleccionarJuego(2);
                            } else { console.log(`No tiene saldo para seguir jugando`) }
                        } else {
                            this.mostrarJuegos();
                        }
                        // Archivo TXT PRUEBA
                        fs.writeFileSync("info.txt", saldoFInal1);

                    };

                    break;

                // MayorOMenor    
                case 3:
                    let nuevoMM = fabrica.crearJuego(`Mayor o Menor`);
                    console.log(`Ha seleccionado el juego ${nuevoMM.getNombre()}` + `\n`)
                    nuevoMM.apostar(nuevoMM.getMontoApostado(), this.jugador.getSaldo());
                    console.log(nuevoMM.mostrarResultado());
                    break;

                // CaraOCruz
                case 4:
                    let nuevoCC = fabrica.crearJuego(`Cara o Cruz`);
                    console.log(`Ha seleccionado el juego ${nuevoCC.getNombre()}` + `\n`)
                    console.log(nuevoCC.mostrarResultado());
                    break;
            }
        }
        catch (error) {
            console.error(`Error al apostar: ${(error as Error).message}`);
        }
    }
}