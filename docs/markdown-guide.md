# Guía de Uso de Markdown

Esta guía explica cómo usar la sintaxis Markdown para crear contenido enriquecido en los prompts y respuestas del proyecto Dub Techno Prompts.

## Encabezados

```markdown
# Encabezado Principal (H1)
## Encabezado Secundario (H2)
### Encabezado Terciario (H3)
#### Encabezado Cuaternario (H4)
```

## Texto en Negrita e Itálica

```markdown
**Texto en negrita**
*Texto en itálica*
***Texto en negrita e itálica***
```

## Listas

### Lista No Ordenada
```markdown
- Elemento 1
- Elemento 2
  - Sub-elemento 2.1
  - Sub-elemento 2.2
- Elemento 3
```

### Lista Ordenada
```markdown
1. Primer elemento
2. Segundo elemento
3. Tercer elemento
```

## Enlaces

```markdown
[Texto del enlace](https://ejemplo.com)
[Enlace con título](https://ejemplo.com "Título del enlace")
```

## Código

### Código en línea
```markdown
Usa la función `marked()` para parsear Markdown.
```

### Bloque de código
```markdown
```javascript
function parseMarkdown(text) {
  return marked(text);
}
```
```

## Tablas

```markdown
| Encabezado 1 | Encabezado 2 | Encabezado 3 |
|--------------|--------------|--------------|
| Celda 1      | Celda 2      | Celda 3      |
| Celda 4      | Celda 5      | Celda 6      |
```

## Citas

```markdown
> Esta es una cita.
>
> Puede tener múltiples párrafos.
```

## Líneas Horizontales

```markdown
---
```

## Notas Importantes

- El contenido se renderiza con clases CSS `prose prose-invert` para mantener la consistencia visual del tema oscuro
- Las tablas incluyen atributos de accesibilidad automáticamente
- Los encabezados mantienen la jerarquía semántica correcta
- El parsing ocurre en tiempo de build, no afecta el rendimiento en runtime

## Ejemplos Prácticos

### Estructura de un Prompt Complejo

```markdown
# Guía Completa: Producción de Dub-Techno

## Resumen
Esta guía explica el proceso de creación de tracks de Dub-Techno usando MicroFreak.

## Lista de Elementos Necesarios

| Elemento | Descripción |
|----------|-------------|
| Kick     | Bombo profundo |
| Sub-Bass | Línea de bajo |
| Stab     | Acorde percusivo |

## Pasos a Seguir

1. **Configurar BPM**: Establecer tempo en 110 BPM
2. **Crear patches**: Diseñar sonidos en MicroFreak
3. **Programar secuencia**: Usar el secuenciador interno

### Tips Importantes
- Mantener el sub-bass mono para mejor definición
- Usar sidechain en el sub-bass
- Aplicar reverb en los elementos atmosféricos

> Recuerda: La paciencia es clave en la producción de Dub-Techno
```

Este formato permite crear documentación rica y profesional que se renderiza correctamente en el sitio.