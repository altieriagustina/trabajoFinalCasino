
<h1 align="center">🎰 Casino Timberos 🎰</h1>

<p align="center">
  Simulador de casino por consola en TypeScript con juegos, apuestas y gestión de saldo.
</p>

---
## 🧑‍🤝‍🧑 Integrantes del Proyecto

- Agustina Altieri
- Ignacio Flores
- Juan Cruz Funes

---

## Instrucciones para la instalacion

- 1- Clonar repositorio, Git Bash: git clone https://github.com/altieriagustina/trabajoFinalCasino.git
- 2- Instalar las dependencias: npm install
- 3- Ejecutar el servidor de desarrollo: ts-node main.ts

---

## 🧠 Objetivo del Proyecto

Aplicar conceptos clave de desarrollo en TypeScript:

- 🧱 Programación Orientada a Objetos (POO)
- 🧩 Herencia, interfaces y clases abstractas
- 🏭 Patrón Factory para la creación de juegos
- 💾 Manejo de archivos con `fs`
- 🧑‍💻 Interacción por consola con `readline-sync`
- ✅ Validaciones de entrada robustas

---

## 🕹️ Juegos Disponibles

| Juego              | Descripción                                 |
|--------------------|---------------------------------------------|
| 🎰 Slot Basic       | Tragamonedas clásico con 3 rodillos         |
| 💎 Slot Pro         | Versión avanzada con 5 rodillos y premios   |
| 🃏 Mayor o Menor    | Adivinar si la próxima carta es mayor o menor |
| 🪙 Cara o Cruz      | Lanza una moneda y apostá por el resultado  |

---

## 🔒 Validación de Edad
El casino solo permite el ingreso a personas mayores de **18 años**.

## 🔍 Validaciones de Apuestas
- No se permiten montos inválidos (negativos o superiores al saldo)
- Se solicita reintentar en caso de error

---

## 📁 Estructura de Archivos

```
📦 Proyecto
├── 📄 main.ts                # Punto de entrada del programa
├── 📄 Casino.ts              # Lógica principal del casino
├── 📄 Jugador.ts             # Clase que gestiona el saldo
├── 📄 FabricaDeJuegos.ts     # Patrón Factory para crear juegos
├── 📁 Juegos/
│   ├── 📄 CaraOCruz.ts
│   ├── 📄 MayorMenor.ts
│   └── 📁 Tragamonedas/
│       ├── 📄 Tragamonedas.ts
│       ├── 📄 TragamonedasBasico.ts
│       └── 📄 TragamonedasPro.ts
├── 📄 IJuego.ts              # Interfaz común para todos los juegos
├── 📄 info.txt               # Archivo de persistencia temporal
```

---

## 🛠️ Requisitos Técnicos

- [Node.js](https://nodejs.org/)
- [TypeScript](https://www.typescriptlang.org/)
- Librería `readline-sync`

---

## 🌐 Link Documento

- https://docs.google.com/document/d/1TXUBB-GHhUvTp3mjK24AwF0UgRe7zEMpqkHb-FGujpk/edit?usp=sharing

---

<p align="center">🧠 Proyecto desarrollado con fines educativos. ¡Apostá con responsabilidad! 🧠</p>
