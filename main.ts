import { Casino } from "./Casino";
import { Jugador } from "./Jugador";
import { TragamonedasBasico } from "./Juegos/Tragamonedas/TragamonedasBasico";
import {TragamonedasPro} from "./Juegos/Tragamonedas/TragamonedasPro"
import * as fs from "fs"
import { MayorMenor } from "./Juegos/MayorMenor";
import { CaraOCruz } from "./Juegos/CaraOCruz";

const tragamonedasBasico = new TragamonedasBasico();
const tragamonedasPro = new TragamonedasPro();
const mayorOmenor = new MayorMenor();
const caraOCruz = new CaraOCruz();
const juegos = [tragamonedasBasico, tragamonedasPro, mayorOmenor, caraOCruz];
const jugador1 = new Jugador(0);
const casino = new Casino(juegos, jugador1);


casino.presentacion(0);





