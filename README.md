# Semeadura Espírita — site oficial

Site institucional estático para apresentar e distribuir gratuitamente o APK do **Semeadura Espírita**.

## Importante

O site **não transforma o aplicativo em uma aplicação web**. O aplicativo continua sendo distribuído como APK e seu conteúdo continua disponível offline conforme a proposta do projeto.

## Antes de publicar

Abra `config.js` e altere:

- `downloadUrl`: URL da Release do GitHub onde o APK será disponibilizado;
- `email`: e-mail oficial do projeto;
- `pixKey`: chave PIX para contribuição voluntária;
- `pixName`: identificação opcional.

## Publicação no GitHub Pages

1. Crie um repositório público chamado `semeadura-espirita`.
2. Envie todos os arquivos deste diretório para a raiz do repositório.
3. Vá em **Settings → Pages**.
4. Em **Build and deployment**, selecione **Deploy from a branch**.
5. Escolha `main` e `/ (root)`.
6. Salve.
7. Aguarde a publicação.

## Publicação do APK

Crie uma Release no mesmo repositório:

- Tag: `v0.8.4`
- Título: `Semeadura Espírita v0.8.4`
- Anexe o arquivo `semeadura-espirita-v0.8.4.apk`

Depois copie a URL da Release para `config.js`.

## Identidade visual

A identidade do site foi baseada diretamente no ícone e nas fontes encontradas no APK v0.8.4, mantendo a linguagem visual existente em vez de criar uma marca diferente.

## Conteúdo jurídico

Revise a seção de direitos e fontes antes da publicação. Não presuma que toda tradução, edição ou material derivado esteja em domínio público apenas porque a obra original é antiga.
