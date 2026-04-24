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
/**
 * Algoritmo de punto medio para circunferencias
 */
function midpointCircle(cx, cy, r, color = "#888") {
    let x = 0;
    let y = r;
    let p = 1 - r;

    while (x <= y) {

        // 8 puntos simétricos
        plotPixel(ctx, cx + x, cy + y, color);
        plotPixel(ctx, cx - x, cy + y, color);
        plotPixel(ctx, cx + x, cy - y, color);
        plotPixel(ctx, cx - x, cy - y, color);
        plotPixel(ctx, cx + y, cy + x, color);
        plotPixel(ctx, cx - y, cy + x, color);
        plotPixel(ctx, cx + y, cy - x, color);
        plotPixel(ctx, cx - y, cy - x, color);

        x++;

        // decisión
        if (p < 0) {
            p += 2 * x + 1;
        } else {
            y--;
            p += 2 * (x - y) + 1;
        }
    }
}
