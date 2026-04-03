---
id: dub-techno-bass-programming-z-ai-glm-4-5
promptId: dub-techno-bass-programming
model: Z.ai
version: GLM-4.5
timestamp: 2025-09-10T14:38:00Z
---

# Guía Completa: Creación de Dub-Techno con Arturia MicroFreak y Ableton Live

## Resumen rápido
Crearemos un track de Dub-Techno minimalista con atmósferas espaciales, ritmos hipnóticos y efectos de delay prominentes, inspirado en el sonido clásico de Basic Channel y Rhythm & Sound, utilizando exclusivamente el MicroFreak como fuente de sonido.

## Lista de pistas/elementos necesarios
- Kick (bombo)
- Sub/Bass
- Stab (golpes de sonido)
- Chords (acordes)
- Pad (atmósfera)
- Hi-hat
- Percusión (perc)
- Ambient textures (texturas ambientales)
- Dub delays
- Reverb
- Sidechain
- Automatización

## 1. Kick

| Elemento | Kick |
|----------|------|
| **Patch MicroFreak exacto** | Motor de oscilador: Granular<br>Osc1: Granular "Kick", Density 45%, Pitch -24 semitones<br>Filter: LPF, Cutoff 25%, Resonance 0%<br>EG: A=0ms, D=50ms, S=0%, R=100ms<br>LFO: No utilizado |
| **Secuencia / patrón** | 4 pasos, patrón de 1 compás<br>Paso 1: C1 (velocity 127, gate 30%)<br>Paso 2: - (silencio)<br>Paso 3: - (silencio)<br>Paso 4: - (silencio)<br>Swing: 55% |
| **Cómo programarlo en el MicroFreak** | 1. Seleccionar modo SEQ<br>2. Elegir 4 pasos<br>3. Paso 1: presionar, ajustar velocity a 127, gate a 30%<br>4. Pasos 2-4: dejar vacíos<br>5. Activar swing y ajustar a 55% |
| **Consejos de performance / variaciones** | - Ajustar el tiempo de decay (EG D) para variar la duración del kick<br>- Experimentar con la densidad del granular para diferentes texturas<br>- Usar el mod wheel para controlar el pitch en tiempo real |

## 2. Sub/Bass

| Elemento | Sub/Bass |
|----------|----------|
| **Patch MicroFreak exacto** | Motor de oscilador: Virtual Analog<br>Osc1: VA Saw, Tune -12 semitones, Wavefolder 20%<br>Filter: LPF, Cutoff 32%, Resonance 15%<br>EG: A=20ms, D=800ms, S=70%, R=1000ms<br>LFO1: Sine, Rate 1/4, Route to Filter Cutoff, Amount 15% |
| **Secuencia / patrón** | 16 pasos, patrón de 4 compases<br>Paso 1: A1 (velocity 100, gate 70%)<br>Paso 5: A1 (velocity 100, gate 70%)<br>Paso 9: A1 (velocity 100, gate 70%)<br>Paso 13: A1 (velocity 100, gate 70%)<br>Swing: 58% |
| **Cómo programarlo en el MicroFreak** | 1. Seleccionar modo SEQ<br>2. Elegir 16 pasos<br>3. Programar notas en pasos 1, 5, 9, 13<br>4. Ajustar velocity a 100 y gate a 70% para cada nota<br>5. Activar swing y ajustar a 58% |
| **Consejos de performance / variaciones** | - Automatizar el cutoff del filtro para crear movimiento<br>- Variar el LFO rate para diferentes ritmos modulatorios<br>- Experimentar con el wavefolder para añadir armónicos |

## 3. Stab

