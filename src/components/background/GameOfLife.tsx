import { useCallback, useEffect, useRef } from 'react';

const CELL_SIZE = 12;
const ALIVE_COLOR = 'rgba(255, 255, 255, 0.06)';
const GRID_COLOR = 'rgba(255, 255, 255, 0.02)';

export const GameOfLife = () => {
    const canvasRef = useRef<HTMLCanvasElement>(null);
    const gridRef = useRef<boolean[][]>([]);
    const animationRef = useRef<number>(0);
    const lastUpdateRef = useRef<number>(0);
    const UPDATE_INTERVAL = 150; // ms between generations

    const initializeGrid = useCallback((cols: number, rows: number) => {
        const grid: boolean[][] = [];
        for (let i = 0; i < cols; i++) {
            grid[i] = [];
            for (let j = 0; j < rows; j++) {
                // Sparse initialization - ~8% alive cells
                grid[i][j] = Math.random() < 0.08;
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

            // Draw grid lines (very subtle)
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

            // Draw alive cells
            ctx.fillStyle = ALIVE_COLOR;
            for (let i = 0; i < cols; i++) {
                for (let j = 0; j < rows; j++) {
                    if (grid[i][j]) {
                        ctx.fillRect(i * CELL_SIZE, j * CELL_SIZE, CELL_SIZE, CELL_SIZE);
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

        const resize = () => {
            const width = window.innerWidth;
            const height = window.innerHeight;
            const dpr = window.devicePixelRatio || 1;

            canvas.width = width * dpr;
            canvas.height = height * dpr;
            canvas.style.width = `${width}px`;
            canvas.style.height = `${height}px`;

            ctx.scale(dpr, dpr);

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
