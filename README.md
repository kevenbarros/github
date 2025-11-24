# React + TypeScript + Vite + Zustand + React Query + TailwindCSS

Este projeto demonstra uma aplicação React moderna com as seguintes tecnologias:

## 🚀 Tecnologias Utilizadas

- **React 19** - Biblioteca para interfaces de usuário
- **TypeScript** - Superset do JavaScript com tipagem estática
- **Vite** - Build tool rápida e moderna
- **Zustand** - Gerenciamento de estado global simples e poderoso
- **TanStack Query (React Query)** - Biblioteca para cache, sincronização e atualização de dados
- **TailwindCSS** - Framework CSS utilitário para estilização rápida
- **Axios** - Cliente HTTP para requisições à API

## 📁 Estrutura do Projeto

```
src/
├── components/          # Componentes React reutilizáveis
│   └── UserManager.tsx  # Componente principal de demonstração
├── hooks/               # Hooks customizados
│   └── useUserQueries.ts # Hooks para React Query
├── providers/           # Providers de contexto
│   └── QueryProvider.tsx # Provider do React Query
├── services/            # Serviços da API
│   ├── apiConfig.ts     # Configurações da API
│   └── userService.ts   # Serviços de usuários com Axios
├── stores/              # Stores do Zustand
│   └── userStore.ts     # Store de gerenciamento de usuários
├── App.tsx              # Componente principal da aplicação
└── main.tsx             # Ponto de entrada da aplicação
```

## 🛠️ Funcionalidades Demonstradas

### Zustand (Estado Global)
- Store tipado com TypeScript
- Ações para CRUD de usuários
- DevTools integrado para debugging
- Estado reativo e performático

### React Query (Cache e Sincronização)
- Cache automático de dados
- Invalidação inteligente
- Loading states
- Error handling
- Background updates
- DevTools para monitoramento

### TailwindCSS
- Design responsivo
- Componentes estilizados
- Classes utilitárias
- Estados interativos (hover, focus, disabled)

### Axios (HTTP Client)
- Configuração centralizada da API
- Interceptadores para requisições/respostas
- Tratamento automático de erros
- Transformação de dados
- Suporte a diferentes ambientes

## 🚦 Como Executar

1. **Instalar dependências:**
   ```bash
   pnpm install
   ```

2. **Executar em modo de desenvolvimento:**
   ```bash
   pnpm dev
   ```

3. **Build para produção:**
   ```bash
   pnpm build
   ```

## 🎯 Funcionalidades da Aplicação

O **GitHub Explorer** implementa:

1. **🔍 Busca de repositórios** - Pesquisa global no GitHub
2. **👤 Repositórios do usuário** - Lista repositórios de qualquer usuário
3. **⭐ Repositórios favoritos** - Mostra repos com star do usuário
4. **🔧 Filtros avançados** - Por linguagem, tipo, ordenação
5. **📄 Paginação** - Navegação entre páginas de resultados
6. **📊 Detalhes completos** - Modal com informações do repositório
7. **📱 Interface responsiva** - Funciona em desktop e mobile

## 📚 Conceitos Abordados

### Zustand
- Create stores tipados
- Middleware de devtools
- Ações síncronas e assíncronas
- Subscription pattern

### React Query
- useQuery para dados de leitura
- useMutation para operações de escrita
- Query invalidation
- Error boundaries
- Loading states

### TailwindCSS
- Utility-first CSS
- Responsive design
- Component composition
- Custom configurations

## 🔧 Configurações

### TypeScript
- Configuração estrita
- Path mapping
- Type-only imports

### ESLint
- Regras para React Hooks
- TypeScript ESLint
- Configuração moderna

### Vite
- Hot Module Replacement (HMR)
- Build otimizado
- Plugin React

## 📖 Recursos Adicionais

- [Zustand Documentation](https://zustand-demo.pmnd.rs/)
- [TanStack Query Documentation](https://tanstack.com/query/latest)
- [TailwindCSS Documentation](https://tailwindcss.com/docs)
- [Vite Documentation](https://vitejs.dev/)
- [React Documentation](https://react.dev/)
