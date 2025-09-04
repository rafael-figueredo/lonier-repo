# SVGs do Studio Lonier

Esta pasta contém os arquivos SVG dos logos e ícones do Studio Lonier.

## Arquivos principais necessários:

1. **logo.svg** - Logo principal do Studio Lonier (usado no cabeçalho)
2. **rezage-logo.svg** - Logo da marca Rezâge (usado na seção de cuidados com a pele)

## Como adicionar os SVGs:

1. Coloque seus arquivos SVG nesta pasta (`public/svg/`)
2. Certifique-se de que os nomes dos arquivos sejam exatamente:
   - `logo.svg` para o logo principal
   - `rezage-logo.svg` para o logo da Rezâge

## Estrutura dos arquivos:

```
public/svg/
├── README.md
├── logo.svg          # Logo principal do Studio Lonier
├── rezage-logo.svg   # Logo da marca Rezâge
└── icons/            # Pasta com ícones SVG
    ├── phone.svg
    ├── location.svg
    ├── instagram.svg
    └── facebook.svg
```

## Ícones SVG disponíveis:

Na pasta `icons/` você encontrará ícones SVG prontos para usar:
- **phone.svg** - Ícone de telefone
- **location.svg** - Ícone de localização
- **instagram.svg** - Ícone do Instagram
- **facebook.svg** - Ícone do Facebook

## Como usar os ícones:

Para usar os ícones, substitua as referências PNG por SVG:

```jsx
// Antes (PNG)
<img src="phone.png" alt="Phone" />

// Depois (SVG)
<img src="/svg/icons/phone.svg" alt="Phone" />
```

## Nota:

Os arquivos PNG e WebP originais foram substituídos pelos SVGs para melhor qualidade e escalabilidade. Os SVGs são referenciados nos seguintes arquivos:

- `components/Layout/Header.jsx` - Logo principal no cabeçalho
- `components/Services/ServicesMap.jsx` - Logo da Rezâge na seção de cuidados com a pele