| Elemento | Stab |
|----------|------|
| **Patch MicroFreak exacto** | Motor de oscilador: Wavetable<br>Osc1: WT "Digital", WT Pos 45%, Tune 0 semitones<br>Filter: HPF, Cutoff 45%, Resonance 25%<br>EG: A=5ms, D=150ms, S=0%, R=200ms<br>LFO1: S&H, Rate 1/8, Route to Filter Cutoff, Amount 30% |
| **Secuencia / patrón** | 16 pasos, patrón de 2 compases<br>Paso 3: E3 (velocity 110, gate 25%)<br>Paso 7: C3 (velocity 110, gate 25%)<br>Paso 11: E3 (velocity 110, gate 25%)<br>Paso 15: C3 (velocity 110, gate 25%)<br>Swing: 60% |
| **Cómo programarlo en el MicroFreak** | 1. Seleccionar modo SEQ<br>2. Elegir 16 pasos<br>3. Programar notas en pasos 3, 7, 11, 15<br>4. Ajustar velocity a 110 y gate a 25% para cada nota<br>5. Activar swing y ajustar a 60% |
| **Consejos de performance / variaciones** | - Variar la posición del wavetable para diferentes timbres<br>- Automatizar el resonance para crear efectos más agresivos<br>- Cambiar el gate length para diferentes duraciones de stab |

## 4. Chords

| Elemento | Chords |
|----------|--------|
| **Patch MicroFreak exacto** | Motor de oscilador: Chords<br>Osc1: Chords mode, Density 60%, Spread 40%<br>Filter: LPF, Cutoff 55%, Resonance 20%<br>EG: A=30ms, D=500ms, S=50%, R=800ms<br>LFO1: Triangle, Rate 1/4, Route to Filter Cutoff, Amount 20% |
| **Secuencia / patrón** | 16 pasos, patrón de 4 compases<br>Paso 1: Am (velocity 90, gate 60%)<br>Paso 5: F (velocity 90, gate 60%)<br>Paso 9: C (velocity 90, gate 60%)<br>Paso 13: E (velocity 90, gate 60%)<br>Swing: 57% |
| **Cómo programarlo en el MicroFreak** | 1. Seleccionar modo SEQ<br>2. Elegir 16 pasos<br>3. Programar acordes en pasos 1, 5, 9, 13<br>4. Ajustar velocity a 90 y gate a 60% para cada acorde<br>5. Activar swing y ajustar a 57% |
| **Consejos de performance / variaciones** | - Variar la densidad de los acordes para diferentes texturas<br>- Automatizar el spread para crear efectos estéreo más amplios<br>- Experimentar con diferentes progresiones de acordes |

## 5. Pad

| Elemento | Pad |
|----------|-----|
| **Patch MicroFreak exacto** | Motor de oscilador: Harmonic OSC<br>Osc1: Harmonic, Harmonics 1-8: 100%, 80%, 60%, 40%, 20%, 10%, 5%, 0%<br>Filter: LPF, Cutoff 70%, Resonance 10%<br>EG: A=500ms, D=1500ms, S=80%, R=2000ms<br>LFO1: Sine, Rate 1/16, Route to Pitch, Amount 5% |
| **Secuencia / patrón** | 4 pasos, patrón de 16 compases<br>Paso 1: Am (velocity 80, gate 100%)<br>Swing: 50% (sin swing) |
| **Cómo programarlo en el MicroFreak** | 1. Seleccionar modo SEQ<br>2. Elegir 4 pasos<br>3. Programar acorde en paso 1<br>4. Ajustar velocity a 80 y gate a 100%<br>5. Desactivar swing (50%) |
| **Consejos de performance / variaciones** | - Variar los armónicos para diferentes timbres<br>- Automatizar el cutoff del filtro para crear movimiento<br>- Experimentar con diferentes tiempos de LFO para vibratos más rápidos o lentos |

## 6. Hi-hat

