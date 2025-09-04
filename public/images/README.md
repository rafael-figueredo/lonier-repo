# Imagens do Studio Lonier

Esta pasta contém as imagens do Studio Lonier que substituem os SVGs.

## Como usar:

1. **Coloque sua imagem aqui** (`public/images/`)
2. **Nome sugerido**: `logo.png` (ou .jpg, .webp)
3. **Tamanho recomendado**: 238x136px (mesmo do SVG original)

## Formatos suportados:

- **PNG** - Melhor para logos com transparência
- **JPG** - Menor tamanho, bom para fotos
- **WebP** - Melhor compressão, moderno
- **SVG** - Escalável, mas você quer substituir por imagem

## Como adicionar sua imagem:

1. Copie sua imagem para esta pasta
2. Renomeie para `logo.png` (ou o formato que preferir)
3. A imagem será automaticamente usada no cabeçalho

## Estrutura sugerida:

```
public/images/
├── README.md
├── logo.png          # Logo principal (238x136px)
├── logo@2x.png       # Versão retina (476x272px)
└── logo.webp         # Versão WebP (opcional)
```

## Nota:

Se você quiser usar um nome diferente de `logo.png`, edite o arquivo:
`components/Layout/Header.jsx` na linha que contém `src="/images/logo.png"`
