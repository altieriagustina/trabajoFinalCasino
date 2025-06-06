import { Casino } from "./Casino";
import { Jugador } from "./Jugador";
import { TragamonedasBasico } from "./Juegos/Tragamonedas/TragamonedasBasico";
import {TragamonedasPro} from "./Juegos/Tragamonedas/TragamonedasPro"
import * as fs from "fs"
//import { FabricaDeJuegos } from "./Juegos/FabricaDeJuegos";


const tragamonedasBasico = new TragamonedasBasico(`BasicSpin`, 5000, [], 0);
const tragamonedasPro = new TragamonedasPro(`ProSpin`, 10000, [], 0);
const juegos = [tragamonedasBasico, tragamonedasPro];
const jugador1 = new Jugador(0);
const casino = new Casino(juegos, jugador1);
//const fabricaDeJuegos = new FabricaDeJuegos();

casino.presentacion(0);







