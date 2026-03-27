# GuitarLA

Una aplicación web para mostrar y gestionar una colección de guitarras. Construida con React y Vite, ofrece una interfaz intuitiva para explorar diferentes modelos de guitarras con sus precios y características.

Este proyecto está orientado a práctica de frontend moderno: composición de componentes, manejo de estado, persistencia en `localStorage` y flujo de desarrollo con herramientas actuales.

## 🚀 Características

- **Interfaz moderna**: Diseño responsivo enfocado en una experiencia clara en desktop y mobile.
- **Componentes reutilizables**: Arquitectura modular con React para facilitar mantenimiento y escalabilidad.
- **Rendimiento optimizado**: Desarrollado con Vite para builds rápidos y recarga en caliente.
- **Experiencia de desarrollo**: ESLint integrado para mantener consistencia y calidad de código.

## 🛠️ Tecnologías Utilizadas

- **React 19**: Biblioteca de JavaScript para construir interfaces de usuario basadas en componentes.
- **Vite**: Herramienta de desarrollo y build ultrarrápida para proyectos modernos.
- **CSS moderno**: Estilos y layout responsivo con clases utilitarias del proyecto.
- **ESLint**: Linting para mantener código limpio, legible y consistente.

## ✅ Requisitos Previos

Antes de ejecutar el proyecto, asegúrate de tener instalado:

- `Node.js` (versión LTS recomendada)
- `npm` (incluido con Node.js)

## 📦 Instalación

1. Clona el repositorio:
```bash
git clone <url-del-repositorio>
cd guitarla
```

2. Instala las dependencias:
```bash
npm install
```

3. Inicia el servidor de desarrollo:
```bash
npm run dev
```

4. Abre tu navegador en `http://localhost:5173`

## 🏃‍♂️ Scripts Disponibles

- `npm run dev` - Inicia el servidor de desarrollo.
- `npm run build` - Construye la aplicación para producción.
- `npm run lint` - Ejecuta ESLint para verificar el código.
- `npm run preview` - Levanta una vista previa de la build de producción.

## 📁 Estructura del Proyecto

```bash
guitarla/
├── public/
│   └── img/               # Imágenes de las guitarras
├── src/
│   ├── components/        # Componentes React reutilizables
│   │   ├── Guitar.jsx     # Tarjeta de guitarra y acción de agregar al carrito
│   │   └── Header.jsx     # Encabezado y resumen/interacción del carrito
│   ├── data/
│   │   └── db.js          # Datos fuente de guitarras
│   ├── App.jsx            # Estado global de la app y lógica del carrito
│   ├── main.jsx           # Punto de entrada
│   └── index.css          # Estilos globales
├── index.html             # HTML principal
├── vite.config.js         # Configuración de Vite
├── package.json           # Dependencias y scripts
└── eslint.config.js       # Configuración de ESLint
```

## 🎸 Funcionalidades

- **Visualización de guitarras**: Muestra una colección de guitarras con imagen, nombre, descripción y precio.
- **Carrito de compras**: Permite agregar productos, incrementar/disminuir cantidades y eliminar elementos.
- **Límites de cantidad**: Controla mínimo y máximo por producto para evitar valores inválidos.
- **Persistencia local**: Conserva el carrito entre sesiones usando `localStorage`.
- **Diseño responsivo**: Se adapta a diferentes tamaños de pantalla.

## 🔧 Flujo de Trabajo Recomendado

1. Ejecuta `npm run dev` para trabajar en desarrollo.
2. Valida calidad con `npm run lint`.
3. Genera versión de producción con `npm run build`.
4. Revisa el resultado final con `npm run preview`.

## 🤝 Contribución

Las contribuciones son bienvenidas. Por favor, abre un issue primero para discutir los cambios que deseas realizar.

Si contribuyes con código, procura:

- Mantener el estilo actual del proyecto.
- Ejecutar `npm run lint` antes de proponer cambios.
- Describir claramente el objetivo del cambio en tu PR.

## 📄 Licencia

Este proyecto está bajo la Licencia MIT.
