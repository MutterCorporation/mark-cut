# 🎬 MARK-CUT Frontend

Landing page moderna com design **Glass Morphism** para o sistema Mark-Cut.

## ✨ Características

- **🎨 Design Glass Morphism** com efeitos visuais modernos
- **🔤 Tipografia em CAIXA ALTA** para impacto visual
- **🎨 Paleta de Cores**: Petróleo, Branco e Vermelho
- **📱 Totalmente Responsivo** para todos dispositivos
- **⚡ Animações Suaves** com Framer Motion
- **📧 Captura de Email** para lista de lançamento
- **🚀 Performance Otimizada** com lazy loading

## 🛠️ Tecnologias

- **React 18** - Framework principal
- **Tailwind CSS** - Estilização e design system
- **Framer Motion** - Animações e transições
- **React Hook Form** - Gerenciamento de formulários
- **React Hot Toast** - Notificações elegantes
- **Lucide React** - Ícones modernos

## 🚀 Como Executar

### Pré-requisitos
- Node.js 16+
- npm ou yarn

### Instalação
```bash
# Clone o repositório
git clone <repo-url>

# Entre na pasta do frontend
cd frontend

# Instale as dependências
npm install

# Inicie o servidor de desenvolvimento
npm start
```

### Scripts Disponíveis

```bash
# Servidor de desenvolvimento
npm start

# Build para produção
npm run build

# Executar testes
npm test

# Ejetar configurações (irreversível)
npm run eject
```

## 🎨 Estrutura de Design

### Cores Principais
- **Petróleo**: `#0f172a` (dark-petroleum)
- **Petróleo Claro**: `#1e293b` (light-petroleum)
- **Vermelho Accent**: `#ef4444` (accent-red-500)
- **Branco**: `#ffffff`

### Classes Glass Morphism
- `.glass` - Efeito glass básico
- `.glass-strong` - Efeito glass intensificado
- `.glass-red` - Variação com borda vermelha
- `.glass-button` - Botões com efeito glass

### Tipografia
- **Fonte**: Inter (Google Fonts)
- **Estilo**: Uppercase com letter-spacing
- **Gradientes**: Branco para azul, vermelho para rosa

## 📧 Sistema de Captura de Email

O formulário de subscription possui:
- ✅ Validação de email em tempo real
- 🔄 Loading state durante envio
- 🎉 Feedback visual com toast notifications
- 💾 Reset automático após sucesso

## 🌟 Seções da Landing Page

### 1. Header Fixo
- Logo animado
- Status "EM BREVE"
- Efeito glass morphism

### 2. Hero Section
- Título impactante em CAIXA ALTA
- Badge de lançamento
- Cards de recursos principais
- Formulário de subscription centralizado

### 3. Recursos Detalhados
- Grid responsivo de features
- Ícones ilustrativos
- Animações escalonadas
- Benefícios por recurso

### 4. Demo Section
- Player de vídeo placeholder
- Call-to-action para demonstração
- Elementos decorativos animados

### 5. Footer
- Logo e slogan
- Copyright e links

## 🎭 Animações

### Tipos de Animação
- **Fade In**: Entrada suave com opacidade
- **Slide Up**: Subida com efeito Y
- **Scale In**: Zoom de entrada
- **Float**: Movimento flutuante contínuo
- **Glow**: Brilho pulsante

### Delays Escalonados
- Animações sequenciais para melhor UX
- Delays de 0.1s a 0.5s entre elementos
- Viewport triggers para performance

## 🔧 Customização

### Modificar Cores
Edite `tailwind.config.js`:
```javascript
colors: {
  petroleum: { /* suas cores */ },
  'accent-red': { /* suas cores */ }
}
```

### Adicionar Animações
Em `src/index.css`:
```css
@keyframes suaAnimacao {
  /* keyframes */
}
```

### Modificar Conteúdo
Edite `src/components/LandingPage.jsx`:
- Textos nas seções
- Features e benefícios
- Links e CTAs

## 📱 Responsividade

### Breakpoints
- **Mobile**: < 640px
- **Tablet**: 640px - 1024px
- **Desktop**: > 1024px

### Otimizações Mobile
- Tamanhos de fonte reduzidos
- Padding e margins ajustados
- Grid columns responsivos
- Touch-friendly buttons

## 🚀 Deploy

### Netlify
```bash
npm run build
# Upload da pasta build/
```

### Vercel
```bash
npm install -g vercel
vercel --prod
```

### GitHub Pages
```bash
npm install --save-dev gh-pages
npm run build
npx gh-pages -d build
```

## 📊 Performance

### Otimizações Incluídas
- ⚡ Code splitting automático
- 🖼️ Lazy loading de imagens
- 📦 Bundle size otimizado
- 🎯 Preconnect para Google Fonts
- 💾 Cache headers configurados

### Métricas Esperadas
- **First Contentful Paint**: < 1.5s
- **Largest Contentful Paint**: < 2.5s
- **Cumulative Layout Shift**: < 0.1
- **First Input Delay**: < 100ms

## 🐛 Troubleshooting

### Erro de Dependências
```bash
rm -rf node_modules package-lock.json
npm install
```

### Problema com Tailwind
```bash
npm run build
# Verifique se todas as classes estão no content path
```

### Animações Não Funcionam
- Verifique se `framer-motion` está instalado
- Confirme imports dos componentes Motion

## 📄 Licença

Este projeto está sob licença MIT.

---

**🔥 MARK-CUT - O FUTURO DO CORTE DE VÍDEO ESTÁ CHEGANDO!** 