import * as rs from "readline-sync";
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

  public presentacion(): void {
    const edad: number = rs.questionInt("Ingrese su edad: ");
    if (edad >= 18) {
      console.log(`
              🎰 Bienvenido al Casino Timberos 🎰

    *****************************************************
    *   Ya puede adquirir saldo para empezar a apostar  *
    *                                                   *
    *****************************************************
    *        Le rogamos que juegue con moderacion       *
    *****************************************************\n`);

      this.reiniciarSaldoArchivo(); // Reinicia el archivo al iniciar

      const saldo = rs.questionInt("Ingrese el monto que desea adquirir: $ ");
      this.jugador.cargarSaldo(saldo);
      this.guardarSaldoArchivo();
      console.log(`Saldo cargado: $${this.jugador.getSaldo()}`);

      this.mostrarJuegos();
    } else {
      console.log("Debe ser mayor de 18 anos para ingresar");
    }
  }

  private reiniciarSaldoArchivo(): void {
    try {
      fs.writeFileSync("info.txt", "0"); // Borra saldo anterior
    } catch (error) {
      console.error("No se pudo reiniciar el archivo info.txt");
    }
  }

  private guardarSaldoArchivo(): void {
    let mostrarSaldo = `Su saldo es: $ ${this.jugador.getSaldo().toString()}`
    fs.writeFileSync("info.txt", mostrarSaldo);
  }

  public mostrarJuegos(): void {
    console.log("\nEstos son los juegos disponibles:");
    let menu = [
      "Slot Basic",
      "Slot Pro",
      "Mayor o Menor",
      "Cara o Cruz",
      "Comprar saldo",
    ];
    let index = rs.keyInSelect(menu, "Seleccione el juego o opcion:");

    if (index === -1) {
      console.log(" * Gracias por visitar el Casino Timberos. Hasta luego. *");
      return;
    }

    if (index === 4) {
      const monto = rs.questionInt(
        "Ingrese el monto que desea cargar a su saldo: $ "
      );
      this.jugador.cargarSaldo(monto);
      this.guardarSaldoArchivo();
      console.log(`Saldo actualizado: $${this.jugador.getSaldo()}`);
      this.mostrarJuegos();
      return;
    }

    this.seleccionarJuego(index + 1);
  }

  public seleccionarJuego(index: number): void {
    const fabrica = new FabricaDeJuegos();
    try {
      switch (index) {
        case 1:
          let tmb = fabrica.crearJuego("Tragamonedas Basico");
          console.log(`\nSelecciono el juego ${tmb.getNombre()}`);
          console.log(`Apuesta minima: $${tmb.apuestaMinima}`);
          console.log(`Saldo actual: $${this.jugador.getSaldo()}`);

          tmb.apostar(this.jugador.getSaldo());
          this.jugador.setSaldo(
            this.jugador.getSaldo() - tmb.getMontoApostado()
          );
          tmb.jugar();
          console.log(tmb.mostrarResultado());

          if (tmb.esGanador(tmb.getResultado())) {
            const ganancia = tmb.obtenerGanancia();
            const gananciaNeta = ganancia - tmb.getMontoApostado();
            console.log(`Gano $${gananciaNeta}`);
            this.jugador.cargarSaldo(ganancia);
          } else {
            console.log("Perdio. Mejor suerte la proxima.");
          }

          console.log(`Saldo final: $${this.jugador.getSaldo()}`);
          this.guardarSaldoArchivo();

          this.opcionSeguirJugando(index);
          break;

        case 2:
          let tmp = fabrica.crearJuego("Tragamonedas Pro");
          console.log(`\nSelecciono el juego ${tmp.getNombre()}`);
          console.log(`Apuesta minima: $${tmp.apuestaMinima}`);
          console.log(`Saldo actual: $${this.jugador.getSaldo()}`);

          tmp.apostar(this.jugador.getSaldo());
          this.jugador.setSaldo(
            this.jugador.getSaldo() - tmp.getMontoApostado()
          );
          tmp.jugar();
          console.log(tmp.mostrarResultado());

          if (tmp.esGanador(tmp.getResultado())) {
            const ganancia = tmp.obtenerGanancia();
            const gananciaNeta = ganancia - tmp.getMontoApostado();
            console.log(`Gano $${gananciaNeta}`);
            this.jugador.cargarSaldo(ganancia);
          } else {
            console.log("Perdio. Mejor suerte la proxima.");
          }

          console.log(`Saldo final: $${this.jugador.getSaldo()}`);
          this.guardarSaldoArchivo();

          this.opcionSeguirJugando(index);
          break;

        case 3:
          let mm = fabrica.crearJuego("Mayor o Menor");

          console.log(`\nSelecciono el juego ${mm.getNombre()}`);
          console.log(`Saldo actual: $${this.jugador.getSaldo()}`);

          let opcionesMM = ["Mayor", "Menor"];
          let eleccionIndexMM = rs.keyInSelect(
            opcionesMM,
            "Seleccione mayor o menor:",
            { cancel: false }
          );
          let eleccionMM = opcionesMM[eleccionIndexMM].toLowerCase();

          mm.setEleccion(eleccionMM);

          let montoApostadoMM = rs.questionInt(
            "Ingrese el monto que desea apostar: $"
          );

          while (
            montoApostadoMM > this.jugador.getSaldo() ||
            montoApostadoMM <= 0
          ) {
            console.log("Monto invalido o saldo insuficiente.");
            montoApostadoMM = rs.questionInt(
              "Ingrese el monto que desea apostar: $"
            );
          }

          this.jugador.setSaldo(this.jugador.getSaldo() - montoApostadoMM);

          mm.apostar(
            montoApostadoMM,
            this.jugador.getSaldo() + montoApostadoMM
          );

          mm.jugar();
          console.log(mm.mostrarResultado());

          if (mm.esGanador(mm.getResultado())) {
            const ganancia = mm.obtenerGanancia();
            const gananciaNeta = ganancia - montoApostadoMM;
            console.log(`Gano $${gananciaNeta}`);
            this.jugador.cargarSaldo(ganancia);
          } else {
            console.log("Perdio. Mejor suerte la proxima.");
          }

          console.log(`Saldo final: $${this.jugador.getSaldo()}`);
          this.guardarSaldoArchivo();

          this.opcionSeguirJugando(index);
          break;

        case 4:
          let cc = fabrica.crearJuego("Cara o Cruz");

          console.log(`\nSelecciono el juego ${cc.getNombre()}`);
          console.log(`Saldo actual: $${this.jugador.getSaldo()}`);

          let opcionesCC = ["Cara", "Cruz"];
          let eleccionIndexCC = rs.keyInSelect(
            opcionesCC,
            "Seleccione cara o cruz:",
            { cancel: false }
          );
          let eleccionCC = opcionesCC[eleccionIndexCC];

          cc.setEleccion(eleccionCC.toLowerCase());

          let montoApostadoCC = rs.questionInt(
            "Ingrese el monto que desea apostar: $"
          );

          while (
            montoApostadoCC > this.jugador.getSaldo() ||
            montoApostadoCC <= 0
          ) {
            console.log("Monto invalido o saldo insuficiente.");
            montoApostadoCC = rs.questionInt(
              "Ingrese el monto que desea apostar: $"
            );
          }

          cc.apostar(montoApostadoCC, this.jugador.getSaldo());
          this.jugador.setSaldo(this.jugador.getSaldo() - montoApostadoCC);

          cc.jugar();
          console.log(cc.mostrarResultado());

          if (cc.esGanador(cc.getResultado())) {
            const ganancia = cc.obtenerGanancia();
            const gananciaNeta = ganancia - montoApostadoCC;
            console.log(`Gano $${gananciaNeta}`);
            this.jugador.cargarSaldo(ganancia);
          } else {
            console.log("Perdio. Mejor suerte la proxima.");
          }

          console.log(`Saldo final: $${this.jugador.getSaldo()}`);
          this.guardarSaldoArchivo();

          this.opcionSeguirJugando(index);
          break;

        default:
          console.log("Opcion invalida");
          this.mostrarJuegos();
          break;
      }
    } catch (error) {
      console.error("Error: " + (error as Error).message);
      this.mostrarJuegos();
    }
  }

  private opcionSeguirJugando(index: number): void {
    let opciones = ["Seguir jugando", "Volver al menu"];
    let seleccion = rs.keyInSelect(opciones, "Desea continuar?", {
      cancel: false,
    });
    if (seleccion === 0) {
      this.seleccionarJuego(index);
    } else {
      this.mostrarJuegos();
    }
  }
}
