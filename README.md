
# Dub Techno Prompts 🎛️✨

Repositorio personal para almacenar prompts de producción musical y mostrar respuestas generadas por distintos modelos de lenguaje (ChatGPT, Gemini, Claude, DeepSeek, etc.). Este proyecto está pensado como un catálogo estático y fácil de desplegar — ideal para referencia rápida y experimentación con prompts.

---

## Contenido rápido

- **Estado:** En desarrollo
- **Stack:** `Astro` + `TypeScript` • `TailwindCSS` v4
- **Objetivo:** Mostrar prompts y respuestas de LLMs en una interfaz estática, accesible y extensible.

---

## Refactorización Planificada: Soporte para Texto Enriquecido en ResponseTabs.astro 🎯

### Contexto del Problema
El componente `ResponseTabs.astro` actualmente renderiza el contenido de "The Prompt" únicamente como Markdown plano usando la librería `marked`. Esto limita la capacidad de incluir elementos de formato de texto enriquecido como tablas avanzadas, títulos, párrafos, textos en negrita/cursiva, listas, enlaces y otros elementos HTML avanzados.

### Objetivo
Permitir que la sección "The Prompt" admita un formato de texto más flexible y profesional, similar a un editor de texto enriquecido, sin perder la funcionalidad de Markdown donde sea necesario.

### Análisis de Opciones: Markdown vs. WYSIWYG
- **Opción Recomendada: Mantener y Potenciar Markdown** - Aprovechar el motor de renderizado de Astro para permitir componentes dentro del Markdown, ofreciendo flexibilidad sin sacrificar simplicidad.
- **Opción Alternativa: Editor WYSIWYG** - Complejidad excesiva para este proyecto, incompatible con el flujo actual de gestión de contenido.

### Plan Detallado de Refactorización

#### Paso 1: Modificar la Estructura del Contenido para Soportar Componentes
- [ ] Refactorizar `dub-techno-bass-programming.md` para mover el `prompt` al cuerpo del archivo.
- [ ] Extraer las `responses` a archivos individuales en una nueva colección.

#### Paso 2: Crear la Colección de Contenido `responses`
- [ ] Actualizar `src/content/content.config.ts` para definir la nueva colección con campo `promptId`.

#### Paso 3: Actualizar la Lógica de Renderizado
- [ ] Refactorizar `src/pages/prompt/[id].astro` para usar `<Content />` en lugar de `marked`.
- [ ] Refactorizar `src/components/ResponseTabs.astro` para renderizar las entradas de las respuestas usando `<Content />`.

#### Paso 4: (Opcional) Crear y Usar un Componente Personalizado
- [ ] Crear un componente de ejemplo como `<InfoBox.astro>`.
- [ ] Integrar el componente en uno de los archivos de contenido Markdown.

### Recomendaciones de Ejecución
- Realizar la refactorización en una nueva rama de Git.
- Comenzar con un solo prompt (`dub-techno-bass-programming.md`) para validar el enfoque.
- Considerar usar archivos `.mdx` para soporte más robusto de componentes.

---

## Licencia 📄

Este proyecto está licenciado bajo la Licencia MIT — consulta el archivo `LICENSE` para el texto completo.

---

## Contacto ✉️

Si quieres colaborar o tienes preguntas, abre un issue o PR en este repositorio.

---
