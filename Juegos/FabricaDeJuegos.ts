// import { TragamonedasBasico } from "./Tragamonedas/TragamonedasBasico";
// import { Tragamonedas } from "./Tragamonedas/Tragamonedas";
// import { IJuego } from "../IJuego";
// import { TragamonedasPro } from "./Tragamonedas/TragamonedasPro";
// import { MayorMenor } from "./MayorMenor";
// import { CaraCruz } from "./CaraCruz";

// export class FabricaDeJuegos {
//     public crearJuego(tipo: number, atributos: any): any {
//         if (tipo === 1) {
//             return new TragamonedasBasico(atributos.nombre, atributos.apuestaMinima, atributos.resultado, atributos.montoApostado)
//         } else if (tipo === 2) {
//             return new TragamonedasPro(atributos.nombre, atributos.apuestaMinima, atributos.resultado, atributos.montoApostado)
//         } else if(tipo === 3){
//             return new MayorMenor()
//         } else if (tipo === 4){
//             return new CaraCruz();
//         }
//     }
// }