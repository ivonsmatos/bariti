# Documentação do Projeto Bariti

## Visão Geral

O Bariti é um blog de tecnologia desenvolvido com React, Vite, Tailwind CSS e Supabase. O projeto foca em performance, SEO e segurança.

## Estrutura do Projeto

```
src/
├── components/     # Componentes reutilizáveis (Header, Footer, etc.)
├── context/        # Gerenciamento de estado (BlogContext)
├── pages/          # Páginas da aplicação (Home, Blog, Admin, etc.)
├── supabaseClient.ts # Configuração do cliente Supabase
└── main.tsx        # Ponto de entrada da aplicação
```

## Configuração e Instalação

1.  **Clone o repositório:**

    ```bash
    git clone <url-do-repositorio>
    cd bariti
    ```

2.  **Instale as dependências:**

    ```bash
    npm install
    ```

3.  **Configuração de Ambiente:**
    O projeto utiliza variáveis de ambiente para proteger credenciais sensíveis.

    - Copie o arquivo de exemplo:
      ```bash
      cp .env.example .env
      ```
    - Edite o arquivo `.env` e adicione suas credenciais do Supabase:
      ```env
      VITE_SUPABASE_URL=sua_url_do_supabase
      VITE_SUPABASE_ANON_KEY=sua_chave_anonima_do_supabase
      ```

4.  **Executar o projeto:**
    ```bash
    npm run dev
    ```

## Funcionalidades

- **Blog:** Listagem de posts com paginação, busca e filtros por categoria.
- **Post Individual:** Visualização detalhada com suporte a Markdown (via conteúdo HTML), tags e posts relacionados.
- **Admin:** Painel administrativo protegido para criar, editar e excluir posts.
- **SEO:** URLs amigáveis (slugs) e meta tags dinâmicas.

## Segurança

- **Autenticação:** O sistema de login foi migrado de credenciais hardcoded para **Supabase Auth**.
- **Variáveis de Ambiente:** As chaves de API não são commitadas no repositório. Utilize o arquivo `.env` localmente.
- **Proteção de Rotas:** A área administrativa verifica a sessão do usuário antes de permitir o acesso.

## Banco de Dados (Supabase)

O projeto espera uma tabela `posts` no Supabase com a seguinte estrutura:

- `id`: uuid (Primary Key)
- `title`: text
- `content`: text
- `excerpt`: text
- `category`: text
- `author`: text
- `image_url`: text
- `created_at`: timestamp
- `slug`: text (Unique)
- `tags`: text[] (Array de strings)

## Próximos Passos

- Implementar upload de imagens diretamente para o Supabase Storage.
- Adicionar sistema de comentários.
- Melhorar a acessibilidade (a11y).
