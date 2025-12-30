const http = require('http');
const fs = require('fs');
const path = require('path');

const PORT = 3500;

const MIME_TYPES = {
    '.html': 'text/html',
    '.css': 'text/css',
    '.js': 'application/javascript',
    '.json': 'application/json',
    '.png': 'image/png',
    '.jpg': 'image/jpeg',
    '.svg': 'image/svg+xml',
    '.ico': 'image/x-icon'
};

const server = http.createServer((req, res) => {
    let filePath = '.' + req.url;
    
    // Route par défaut vers index.html
    if (filePath === './') {
        filePath = './index.html';
    }
    
    // Si pas d'extension, chercher .html
    if (!path.extname(filePath)) {
        filePath += '.html';
    }
    
    const extname = String(path.extname(filePath)).toLowerCase();
    const contentType = MIME_TYPES[extname] || 'application/octet-stream';
    
    fs.readFile(filePath, (error, content) => {
        if (error) {
            if (error.code === 'ENOENT') {
                res.writeHead(404, { 'Content-Type': 'text/html' });
                res.end('<h1>404 - Page non trouvée</h1>', 'utf-8');
            } else {
                res.writeHead(500);
                res.end(`Erreur serveur: ${error.code}`, 'utf-8');
            }
        } else {
            res.writeHead(200, { 'Content-Type': contentType });
            res.end(content, 'utf-8');
        }
    });
});

server.listen(PORT, 'localhost', () => {
    console.log(`🚀 Serveur démarré sur http://localhost:${PORT}`);
    console.log(`📱 Pass Major - Site web professionnel`);
    console.log(`✨ Animations avancées activées`);
    console.log(`\n📄 Pages disponibles:`);
    console.log(`   - http://localhost:${PORT}/`);
    console.log(`   - http://localhost:${PORT}/nos-offres.html`);
    console.log(`   - http://localhost:${PORT}/challenge.html`);
    console.log(`   - http://localhost:${PORT}/contact.html`);
});

server.on('error', (error) => {
    if (error.code === 'EADDRINUSE') {
        console.error(`❌ Erreur: Le port ${PORT} est déjà utilisé.`);
        console.error(`   Essayez de tuer le processus ou utilisez un autre port.`);
    } else {
        console.error(`❌ Erreur serveur:`, error);
    }
    process.exit(1);
});
