# 🎁 Amigo Secreto

Uma aplicação moderna e intuitiva para organizar sorteios de Amigo Secreto de forma fácil e divertida! Desenvolvida com React, TypeScript e Tailwind CSS.

![Demonstração do Amigo Secreto](https://images.pexels.com/photos/6173351/pexels-photo-6173351.jpeg?auto=compress&cs=tinysrgb&w=800&h=400&fit=crop)

## ✨ Funcionalidades

- ➕ **Adicionar e remover participantes** com validação em tempo real
- 🎲 **Sorteio inteligente** que garante que ninguém tire a si mesmo
- 📱 **Interface responsiva** que funciona em todos os dispositivos
- 🎨 **Design moderno** com animações suaves e cores festivas
- 📤 **Compartilhamento fácil** dos resultados via WhatsApp, email ou cópia
- 🔄 **Refazer sorteio** quantas vezes necessário
- ✅ **Validação robusta** para garantir sorteios justos

## 🚀 Tecnologias Utilizadas

- **React 18** - Biblioteca para interfaces de usuário
- **TypeScript** - Tipagem estática para JavaScript
- **Tailwind CSS** - Framework CSS utilitário
- **Vite** - Build tool moderna e rápida
- **Lucide React** - Ícones modernos e consistentes

## 📦 Instalação

Siga os passos abaixo para rodar o projeto localmente:

### Pré-requisitos
- Node.js (versão 16 ou superior)
- npm ou yarn

### Passos

1. **Clone o repositório**:
   ```bash
   git clone https://github.com/seu-usuario/amigo-secreto.git
   cd amigo-secreto
   ```

2. **Instale as dependências**:
   ```bash
   npm install
   ```

3. **Execute o projeto**:
   ```bash
   npm run dev
   ```

4. **Acesse no navegador**:
   ```
   http://localhost:5173
   ```

## 🎯 Exemplo de Uso

### Cenário: Organizando Amigo Secreto da Família

1. **Adicione os participantes**:
   - Maria Silva
   - João Santos
   - Ana Costa
   - Pedro Oliveira
   - Carla Ferreira

2. **Realize o sorteio**:
   - Clique no botão "Realizar Sorteio"
   - O sistema automaticamente garante que ninguém tire a si mesmo

3. **Compartilhe os resultados**:
   - Use os botões de compartilhamento para enviar individualmente
   - Ou copie todos os resultados de uma vez

### Resultado do Sorteio:
```
🎁 Maria Silva → João Santos
🎁 João Santos → Ana Costa  
🎁 Ana Costa → Pedro Oliveira
🎁 Pedro Oliveira → Carla Ferreira
🎁 Carla Ferreira → Maria Silva
```

## 📸 Capturas de Tela

### Tela Inicial - Adicionando Participantes
![Tela inicial mostrando o formulário para adicionar nomes dos participantes](https://images.pexels.com/photos/6173351/pexels-photo-6173351.jpeg?auto=compress&cs=tinysrgb&w=600&h=400&fit=crop)

*Interface limpa e intuitiva para adicionar participantes ao sorteio*

### Resultado do Sorteio
![Tela mostrando os resultados do sorteio com opções de compartilhamento](https://images.pexels.com/photos/6194386/pexels-photo-6194386.jpeg?auto=compress&cs=tinysrgb&w=600&h=400&fit=crop)

*Resultados apresentados de forma clara com botões de compartilhamento*

### Compartilhamento via WhatsApp
![Exemplo de mensagem sendo enviada via WhatsApp](https://images.pexels.com/photos/147413/twitter-facebook-together-exchange-of-information-147413.jpeg?auto=compress&cs=tinysrgb&w=600&h=400&fit=crop)

*Integração direta com WhatsApp para envio dos resultados*

## 🎥 Vídeo Demonstrativo

[![Vídeo demonstrativo do Amigo Secreto](https://images.pexels.com/photos/3945313/pexels-photo-3945313.jpeg?auto=compress&cs=tinysrgb&w=600&h=400&fit=crop)](https://github.com/seu-usuario/amigo-secreto/blob/main/demo/video-demo.mp4)

*Clique na imagem para assistir ao vídeo demonstrativo completo (30 segundos)*

## 🛠️ Scripts Disponíveis

```bash
# Executar em modo de desenvolvimento
npm run dev

# Fazer build para produção
npm run build

# Visualizar build de produção
npm run preview

# Executar testes
npm run test

# Verificar tipos TypeScript
npm run type-check
```

## 📁 Estrutura do Projeto

```
amigo-secreto/
├── public/
│   └── vite.svg
├── src/
│   ├── components/
│   │   ├── ParticipantForm.tsx
│   │   ├── ParticipantList.tsx
│   │   ├── DrawResults.tsx
│   │   └── ShareButtons.tsx
│   ├── hooks/
│   │   └── useAmigosecreto.ts
│   ├── types/
│   │   └── index.ts
│   ├── utils/
│   │   └── drawLogic.ts
│   ├── App.tsx
│   ├── main.tsx
│   └── index.css
├── package.json
├── tailwind.config.js
├── tsconfig.json
└── README.md
```

## 🔧 Configuração

### Personalizando Cores
Edite o arquivo `tailwind.config.js` para personalizar as cores do tema:

```javascript
module.exports = {
  theme: {
    extend: {
      colors: {
        primary: '#EF4444',    // Vermelho festivo
        secondary: '#10B981',  // Verde natalino
        accent: '#F59E0B',     // Dourado
      }
    }
  }
}
```

### Adicionando Novos Idiomas
Para adicionar suporte a outros idiomas, crie arquivos de tradução em `src/locales/`.

## 🤝 Contribuindo

Contribuições são sempre bem-vindas! Para contribuir:

1. Faça um fork do projeto
2. Crie uma branch para sua feature (`git checkout -b feature/AmazingFeature`)
3. Commit suas mudanças (`git commit -m 'Add some AmazingFeature'`)
4. Push para a branch (`git push origin feature/AmazingFeature`)
5. Abra um Pull Request

### Diretrizes de Contribuição

- Mantenha o código limpo e bem documentado
- Adicione testes para novas funcionalidades
- Siga os padrões de código existentes
- Atualize a documentação quando necessário

## 🐛 Reportando Bugs

Encontrou um bug? Abra uma [issue](https://github.com/seu-usuario/amigo-secreto/issues) com:

- Descrição detalhada do problema
- Passos para reproduzir
- Comportamento esperado vs atual
- Screenshots (se aplicável)
- Informações do ambiente (OS, navegador, etc.)

## 📋 Roadmap

- [ ] **v2.0**: Modo multiplayer online
- [ ] **v2.1**: Histórico de sorteios anteriores
- [ ] **v2.2**: Temas personalizáveis
- [ ] **v2.3**: Integração com calendário
- [ ] **v2.4**: Sugestões de presentes por IA
- [ ] **v2.5**: App mobile nativo

## 📄 Licença

Este projeto está sob a licença MIT. Veja o arquivo [LICENSE](LICENSE) para mais detalhes.

## 👨‍💻 Autor

**Seu Nome**
- GitHub: [@seu-usuario](https://github.com/seu-usuario)
- LinkedIn: [Seu Nome](https://linkedin.com/in/seu-perfil)
- Email: seu.email@exemplo.com

## 🙏 Agradecimentos

- [React](https://reactjs.org/) pela incrível biblioteca
- [Tailwind CSS](https://tailwindcss.com/) pelo framework CSS
- [Lucide](https://lucide.dev/) pelos ícones lindos
- [Pexels](https://pexels.com/) pelas imagens de demonstração
- Comunidade open source pelo apoio constante

## 📊 Status do Projeto

![GitHub last commit](https://img.shields.io/github/last-commit/seu-usuario/amigo-secreto)
![GitHub issues](https://img.shields.io/github/issues/seu-usuario/amigo-secreto)
![GitHub stars](https://img.shields.io/github/stars/seu-usuario/amigo-secreto)
![GitHub forks](https://img.shields.io/github/forks/seu-usuario/amigo-secreto)

---

⭐ **Gostou do projeto? Deixe uma estrela!** ⭐

**Compartilhe nas redes sociais:**
- 🐦 [Twitter](https://twitter.com/intent/tweet?text=Confira%20este%20projeto%20incrível%20de%20Amigo%20Secreto!&url=https://github.com/seu-usuario/amigo-secreto)
- 📘 [Facebook](https://www.facebook.com/sharer/sharer.php?u=https://github.com/seu-usuario/amigo-secreto)
- 💼 [LinkedIn](https://www.linkedin.com/sharing/share-offsite/?url=https://github.com/seu-usuario/amigo-secreto)