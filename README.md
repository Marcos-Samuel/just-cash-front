<table align="right">
  <tr>
    <td>
      <a href="README.md">🇧🇷 Português</a>
    </td>
  </tr>
</table>

![luk4x-repo-status](https://img.shields.io/badge/status-developing-lightgrey?style=for-the-badge&logo=headspace&logoColor=yellow&color=lightgrey)
![luk4x-repo-license](https://img.shields.io/github/license/Luk4x/apple-store?style=for-the-badge&logo=unlicense&logoColor=lightgrey)
## JusCash

<br>
<p align="center">
  <a href="#-tecnologias">Tecnologias</a>&nbsp;&nbsp;&nbsp;|&nbsp;&nbsp;&nbsp;
  <a href="#-install">Instalação</a>&nbsp;&nbsp;&nbsp;|&nbsp;&nbsp;&nbsp;
  <a href="#-sobre">Sobre</a>&nbsp;&nbsp;&nbsp;|&nbsp;&nbsp;&nbsp;
  <a href="#-pages">Páginas</a>&nbsp;&nbsp;&nbsp;|&nbsp;&nbsp;&nbsp;
  <a href="#-componentes">Componentes</a>&nbsp;&nbsp;&nbsp;|&nbsp;&nbsp;&nbsp;
</p>
<br>
<br>

## 📝 Sobre <a id="-sobre"></a>

Este projeto é uma aplicação desenvolvida com React e Vite, focada na gestão de leads. Ele utiliza um sistema de arrastar e soltar para organizar leads em diferentes categorias. O projeto também integra com o LocalStorage para persistir dados entre sessões e inclui testes para garantir a qualidade do código.

## 📝 Funcionalidades

- **Gerenciamento de Leads:**  
  A aplicação permite que os usuários adicionem, visualizem e gerenciem leads em diferentes fases do funil de vendas, como "Cliente Potencial", "Dados Confirmados" e "Análise de Lead". Isso facilita a organização e o acompanhamento dos leads de forma eficiente.

- **Persistência de Dados com LocalStorage:**  
  Para garantir que os dados dos leads sejam mantidos entre as sessões, a aplicação utiliza `localStorage`. Dessa forma, os leads adicionados ou modificados permanecem disponíveis mesmo após o fechamento do navegador, proporcionando uma experiência de usuário mais fluida.

- **Arrastar e Soltar (Drag and Drop):**  
  Implementamos a funcionalidade de arrastar e soltar usando a biblioteca `react-beautiful-dnd`, permitindo que os usuários movam facilmente os leads entre as diferentes fases do funil de vendas. Essa funcionalidade torna o processo de gerenciamento mais intuitivo e visualmente agradável.


## 🚀 Tecnologias Utilizadas <a id="-tecnologias"></a>

- **React:** Biblioteca para construção da interface do usuário.
- **Vite:** Ferramenta de build para um desenvolvimento rápido.
- **TypeScript:** Superset do JavaScript que adiciona tipagem estática.
- **Jest:** Framework de testes para JavaScript.
- **React Testing Library:** Biblioteca para testes de componentes React.
- **LocalForage:** Biblioteca para armazenamento de dados no navegador.
- **React Beautiful DnD:** Biblioteca para implementar funcionalidades de arrastar e soltar.

## Instalação 

Para rodar o projeto localmente, siga os passos abaixo:

1. **Clone o repositório:**
```bash
   git clone git@github.com:Marcos-Samuel/Desafio-Front-MBP.git
   ou 
   git clone https://github.com/Marcos-Samuel/Desafio-Front-MBP.git
```
2. **Navegue até o diretório do projeto:**
 ```bash
  cd just-cash
```
3. **Instale as dependências**
```bash
  npm install
```
4.**Inicie o servidor de desenvolvimento**
```bash
  npm rum dev
```
O projeto estara disponivel na rota:
http://localhost:5173/

## 📝 DEPLOY 

<a href="https://juscash-front.vercel.app" target="_blank" > JusCash </a>


## 📝 Estrutura do Projeto

O projeto segue boas práticas de desenvolvimento, com uma clara separação de responsabilidades entre os componentes. A estrutura do código é organizada para facilitar a manutenção e a escalabilidade, garantindo que as funcionalidades sejam fáceis de implementar e testar.

- **Componentes:**  <a id="-componentes"></a>
  Todos os componentes de interface (GUI) são implementados em arquivos específicos, evitando a mistura de lógica de negócios e apresentação. Isso assegura que cada componente tenha uma única responsabilidade, facilitando a evolução do código.
 ```bash 
/src
  /components        # Componentes React reutilizáveis
    /Button          # Componente Button
      index.tsx      # Implementação do Button
      style.css      # Estilos do Button
  /services          # Serviços para interações com APIs ou LocalStorage
    lead.ts          # Funções relacionadas ao gerenciamento de leads
  /utils             # Utilitários e funções auxiliares
  /__tests__         # Testes unitários e de integração
    Button.spec.tsx  # Testes para o componente Button
  /styles            # Arquivos de estilos globais
  App.tsx            # Componente principal da aplicação
  main.tsx           # Ponto de entrada da aplicação
/vite.config.ts      # Configuração do Vite
/tsconfig.json       # Configuração do TypeScript
/package.json        # Gerenciador de pacotes e scripts
```

## 🧙‍♀️ Autor

 <a href="https://www.linkedin.com/in/marcos-samuel-batista-m/">
 <img style="border-radius: 50%;" src="https://avatars.githubusercontent.com/u/121835618?v=4" width="100px;" alt=""/>
 <br />
 <sub><b>Marcos Samuel</b></sub></a>✨</a>
 <br />
---

## 📝 Licença

Feito com ❤️ por:
<br/>
Marcos Samuel [LinkedIn](https://www.linkedin.com/in/marcos-samuel-batista-m/)
<br/>

