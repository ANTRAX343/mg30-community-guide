# MG30 Effects Wiki - Style Guide

This document outlines the formatting standards for the MG30 Effects Documentation.

## File Naming

### Directory Structure
```
docs/
├── effects/
│   ├── wah/
│   ├── cmp/
│   ├── efx/
│   ├── mod/
│   ├── dly/
│   └── rvb/
├── amplifiers/
├── cabinets/
└── reference/
```

### File Names
- Use lowercase with underscores: `t_scream.md`
- Match MG30 internal names when possible
- Use descriptive names for reference docs

## Markdown Standards

### Headers
```markdown
# Main Title (H1 - only one per file)
## Section (H2)
### Subsection (H3)
```

### Effect Documentation Template

```markdown
# Effect Name (CATEGORY)

![Effect Type](https://img.shields.io/badge/Type-EffectType-color.svg)
![Category](https://img.shields.io/badge/Category-CAT-blue.svg)

## Overview
Brief description and real-world inspiration.

## Parameters
| Parameter | Range | Default | Description |
|-----------|-------|---------|-------------|
| param1    | 0-100 | 50      | Description |

## Usage Tips
Practical application advice.

## Related Effects
Links to similar or complementary effects.
```

### Badges
Use consistent badge colors:
- **Type**: Orange for overdrives, green for clean, red for distortion
- **Category**: Blue for all categories
- **Inspiration**: Green for all real-world references

### Links
- Internal links: `[Text](./relative/path.md)`
- External links: `[Text](https://example.com)`
- Always use descriptive link text

### Code Blocks
```markdown
```yaml
Drive: 50
Tone: 60
Level: 70
```
```

## Content Guidelines

### Voice and Tone
- Professional but approachable
- Technical accuracy is priority
- Include practical tips and examples

### Parameter Documentation
- Always include range (0-100 typical)
- Provide default values when known
- Describe what each parameter does musically

### Real-World References
- Include original equipment inspiration
- Mention famous users when relevant
- Provide historical context

## Image and Media

### Badges
- Use shields.io for consistency
- Standard format: `![Label](https://img.shields.io/badge/...)`

### Audio Examples
- Place in `/audio/` subdirectory
- Use consistent naming: `effectname_setting.mp3`
- Provide multiple examples per effect

## SEO and Discoverability

### Keywords
Include relevant search terms:
- Effect names (both MG30 and real-world)
- Parameter names
- Musical genres
- Equipment brands

### Cross-References
- Link related effects
- Reference compatible amplifiers
- Suggest effect chains

## Maintenance

### Version Control
- Commit messages: "Add [effect name] documentation"
- Update version history in files when changed
- Maintain changelog in main README

### Community Guidelines
- Encourage user contributions
- Provide clear editing guidelines
- Maintain consistent quality standards
