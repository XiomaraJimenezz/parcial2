/**
 * Universidad - Facultad de Ingeniería
 * Asignatura: Introducción a la Computación Gráfica
 * Estudiante: Nicoll Xiomara Jimenez Reyes
 * * Este código debe ser estructurado de forma modular.
 */
 // Obtener el canvas
const canvas = document.getElementById("canvas");
const ctx = canvas.getContext("2d");

/**
 * Función básica para pintar un píxel
 */
function plotPixel(ctx, x, y, color = "#000") {
    ctx.fillStyle = color;
    ctx.fillRect(Math.floor(x), Math.floor(y), 1, 1);
}
/**
 * Genera números aleatorios
 */
function getRandom(min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
}

// Parámetros principales
const R = getRandom(100, 200);
const N = getRandom(4, 10);
const K = getRandom(3, 8);

// Centro del canvas
const centerX = canvas.width / 2;
const centerY = canvas.height / 2;
