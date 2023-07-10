# Analisador Léxico-Sintático Swift

Este é um programa de análise léxico-sintática para a linguagem Swift. Ele realiza a extração de lexemas, geração de tokens e construção da árvore de análise para um código Swift fornecido como entrada.

<p align="center">
  <img src="https://img.shields.io/badge/Node.js-16%2B-green" alt="Node.js">
  <img src="https://img.shields.io/badge/TypeScript-4.9%2B-blue" alt="TypeScript">
  <img src="https://img.shields.io/badge/Swift-5.5-orange" alt="Swift">
</p>

# Conteúdos

- [Pré-requisitos](#pré-requisitos)
- [Instalando o Node.js no Windows](#instalando-o-nodejs-no-windows)
- [Instalando o Node.js no Linux](#instalando-o-nodejs-no-linux)
  - [Ubuntu e Debian-based](#ubuntu-e-debian-based)
  - [CentOS e Fedora](#centos-e-fedora)
- [Instalação do projeto](#instalação-do-projeto)
- [Executando o programa](#executando-o-programa)
- [Licença](#licença)
- [Autor](#autor)

## Pré-requisitos

Antes de começar, verifique se você possui as seguintes ferramentas instaladas:

- [Node.js](https://nodejs.org) (versão 16 ou superior)

## Instalando o Node.js no Windows

1. Acesse o site oficial do Node.js em https://nodejs.org.
2. Na página inicial, clique no botão "Download" para baixar o instalador do Node.js para Windows.
3. Após o download, execute o arquivo do instalador (por exemplo, "node-v18.16.1-x64.msi") e siga as instruções do assistente de instalação.
4. Na tela de seleção de componentes, verifique se a opção "Node.js runtime" está marcada e prossiga com a instalação.
5. Na tela de configuração do local de instalação, você pode escolher um diretório diferente se desejar. Caso contrário, deixe as configurações padrão e continue a instalação.
6. Na tela de seleção de recursos adicionais, você pode desmarcar a opção "Instale o Chocolatey", a menos que você queira usá-lo.
7. Após concluir a instalação, abra o prompt de comando (CMD) ou o PowerShell e digite `node -v` para verificar se o Node.js foi instalado corretamente. Você deve ver a versão do Node.js sendo exibida.

## Instalando o Node.js no Linux

No Linux, é possível instalar o Node.js usando o gerenciador de pacotes padrão do seu sistema.

### Ubuntu e Debian-based

1. Abra o terminal.
2. Execute o seguinte comando para atualizar a lista de pacotes:

   ```
   sudo apt update
   ```

3. Em seguida, execute o comando de instalação do Node.js:

   ```
   sudo apt install nodejs
   ```

4. Após a conclusão da instalação, verifique se o Node.js foi instalado corretamente digitando `node -v` no terminal. Você deve ver a versão do Node.js sendo exibida.

### CentOS e Fedora

1. Abra o terminal.
2. Execute o seguinte comando para instalar o Node.js usando o gerenciador de pacotes Yum:

   ```
   sudo yum install nodejs
   ```

3. Após a conclusão da instalação, verifique se o Node.js foi instalado corretamente digitando `node -v` no terminal. Você deve ver a versão do Node.js sendo exibida.

## Instalação do projeto

Siga as etapas abaixo para configurar o ambiente de desenvolvimento:

1. **Extraia o arquivo `analisador-lexico-sintatico-swift.zip` ou clone o repositório**

   ```
   git clone https://github.com/jgsn13/analisador-lexico-sintatico-swift.git
   ```

2. **Acesse o diretório do projeto**

   ```
   cd analisador-lexico-sintatico-swift
   ```

3. **Instale as dependências**

   Se você estiver usando o npm:

   ```
   npm install
   ```

## Executando o programa

Após a conclusão da instalação, você pode executar o programa da seguinte maneira:

```
npm run dev
```

## Licença

Atualmente este projeto está sem licença.

## Autor

- Joaquim Gregório da Silva Neto <joaquim.ibi@gmail.com>

