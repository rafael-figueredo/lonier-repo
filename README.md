# Studio Lonier - Espaço Beleza

**Website para um salão de beleza local em Itapecerica da Serra, SP.**

### [Website](https://lonier-repo.vercel.app)

## Sobre o Projeto

O Studio Lonier é um salão de beleza moderno que oferece serviços especializados em cabelo, unhas, skincare e depilação. Este website foi desenvolvido para apresentar os serviços, equipe e facilitar o contato com os clientes.

## Funcionalidades

- **Design Responsivo**: Interface adaptável para desktop, tablet e mobile
- **Menu Mobile Animado**: Menu com animações sequenciais e efeitos visuais
- **Sistema de Serviços**: Catálogo completo de serviços organizados por categoria
- **Galeria da Equipe**: Apresentação dos profissionais especializados
- **Formulário de Contato**: Sistema integrado com EmailJS para envio de mensagens
- **Integração com Google Maps**: Localização e avaliações do estabelecimento
- **Otimização de Imagens**: Carregamento otimizado com Next.js Image
- **SEO Otimizado**: Meta tags e estrutura otimizada para mecanismos de busca

## Tecnologias Utilizadas

- **[Next.js](https://nextjs.org/)** - Framework React com renderização server-side
- **[React](https://reactjs.org/)** - Biblioteca JavaScript para interfaces
- **[Tailwind CSS](https://tailwindcss.com/)** - Framework CSS utilitário
- **[EmailJS](https://www.emailjs.com/)** - Serviço de envio de emails
- **[Google Maps API](https://developers.google.com/maps)** - Integração com mapas e avaliações
- **[Vercel](https://vercel.com/)** - Plataforma de hospedagem

## Estrutura do Projeto

```
studio-lonier/
├── components/
│   ├── Layout/          # Componentes de layout (Header, Footer, etc.)
│   ├── Services/        # Componentes relacionados aos serviços
│   ├── Team/            # Componentes da equipe
│   ├── Contact/         # Formulário de contato e integrações
│   └── ...
├── pages/               # Páginas do Next.js
├── public/              # Arquivos estáticos (imagens, ícones)
├── styles/              # Arquivos CSS globais
└── ...
```

## Configuração Local

### Pré-requisitos

- Node.js (versão 14 ou superior)
- npm ou yarn

### Instalação

1. **Clone o repositório**
   ```bash
   git clone https://github.com/seu-usuario/studio-lonier.git
   cd studio-lonier
   ```

2. **Instale as dependências**
   ```bash
   npm install
   ```

3. **Configure as variáveis de ambiente**
   
   Crie um arquivo `.env.local` na raiz do projeto e adicione suas chaves de API:

   ```env
   # Para Google Maps e Avaliações
   NEXT_PUBLIC_placesAPIkey="sua-chave-da-api-do-google-places"
   NEXT_PUBLIC_placeid="id-do-local-no-google-places"
   NEXT_PUBLIC_googleMapsApiKey="sua-chave-da-api-do-google-maps"

   # Para o formulário de contato (EmailJS)
   NEXT_PUBLIC_templateid="id-do-template-do-emailjs"
   NEXT_PUBLIC_userid="id-do-usuario-do-emailjs"
   ```

4. **Execute o projeto**
   ```bash
   npm run dev
   ```

   O site estará disponível em `http://localhost:3000`

## Configuração das APIs

### Google Maps e Avaliações

1. Acesse o [Google Cloud Console](https://console.cloud.google.com/)
2. Crie um projeto e habilite as APIs necessárias:
   - Places API
   - Maps JavaScript API
3. Gere as chaves de API necessárias
4. Configure as variáveis no arquivo `.env.local`

### EmailJS (Formulário de Contato)

1. Crie uma conta no [EmailJS](https://www.emailjs.com/)
2. Configure um template de email
3. Obtenha o Template ID e User ID
4. Adicione as variáveis no arquivo `.env.local`

## Personalização

### Dados dos Serviços

Os dados dos serviços estão organizados em arquivos específicos:
- `components/Services/services-haircare.js` - Serviços de cabelo
- `components/Services/services-nails.js` - Serviços de unhas
- `components/Services/services-skincare.js` - Serviços de skincare
- `components/Services/services-waxing.js` - Serviços de depilação

### Dados da Equipe

As informações da equipe estão em `components/Team/members.js`

### Estilos

Os estilos globais estão em `styles/global.css` e podem ser personalizados conforme necessário.

## Scripts Disponíveis

- `npm run dev` - Inicia o servidor de desenvolvimento
- `npm run build` - Gera a versão de produção
- `npm start` - Inicia o servidor de produção

## Deploy

O projeto está configurado para deploy automático no Vercel. Qualquer push para a branch principal será automaticamente deployado.

## Contribuição

1. Faça um fork do projeto
2. Crie uma branch para sua feature (`git checkout -b feature/AmazingFeature`)
3. Commit suas mudanças (`git commit -m 'Add some AmazingFeature'`)
4. Push para a branch (`git push origin feature/AmazingFeature`)
5. Abra um Pull Request

## Licença

Este projeto está sob a licença MIT. Veja o arquivo [LICENSE](LICENSE) para mais detalhes.

## Contato

- **Studio Lonier**: [Instagram](https://www.instagram.com/studiolonier/)
- **Facebook**: [Studio Lonier Espaço Beleza](https://www.facebook.com/studiolonierespacobeleza/)
- **Endereço**: R. Miguel Rotger Domingues, 268 - Centro, Itapecerica da Serra - SP, 06850-780