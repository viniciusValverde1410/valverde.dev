# 🚀 Portfólio Valverde

[![Next.js](https://img.shields.io/badge/Next.js-15.5.5-black?style=for-the-badge&logo=next.js)](https://nextjs.org/)
[![React](https://img.shields.io/badge/React-19.1.0-61dafb?style=for-the-badge&logo=react)](https://reactjs.org/)
[![CSS Modules](https://img.shields.io/badge/CSS-Modules-blue?style=for-the-badge&logo=css3)](https://github.com/css-modules/css-modules)

> Landing page profissional e moderna para portfólio de desenvolvedor, construída com Next.js, React e CSS Modules. Design responsivo com animações suaves e experiência de usuário otimizada.

![Portfolio Preview](https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=1200&h=600&fit=crop)

## ✨ Características

- 🎨 **Design Moderno:** Interface dark mode com gradientes sutis e glassmorphism
- 📱 **Totalmente Responsivo:** Mobile-first design com 3 breakpoints
- ⚡ **Performance Otimizada:** Built com Next.js 15 e React 19
- 🎭 **Animações Suaves:** Efeitos de hover e transições elegantes
- 🧩 **Componentes Reutilizáveis:** Arquitetura modular com CSS Modules
- ♿ **Acessível:** Estrutura semântica e navegação otimizada

## 🛠️ Tecnologias Utilizadas

- **[Next.js 15.5.5](https://nextjs.org/)** - Framework React com SSR e SSG
- **[React 19.1.0](https://reactjs.org/)** - Biblioteca JavaScript para UI
- **CSS Modules** - Estilos com escopo local
- **JavaScript ES6+** - Sintaxe moderna
- **Git** - Controle de versão

## 📦 Estrutura do Projeto

```
portfolio/
├── src/
│   ├── app/
│   │   ├── globals.css          # Estilos globais
│   │   ├── layout.js            # Layout principal
│   │   ├── page.jsx             # Página inicial
│   │   └── page.module.css      # Estilos da página
│   └── components/
│       ├── ProjectCard.jsx      # Componente de card de projeto
│       └── ProjectCard.module.css
├── public/                       # Arquivos estáticos
├── next.config.mjs              # Configuração do Next.js
├── jsconfig.json                # Configuração JavaScript
├── package.json                 # Dependências
└── README.md                    # Documentação
```

## 🚀 Como Executar

### Pré-requisitos

- Node.js 18.17 ou superior
- npm, yarn, pnpm ou bun

### Instalação

1. Clone o repositório:

```bash
git clone https://github.com/viniciusValverde1410/valverde.dev.git
cd valverde.dev
```

2. Instale as dependências:

```bash
npm install
# ou
yarn install
# ou
pnpm install
```

3. Execute o servidor de desenvolvimento:

```bash
npm run dev
# ou
yarn dev
# ou
pnpm dev
```

4. Abra [http://localhost:3000](http://localhost:3000) no seu navegador.

## 🎨 Seções da Landing Page

### 1. Hero Section

- Foto de perfil com borda estilizada
- Nome e título profissional
- Descrição breve
- Versículo bíblico motivacional
- Botões CTA (GitHub, LinkedIn, Contato)

### 2. Sobre Mim

- Texto detalhado sobre experiência
- Background profissional
- Objetivos e filosofia

### 3. Tecnologias

- Grid visual com 8 tecnologias principais
- Cards com gradientes coloridos
- Hover effects interativos

### 4. Projetos

- Grid responsivo de projetos
- Cards com imagem, descrição e tecnologias
- Links para demo e repositório GitHub

### 5. Footer

- Links de contato e redes sociais
- Copyright e informações adicionais

## 🔧 Scripts Disponíveis

```bash
# Desenvolvimento
npm run dev          # Inicia servidor de desenvolvimento

# Produção
npm run build        # Cria build otimizado
npm run start        # Inicia servidor de produção

# Qualidade de Código
npm run lint         # Executa ESLint
```

## 🌐 Deploy

### Vercel (Recomendado)

1. Push seu código para o GitHub
2. Importe o projeto no [Vercel](https://vercel.com)
3. Deploy automático a cada push

[![Deploy with Vercel](https://vercel.com/button)](https://vercel.com/new/clone?repository-url=https://github.com/viniciusValverde1410/valverde.dev)

### Outras Opções

- **Netlify:** Suporte completo para Next.js
- **Railway:** Deploy com Docker
- **AWS Amplify:** Integração com AWS

## 🎯 Personalizações

### Alterar Informações Pessoais

Edite o arquivo `src/app/page.jsx`:

```javascript
// Linha 8-15: Tecnologias
const technologies = [{ name: "Sua Tecnologia", color: "gradient" }];

// Linha 18-40: Projetos
const projects = [
  {
    title: "Seu Projeto",
    description: "Descrição do projeto",
    // ...
  },
];
```

### Modificar Estilos

Os estilos estão organizados em CSS Modules:

- `src/app/page.module.css` - Estilos principais
- `src/components/ProjectCard.module.css` - Estilos dos cards
- `src/app/globals.css` - Reset e estilos globais

### Adicionar Novas Seções

Crie novos componentes em `src/components/` e importe em `page.jsx`.

## 📝 Licença

Este projeto está sob a licença MIT. Veja o arquivo [LICENSE](LICENSE) para mais detalhes.

## 👤 Autor

**Valverde**

- GitHub: [@viniciusValverde1410](https://github.com/viniciusValverde1410)
- LinkedIn: [Seu LinkedIn](https://linkedin.com)
- Email: contato@valverde.dev

## 🙏 Agradecimentos

- [Next.js](https://nextjs.org/) - Framework incrível
- [Unsplash](https://unsplash.com/) - Imagens de alta qualidade
- [Vercel](https://vercel.com/) - Plataforma de deploy

---

⭐ Se este projeto te ajudou, considere dar uma estrela!

**"Tudo posso naquele que me fortalece." - Filipenses 4:13**
