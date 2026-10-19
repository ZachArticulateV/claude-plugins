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
| `compound-memory` | Project memory plus engineering skills: a fresh Claude session resumes your project correctly, and plans, builds, debugs, reviews, verifies, and ships work with evidence. Formerly `project-memory`. | [project-memory](https://github.com/ZachArticulateV/project-memory) |

## Install one

```bash
/plugin install compound-memory@zacharticulatev
```

```bash
/plugin install designer-pro-and-seo@zacharticulatev
```

Install either, both, or neither. They are independent.

## Updating

If you installed `project-memory`, it is now `compound-memory`. Run
`/plugin uninstall project-memory@zacharticulatev`, then install
`compound-memory@zacharticulatev`. Your `memory/` trees are untouched.


```bash
/plugin marketplace update zacharticulatev
```

Each plugin is versioned in its own repository, so updating one has no effect on
the other.

## License

Each plugin carries its own license; both are currently MIT. This catalog is MIT.
