# Contribuindo para o Amigo Secreto

Obrigado por considerar contribuir para o projeto Amigo Secreto! 🎁

## Como Contribuir

### Reportando Bugs

1. Verifique se o bug já foi reportado nas [issues existentes](https://github.com/seu-usuario/amigo-secreto/issues)
2. Se não encontrar, crie uma nova issue com:
   - Título claro e descritivo
   - Descrição detalhada do problema
   - Passos para reproduzir o bug
   - Comportamento esperado vs atual
   - Screenshots ou GIFs (se aplicável)
   - Informações do ambiente (OS, navegador, versão)

### Sugerindo Melhorias

1. Abra uma issue com a tag "enhancement"
2. Descreva claramente a melhoria proposta
3. Explique por que seria útil para o projeto
4. Forneça exemplos de uso, se possível

### Contribuindo com Código

1. **Fork** o repositório
2. **Clone** seu fork localmente:
   ```bash
   git clone https://github.com/seu-usuario/amigo-secreto.git
   ```
3. **Crie uma branch** para sua feature:
   ```bash
   git checkout -b feature/nome-da-feature
   ```
4. **Faça suas alterações** seguindo os padrões do projeto
5. **Teste** suas alterações:
   ```bash
   npm run test
   npm run type-check
   ```
6. **Commit** suas mudanças:
   ```bash
   git commit -m "feat: adiciona nova funcionalidade X"
   ```
7. **Push** para sua branch:
   ```bash
   git push origin feature/nome-da-feature
   ```
8. **Abra um Pull Request**

## Padrões de Código

### Commits
Usamos [Conventional Commits](https://www.conventionalcommits.org/):

- `feat:` nova funcionalidade
- `fix:` correção de bug
- `docs:` mudanças na documentação
- `style:` formatação, ponto e vírgula, etc
- `refactor:` refatoração de código
- `test:` adição ou correção de testes
- `chore:` tarefas de manutenção

### TypeScript
- Use tipagem estrita
- Prefira interfaces a types quando possível
- Documente funções complexas com JSDoc

### React
- Use componentes funcionais com hooks
- Mantenha componentes pequenos e focados
- Use nomes descritivos para props e estados

### CSS/Tailwind
- Use classes utilitárias do Tailwind
- Mantenha consistência no design system
- Prefira mobile-first approach

## Configuração do Ambiente

1. **Node.js**: versão 16 ou superior
2. **Editor**: recomendamos VS Code com extensões:
   - TypeScript and JavaScript Language Features
   - Tailwind CSS IntelliSense
   - ES7+ React/Redux/React-Native snippets

3. **Configuração do VS Code** (`.vscode/settings.json`):
   ```json
   {
     "editor.formatOnSave": true,
     "editor.codeActionsOnSave": {
       "source.fixAll.eslint": true
     },
     "typescript.preferences.importModuleSpecifier": "relative"
   }
   ```

## Estrutura do Projeto

```
src/
├── components/     # Componentes React reutilizáveis
├── hooks/         # Custom hooks
├── types/         # Definições de tipos TypeScript
├── utils/         # Funções utilitárias
└── styles/        # Estilos globais
```

## Testes

- Escreva testes para novas funcionalidades
- Mantenha cobertura de testes acima de 80%
- Use nomes descritivos para os testes
- Teste casos de borda e cenários de erro

## Documentação

- Atualize o README.md se necessário
- Documente APIs públicas
- Adicione comentários para lógica complexa
- Mantenha exemplos atualizados

## Code Review

Todos os PRs passam por code review. Esperamos:

- Código limpo e bem estruturado
- Testes adequados
- Documentação atualizada
- Sem breaking changes (a menos que justificado)

## Dúvidas?

- Abra uma issue com a tag "question"
- Entre em contato via email: seu.email@exemplo.com
- Participe das discussões no GitHub

Obrigado por contribuir! 🚀