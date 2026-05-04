import { useCallback, useEffect, useRef } from 'react';

const CELL_SIZE = 16;
const INITIAL_DENSITY = 0.06;
const UPDATE_INTERVAL = 420;
const ALIVE_COLOR = '125, 211, 252';
const ALIVE_ALPHA = 0.05;
const GRID_COLOR = 'rgba(255, 255, 255, 0.012)';

export const GameOfLife = () => {
    const canvasRef = useRef<HTMLCanvasElement>(null);
    const gridRef = useRef<boolean[][]>([]);
    const animationRef = useRef<number>(0);
    const lastUpdateRef = useRef<number>(0);

    const initializeGrid = useCallback((cols: number, rows: number) => {
        const grid: boolean[][] = [];
        for (let i = 0; i < cols; i++) {
            grid[i] = [];
            for (let j = 0; j < rows; j++) {
                grid[i][j] = Math.random() < INITIAL_DENSITY;
            }
        }
        return grid;
    }, []);

    const countNeighbors = useCallback(
        (grid: boolean[][], x: number, y: number, cols: number, rows: number) => {
            let count = 0;
            for (let i = -1; i <= 1; i++) {
                for (let j = -1; j <= 1; j++) {
                    if (i === 0 && j === 0) continue;
                    const col = (x + i + cols) % cols;
                    const row = (y + j + rows) % rows;
                    if (grid[col][row]) count++;
                }
            }
            return count;
        },
        []
    );

    const nextGeneration = useCallback(
        (grid: boolean[][], cols: number, rows: number) => {
            const newGrid: boolean[][] = [];
            for (let i = 0; i < cols; i++) {
                newGrid[i] = [];
                for (let j = 0; j < rows; j++) {
                    const neighbors = countNeighbors(grid, i, j, cols, rows);
                    const alive = grid[i][j];

                    if (alive && (neighbors === 2 || neighbors === 3)) {
                        newGrid[i][j] = true;
                    } else if (!alive && neighbors === 3) {
                        newGrid[i][j] = true;
                    } else {
                        newGrid[i][j] = false;
                    }
                }
            }
            return newGrid;
        },
        [countNeighbors]
    );

    const draw = useCallback(
        (
            ctx: CanvasRenderingContext2D,
            grid: boolean[][],
            cols: number,
            rows: number,
            width: number,
            height: number
        ) => {
            ctx.clearRect(0, 0, width, height);

            ctx.strokeStyle = GRID_COLOR;
            ctx.lineWidth = 0.5;

            for (let i = 0; i <= cols; i++) {
                ctx.beginPath();
                ctx.moveTo(i * CELL_SIZE, 0);
                ctx.lineTo(i * CELL_SIZE, height);
                ctx.stroke();
            }

            for (let j = 0; j <= rows; j++) {
                ctx.beginPath();
                ctx.moveTo(0, j * CELL_SIZE);
                ctx.lineTo(width, j * CELL_SIZE);
                ctx.stroke();
            }

            const centerX = width / 2;
            const centerY = height / 2;
            const quietRadius = Math.min(width, height) * 0.28;
            const fadeRadius = Math.min(width, height) * 0.52;

            for (let i = 0; i < cols; i++) {
                for (let j = 0; j < rows; j++) {
                    if (grid[i][j]) {
                        const cellX = i * CELL_SIZE + CELL_SIZE / 2;
                        const cellY = j * CELL_SIZE + CELL_SIZE / 2;
                        const distance = Math.hypot(cellX - centerX, cellY - centerY);
                        const fade = Math.min(
                            1,
                            Math.max(0.18, (distance - quietRadius) / (fadeRadius - quietRadius))
                        );

                        ctx.fillStyle = `rgba(${ALIVE_COLOR}, ${ALIVE_ALPHA * fade})`;
                        ctx.fillRect(
                            i * CELL_SIZE + 1,
                            j * CELL_SIZE + 1,
                            CELL_SIZE - 2,
                            CELL_SIZE - 2
                        );
                    }
                }
            }
        },
        []
    );

    useEffect(() => {
        const canvas = canvasRef.current;
        if (!canvas) return;

        const ctx = canvas.getContext('2d');
        if (!ctx) return;
        const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;

        const resize = () => {
            const width = window.innerWidth;
            const height = window.innerHeight;
            const dpr = window.devicePixelRatio || 1;

            canvas.width = width * dpr;
            canvas.height = height * dpr;
            canvas.style.width = `${width}px`;
            canvas.style.height = `${height}px`;

            ctx.setTransform(dpr, 0, 0, dpr, 0, 0);

            const cols = Math.ceil(width / CELL_SIZE);
            const rows = Math.ceil(height / CELL_SIZE);

            gridRef.current = initializeGrid(cols, rows);
        };

        resize();
        window.addEventListener('resize', resize);

        const animate = (timestamp: number) => {
            const width = canvas.clientWidth;
            const height = canvas.clientHeight;
            const cols = Math.ceil(width / CELL_SIZE);
            const rows = Math.ceil(height / CELL_SIZE);

            if (timestamp - lastUpdateRef.current > UPDATE_INTERVAL) {
                gridRef.current = nextGeneration(gridRef.current, cols, rows);
                lastUpdateRef.current = timestamp;
            }

            draw(ctx, gridRef.current, cols, rows, width, height);
            animationRef.current = requestAnimationFrame(animate);
        };

        if (prefersReducedMotion) {
            const width = canvas.clientWidth;
            const height = canvas.clientHeight;
            const cols = Math.ceil(width / CELL_SIZE);
            const rows = Math.ceil(height / CELL_SIZE);

            draw(ctx, gridRef.current, cols, rows, width, height);
            return () => {
                window.removeEventListener('resize', resize);
            };
        }

        animationRef.current = requestAnimationFrame(animate);

        return () => {
            window.removeEventListener('resize', resize);
            cancelAnimationFrame(animationRef.current);
        };
    }, [initializeGrid, nextGeneration, draw]);

    return (
        <canvas ref={canvasRef} className="fixed inset-0 pointer-events-none z-0" tabIndex={-1} />
    );
};

export default GameOfLife;
