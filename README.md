# Telas 3B - Demo de Gestión de Tareas (SENA)

Este proyecto es una demostración desarrollada para el SENA, orientada a la gestión de tareas en un entorno de manufactura textil. La aplicación simula el flujo de trabajo de una empresa ficticia llamada "Telas 3B" y permite visualizar y crear tareas relacionadas con la producción y administración de telas y uniformes.

## Objetivo

El objetivo de este demo es mostrar una interfaz moderna y funcional para la gestión de tareas, inventario y operarios, facilitando la visualización y organización de procesos productivos en el sector textil. No cuenta con backend ni almacenamiento real, por lo que los datos son simulados y no se guardan entre sesiones.

## Estructura de la aplicación

- **tareasadministrador.html**: Página principal de administración de tareas. Permite visualizar una tabla con tareas de ejemplo, filtrar por estado, navegar entre páginas y ver detalles básicos de cada tarea. Incluye filtros y tabs para simular la gestión real de tareas.

- **creartarea.html**: Formulario para la creación de nuevas tareas. Permite seleccionar tipo de tarea, color y tipo de tela, metros a cortar y asignar un operario. El campo "Project" se genera automáticamente. El formulario es solo visual y no guarda datos, ya que es una demo.

- **style/styles.css**: Archivo de estilos que define la apariencia moderna y limpia de la aplicación, incluyendo la barra lateral, cabeceras, tablas y formularios.

- **Javascript/script.js**: Controla la lógica de la tabla de tareas demo, la paginación y la interacción de los tabs en la vista de administración.

## Uso

1. Abre `tareasadministrador.html` para ver la tabla de tareas demo, navegar entre tabs y páginas, y explorar los filtros.
2. Abre `creartarea.html` para ver el formulario de creación de tareas y probar la selección de opciones. El título del formulario se actualiza dinámicamente según los valores elegidos.
3. No es necesario un servidor ni base de datos; todo funciona de manera local y visual.

## Público objetivo

Este demo está dirigido a instructores, aprendices y evaluadores del SENA, así como a cualquier persona interesada en la gestión de procesos productivos en el sector textil.

---
**Nota:** Este proyecto es solo una demostración visual y no está conectado a ningún sistema real de gestión de datos.
## Documentación de la página de Creación de Tarea

### Cambios realizados

- El formulario fue reorganizado en filas de dos columnas para alinear los campos relacionados.
- Los campos 'Tipo de tarea', 'Color de tela', 'Tipo de tela' y 'Asignar a' son ahora selectores desplegables (dropdowns).
- El campo 'Metros de tela a cortar' es numérico y solo acepta valores válidos.
- El campo 'Project' es de solo lectura y se genera automáticamente con un número aleatorio.
- El título superior se actualiza automáticamente según los valores seleccionados en los dropdowns.
- Se unificó la altura y el estilo de los inputs y selects para mantener la alineación visual.

### Uso

1. Selecciona el tipo de tarea y el color de tela en los dropdowns; el título se actualizará automáticamente.
2. Ingresa la cantidad de metros a cortar (solo números).
3. Selecciona el tipo de tela y el operario asignado.
4. El campo Project se genera automáticamente y no es editable.
5. Los datos se muestran alineados y con estilos consistentes para mejor experiencia visual.
# Telas 3B Vanilla

Este proyecto es una interfaz web de administración de tareas para Telas 3B, desarrollada con HTML, CSS y JavaScript puro (vanilla). Aquí encontrarás la estructura, estilos y lógica documentados en español.

## Estructura del proyecto

- `tareasadministrador.html`: Página principal con la estructura de la interfaz.
- `styles.css`: Estilos para el layout, componentes y responsividad.
- `script.js`: Lógica para la tabla de tareas, paginación y tabs.

## Descripción de la interfaz

- **Sidebar (menú lateral):** Navegación principal con acceso a Tareas, Inventario, Operarios, Usuarios y Configuración.
- **Navbar superior:** Barra fija en la parte superior con avatar y breadcrumb, separada visualmente con una línea morada.
- **Contenido principal:** Incluye la cabecera de la sección, tabs para filtrar tareas, filtros adicionales y la tabla de tareas con paginación.

## Comentarios en el código

Cada archivo contiene comentarios explicativos en español para facilitar la comprensión y el mantenimiento del código.

## Cómo usar

1. Clona este repositorio.
2. Abre `tareasadministrador.html` en tu navegador.
3. Modifica los archivos según tus necesidades.

---

### Créditos

Desarrollado por amonsalv para SENA - Telas 3B.
