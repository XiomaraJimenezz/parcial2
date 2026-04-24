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
function plotPixel(ctx, x, y, color = "#1a1a1a") {
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

        // p es el parámetro de decisión que indica si el punto medio
// está dentro o fuera de la circunferencia
if (p < 0) {
            p += 2 * x + 1;
        } else {
            y--;
            p += 2 * (x - y) + 1;
        }
    }
}
/**
 * Algoritmo de Bresenham
 */
// err es el parámetro de decisión que indica cuándo cambiar en x o y
function bresenhamLine(x0, y0, x1, y1, color = "#000") {

    let dx = Math.abs(x1 - x0);
    let dy = Math.abs(y1 - y0);

    let sx = x0 < x1 ? 1 : -1;
    let sy = y0 < y1 ? 1 : -1;

    let err = dx - dy;

    while (true) {

        plotPixel(ctx, x0, y0, color);

        if (x0 === x1 && y0 === y1) break;

        let e2 = 2 * err;

        if (e2 > -dy) {
            err -= dy;
            x0 += sx;
        }

        if (e2 < dx) {
            err += dx;
            y0 += sy;
        }
    }
}
/**
 * Retorna los centros donde se ubicarán los polígonos
 * @param {number} r - radio de la órbita
 * @param {number} n - cantidad de polígonos
 * @returns {Array} arreglo de objetos {x, y}
 */
function getOrbitalPositions(r, n) {
    let positions = [];

    for (let i = 0; i < n; i++) {

        let angle = (2 * Math.PI * i) / n;

        let x = centerX + r * Math.cos(angle);
        let y = centerY + r * Math.sin(angle);

        positions.push({ x, y });
    }

    return positions;
}
/**
 * Genera los vértices de un polígono
 */
function getPolygonVertices(cx, cy, sides, size) {
    let vertices = [];

    for (let i = 0; i < sides; i++) {

        let angle = (2 * Math.PI * i) / sides;

        let x = cx + size * Math.cos(angle);
        let y = cy + size * Math.sin(angle);

        vertices.push({ x, y });
    }

    return vertices;
}/**
 * Dibuja el polígono con Bresenham
 */
function drawPolygon(vertices) {
    for (let i = 0; i < vertices.length; i++) {

        let next = (i + 1) % vertices.length;

        bresenhamLine(
    vertices[i].x,
    vertices[i].y,
    vertices[next].x,
    vertices[next].y,
    "#000"
);
    }
}
/**
 * Dibuja toda la escena
 */
function drawScene() {

    // 1. Dibujar órbita
    midpointCircle(centerX, centerY, R);

    // 2. Calcular posiciones
    const positions = getOrbitalPositions(R, N);

    //  SOLUCIÓN
    const size = R * 0.15;

    // 3. Dibujar polígonos
    positions.forEach(pos => {
        const vertices = getPolygonVertices(pos.x, pos.y, K, size);
        drawPolygon(vertices);
    });
}
// ejecutar
drawScene();
console.log("R:", R, "N:", N, "K:", K);