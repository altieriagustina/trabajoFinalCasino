import { TragamonedasBasico } from "./Juegos/Tragamonedas/TragamonedasBasico";
import { TragamonedasPro } from "./Juegos/Tragamonedas/TragamonedasPro";
import { MayorMenor } from "./Juegos/MayorMenor";
import { CaraOCruz } from "./Juegos/CaraOCruz";


export class FabricaDeJuegos implements FabricaDeJuegos {

    public crearJuego(pNombre: string): any {
        if (pNombre === "Tragamonedas Basico") {
            return new TragamonedasBasico();
        } else if (pNombre === "Tragamonedas Pro") {
            return new TragamonedasPro();
        } else if (pNombre === "Mayor o Menor") {
            return new MayorMenor();
        } else if (pNombre === "Cara o Cruz") {
            return new CaraOCruz();
        }
    }
} 