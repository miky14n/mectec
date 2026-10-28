# Instrucciones del repositorio

## Arquitectura y nombres

- El código de aplicación vive bajo `src/`; los recursos estáticos consumidos por URL viven en `public/`.
- Las rutas visibles para usuarios se escriben en español bajo `src/app/` (por ejemplo, `src/app/sistema/informes/nuevo/`).
- Mantener una única carpeta `src/components/`. Agrupar sus componentes compartidos por área (`marketing/`, `technical-reports/`, `vehicle-receptions/`, `ui/`, `shared/`); no crear una carpeta `components/` dentro de cada área.
- No introducir una carpeta `features/`. Los componentes se mantienen bajo `src/components/`; las validaciones compartidas bajo `src/schemas/`; los tipos bajo `src/types/`; las operaciones de servidor bajo `src/actions/`; y las integraciones privadas bajo `src/server/`.
- Los nombres internos de archivos, componentes, funciones, tipos y variables se escriben en inglés. Los textos visibles y las rutas para clientes se escriben en español.
- Mantener separadas la ficha de recepción (`vehicle-receptions`) y el informe técnico (`technical-reports`): son documentos y procesos distintos.
- Las carpetas de infraestructura como `app`, `components`, `schemas`, `types`, `server`, `config` y `lib` pueden llevar nombres técnicos en inglés; las carpetas de rutas y pantallas que ve el cliente deben estar en español.

## PWA y estilos

- El producto debe funcionar como PWA: interfaz móvil primero, instalable y con una experiencia de respaldo sin conexión.
- Construir y adaptar las vistas con Tailwind CSS; evitar hojas de estilo por componente salvo que una necesidad concreta no se pueda resolver bien con utilidades.
- Las vistas operativas deben ser utilizables con cámara y controles táctiles en celulares, además de adaptarse a tabletas y escritorio.
- No almacenar en caché informes, datos de clientes, respuestas autenticadas ni fotografías privadas en el service worker. Mantener el borrador local en almacenamiento del navegador hasta que se implemente sincronización segura.

## Ejecución de procesos

- No iniciar servidores, procesos persistentes, instalaciones de dependencias, migraciones, despliegues ni otras operaciones que el usuario pueda ejecutar manualmente, salvo que sean necesarios para completar la tarea o el usuario los solicite.
- Para verificaciones rutinarias que no sean indispensables, indicar el comando para que el usuario lo ejecute manualmente en lugar de iniciarlo.
- No usar procesos pesados o de larga duración para inspecciones que puedan resolverse leyendo el código o usando una comprobación puntual.

## Archivos locales y control de versiones

- Antes de crear un archivo, clasificarlo por su finalidad y reproducibilidad.
- Mantener fuera de GitHub secretos, archivos `.env`, credenciales, documentos privados del cliente, configuraciones propias de una máquina, bases de datos locales, cachés, dependencias, compilaciones, logs y artefactos desechables de verificación.
- Guardar el trabajo temporal de la IA en `.local/` o `tmp/`. Guardar capturas en `screenshots/`, trazas en `traces/`, resultados de pruebas en `test-results/` y reportes generados en `generated-reports/`. Estas rutas son locales y están ignoradas por Git.
- No copiar cotizaciones, fichas reales, fotografías de clientes ni otros documentos privados dentro de rutas versionadas. Si se necesita una copia local para trabajar, usar `resources-private/` y datos anonimizados.
- Mantener versionados el código fuente, los activos públicos necesarios, las migraciones de base de datos, los manifiestos y archivos de bloqueo de dependencias, la documentación mantenida, las pruebas automatizadas y los fixtures intencionales y anonimizados.
- No ignorar de forma amplia `app/`, `components/`, `lib/`, `public/`, `tests/`, `scripts/` ni `docs/`. Un archivo generado debe versionarse cuando la aplicación lo necesita y un clon limpio no puede regenerarlo de forma confiable.
- Antes de finalizar una tarea que cree archivos, revisar `git status --short`. Para cada archivo nuevo, decidir explícitamente si debe versionarse o permanecer local. Si es local y todavía no está cubierto, agregar a `.gitignore` la regla más específica posible.
- Nunca ejecutar `git add`, crear commits, borrar archivos del usuario ni dejar de rastrear archivos existentes salvo solicitud expresa.

## Verificación mínima antes de entregar cambios

- Ejecutar `npm run lint` o `npm run build` solo si el usuario solicita verificación o si hace falta para resolver una duda concreta que impida completar correctamente el cambio; en los demás casos, proporcionar el comando para ejecución manual.
- Ejecutar las pruebas específicas añadidas o afectadas por el cambio. El código de las pruebas y sus fixtures reutilizables debe quedar versionado; sus capturas, trazas, cobertura y reportes deben permanecer locales.
- Comprobar con `git diff --check` que no existan errores de espacios o parches mal formados.
- Verificar con `git status --short` que no aparezcan secretos, documentos privados ni artefactos desechables.
- Cuando se agregue una regla de exclusión, validarla con `git check-ignore -v -- <ruta>` y comprobar que archivos fuente vecinos sigan siendo elegibles para Git.
