# Content Migration Script

This script helps migrate content from the original documentation project to the wiki structure.

## Source Documentation Location
```
C:\Users\emman\Documents\Nux\Documentación\docs\efectos\
```

## Target Wiki Structure
```
C:\Users\emman\Documents\Nux\MG30Wiki\docs\effects\
```

## Migration Steps

### 1. Copy Effect Files

```powershell
# WAH Effects (5 files)
Copy-Item "C:\Users\emman\Documents\Nux\Documentación\docs\efectos\wah\*.md" -Destination "C:\Users\emman\Documents\Nux\MG30Wiki\docs\effects\wah\"

# CMP Effects (3 files)
Copy-Item "C:\Users\emman\Documents\Nux\Documentación\docs\efectos\cmp\*.md" -Destination "C:\Users\emman\Documents\Nux\MG30Wiki\docs\effects\cmp\"

# EFX Effects (18 files)
Copy-Item "C:\Users\emman\Documents\Nux\Documentación\docs\efectos\efx\*.md" -Destination "C:\Users\emman\Documents\Nux\MG30Wiki\docs\effects\efx\"

# MOD Effects (14 files)
Copy-Item "C:\Users\emman\Documents\Nux\Documentación\docs\efectos\mod\*.md" -Destination "C:\Users\emman\Documents\Nux\MG30Wiki\docs\effects\mod\"

# DLY Effects (8 files)
Copy-Item "C:\Users\emman\Documents\Nux\Documentación\docs\efectos\dly\*.md" -Destination "C:\Users\emman\Documents\Nux\MG30Wiki\docs\effects\dly\"

# RVB Effects (6 files)
Copy-Item "C:\Users\emman\Documents\Nux\Documentación\docs\efectos\rvb\*.md" -Destination "C:\Users\emman\Documents\Nux\MG30Wiki\docs\effects\rvb\"

# AMP Effects (40+ files)
Copy-Item "C:\Users\emman\Documents\Nux\Documentación\docs\efectos\amp\*.md" -Destination "C:\Users\emman\Documents\Nux\MG30Wiki\docs\amplifiers\"

# IR Effects (30+ files)
Copy-Item "C:\Users\emman\Documents\Nux\Documentación\docs\efectos\ir\*.md" -Destination "C:\Users\emman\Documents\Nux\MG30Wiki\docs\cabinets\"
```

### 2. Copy Catalog and Reference Files

```powershell
# Main catalog
Copy-Item "C:\Users\emman\Documents\Nux\Documentación\docs\02_catalogo_efectos.md" -Destination "C:\Users\emman\Documents\Nux\MG30Wiki\docs\reference\catalog.md"

# Technical specs
Copy-Item "C:\Users\emman\Documents\Nux\Documentación\docs\01_especificaciones_tecnicas.md" -Destination "C:\Users\emman\Documents\Nux\MG30Wiki\docs\reference\specifications.md"
```

### 3. Content Adaptation

After copying, each file should be reviewed and adapted to the new format:

#### Add badges to each effect:
```markdown
![Effect Type](https://img.shields.io/badge/Type-Overdrive-orange.svg)
![Category](https://img.shields.io/badge/Category-EFX-blue.svg)
```

#### Standardize parameter tables:
```markdown
| Parameter | Range | Default | Description |
|-----------|-------|---------|-------------|
| Drive     | 0-100 | 50      | Description |
```

#### Add navigation links:
```markdown
**Next**: [Effect](./next_effect.md) | **Previous**: [Effect](./previous_effect.md) | **Up**: [Category](./README.md)
```

## Automated Tasks

### Create category README files:
- Each category needs a README.md with effect list
- Use the catalog content as reference
- Add proper navigation structure

### Create cross-references:
- Link related effects
- Reference compatible amplifiers
- Suggest effect chains

### Optimize for search:
- Add keywords to each file
- Create searchable index
- Generate tag-based navigation

## Quality Checks

Before publishing:
- [ ] All 274 effect files copied
- [ ] Navigation links working
- [ ] Images and badges displaying
- [ ] Markdown formatting consistent
- [ ] Cross-references accurate
- [ ] Search functionality working

## Publishing Steps

1. **Initialize Git repository**
2. **Push to GitHub**
3. **Enable GitHub Pages or Wiki**
4. **Configure custom domain (optional)**
5. **Add to README with proper links**
