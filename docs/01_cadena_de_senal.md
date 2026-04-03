# Cadena de Señal — NUX MG-30 v5.0.2

> **Firmware objetivo:** NUX MG-30 **v5.0.2**

## Descripción general

La NUX MG-30 procesa la señal de audio a través de una **cadena de bloques fija** cuyo orden no puede modificarse. Sin embargo, cada bloque puede activarse o desactivarse independientemente, y sus parámetros son editables.

## Orden de la cadena de señal

```
Entrada (guitarra)
     │
     ▼
 ┌────────┐
 │  WAH   │  Wah-wah y modulaciones dinámicas
 └────────┘
     │
     ▼
 ┌────────┐
 │  CMP   │  Compresión y dinámica
 └────────┘
     │
     ▼
 ┌────────┐
 │  GATE  │  Noise gate / supresión de ruido
 └────────┘
     │
     ▼
 ┌────────┐
 │  EFX   │  Distorsión, overdrive, boost
 └────────┘
     │
     ▼
 ┌────────┐
 │   EQ   │  Ecualización
 └────────┘
     │
     ▼
 ┌────────┐
 │  AMP   │  Simulación de amplificador
 └────────┘
     │
     ▼
 ┌────────┐
 │  CAB   │  Simulación de gabinete (IR)
 └────────┘
     │
     ▼
 ┌────────┐
 │  S/R   │  Send & Return (loop de efectos externos)
 └────────┘
     │
     ▼
 ┌────────┐
 │  MOD   │  Modulación (chorus, flanger, phase, etc.)
 └────────┘
     │
     ▼
 ┌────────┐
 │  DLY   │  Delay y eco
 └────────┘
     │
     ▼
 ┌────────┐
 │  RVB   │  Reverb
 └────────┘
     │
     ▼
 ┌────────┐
 │ GLOBAL │  Nivel global del preset (Patch Level)
 └────────┘
     │
     ▼
  Salida (XLR / Jack / USB)
```

## Descripción de cada bloque

| Bloque | Función | Notas |
|--------|---------|-------|
| **WAH** | Filtro de barrido sensible al pedal de expresión | Se puede asignar al pedal de expresión integrado |
| **CMP** | Compresión de dinámica | Útil antes de efectos de alta ganancia |
| **GATE** | Corte de ruido de fondo | Debe ajustarse con cuidado para no cortar el sustain |
| **EFX** | Saturación: overdrive, distorsión, boost, fuzz | El corazón del tono de guitarra |
| **EQ** | Corrección de frecuencias | Puede usarse para ajuste de sala o corrección tonal |
| **AMP** | Simulación de amplificador | Define el carácter principal del sonido |
| **CAB** | Simulación de gabinete (IR) | Esencial para sonido directo a mesa/interfaz |
| **S/R** | Loop de efectos externos | Permite insertar pedales físicos en la cadena |
| **MOD** | Modulación: chorus, flanger, phase, vibrato, etc. | Conviene ir post-amplificador |
| **DLY** | Delay: analógico, digital, cinta, etc. | Siempre va después de MOD para mayor naturalidad |
| **RVB** | Reverb: sala, placa, spring, shimmer, etc. | Debe ser el último efecto antes del nivel global |
| **GLOBAL** | Nivel de salida del preset | Permite igualar el volumen entre presets |

## Consideraciones importantes

### Orden fijo
El orden de los bloques **no puede cambiarse**. Esto refleja el flujo de señal natural de una cadena de guitarra convencional.

### Activar/desactivar bloques
Cada bloque puede desactivarse cuando no se necesita, reduciendo el procesamiento y simplificando el sonido.

### Niveles de señal
- Mantén el nivel de salida del EFX y AMP equilibrado para evitar **clipping** en la etapa de CAB o en la salida.
- El bloque **GLOBAL (Patch Level)** es la herramienta principal para igualar niveles entre presets en escena.
- Si hay clipping, baja el **Level** del EFX o el **Master** del AMP antes de subir el Patch Level.

### Salidas disponibles (v5.0.2)
- **Salida Jack (L/Mono, R)**: Para amplificador en escena o sistema de PA
- **Salida XLR (L, R)**: Para mesa de mezclas o interfaz de audio directa
- **Salida USB**: Para grabación directa en ordenador (interfaz de audio integrada)

> Ver guía de escenarios en `docs/guias/` para configuraciones específicas de cada salida.

---

**[← Firmware y alcance](./00_firmware_y_alcance.md)** | **[Volver al índice](./README.md)** | **[Efectos →](./efectos/README.md)**
