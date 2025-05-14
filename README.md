# Naviio - Colección de Prototipos

Este repositorio contiene una colección de prototipos web para diversos proyectos, organizados para fácil navegación y despliegue.

## Estructura del Proyecto

```
naviio/
├── index.html                  # Página principal que lista todos los prototipos
├── prototypes/                 # Directorio principal de prototipos
│   ├── common/                 # Recursos compartidos entre prototipos
│   │   ├── css/                # Estilos CSS comunes
│   │   ├── js/                 # Scripts JavaScript comunes
│   │   └── img/                # Imágenes comunes
│   │
│   ├── kpi-dashboard/          # Prototipo de Dashboard de KPIs
│   │   ├── index.html          # Archivo HTML principal del prototipo
│   │   ├── css/                # Estilos específicos del prototipo
│   │   ├── js/                 # Scripts específicos del prototipo
│   │   └── img/                # Imágenes específicas del prototipo
│   │
│   └── [otros-prototipos]/     # Otros prototipos siguiendo la misma estructura
│
└── README.md                   # Este archivo
```

## Prototipos Disponibles

### Dashboard CEO Transporte
Un dashboard interactivo que muestra KPIs y métricas clave para la gestión de operaciones de transporte. Incluye visualizaciones para ventas, utilización de flota, entregas a tiempo y otros indicadores importantes.

## Despliegue con GitHub Pages

Este proyecto está estructurado para ser fácilmente desplegado utilizando GitHub Pages.

Para acceder al sitio deployed con GitHub Pages:
1. Visita https://rsampayo.github.io/naviio-prototypes/

## Despliegue con StaticDeploy

Este proyecto también puede ser desplegado utilizando [StaticDeploy](https://github.com/staticdeploy/staticdeploy), una plataforma open-source para desplegar aplicaciones web estáticas.

### Despliegue a public.ka-ve.io

Para desplegar el proyecto a nuestra instancia de StaticDeploy en public.ka-ve.io:

1. Asegúrate de tener Node.js instalado (versión 12 o superior)
2. Ejecuta el script de despliegue incluido:
   ```bash
   ./deploy-to-ka-ve.sh
   ```
3. Proporciona tu token de API de StaticDeploy cuando se te solicite
4. El sitio estará disponible en https://public.ka-ve.io/

### Despliegue manual con StaticDeploy CLI

Si necesitas desplegar manualmente:

1. Instala las dependencias:
   ```bash
   npm install
   ```

2. Construye el bundle:
   ```bash
   npm run build
   ```

3. Define las variables de entorno necesarias:
   ```bash
   export STATICDEPLOY_API_URL="https://public.ka-ve.io/api"
   export STATICDEPLOY_API_TOKEN="tu-token-aqui"
   ```

4. Despliega el bundle:
   ```bash
   npm run deploy
   ```

## Desarrollo Local

Para ejecutar este proyecto localmente:

1. Clone el repositorio
2. Abra el archivo `index.html` en su navegador, o
3. Configure un servidor web local (como Live Server en VSCode) para servir el directorio raíz

## Agregar Nuevos Prototipos

Para agregar un nuevo prototipo:

1. Cree un nuevo directorio dentro de `/prototypes/` siguiendo la estructura establecida
2. Actualice el archivo `index.html` raíz para incluir un enlace al nuevo prototipo
3. Asegúrese de mantener la separación de recursos (CSS, JS, imágenes) dentro del directorio del prototipo

## Licencia

Este proyecto es privado y confidencial. 