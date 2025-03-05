# Documentação do Site da Dra. Giselly Beltrame

## Estrutura do Projeto

### 1. Arquivos de Configuração

- `package.json`: Gerencia as dependências e scripts do projeto
- `vite.config.ts`: Configuração do Vite (bundler)
- `tailwind.config.js`: Configuração do Tailwind CSS
- `tsconfig.json`: Configuração do TypeScript
- `eslint.config.js`: Configuração do ESLint para linting

### 2. Componentes Principais

#### App.tsx
O componente principal que estrutura todo o site. Responsável por:
- Gerenciar o menu de navegação responsivo
- Organizar a ordem dos componentes
- Implementar o botão flutuante do WhatsApp

#### Hero.tsx
Seção inicial do site que contém:
- Título principal e subtítulo
- Botão de chamada para ação
- Foto principal da Dra. Giselly
- Gradiente de fundo personalizado

#### About.tsx
Seção "Sobre" que apresenta:
- Informações profissionais
- Foto da doutora em ambiente clínico
- Texto biográfico e qualificações

#### Services.tsx
Apresentação dos serviços oferecidos:
- Cards interativos com ícones
- Descrições dos tratamentos
- Layout responsivo em grid

#### Testimonials.tsx
Seção de depoimentos que mostra:
- Avaliações de pacientes
- Sistema de estrelas para classificação
- Cards com layout elegante

#### Technology.tsx
Destaque para a infraestrutura:
- Listagem de equipamentos
- Imagens da clínica
- Descrição da tecnologia utilizada

#### Contact.tsx
Formulário de contato e informações:
- Campos para mensagem
- Informações de contato
- Horário de funcionamento
- Localização

#### Footer.tsx
Rodapé do site com:
- Links para redes sociais
- Informações de contato
- Copyright

## Estilos e Design

### Cores Principais
- Burgundy (Vinho): Cor principal da identidade visual
- Branco: Cor de fundo e contraste
- Cinza: Textos e elementos secundários

### Responsividade
- Mobile-first design
- Breakpoints para tablets e desktop
- Menu hamburguer para dispositivos móveis

### Componentes UI
- Botões estilizados
- Cards com sombras
- Ícones da biblioteca Lucide
- Gradientes sutis

## Funcionalidades

### Navegação
- Menu responsivo
- Links de ancoragem suave
- Botão flutuante do WhatsApp

### Formulários
- Validação de campos
- Feedback visual
- Campos obrigatórios

### Performance
- Imagens otimizadas
- Carregamento sob demanda
- Código minificado