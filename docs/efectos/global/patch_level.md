# Patch Level

## Descripción

Control global de nivel de salida del preset activo. El Patch Level permite ajustar el volumen general de todo el preset sin afectar el balance interno entre efectos. Este control es esencial para igualar los niveles entre diferentes presets y evitar saltos bruscos de volumen al cambiar de configuración.

A diferencia de los controles de Level individuales de cada efecto, el Patch Level actúa como un control maestro que está ubicado al final de toda la cadena de procesamiento, después del reverb, permitiendo un ajuste fino del volumen de salida total.

## Parámetros

### MIN

- **Función**: Establece el rango de nivel mínimo del preset
- **Rango**: 0 a 50
- **Comportamiento**: Controla la parte inferior del rango dinámico del preset. Un valor de 0 permite que el preset tenga un volumen muy bajo o incluso silencio completo. Valores más altos establecen un piso mínimo de volumen, útil para mantener presencia constante en mezclas

### MAX

- **Función**: Establece el rango de nivel máximo del preset
- **Rango**: 51 a 100
- **Comportamiento**: Controla la parte superior del rango dinámico del preset. Un valor de 51 proporciona un volumen moderado como máximo. Valores más altos permiten mayor volumen de salida, siendo 100 el nivel máximo disponible. Este parámetro es crucial para igualar presets con diferentes ganancies internas

## Notas de Uso

- **Ubicación en cadena**: Final absoluto, después de todos los efectos incluido RVB
- **Función principal**: Igualación de niveles entre presets
- **Relación MIN/MAX**: El rango MIN debe ser siempre menor que MAX para un funcionamiento correcto
- **Aplicación típica**: Ajustar durante la creación de presets para mantener volúmenes consistentes en el setlist
