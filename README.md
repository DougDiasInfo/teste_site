# Como atualizar o conteúdo do site

## Pelo painel visual
1. Abra `content-admin.html` no site publicado ou localmente por um servidor HTTP.
2. Escolha Vídeos, Artigos, Programas, Downloads ou Serviços.
3. Clique em **Adicionar**, preencha os campos e salve. Para alterar um item existente, use o lápis.
4. Clique em **Baixar JSON**.
5. No GitHub, abra o arquivo de mesmo nome/caminho indicado no botão e substitua seu conteúdo pelo arquivo baixado.
6. Faça commit. Após a publicação do GitHub Pages, o conteúdo será atualizado.

**Atenção:** como o projeto é um site estático, o navegador não pode gravar diretamente no repositório GitHub. O painel não envia dados para um servidor; ele apenas prepara o JSON.

## Arquivos de conteúdo
- Vídeos: `dados/videos.json` (`titulo`, `link`, `thumb`, `tipo`, `palavrasChave`).
- Artigos da Home: `config/home-content.json` (`articles`).
- Programas e downloads: `config/catalog.json` (`programs` e `downloads`).
- Serviços: `config/services.json` (lista de serviços com `name`, `category`, `price`, `icon`, `description` e `note`).

## Links de vídeo
Use o link normal do YouTube/Vimeo ou URL direta de MP4. A imagem de miniatura deve ser uma URL pública. Para downloads, informe uma URL pública do arquivo (por exemplo, um arquivo publicado no repositório ou uma página de release).

## Teste local
Não abra os HTML por `file://`, pois o navegador pode bloquear `fetch()` dos arquivos JSON. Inicie um servidor local na pasta do projeto, por exemplo com Python: `python -m http.server 8000`, e acesse `http://localhost:8000`.


## Página de Serviços

- `servicos.html`: página do catálogo de serviços.
- `css/servicos.css`: estilos responsivos e identidade visual da página.
- `js/servicos.js`: catálogo, filtros, busca, ordenação e mensagens do WhatsApp.

Para alterar serviços ou preços, selecione **Serviços** no painel `content-admin.html`, use o lápis para editar ou **Adicionar** para incluir um novo serviço e clique em **Baixar config/services.json**. Substitua esse arquivo no repositório e faça commit. Cada cartão abre uma conversa no WhatsApp com o nome do serviço e o preço de referência. Confirme os valores antes de publicar; valores de peças podem variar por estoque e compatibilidade.
