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

## Despliegue con StaticDeploy

Este proyecto está estructurado para ser fácilmente desplegado utilizando StaticDeploy u otro servicio similar de alojamiento estático.

Para desplegar:

1. Clone el repositorio
2. Configure su servicio de despliegue estático para apuntar al directorio raíz del proyecto
3. Los prototipos serán accesibles mediante las rutas respectivas (ej: `/prototypes/kpi-dashboard/`)

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