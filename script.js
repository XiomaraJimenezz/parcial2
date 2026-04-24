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
