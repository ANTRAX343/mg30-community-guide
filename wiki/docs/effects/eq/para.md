# EQ: Para

## Emulación

- Modelo real: Ecualizador paramétrico completo
- Tipo: EQ paramétrico
- Carácter: control total sobre frecuencia, ganancia y Q

## Descripción

Ecualizador paramétrico de 3 bandas con control visual gráfico. Cada banda tiene controles independientes de frecuencia, ganancia y factor Q, con diferentes tipos de curva según la banda.

## Parámetros

### Banda 1 (Graves - Roja)

- Freq: 30 Hz a 700 Hz
- Gain: -15 dB a +15 dB
- Q: 0 a 100 (0 = shelf suave/ancho, 100 = peak estrecho/puntiagudo)

### Banda 2 (Medios - Azul)

- Freq: 400 Hz a 6.5 kHz
- Gain: -15 dB a +15 dB
- Q: 0 a 100 (0 = bell ancho, 100 = peak muy estrecho/puntiagudo)

### Banda 3 (Agudos - Morada)

- Freq: 1.7 kHz a 10 kHz  
- Gain: -15 dB a +15 dB
- Q: 0 a 100 (0 = shelf suave, 100 = shelf pronunciado)
