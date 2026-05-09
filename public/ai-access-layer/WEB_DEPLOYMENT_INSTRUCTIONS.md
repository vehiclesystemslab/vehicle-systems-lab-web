# VEHICLE AI Access Layer Web Deployment

Este paquete esta preparado para subirse como una carpeta interna del sitio.

## Ruta esperada

Sube la carpeta completa `ai-access-layer` dentro de la carpeta publica de tu web para que quede asi:

```txt
/public/ai-access-layer/
```

o en hosting tradicional:

```txt
/public_html/ai-access-layer/
```

## URL final esperada

```txt
https://tudominio.com/ai-access-layer/
```

## Contenido que debe quedar dentro de esa carpeta

- `index.html`
- `llms.txt`
- `vehicle-response-contract.md`
- `vehicle-ai-ethics.md`
- `borda-milan-pyramid.md`
- `developer-letter.md`
- `README.md`
- `CITATION.cff`
- `CHANGELOG.md`
- `robots.txt`
- `sitemap.xml`
- `downloads/vehicle-ai-access-layer-v0.1.zip`

## Importante

- No subas solo `index.html`.
- No pongas estos archivos en la raiz del dominio si quieres conservar tu web actual.
- Este paquete ya usa enlaces relativos para funcionar dentro de `/ai-access-layer/`.

## Verificacion rapida

Despues de subirlo, prueba estas URLs:

- `https://tudominio.com/ai-access-layer/`
- `https://tudominio.com/ai-access-layer/llms.txt`
- `https://tudominio.com/ai-access-layer/vehicle-response-contract.md`
- `https://tudominio.com/ai-access-layer/downloads/vehicle-ai-access-layer-v0.1.zip`
