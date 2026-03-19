# GuitarLA

Una aplicación web moderna para mostrar y gestionar una colección de guitarras. Construida con React y Vite, ofrece una interfaz intuitiva para explorar diferentes modelos de guitarras con sus precios y características.

## 🚀 Características

- **Interfaz moderna**: Diseño responsivo con Bootstrap
- **Componentes reutilizables**: Arquitectura modular con React
- **Rendimiento optimizado**: Desarrollado con Vite para builds rápidos
- **Experiencia de desarrollo**: Hot reload y ESLint integrado

## 🛠️ Tecnologías Utilizadas

- **React 19**: Framework de JavaScript para interfaces de usuario
- **Vite**: Herramienta de build y desarrollo ultrarrápida
- **Bootstrap**: Framework CSS para diseño responsivo
- **ESLint**: Linting para mantener código limpio

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

- `npm run dev` - Inicia el servidor de desarrollo
- `npm run build` - Construye la aplicación para producción
- `npm run lint` - Ejecuta ESLint para verificar el código
- `npm run preview` - Vista previa de la build de producción

## 📁 Estructura del Proyecto

```
guitarla/
├── public/
│   └── img/          # Imágenes de las guitarras
├── src/
│   ├── components/   # Componentes React
│   │   ├── Guitar.jsx    # Componente para mostrar cada guitarra
│   │   └── Header.jsx    # Componente del encabezado
│   ├── data/
│   │   └── db.js         # Datos de las guitarras
│   ├── App.jsx           # Componente principal
│   ├── main.jsx          # Punto de entrada
│   └── index.css         # Estilos globales
├── index.html            # HTML principal
├── vite.config.js        # Configuración de Vite
├── package.json          # Dependencias y scripts
└── eslint.config.js      # Configuración de ESLint
```

## 🎸 Funcionalidades

- **Visualización de guitarras**: Muestra una colección de guitarras con imágenes, nombres y precios
- **Diseño responsivo**: Se adapta a diferentes tamaños de pantalla
- **Botones de acción**: "Agregar al Carrito" para futuras funcionalidades de e-commerce

## 🤝 Contribución

Las contribuciones son bienvenidas. Por favor, abre un issue primero para discutir los cambios que deseas realizar.

## 📄 Licencia

Este proyecto está bajo la Licencia MIT. 
