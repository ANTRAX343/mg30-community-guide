# Niveles y Clipping — NUX MG-30 v5.0.2

> **Firmware objetivo:** NUX MG-30 **v5.0.2**

## Descripción

Gestionar correctamente los niveles de señal en la MG-30 es fundamental para:
- Evitar **clipping** (distorsión digital no deseada)
- Tener un volumen **consistente** entre presets en escena
- Obtener la mejor calidad de sonido en grabación y directo

## ¿Qué es el clipping?

El clipping ocurre cuando una señal excede el nivel máximo que puede manejar un bloque o la salida. En la MG-30:
- **Clipping analógico** (en el bloque AMP/EFX): puede ser intencional y sonoro
- **Clipping digital** (en la salida o grabación): siempre es un problema; suena áspero y artificial

## Flujo de niveles en la cadena

```
Guitarra → EFX (Drive/Level) → AMP (Master) → CAB → GLOBAL (Patch Level) → Salida
```

El nivel se puede controlar en varios puntos:

| Punto | Control | Función |
|-------|---------|---------|
| EFX | Level / Output | Nivel de salida del efecto de distorsión/overdrive |
| AMP | Master / Volume | Nivel de salida del bloque de amplificador |
| EQ | Level | Compensación de nivel tras ecualización |
| GLOBAL | Patch Level | Nivel final de salida del preset |

## Cómo evitar clipping

### Paso 1: Ajusta el EFX
- El **Level** del EFX debe ser comparable al nivel de bypase (sin efecto).
- Si al activar el EFX el volumen sube bruscamente, baja el Level del EFX.

### Paso 2: Ajusta el AMP
- El **Master** del AMP controla el volumen de salida de la simulación de amplificador.
- Si hay clipping después del CAB, baja el Master del AMP.

### Paso 3: Ajusta el Patch Level
- Úsalo para **igualar** el volumen entre diferentes presets.
- Objetivo: todos los presets de uso en escena deben sonar al mismo volumen percibido.

## Cómo igualar volúmenes entre presets

1. Elige un preset de referencia (por ejemplo, tu tono "limpio" base).
2. Toca al mismo volumen con ese preset.
3. Cambia a otro preset y ajusta su **Patch Level** hasta que suene igual de fuerte.
4. Repite para todos los presets que uses en escena.

> Usa una aplicación de medidor de nivel (DAW o aplicación de teléfono con micrófono) para objetivar la comparación.

## Señales de clipping

- Distorsión áspera e indeseada al tocar fuerte
- Indicador de clip en la mesa de mezclas o interfaz de audio
- Sonido "roto" en la grabación USB

## Consejos

- El **headroom** (margen antes del clip) es tu amigo: no intentes sacar el máximo nivel posible.
- En grabación, apunta a picos entre **-12 dB y -6 dB** en el DAW; no intentes grabar a 0 dB.
- Si usas la salida XLR para PA, avisa al técnico de sonido del nivel de salida para que ajuste su ganancia correctamente.
- El bloque **CMP** puede ayudar a controlar los picos dinámicos de tu toque antes de llegar al EFX.

---

**[← Grabación USB](./grabacion_usb.md)** | **[Guías](./README.md)** | **[Ruido y Noise Gate →](./ruido_gate.md)**
