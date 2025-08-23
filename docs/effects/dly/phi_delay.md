# Phi Delay

## Descripción
El Phi Delay es un efecto de delay digital diseñado para crear ecos y repeticiones precisas con control de subdivisiones rítmicas.

## Parámetros

### MIX
- **Función**: Controla la mezcla entre la señal directa y el efecto de delay
- **Rango**: 0-100%
- **Comportamiento**: 0% = solo señal directa, 100% = solo delay

### REPEATS
- **Función**: Controla la cantidad de repeticiones del delay
- **Rango**: 0-100%
- **Comportamiento**: Determina cuántas veces se repite el eco antes de desvanecerse

### TIME
- **Función**: Controla el tiempo de delay en milisegundos
- **Rango**: Variable según el efecto (ej: 672ms mostrado)
- **Comportamiento**: Determina el intervalo de tiempo entre repeticiones
- **Nota**: Afectado por el knob físico TIME de la pedalera

### SUB D. (Subdivisiones)
- **Función**: Permite seleccionar subdivisiones rítmicas basadas en el BPM del preset
- **Opciones**: 
  - Negra
  - Corchea
  - Corchea con puntillo
  - Semicorchea
  - Y otras subdivisiones musicales
- **Comportamiento**: Calcula automáticamente el TIME basado en el BPM del preset y la subdivisión seleccionada
- **Nota**: Este control puede sobreescribir el valor del knob TIME físico

## Notas Técnicas

- El parámetro TIME puede ser controlado de dos formas:
  1. Directamente con el knob TIME (valor en milisegundos)
  2. Mediante SUB D. que calcula el tiempo basado en BPM y subdivisión musical
- Cuando se usa SUB D., el tiempo se sincroniza automáticamente con el tempo del preset
- Esto permite crear delays musicalmente coherentes sin depender únicamente del knob físico