| Elemento | Hi-hat |
|----------|--------|
| **Patch MicroFreak exacto** | Motor de oscilador: Granular<br>Osc1: Granular "Noise", Density 90%, Pitch +12 semitones<br>Filter: HPF, Cutoff 80%, Resonance 30%<br>EG: A=0ms, D=30ms, S=0%, R=50ms<br>LFO1: S&H, Rate 1/16, Route to Filter Cutoff, Amount 25% |
| **Secuencia / patrón** | 16 pasos, patrón de 1 compás<br>Paso 1: C6 (velocity 70, gate 15%)<br>Paso 3: C6 (velocity 70, gate 15%)<br>Paso 5: C6 (velocity 70, gate 15%)<br>Paso 7: C6 (velocity 70, gate 15%)<br>Paso 9: C6 (velocity 70, gate 15%)<br>Paso 11: C6 (velocity 70, gate 15%)<br>Paso 13: C6 (velocity 70, gate 15%)<br>Paso 15: C6 (velocity 70, gate 15%)<br>Swing: 62% |
| **Cómo programarlo en el MicroFreak** | 1. Seleccionar modo SEQ<br>2. Elegir 16 pasos<br>3. Programar notas en pasos impares (1,3,5,7,9,11,13,15)<br>4. Ajustar velocity a 70 y gate a 15% para cada nota<br>5. Activar swing y ajustar a 62% |
| **Consejos de performance / variaciones** | - Variar la densidad del granular para diferentes texturas de hi-hat<br>- Automatizar el cutoff del filtro para crear efectos de "abrir/cerrar"<br>- Experimentar con diferentes patrones de acentuación |

## 7. Percusión

| Elemento | Percusión |
|----------|-----------|
| **Patch MicroFreak exacto** | Motor de oscilador: Karplus-Strong<br>Osc1: KS "Perc", Decay 150ms, Pitch +7 semitones<br>Filter: BPF, Cutoff 60%, Resonance 40%<br>EG: A=0ms, D=100ms, S=0%, R=150ms<br>LFO1: Random, Rate 1/8, Route to Pitch, Amount 10% |
| **Secuencia / patrón** | 16 pasos, patrón de 2 compases<br>Paso 2: D4 (velocity 85, gate 20%)<br>Paso 6: F4 (velocity 85, gate 20%)<br>Paso 10: D4 (velocity 85, gate 20%)<br>Paso 14: G4 (velocity 85, gate 20%)<br>Swing: 58% |
| **Cómo programarlo en el MicroFreak** | 1. Seleccionar modo SEQ<br>2. Elegir 16 pasos<br>3. Programar notas en pasos 2, 6, 10, 14<br>4. Ajustar velocity a 85 y gate a 20% para cada nota<br>5. Activar swing y ajustar a 58% |
| **Consejos de performance / variaciones** | - Variar el decay para diferentes duraciones de percusión<br>- Automatizar el resonance para diferentes timbres<br>- Experimentar con diferentes patrones rítmicos |

## 8. Ambient textures

| Elemento | Ambient textures |
|----------|------------------|
| **Patch MicroFreak exacto** | Motor de oscilador: Wavetable<br>Osc1: WT "Atmosphere", WT Pos 30%, Tune -24 semitones<br>Filter: LPF, Cutoff 40%, Resonance 5%<br>EG: A=1000ms, D=2000ms, S=90%, R=3000ms<br>LFO1: Sine, Rate 1/32, Route to WT Pos, Amount 40%<br>LFO2: Triangle, Rate 1/16, Route to Filter Cutoff, Amount 15% |
| **Secuencia / patrón** | 1 paso, patrón de 32 compases<br>Paso 1: A2 (velocity 60, gate 100%)<br>Swing: 50% (sin swing) |
| **Cómo programarlo en el MicroFreak** | 1. Seleccionar modo SEQ<br>2. Elegir 1 paso<br>3. Programar nota en paso 1<br>4. Ajustar velocity a 60 y gate a 100%<br>5. Desactivar swing (50%) |
| **Consejos de performance / variaciones** | - Variar la posición del wavetable para diferentes texturas<br>- Automatizar el cutoff del filtro para crear movimiento<br>- Experimentar con diferentes velocidades de LFO |

## 9. FX (Dub delays)

