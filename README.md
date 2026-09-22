# Website

This website is built using [Docusaurus 2](https://docusaurus.io/), a modern static website generator.

### Installation

Run `yarn` or `npm i`

### Build 

Run `yarn build` or `npm run build` for mount the documentation before any other mode. This command generates static content into the `build` directory and can be served using any static contents hosting service.


### Local Development

Run `yarn start` or `npm start`. This command starts a local development server and opens up a browser window. Most changes are reflected live without having to restart the server.


### Deployment

Using SSH:

```
USE_SSH=true yarn deploy
```

Not using SSH:

```
GIT_USER=<Your GitHub username> yarn deploy
```

If you are using GitHub pages for hosting, this command is a convenient way to build the website and push to the `gh-pages` branch.

### Generate documentation files

Example:

```
npx docusarus gen-api-docs <id>
```

**Docusaurus CLI** Options:

```
Usage: docusaurus <command> [options]

Options:
  -V, --version                                            output the version number
  -h, --help                                               display help for command

Commands:
  build [options] [siteDir]                                Build website.
  swizzle [options] [themeName] [componentName] [siteDir]  Wraps or ejects the original theme files into website folder for customization.
  deploy [options] [siteDir]                               Deploy website to GitHub pages.
  start [options] [siteDir]                                Start the development server.
  serve [options] [siteDir]                                Serve website locally.
  clear [siteDir]                                          Remove build artifacts.
  write-translations [options] [siteDir]                   Extract required translations of your site.
  write-heading-ids [options] [siteDir] [files...]         Generate heading ids in Markdown content.
  docs:version <version>                                   Tag a new docs version
  gen-api-docs <id>                                        Generates OpenAPI docs in MDX file format and sidebar.js (if enabled).
  gen-api-docs:version <id:version>                        Generates versioned OpenAPI docs in MDX file format, versions.js and sidebar.js (if enabled).
  clean-api-docs <id>                                      Clears the generated OpenAPI docs MDX files and sidebar.js (if enabled).
  clean-api-docs:version <id:version>                      Clears the versioned, generated OpenAPI docs MDX files, versions.json and sidebar.js (if
                                                           enabled).
```

### Generate specs files

```sh
node specs/generate-specs.js
```

### Generate documentation files

```sh
sh specs/generate-docs.sh
```

### Troubleshoot HTML tags and URLs

```sh
node utils/replace-helper.js
```

## Changelog da API BaaS

`changelog/baas/` é gerado, não escrito à mão: um post por release (`YYYY-MM-DD-vX.Y.Z.md`), servido pela instância de blog `baas-changelog` em `/baas/changelog` (lista com resumo, página por release, tags `breaking`/`removed`/`deprecated`/`new-endpoints`/`changes`, feed RSS/Atom em `/baas/changelog/rss.xml`). O workflow de release do `zrobank-services` publica a spec de produção de cada release em `specs/baas/releases/<tag>/api-baas.openapi.json` (data em `specs/baas/releases/index.json`); esse push dispara `.github/workflows/baas-changelog.yml` (também por `workflow_dispatch` com `tag`/`force`), que roda `oasdiff changelog` entre releases consecutivas e escreve o post.

Cada post traz o resumo em uma linha e as seções, nesta ordem: Breaking changes, Removed endpoints, Deprecated endpoints, New endpoints (tabela com a descrição da spec) e Changed (uma linha por mudança, listando os endpoints afetados). As frases do oasdiff são reescritas para o integrador em `specs/changelog/generate.mjs` (`WORDING`); um id sem regra cai no texto original.

- Mudanças compatíveis entram por commit direto em `develop` e o deploy é disparado na sequência.
- Breaking, remoções, deprecações e termos da `specs/changelog/denylist.txt` abrem um pull request para revisão editorial. O changelog é público: o PR é revisão, não controle de acesso.
- `specs/changelog/severity.txt` silencia tipos de mudança sem valor para o integrador (renomeação de tag, id de operação, renomeação de schema, generalização de tipo).
- Nenhum secret neste repositório: quem escreve é o `zrobank-services`, com um PAT guardado lá.
- Outra API entra adicionando uma chave em `APIS` no gerador, o diretório `specs/<api>/releases` no mirror do services e uma instância de blog no `docusaurus.config.js`.

Validação: `yarn test:changelog` (oasdiff 1.12.8 no `PATH`, ou `OASDIFF_BIN=<binário>`). Para testar com specs em outro diretório: `node specs/changelog/generate.mjs --specs-dir <dir> --posts-dir <dir>` onde `<dir>/<tag>/api-baas.openapi.json` e `<dir>/index.json` existem.
