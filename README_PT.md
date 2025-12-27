# 🎬 MarkCut Frontend

Landing page moderna com design **Glass Morphism** para o sistema MarkCut.

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
bash
# Clone o repositório
git clone <repo-url>

# Entre na pasta do frontend
cd frontend

# Instale as dependências
npm install

# Inicie o servidor de desenvolvimento
npm start


### Scripts Disponíveis

bash
# Servidor de desenvolvimento
npm start

# Build para produção
npm run build

# Executar testes
npm test

# Ejetar configurações (irreversível)
npm run eject


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
- Entrada atrasada para elementos