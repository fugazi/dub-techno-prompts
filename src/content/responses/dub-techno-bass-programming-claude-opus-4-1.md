---
id: dub-techno-bass-programming-claude-opus-4-1
promptId: dub-techno-bass-programming
model: Claude
version: Opus 4.1
timestamp: 2025-09-10T12:30:00Z
---

# Guía Completa: Producción de Dub-Techno con Arturia MicroFreak en Ableton Live

## Resumen Rápido

Objetivo sonoro: Track de Dub-Techno hipnótico y espacial con texturas profundas, delays expansivos y groove minimalista. Referencias: Basic Channel, Deepchord, Rhythm & Sound - enfoque en repetición, espacio y evolución sutil.

## Lista de Elementos Necesarios
1. **Kick** – Bombo profundo y redondo
2. **Sub Bass** – Línea de bajo profunda y resonante
3. **Dub Chord/Stab** – Acorde corto con cola de reverb/delay
4. **Pad Atmosférico** – Textura de fondo evolutiva
5. **Hi-Hat** – Percusión aguda minimalista
6. **Percussion/Shaker** – Elemento rítmico adicional
7. **FX/Textures** – Ruido blanco filtrado y sweeps

## Configuración Detallada por Elemento

### 1. KICK (Bombo Profundo)

| Parámetro              | Valor                                   |
|------------------------|-----------------------------------------|
| **Motor de Oscilador** | Modal Resonator                         |
| **Timbre**             | 25%                                     |
| **Shape**              | 60%                                     |
| **Cutoff**             | 35%                                     |
| **Resonance**          | 15%                                     |
| **Type (Filter)**      | LPF                                     |
| **Envelope**           | Attack: 0ms, Decay: 180ms, Sustain: 0%, Release: 200ms |
| **Cycling Env**        | OFF                                     |
| **LFO Rate**           | 0.5 Hz                                  |
| **LFO Amount → Cutoff**| 10%                                     |

**Secuencia/Patrón:**
- 4 pasos, loop de 1 compás
- Notas: C1, —, —, —
- Gate: 90%
- Velocity: 127 en step 1

**Programación en MicroFreak:**
1. Presiona `[SEQ]`
2. Configura Length = 4
3. Step 1: Mantén C1 + ajusta velocity máximo
4. Steps 2-4: dejar vacíos
5. Ajusta Gate global al 90%

**Consejos Performance:**
- Automatiza Cutoff entre 30-45% para variaciones
- Usa el touch strip para pitch bend sutil en fills

### 2. SUB BASS

| Parámetro              | Valor                                   |
|------------------------|-----------------------------------------|
| **Motor de Oscilador** | Analog (Triangle)                       |
| **Wave**               | Triangle 100%                           |
| **Sub**                | +50%                                    |
| **Cutoff**             | 28%                                     |
| **Resonance**          | 45%                                     |
| **Type (Filter)**      | LPF                                     |
| **Envelope**           | Attack: 5ms, Decay: 400ms, Sustain: 70%, Release: 500ms |
| **Glide**              | 15%                                     |
| **LFO Rate**           | 0.2 Hz                                  |
| **LFO → Pitch**        | 3%                                      |

**Secuencia/Patrón:**
- 16 pasos, 4 compases
- Patrón: A1, —, —, A1, —, —, G1, —, A1, —, —, —, F1, —, —, —
- Gate: 75%
- Swing: 8%

**Programación en MicroFreak:**
1. `[SEQ]` → Length = 16
2. Steps con notas: 1(A1), 4(A1), 7(G1), 9(A1), 13(F1)
3. Ajusta velocities: steps 1,9 = 100, resto = 80
4. Activa Swing al 8%

**Consejos Performance:**
- Modula Resonance en drops (35-55%)
- Usa Spice para añadir armónicos sutiles

### 3. DUB CHORD/STAB

