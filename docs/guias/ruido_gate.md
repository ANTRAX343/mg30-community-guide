# Ruido y Noise Gate — NUX MG-30 v5.0.2

> **Firmware objetivo:** NUX MG-30 **v5.0.2**

## Descripción

El ruido de fondo es uno de los problemas más comunes en sistemas de guitarra con efectos de alta ganancia. La MG-30 incluye un bloque **GATE (Noise Reduction)** que ayuda a eliminarlo, pero debe ajustarse correctamente.

## Fuentes comunes de ruido

| Fuente | Descripción |
|--------|-------------|
| Pastillas de simple bobina (single-coil) | Captan interferencias eléctricas del entorno |
| Cables de mala calidad o largo excesivo | Introducen ruido y pérdida de señal |
| Fuentes de alimentación no aisladas | Generan zumbido de 50/60 Hz (hum) |
| Alta ganancia en EFX o AMP | Amplifica también el ruido de fondo |
| Dispositivos electrónicos cercanos | Monitores, ordenadores, luces fluorescentes |

## El bloque GATE (Noise Reduction)

### Posición en la cadena
El GATE está ubicado **antes del EFX**, lo que significa que actúa sobre la señal de entrada limpia. Esto es lo más efectivo para suprimir ruido antes de que sea amplificado por el EFX/AMP.

### Parámetro principal: Threshold

| Valor | Efecto |
|-------|--------|
| Bajo (0–20) | Gate prácticamente inactivo |
| Medio (30–50) | Suprime ruido en pausas sin afectar mucho el sustain |
| Alto (60–80) | Corte agresivo del ruido; puede afectar el sustain y las notas suaves |
| Muy alto (80+) | Gateo evidente; solo para metal extremo con alta ganancia |

## Cómo ajustar el Noise Gate correctamente

1. **Sin tocar la guitarra**, aumenta el Threshold gradualmente hasta que el ruido de fondo desaparezca.
2. **Toca notas largas** (especialmente notas graves y acordes) y escucha si el sustain se corta antes de tiempo.
3. Si el sustain se corta, **baja el Threshold** hasta encontrar el equilibrio entre silencio y sustain natural.
4. Prueba diferentes dinámicas: tocar suave (fingerpicking) suele ser más sensible al gate que el rasgueo fuerte.

## Problemas comunes y soluciones

### El gate corta las notas
- **Causa**: Threshold demasiado alto
- **Solución**: Baja el Threshold gradualmente

### Hay ruido incluso con el gate al máximo
- **Causa**: La señal de ruido supera el nivel del gate
- **Solución**: Identifica y elimina la fuente de ruido (cable, fuente de alimentación, pastilla)

### El gate "bombea" (se abre y cierra rápidamente)
- **Causa**: El Threshold está justo en el límite de la señal
- **Solución**: Sube o baja el Threshold hasta salir del umbral inestable

### Zumbido constante (hum de 50/60 Hz)
- **Causa**: Interferencia electromagnética o bucle de masa
- **Soluciones**: Usar fuente de alimentación aislada, cables de masa apantallados, separar la MG-30 de monitores y ordenadores

## Consejos avanzados

- Para configuraciones de **alta ganancia** (metal, heavy), un Threshold de 40–60 suele ser un buen punto de partida.
- Para **blues o rock** con menos ganancia, un Threshold bajo (15–30) normalmente es suficiente.
- En el **método 4CM** con amplificador real, el ruido puede aumentar; ajusta el gate teniendo en cuenta todo el sistema.
- Asegúrate de que **todos los cables** sean de buena calidad y apantallados; el mejor gate no puede sustituir un cable defectuoso.

---

**[← Niveles y Clipping](./niveles_y_clipping.md)** | **[Guías](./README.md)**
