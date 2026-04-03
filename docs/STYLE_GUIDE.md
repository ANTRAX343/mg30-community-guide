# Guía de Estilo — NUX MG-30 v5.0.2

> **Firmware objetivo:** NUX MG-30 **v5.0.2**

Este documento define los estándares de formato y contenido para la documentación comunitaria de la NUX MG-30.

## Reglas generales

### Idioma
- Todo el contenido debe estar en **español**.
- Los nombres propios de efectos y modelos se mantienen en su nombre original (ej. "T Scream", "Dual Rect").

### Firmware objetivo
- Cada página debe indicar el firmware al que aplica. Usa el bloque de nota estándar al inicio:
  ```
  > **Firmware objetivo:** NUX MG-30 **v5.0.2**
  ```
- Si la información aplica a múltiples versiones, indícalo explícitamente.

---

## Nombres de archivos y carpetas

### Estructura de directorios
```
docs/
├── efectos/
│   ├── wah/
│   ├── cmp/
│   ├── gate/
│   ├── efx/
│   ├── eq/
│   ├── sr/
│   ├── mod/
│   ├── dly/
│   └── rvb/
├── amplificadores/
├── cabinets_ir/
├── referencia/
└── guias/
```

### Nombres de archivos
- Usa minúsculas con guiones bajos: `t_scream.md`
- Mantén los nombres internos de la MG-30 cuando sea posible.
- Para archivos de referencia, usa nombres descriptivos en español: `rangos_de_parametros.md`.

---

## Estándares Markdown

### Encabezados
```markdown
# Título principal (H1 — solo uno por archivo)
## Sección (H2)
### Subsección (H3)
```

### Plantilla de documentación de efecto

```markdown
# Nombre del Efecto (CATEGORÍA)

> **Firmware objetivo:** NUX MG-30 **v5.0.2**

![Tipo](https://img.shields.io/badge/Tipo-Overdrive-orange.svg)
![Categoría](https://img.shields.io/badge/Categoría-EFX-blue.svg)

## Descripción
Descripción breve e inspiración en el mundo real.

## Parámetros
| Parámetro | Rango | Por defecto | Descripción |
|-----------|-------|-------------|-------------|
| Drive     | 0–100 | 50          | Cantidad de saturación |

## Rangos y valores de referencia
Valores recomendados para usos comunes.

## Consejos de uso
Aplicación práctica y recomendaciones.

## Efectos relacionados
Enlaces a efectos similares o complementarios.
```

### Estructura recomendada de cada página
1. **Descripción** — Qué hace el efecto, su inspiración real
2. **Parámetros** — Tabla completa con rango, valor por defecto y descripción
3. **Rangos de referencia** — Valores orientativos para estilos o usos típicos
4. **Consejos / Tips** — Recomendaciones prácticas de uso
5. **Ejemplos** — Cadenas o combinaciones donde funciona bien

---

## Badges

Usa colores consistentes para los badges:
- **Tipo**: naranja para overdrives, verde para limpios, rojo para distorsión
- **Categoría**: azul para todas las categorías
- **Referencia real**: verde para equipos reales en los que está basado

```markdown
![Tipo](https://img.shields.io/badge/Tipo-Overdrive-orange.svg)
![Categoría](https://img.shields.io/badge/Categoría-EFX-blue.svg)
```

---

## Convenciones de enlaces

### Navegación
Cada página debe incluir al final una barra de navegación con:
```markdown
**[← Anterior](./anterior.md)** | **[Índice de sección](./README.md)** | **[Siguiente →](./siguiente.md)**
```

### Tipos de enlace
- **Internal links**: `[Texto](./ruta/relativa.md)` — siempre usa rutas relativas
- **External links**: `[Texto](https://ejemplo.com)` — con texto descriptivo

---

## Directrices de contenido

### Voz y tono
- Profesional pero accesible
- La precisión técnica es prioritaria
- Incluir consejos prácticos y ejemplos musicales

### Documentación de parámetros
- Siempre incluir el rango (típicamente 0–100)
- Proporcionar valores por defecto cuando se conozcan
- Describir qué hace cada parámetro **musicalmente**, no solo técnicamente

### Referencias al mundo real
- Incluir el equipo original en el que está basado el efecto
- Mencionar usuarios/artistas famosos cuando sea relevante
- Dar contexto histórico si es útil

---

## Mantenimiento

### Control de versiones
- Mensajes de commit: "Añadir documentación [nombre efecto]" / "Traducir [archivo]"
- Actualizar este fichero cuando cambien las convenciones

### Directrices comunitarias
- Fomenta las contribuciones con instrucciones claras
- Mantén estándares de calidad consistentes
- Revisa los PR para asegurar que siguen esta guía de estilo

