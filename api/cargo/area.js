import express from 'express';

const router = express.Router();

// curl -X POST http://localhost:3005/geometry/area/rectangle -H "Content-Type: application/json" -d "{\"length\": 5, \"width\": 10}"

router.post('/geometry/area/rectangle', (req, res) => {
    const length = req.body.length;
    const width = req.body.width;
    if (typeof length !== 'number' || typeof width !== 'number') {
        return res.status(400).send('Invalid input. Please provide both length and width as numbers.');
    }
    const area = length * width;
    res.send(`Area: ${area}`);
});

// curl -X POST http://localhost:3005/geometry/area/square -H "Content-Type: application/json" -d "{\"side\": 4}"

router.post('/geometry/area/square', (req, res) => {
    const side = req.body.side;
    if (typeof side !== 'number') {
        return res.status(400).send('Invalid input. Please provide side as a number.');
    }
    const area = side ** 2;
    res.send(`Area: ${area}`);
});

// curl -X POST http://localhost:3005/geometry/area/triangle -H "Content-Type: application/json" -d "{\"base\": 6, \"height\": 8}"

router.post('/geometry/area/triangle', (req, res) => {
    const base = req.body.base;
    const height = req.body.height;
    if (typeof base !== 'number' || typeof height !== 'number') {
        return res.status(400).send('Invalid input. Please provide both base and height as numbers.');
    }
    const area = 0.5 * base * height;
    res.send(`Area: ${area}`);
});

// curl -X POST http://localhost:3005/geometry/area/circle -H "Content-Type: application/json" -d "{\"radius\": 3}"

router.post('/geometry/area/circle', (req, res) => {
    const radius = req.body.radius;
    if (typeof radius !== 'number') {
        return res.status(400).send('Invalid input. Please provide radius as a number.');
    }
    const area = Math.PI * radius ** 2;
    res.send(`Area: ${area}`);
});

// curl -X POST http://localhost:3005/geometry/area/trapezoid -H "Content-Type: application/json" -d "{\"a\": 5, \"b\": 7, \"height\": 4}"

router.post('/geometry/area/trapezoid', (req, res) => {
    const a = req.body.a;
    const b = req.body.b;
    const height = req.body.height;
    if (typeof a !== 'number' || typeof b !== 'number' || typeof height !== 'number') {
        return res.status(400).send('Invalid input. Please provide a, b, and height as numbers.');
    }
    const area = 0.5 * (a + b) * height;
    res.send(`Area: ${area}`);
});

// curl -X POST http://localhost:3005/geometry/area/ellipse -H "Content-Type: application/json" -d "{\"a\": 3, \"b\": 4}"

router.post('/geometry/area/ellipse', (req, res) => {
    const a = req.body.a;
    const b = req.body.b;
    if (typeof a !== 'number' || typeof b !== 'number') {
        return res.status(400).send('Invalid input. Please provide both semi-major and semi-minor axes as numbers.');
    }
    const area = Math.PI * a * b;
    res.send(`Area: ${area}`);
});

export default router;
