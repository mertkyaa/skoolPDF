require('dotenv').config();
const express = require('express');
const cors    = require('cors');
const fs      = require('fs');
const path    = require('path');
const pdfRoutes = require('./routes/pdfRoutes');

const app  = express();
const PORT = process.env.PORT || 5005;

// ─── CORS ─────────────────────────────────────────────────────────────────────
// Production: same-origin only (Express serves the frontend build).
// Development: allow the Vite dev server.
const allowedOrigins = process.env.ALLOWED_ORIGINS
    ? process.env.ALLOWED_ORIGINS.split(',').map(o => o.trim())
    : [];

app.use(cors({
    origin: (origin, cb) => {
        if (!origin) return cb(null, true);
        if (origin.startsWith('http://localhost')) return cb(null, true);
        // Allow all Vercel preview + production deployments
        if (origin.endsWith('.vercel.app')) return cb(null, true);
        // Allow explicitly listed origins (e.g. custom domain skoolpdf.com)
        if (allowedOrigins.length && allowedOrigins.includes(origin)) return cb(null, true);
        // If no explicit allowlist, allow all
        if (!allowedOrigins.length) return cb(null, true);
        cb(new Error('Not allowed by CORS'));
    },
    methods: ['GET', 'POST'],
    allowedHeaders: ['Content-Type'],
}));

app.use(express.json());

// Main PDF Router
app.use('/api/pdf', pdfRoutes);

// Ensure uploads dir exists
const uploadsDir = path.join(__dirname, 'uploads');
if (!fs.existsSync(uploadsDir)) fs.mkdirSync(uploadsDir);

// Production: serve React build
app.use(express.static(path.join(__dirname, '../frontend/dist')));
app.get(/^(?!\/api).*/, (req, res) => {
    res.sendFile(path.join(__dirname, '../frontend/dist/index.html'));
});

app.listen(PORT, () => {
    console.log(`skoolPDF backend listening on port ${PORT}`);
});
