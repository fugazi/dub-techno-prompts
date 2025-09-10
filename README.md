# Astro Starter Kit: Basics

```sh
npm create astro@latest -- --template basics
```

> 🧑‍🚀 **Seasoned astronaut?** Delete this file. Have fun!

## 🚀 Project Structure

Inside of your Astro project, you'll see the following folders and files:

```text
/
├── public/
│   └── favicon.svg
├── src
# Dub Techno Prompts 🎛️✨

Repositorio personal para almacenar prompts de producción musical y mostrar respuestas generadas por distintos modelos de lenguaje (ChatGPT, Gemini, Claude, DeepSeek, etc.). Este proyecto está pensado como un catálogo estático y fácil de desplegar — ideal para referencia rápida y experimentación con prompts.

---

## Contenido rápido

- **Estado:** En desarrollo
- **Stack:** `Astro` + `TypeScript` • `TailwindCSS` v4
- **Objetivo:** Mostrar prompts y respuestas de LLMs en una interfaz estática, accesible y extensible.

---

## Tabla de contenidos

- [Características](#caracteristicas)
- [Tecnologías](#tecnologias)
- [Estructura del proyecto](#estructura-del-proyecto)
- [Instalación y uso](#instalacion-y-uso)
- [Desarrollo](#desarrollo)
- [Cómo contribuir](#como-contribuir)
- [Licencia](#licencia)

---

## Características 🚀

- Interfaz estática generada con `Astro` para rendimiento y simplicidad.
- Componentes reutilizables: tarjetas de prompt y pestañas de respuestas.
- Datos organizados en `src/content/` y `src/data/` para carga simple y versionado.
- Estilos modernos con `TailwindCSS` y paleta personalizada (deep / neon / bass).

---

## Tecnologías 🧰

- Framework: `Astro` + `TypeScript`
- Estilos: `TailwindCSS` v4
- Arquitectura: Static Site Generation (SSG)

---

## Estructura del proyecto 📁

Raíz:

- `astro.config.mjs` — Configuración principal de Astro
- `package.json` — Dependencias y scripts
- `tailwind.config.ts` — Configuración de Tailwind
- `src/` — Código fuente
	- `components/` — Componentes UI (`PromptCard.astro`, `ResponseTabs.astro`)
	- `content/` — Contenido en Markdown (categorías y prompts)
	- `data/` — Datos TypeScript auxiliares
	- `layouts/` — Layouts de páginas
	- `pages/` — Rutas públicas (`index.astro`, `prompt/[id].astro`)

Esta estructura está diseñada para facilitar la edición de contenido (Markdown) y la reutilización de componentes.

---

## Instalación y uso (rápido) ⚙️

Requisitos previos: `Node.js` 18+ y `npm` o `pnpm`/`yarn`.

Para instalar dependencias y ejecutar en modo desarrollo, desde la raíz del repo:

```powershell
# Instalar dependencias
npm install

# Ejecutar servidor de desarrollo
npm run dev

# Construir para producción
npm run build

# Previsualizar la construcción de producción
npm run preview
```

Si usas `pnpm` o `yarn` sustituye `npm` por el gestor que prefieras.

---

## Desarrollo 🛠️

- Mantén el contenido en `src/content/` en Markdown para categorías y prompts.
- Componentes UI en `src/components/` deben ser pequeños y contener sólo la lógica de presentación.
- Tipos TypeScript en `src/types/` para documentar la forma de `Prompt` y `LLMResponse`.

Buenas prácticas recomendadas:

- Usar commits pequeños y descriptivos.
- Mantener los cambios en contenido (Markdown) separados de cambios en UI o lógica.
- Añadir pruebas o validaciones ligeras si añades transformaciones de datos.

---

## Cómo contribuir 🤝

1. Haz un fork del repositorio.
2. Crea una rama con una descripción clara: `feature/<descripcion>` o `fix/<descripcion>`.
3. Abre un PR con la explicación del cambio y capturas si aplica.

Guidelines para contribuciones de contenido:

- Añade nuevas entradas en `src/content/prompts/` en formato Markdown.
- Sigue la estructura existente para metadatos (categoría, tags, versiones).

---

## Licencia 📄

Este proyecto está licenciado bajo la Licencia MIT — consulta el archivo `LICENSE` para el texto completo.

---

## Contacto ✉️

Si quieres colaborar o tienes preguntas, abre un issue o PR en este repositorio.

---

_Notas finales:_ Reemplaza los metadatos de la licencia (`LICENSE`) con tu nombre si quieres que aparezca tu autoría.

<!-- CI trigger -->
Última acción: reintentar despliegue (CI trigger).
