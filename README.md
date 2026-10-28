# Vallecito

Aplicación estática en español para planificar cultivos de Stardew Valley 1.6 y llevar el progreso del Centro Comunitario. No necesita instalación ni servidor: abre `index.html` en el navegador o publícala con GitHub Pages.

## Funciones
- Comparador de cultivos por estación, día, oro, fertilizante, energía y reinversión; muestra disponibilidad según fecha, tienda y año.
- Plan diario con ruta del día, horario de tiendas hoy y mañana, eventos, rutina condicionada a la partida y avance automático de fecha.
- Cierre de jornada: sincroniza el oro con el simulador, reinicia la energía diaria y acredita al día siguiente los envíos registrados.
- Bitácora de hallazgos con precios base, sugerencia de guardar/vender/enviar e inventario de recursos registrados.
- Precios de cultivos por calidad; estimación de maduración, rebrote y ganancia neta.
- Checklist del Centro Comunitario con búsqueda, filtro de pendientes/completados, organización por paquete/nombre/estación/habilidad y modo sin spoilers.
- Guardado local, exportación e importación del progreso JSON, el calendario, el inventario y la bitácora.
- Diseño adaptable, modo oscuro y guía rápida.

## Publicar con GitHub Pages
Sube `index.html`, `style.css` y `app.js` a un repositorio y en **Settings → Pages** selecciona la rama principal y la carpeta `/ (root)`.

Los datos del checklist corresponden a paquetes estándar; los paquetes remixed o mods pueden cambiar los requisitos. El cálculo de calidad usa probabilidad media por nivel de agricultura y fertilizante. Los cultivos de semillas encontradas se limitan a una planta. El simulador no reproduce cada detalle de una partida (por ejemplo, energía de arar, lluvia, cultivos gigantes o bonificaciones de comida).