| Elemento | Dub delays |
|----------|------------|
| **Patch MicroFreak exacto** | Motor de oscilador: Virtual Analog<br>Osc1: VA "Noise", Level 0% (solo para efectos)<br>Delay: Activado, Time 1/4, Feedback 60%, Filter 40%<br>Reverb: Activado, Decay 2.5s, Wet 30%<br>EG: No utilizado<br>LFO1: Sine, Rate 1/8, Route to Delay Time, Amount 15% |
| **Secuencia / patrón** | No aplicable (efecto global) |
| **Cómo programarlo en el MicroFreak** | 1. Ir al menú de efectos<br>2. Activar Delay y ajustar parámetros<br>3. Activar Reverb y ajustar parámetros<br>4. Configurar LFO1 para modular el tiempo de delay |
| **Consejos de performance / variaciones** | - Automatizar el feedback del delay para crear efectos de "eco creciente"<br>- Variar el tiempo de delay para diferentes ritmos de eco<br>- Experimentar con el filtro del delay para diferentes tonalidades de eco |

## Cadena de efectos sugerida

| Efecto | Tipo | Parámetros | Notas |
|--------|------|------------|-------|
| Delay 1 | Ping-Pong | Tiempo: 1/4 dotted (375ms a 110 BPM)<br>Feedback: 45%<br>Filtro: HPF a 300Hz<br>Dry/Wet: 35% | Para stabs y chords |
| Delay 2 | Ping-Pong | Tiempo: 1/8 (137ms a 110 BPM)<br>Feedback: 35%<br>Filtro: LPF a 8kHz<br>Dry/Wet: 25% | Para hi-hats y percusión |
| Reverb | Hall | Tamaño: Grande<br>Decay: 3.2s<br>Predelay: 25ms<br>Dry/Wet: 20% | Para pads y ambient textures |
| Saturación | Tape | Drive: 30%<br>Tono: -2dB<br>Dry/Wet: 40% | Para sub/bass y kick |
| Chorus | Analógico | Rate: 0.4Hz<br>Depth: 25%<br>Dry/Wet: 30% | Para pads y ambient textures |
| EQ | Paramétrico | Low Cut: 30Hz, Q=0.7<br>Peak 1: 120Hz, +2dB, Q=1.2<br>Peak 2: 2.5kHz, -1dB, Q=1.0<br>High Cut: 16kHz, Q=0.7 | Para mezcla general |
| Sidechain | Compresor | Ratio: 4:1<br>Attack: 10ms<br>Release: 100ms<br>Threshold: -20dB<br>Makeup: +3dB | Sidechain desde kick a sub/bass y pads |

## Patrón de arreglo

| Sección | Compases | Elementos presentes | Automatizaciones clave | Eventos especiales |
|---------|----------|---------------------|------------------------|-------------------|
| Intro | 0-16 | Ambient textures, Pad | Aumento gradual de reverb | - |
| Build 1 | 16-32 | Añade Hi-hat, Perc | Aumento de filter cutoff en pad | - |
| Build 2 | 32-48 | Añade Sub/Bass, Stab | Aumento de feedback en delay | - |
| Drop 1 | 48-64 | Añade Kick, Chords | Filter cutoff al máximo | Dub chop en compás 56 |
| Breakdown | 64-80 | Elimina Kick, Sub/Bass | Reducción de filter cutoff | - |
| Build 3 | 80-96 | Añade de nuevo elementos | Aumento gradual de todos los parámetros | - |
| Drop 2 | 96-112 | Todos los elementos | Automatización extrema de delay | Dub chops en compases 104, 108 |
| Outro | 112-144 | Eliminación gradual de elementos | Reducción de reverb y delay | - |

## Mezcla y salida

| Elemento | Nivel (dB) | Pan | Bus | Efectos |
|----------|------------|-----|-----|---------|
| Kick | -4dB | Centro | Drum | Saturación Tape |
| Sub/Bass | -6dB | Centro | Bass | Saturación Tape, Sidechain |
| Stab | -12dB | 25% izquierdo | Melody | Delay 1, Reverb |
| Chords | -10dB | 25% derecho | Melody | Delay 1, Reverb |
| Pad | -14dB | Centro | Atmosphere | Chorus, Reverb |
| Hi-hat | -18dB | 40% izquierdo | Drum | Delay 2 |
| Perc | -16dB | 40% derecho | Drum | Delay 2 |
| Ambient textures | -20dB | Centro | Atmosphere | Reverb, Delay 1 |