| Parámetro              | Valor                                   |
|------------------------|-----------------------------------------|
| **Motor de Oscilador** | Chord                                   |
| **Type**               | Minor 7th                               |
| **Inv/Transp**         | +0                                      |
| **Cutoff**             | 42%                                     |
| **Resonance**          | 20%                                     |
| **Type (Filter)**      | BPF                                     |
| **Envelope**           | Attack: 2ms, Decay: 35ms, Sustain: 15%, Release: 150ms |
| **Paraphonic**         | ON (4 voces)                            |
| **LFO Rate**           | 4 Hz                                    |
| **LFO → Cutoff**       | 20%                                     |

**Secuencia/Patrón:**
- 16 pasos
- Acorde Am7: steps 3, 7, 11 (off-beat)
- Gate: 25% (stabs cortos)
- Velocity: variable 60-90

**Programación en MicroFreak:**
1. Activa Paraphonic (Shift + Paraphonic)
2. `[SEQ]` → Length = 16
3. Programa acordes en steps 3, 7, 11
4. Ajusta Gate muy corto (25%)
5. Randomiza velocities ligeramente

**Consejos Performance:**
- Abre Filter en builds (42% → 65%)
- Aplica pressure para vibrato sutil

### 4. PAD ATMOSFÉRICO

| Parámetro              | Valor                                   |
|------------------------|-----------------------------------------|
| **Motor de Oscilador** | Wavetable                               |
| **Browse**             | Atmospheric/Evolving                    |
| **Position**           | 45%                                     |
| **Timbre**             | Automatizar 20-80%                      |
| **Cutoff**             | 55%                                     |
| **Resonance**          | 10%                                     |
| **Type (Filter)**      | LPF                                     |
| **Envelope**           | Attack: 800ms, Decay: 1000ms, Sustain: 85%, Release: 2000ms |
| **Chorus**             | ON, Amount 40%                          |
| **LFO Rate**           | 0.1 Hz                                  |
| **LFO → Position**     | 35%                                     |

**Secuencia/Patrón:**
- Notas largas sostenidas
- Acorde: Am (A3, C4, E4)
- Cambios cada 8 compases
- Gate: 100%

**Programación en MicroFreak:**
1. Modo Paraphonic ON
2. Toca y sostén acorde manualmente
3. O programa secuencia larga (64 steps)
4. Usa Tie para notas ligadas

**Consejos Performance:**
- Automatiza Timbre lentamente
- Modula Position con LFO para movimiento

### 5. HI-HAT

| Parámetro              | Valor                                   |
|------------------------|-----------------------------------------|
| **Motor de Oscilador** | Noise                                   |
| **Type**               | White                                   |
| **Cutoff**             | 72%                                     |
| **Resonance**          | 5%                                      |
| **Type (Filter)**      | HPF                                     |
| **Envelope**           | Attack: 0ms, Decay: 25ms, Sustain: 0%, Release: 30ms |
| **Amp Mod**            | Envelope                                |

**Secuencia/Patrón:**
- 16 pasos
- Pattern: —, x, —, x, —, x, —, x (off-beats)
- Gate: 15%
- Velocity: 40-60 (variado)

**Programación en MicroFreak:**
1. `[SEQ]` → Length = 16
2. Programa steps 2, 4, 6, 8, 10, 12, 14, 16
3. Varía velocities para humanizar
4. Gate muy corto

### 6. PERCUSSION/SHAKER

| Parámetro              | Valor                                   |
|------------------------|-----------------------------------------|
| **Motor de Oscilador** | Granular                                |
| **Position**           | 30%                                     |
| **Size**               | 15%                                     |
| **Density**            | 60%                                     |
| **Cutoff**             | 65%                                     |
| **Resonance**          | 25%                                     |
| **Type (Filter)**      | BPF                                     |
| **Envelope**           | Attack: 1ms, Decay: 40ms, Sustain: 10%, Release: 80ms |

**Secuencia/Patrón:**
- 32 pasos (2 compases)
- Patrón sincopado irregular
- Gate: 20-40% variable
- Introduce en sección B

### 7. FX/TEXTURES (Sweeps)

| Parámetro              | Valor                                   |
|------------------------|-----------------------------------------|
| **Motor de Oscilador** | Noise + Filter FM                       |
| **Cutoff**             | Automatizar 10-90%                      |
| **Resonance**          | 75%                                     |
| **Type (Filter)**      | LPF                                     |
| **Envelope**           | Attack: 2000ms, Decay: 500ms, Sustain: 50%, Release: 3000ms |
| **LFO Rate**           | 0.05 Hz                                 |
| **LFO → Cutoff**       | 60%                                     |

