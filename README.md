# CV de Hernán Darío Trullo - Página Web Estática

Esta es una página web estática que presenta el currículum vitae profesional de Hernán Darío Trullo, Ingeniero de IA y Backend Developer.

## 🚀 Características

- **Diseño Responsivo**: Se adapta perfectamente a dispositivos móviles, tablets y escritorio
- **Impresión Optimizada**: CSS especialmente diseñado para impresión en PDF
- **Diseño Moderno**: Interfaz limpia y profesional con dos columnas
- **Iconos Font Awesome**: Iconos modernos para contacto y redes sociales
- **Fácil Personalización**: Código HTML y CSS bien estructurado

## 📁 Estructura de Archivos

```
cv_page/
├── index.html    # Página principal del CV
├── style.css     # Estilos y diseño
└── README.md     # Este archivo
```

## 🎨 Paleta de Colores

- **Primary**: RGB(45, 50, 80) - Azul oscuro elegante
- **Accent**: RGB(230, 126, 34) - Naranja para detalles
- **Dark Text**: RGB(40, 40, 40) - Texto principal

## 📝 Cómo Usar

### Visualización Local

1. Abre el archivo `index.html` directamente en tu navegador web
2. O utiliza un servidor local:
   ```bash
   # Con Python
   python -m http.server 8000
   
   # Con Node.js (http-server)
   npx http-server
   ```

### Personalización

- **Foto de Perfil**: Agrega una imagen real reemplazando el placeholder en el HTML
- **Colores**: Modifica las variables CSS en `:root` en `style.css`
- **Contenido**: Edita el texto directamente en `index.html`

### Exportar a PDF

1. Abre la página en tu navegador
2. Usa la función de imprimir (`Ctrl+P` o `Cmd+P`)
3. Selecciona "Guardar como PDF"
4. Los estilos de impresión están optimizados para un resultado profesional

## 🌐 Despliegue

### GitHub Pages
```bash
git add .
git commit -m "Add CV page"
git push origin main
```
Luego activa GitHub Pages en la configuración del repositorio.

### Netlify
Simplemente arrastra la carpeta `cv_page` al panel de Netlify.

### Vercel
```bash
vercel deploy
```

## 📱 Responsive

La página se adapta automáticamente a:
- 📱 Móviles (< 768px): Una columna
- 💻 Desktop (> 768px): Dos columnas

## 🔗 Enlaces

- LinkedIn: [Hernan Trullo](https://www.linkedin.com/in/hernan-trullo-87111b210/)
- GitHub: [HernanTrullo](https://github.com/HernanTrullo)
- Email: trullodario@gmail.com

---

**Basado en**: CV LaTeX original en `../cv_latex/main.tex`