**Buses de efectos:**
- Bus Delay: Enviar desde todas las pistas (excepto kick y sub/bass)
- Bus Reverb: Enviar desde pads, chords, stabs y ambient textures
- Bus Sidechain: Kick como fuente, sidechain a sub/bass y pads

**Pasos para exportar stems desde Ableton Live:**
1. Organizar todas las pistas por tipo (Drum, Bass, Melody, Atmosphere)
2. Crear pistas de audio para cada elemento
3. Grabar la salida de MicroFreak para cada elemento por separado
4. Aplicar efectos de insert y send según la tabla anterior
5. Ajustar niveles y pan
6. Exportar cada pista como un archivo WAV individual
7. Exportar la mezcla completa como un archivo WAV o MP3

## Chequeo final / troubleshooting

| Problema | Solución |
|----------|----------|
| Sub no definido | Aumentar la resonancia del filtro, añadir saturación sutil, verificar la fase con el kick |
| Delays embarrados | Reducir feedback, aplicar filtro HPF al delay, ajustar tiempo de delay para que coincida con el BPM |
| Hi-hats muy metálicos | Reducir la resonancia del filtro, aumentar el cutoff del filtro, ajustar la densidad del granular |
| Chords demasiado densos | Reducir la densidad del acorde, aumentar el espacio entre notas, aplicar EQ para recortar frecuencias medias |
| Pads aburridos | Añadir modulación LFO a la posición del wavetable, automatizar el cutoff del filtro, aumentar la complejidad armónica |
| Falta de groove | Ajustar el swing global, experimentar con diferentes valores de swing para cada elemento, añadir micro-timing |
| Mezcla poco clara | Usar EQ para separar frecuencias, aplicar sidechain, ajustar niveles relativos, usar panning |
| Demasiado ruido de fondo | Aplicar gate a elementos rítmicos, usar noise gate en pads, reducir la ganancia de efectos |
| Transitorios demasiado fuertes | Usar compresión suave en kick y percusión, ajustar tiempos de ataque, usar saturación para suavizar picos |
| Baja energía general | Aumentar la compresión en la mezcla general, ajustar la ecualización para enfatizar frecuencias clave, verificar la fase entre elementos |

## Ejemplo práctico completo

**Receta lista para ejecutar (32 compases):**

**Compases 0-8 (Intro):**
- Ambient textures: Activar desde el inicio
- Pad: Entrar en el compás 1
- Automatización: Reverb send de 0% a 30% durante 8 compases

**Compases 8-16 (Build 1):**
- Hi-hat: Entrar en el compás 8
- Perc: Entrar en el compás 10
- Automatización: Filter cutoff de pad de 40% a 70% durante 8 compases

**Compases 16-24 (Build 2):**
- Sub/Bass: Entrar en el compás 16
- Stab: Entrar en el compás 18
- Automatización: Delay feedback de 20% a 45% durante 8 compases

**Compases 24-32 (Drop):**
- Kick: Entrar en el compás 24
- Chords: Entrar en el compás 24
- Automatización: Filter cutoff de sub/bass de 32% a 60% durante 4 compases
- Evento especial: Dub chop en compás 28 (silenciar todos los elementos excepto kick y sub/bass por 1/2 compás)

## Resumen-checklist de 10 ítems

1. Configurar BPM a 110 y tonalidad a La menor (A minor)
2. Crear y programar el patch de Kick usando el motor Granular
3. Crear y programar el patch de Sub/Bass usando el motor Virtual Analog
4. Crear y programar el patch de Stab usando el motor Wavetable
5. Crear y programar el patch de Chords usando el motor Chords
6. Crear y programar el patch de Pad usando el motor Harmonic OSC
7. Crear y programar el patch de Hi-hat usando el motor Granular
8. Crear y programar el patch de Percusión usando el motor Karplus-Strong
9. Crear y programar el patch de Ambient textures usando el motor Wavetable
10. Configurar efectos de delay y reverb, y crear el arreglo de 32 compases según la receta