## Cadena de Efectos en Ableton Live

### 1. **Delay (Ping-Pong)**
- **Tiempo:** 1/4 punteado = 545ms @ 110 BPM
- **Feedback:** 65%
- **Filter HP:** 200 Hz
- **Filter LP:** 8 kHz
- **Dry/Wet:** 35%
- **Width:** 100%

### 2. **Reverb (Hall)**
- **Size:** 85%
- **Decay Time:** 4.5s
- **Pre-Delay:** 25ms
- **Diffusion:** 75%
- **HP Filter:** 150 Hz
- **LP Filter:** 10 kHz
- **Dry/Wet:** 25%

### 3. **Delay Secundario (1/8)**
- **Tiempo:** 1/8 = 273ms
- **Feedback:** 45%
- **Dry/Wet:** 20%
- **Solo para Dub Chords**

### 4. **Saturación/Tape**
- **Drive:** 15%
- **Tone:** Dark
- **Output:** -3dB
- **En bus de retorno**

### 5. **Sidechain Compression**
- **Threshold:** -15dB
- **Ratio:** 4:1
- **Attack:** 1ms
- **Release:** 100ms
- **Trigger:** Kick
- **Aplicar a:** Bass, Pad, Chords

## Patrón de Arreglo

| Sección      | Compases   | Elementos             | Automatizaciones           |
|--------------|------------|-----------------------|----------------------------|
| **Intro**    | 1-16       | Kick + Hi-hat suave  | Filter sweep up en kick    |
| **Build 1**  | 17-32      | + Sub Bass           | Bass filter opening        |
| **Main A**   | 33-64      | + Dub Chords         | Delay sends 20→40%         |
| **Break**    | 65-80      | Solo Pad + Reverb    | HPF en master              |
| **Drop**     | 81-96      | Todos - Hi-hat       | Filtros abiertos           |
| **Main B**   | 97-128     | Todos + Percussion   | Delay feedback 65→75%      |
| **Dub Section** | 129-160 | Cortes rítmicos      | Delays manuales            |
| **Outro**    | 161-192    | Fade elements        | Reverb 25→60%              |

## Mezcla y Niveles

| Pista        | Nivel (dB) | Pan           | Bus Send                |
|--------------|------------|---------------|-------------------------|
| Kick         | 0          | C             | —                       |
| Sub Bass     | -3         | C             | Reverb 10%              |
| Dub Chords   | -6         | L15/R15 (auto)| Delay 40%, Reverb 20%   |
| Pad          | -9         | Wide (±30)    | Reverb 35%              |
| Hi-Hat       | -12        | R20           | Delay 5%                |
| Percussion   | -10        | L25           | Reverb 15%              |
| FX/Textures  | -15        | Auto-pan      | Reverb 50%              |

### Configuración de Buses
- **Bus A (Delay):** Return track con cadena de delays
- **Bus B (Reverb):** Return track con reverb hall
- **Bus C (Saturation):** Para calidez analógica

## Chequeo Final / Troubleshooting

1. **Sub no suena definido:** Reduce Resonance, ajusta Cutoff 25-30%
2. **Delays embarrados:** Aumenta HP filter a 300Hz
3. **Kick pierde pegada:** Reduce sidechain release a 80ms
4. **Chords muy secos:** Aumenta send a delay hasta 50%
5. **Falta groove:** Ajusta swing global 12-15%
6. **Pad opaca el mix:** Automatiza EQ high-shelf -3dB
7. **Transientes duros:** Añade limiter suave en master
8. **Falta espacio:** Aumenta pre-delay en reverb a 40ms
9. **Bass y kick chocan:** EQ notch en bass @ 60Hz
10. **Automatizaciones bruscas:** Suaviza curvas, usa slopes

## Ejemplo Práctico Completo (32 compases)

### Receta Lista para Ejecutar

**Compases 1-8 (Intro)**
1. Solo Kick (4/4) + reverb tail
2. Compás 5: entra Hi-hat (off-beats)
3.
