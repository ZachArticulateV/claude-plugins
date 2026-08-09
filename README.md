# Claude Code plugins by Zachary W.

A catalog. This repository holds no plugin code — each plugin lives in its own
repository and is fetched from there.

## Add the marketplace

```bash
/plugin marketplace add ZachArticulateV/claude-plugins
```

Adding the marketplace installs nothing. It makes the catalog visible, and you
install only the plugins you want.

## Available plugins

| Plugin | What it does | Repository |
| --- | --- | --- |
| `designer-pro-and-seo` | Web design, SEO, and build-workflow skills: design systems, on-brand page rendering, design tokens, pre-delivery QA, portable-HTML porting, and a full SEO suite. | [designer-pro-and-seo](https://github.com/ZachArticulateV/designer-pro-and-seo) |
| `project-memory` | A version-controlled project context architecture, so a fresh Claude session can resume your project correctly without your old conversations. | [project-memory](https://github.com/ZachArticulateV/project-memory) |

## Install one

```bash
/plugin install project-memory@zacharticulatev
```

```bash
/plugin install designer-pro-and-seo@zacharticulatev
```

Install either, both, or neither. They are independent.

## Updating

```bash
/plugin marketplace update zacharticulatev
```

Each plugin is versioned in its own repository, so updating one has no effect on
the other.

## License

Each plugin carries its own license; both are currently MIT. This catalog is MIT.
