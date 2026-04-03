# Conexión 4 Cable Method (4CM) — NUX MG-30 v5.0.2

> **Firmware objetivo:** NUX MG-30 **v5.0.2**

## Descripción

El **método de 4 cables (4CM)** permite usar la MG-30 junto con un **amplificador real**, aprovechando el loop de efectos (FX Loop) del amplificador. Con esta configuración:

- Los efectos **pre-amplificador** (WAH, CMP, GATE, EFX, EQ) van entre la guitarra y la entrada del amplificador.
- La **simulación AMP de la MG-30 se desactiva** (usas el amplificador real).
- Los efectos **post-amplificador** (MOD, DLY, RVB) van en el loop de efectos del amplificador.

## Diagrama de conexión

```
Guitarra
   │
   ▼
MG-30 (INPUT)
   │  [efectos pre-amp activos: WAH, CMP, GATE, EFX, EQ]
   ▼
MG-30 (SEND) ──→ AMPLIFICADOR (INPUT)
                        │
                 [preamplificador real del amp]
                        │
               AMPLIFICADOR (FX LOOP SEND)
                        │
                        ▼
                 MG-30 (RETURN)
                   │  [efectos post-amp activos: MOD, DLY, RVB]
                   ▼
                 MG-30 (OUTPUT)
                        │
               AMPLIFICADOR (FX LOOP RETURN)
                        │
                 [etapa de potencia del amp]
                        │
                      CAJA
```

## Cables necesarios

1. **Cable 1**: Guitarra → MG-30 Input
2. **Cable 2**: MG-30 Send → Amplificador Input
3. **Cable 3**: Amplificador FX Loop Send → MG-30 Return
4. **Cable 4**: MG-30 Output → Amplificador FX Loop Return

## Configuración en la MG-30

### Bloque S/R (Send & Return)
- **Activado** ✅
- El bloque S/R define el punto de inserción donde la señal va al amplificador y regresa.
- Ajusta los niveles de **Send** y **Return** según el nivel del amplificador.

### Bloque AMP
- **Desactivado** ❌ — estás usando el amplificador real
- Si lo activas, tendrás doble preamplificación (sonido sucio y confuso)

### Bloque CAB
- **Desactivado** ❌ — el sonido sale por el gabinete físico del amplificador
- Si necesitas salida paralela a PA, puedes activar CAB solo en la salida XLR (según configuración de salida)

### Efectos pre-amp (WAH → CMP → GATE → EFX → EQ)
- Activa y configura normalmente

### Efectos post-amp (MOD → DLY → RVB)
- Activa y configura normalmente

## Consejos

- Ajusta el nivel del **Send** para no saturar la entrada del amplificador.
- Si el ruido aumenta con el 4CM, revisa la masa de los cables y usa cables de buena calidad.
- Algunos amplificadores tienen el FX Loop a nivel de línea (+4 dBu) y otros a nivel de instrumento (-10 dBV); ajusta el **Return level** en la MG-30 en consecuencia.
- Si el amplificador no tiene FX Loop, usa la MG-30 en modo simple (sin 4CM).

---

**[← Directo a PA](./directo_a_pa.md)** | **[Guías](./README.md)** | **[Grabación USB →](./grabacion_usb.md)**
