# Grabación por USB — NUX MG-30 v5.0.2

> **Firmware objetivo:** NUX MG-30 **v5.0.2**

## Descripción

La NUX MG-30 incluye una **interfaz de audio USB integrada** que permite grabar directamente en un DAW (Digital Audio Workstation) sin necesidad de una interfaz de audio externa. La señal grabada incluye todos los efectos y simulaciones de la MG-30.

## Requisitos

- Cable USB tipo B (el mismo que impresoras antiguas) o micro-USB, según el modelo de tu MG-30
- Ordenador con Windows o macOS
- DAW (Reaper, GarageBand, Ableton Live, Logic Pro, Cubase, etc.)
- Controlador/driver NUX (Windows requiere driver específico; macOS suele ser plug-and-play)

## Instalación del driver (Windows)

1. Descarga **NUX Quick Tone** desde [nuxefx.com/software](https://www.nuxefx.com/software).
2. Instala la aplicación (incluye el driver USB de audio).
3. Conecta la MG-30 por USB.
4. Verifica en el Panel de Control de Sonido de Windows que "NUX MG-30" aparece como dispositivo de entrada.

## Configuración en el DAW

### Seleccionar la interfaz
1. En tu DAW, ve a las preferencias de audio.
2. Selecciona **NUX MG-30** como dispositivo de entrada (y opcionalmente de salida para monitorización).

### Crear una pista
1. Crea una pista de audio mono o estéreo.
2. Selecciona la entrada de la MG-30 (canal 1 para mono, canales 1+2 para estéreo).
3. Activa el modo de grabación en la pista.

### Buffer y latencia
- Buffer recomendado: **128–256 muestras** para grabación en tiempo real.
- Buffer mayor (512–1024) si tienes problemas de crepitaciones o caídas de audio.
- La MG-30 tiene procesado interno de baja latencia, pero el buffer del DAW añade latencia adicional.

## Configuración recomendada en la MG-30

### Bloque CAB
- **Activado** ✅ — imprescindible para grabación directa con sonido natural
- Elige un IR adecuado para grabación: `DR112`, `A212`, `JZ120`

### Niveles
- Asegúrate de que el nivel de entrada en el DAW **no llega al rojo** (clipping digital).
- Ajusta el **Patch Level** de la MG-30 para tener una señal limpia con margen.
- Objetivo: picos entre -12 dB y -6 dB en el medidor del DAW.

## Monitorización

- Puedes monitorizar el sonido a través de la salida de auriculares de la MG-30 directamente (sin latencia adicional del DAW).
- Si usas la salida de audio del ordenador para monitorizar desde el DAW, añadirás latencia; usa buffer bajo para reducirla.

## Consejos

- Graba siempre con CAB activado a menos que quieras re-amplicar la señal (DI seco).
- Guarda tus presets antes de empezar a grabar para poder reproducir el mismo sonido exacto.
- El canal USB de la MG-30 es diferente de la salida Jack/XLR; puedes tener señal diferente simultáneamente.
- Si la señal USB tiene ruido, revisa que el cable USB no pase cerca de fuentes de interferencia.

---

**[← 4CM](./4cm.md)** | **[Guías](./README.md)** | **[Niveles y Clipping →](./niveles_y_clipping.md)**
