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

`docs/baas/api-overview/changelog.md` é gerado, não escrito à mão. O workflow de release do `zrobank-services` publica a spec de produção de cada release em `specs/baas/releases/<tag>/api-baas.openapi.json` (e a data em `specs/baas/releases/index.json`). Esse push dispara `.github/workflows/baas-changelog.yml` (também por `workflow_dispatch` com `tag`/`force`), que roda `oasdiff changelog` entre releases consecutivas e escreve uma seção `## vX.Y.Z (data)` por release com mudança de contrato, agrupada por endpoint, em inglês.

- Mudanças compatíveis entram por commit direto em `develop` e o deploy é disparado na sequência.
- Remoções e termos da `specs/changelog/denylist.txt` abrem um pull request para revisão.
- `specs/changelog/severity.txt` silencia tipos de mudança sem valor para o integrador (renomeação de tag, id de operação, renomeação de schema).
- Nenhum secret neste repositório: quem escreve é o `zrobank-services`, com um PAT guardado lá.

O changelog é público. O PR de revisão de remoções e termos da denylist é uma etapa editorial, não um controle de acesso. As páginas de referência dos endpoints continuam com as fontes de `specs/generate-specs.js`, incluindo `BAAS_BASE_URL`; a migração dessas páginas para specs de releases não faz parte deste fluxo.

A ordem usa o timestamp completo de publicação, inclusive entre releases do mesmo dia. `--force --tag <tag>` substitui a seção na posição cronológica correta ou a exclui se não houver mais mudança de contrato. Uma regeneração idêntica não produz commit. O services recupera falhas de mirror baixando os assets já publicados; não é necessário regenerá-los.

Validação: `yarn test:changelog` (oasdiff 1.12.8 no `PATH`, ou `OASDIFF_BIN=<binário>`). O workflow `baas-changelog-check.yml` roda esses testes em PRs usando o binário com checksum verificado, sem publicar conteúdo. Os testes usam specs e arquivos temporários, cobrem remoções com e sem depreciação, recuperação de seções, ordem por horário, backfill e idempotência.

Para testar localmente com specs em outro diretório: `node specs/changelog/generate.mjs --specs-dir <dir>` onde `<dir>/<tag>/api-baas.openapi.json` e `<dir>/index.json` existem.
