import express from 'express';
import { fileURLToPath } from 'url';
import { dirname, join } from 'path';
import { existsSync } from 'fs';

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

const app = express();
const PORT = process.env.PORT || 3000;

// Directorio donde están los archivos estáticos del build
const buildDir = join(__dirname, 'build', 'client');

// Servir archivos estáticos (JS, CSS, imágenes, etc.)
app.use(express.static(buildDir));

// Middleware para manejar el ruteo del lado cliente
app.use((req, res, next) => {
  const filePath = join(buildDir, req.path);
  
  // Si es un archivo que existe (como .js, .css, .ico, etc.), continuar con express.static
  if (existsSync(filePath) && !req.path.endsWith('/')) {
    return next();
  }
  
  // Para todas las rutas de visualización, servir el fallback SPA
  const fallbackPath = join(buildDir, '__spa-fallback.html');
  
  if (existsSync(fallbackPath)) {
    return res.sendFile(fallbackPath);
  }
  
  // Fallback si no existe el archivo SPA fallback
  const indexPath = join(buildDir, 'index.html');
  if (existsSync(indexPath)) {
    return res.sendFile(indexPath);
  }
  
  // Si nada más funciona, enviar 404
  res.status(404).send('Page not found');
});

app.listen(PORT, () => {
  console.log(`🚀 Server running on http://localhost:${PORT}`);
  console.log(`📁 Serving static files from: ${buildDir}`);
});
