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
| `compound-memory` | Project memory plus engineering skills: a fresh Claude session resumes your project correctly, and plans, builds, debugs, reviews, verifies, and ships work with evidence. Formerly `project-memory`. | [compound-memory](https://github.com/ZachArticulateV/compound-memory) |

## Install one

```bash
/plugin install compound-memory@zacharticulatev
```

```bash
/plugin install designer-pro-and-seo@zacharticulatev
```

Install either, both, or neither. They are independent.

## Updating

Compound Memory now follows the plugin repository's `main` branch in both
catalogs. The old `v2.0.0` and commit pin are removed. The plugin's own manifest
is the single version source. Each published plugin update must change that
version; otherwise a host can keep its cached copy even after fetching main.

For Claude Code, open `/plugin`, select **Marketplaces**, select
**zacharticulatev**, then **Enable auto-update**. **Update marketplace** updates
the installed plugins from this catalog. A new session loads the updated copy.

For Codex, the native catalog is `.agents/plugins/marketplace.json`. Register
`ZachArticulateV/claude-plugins`, then install `compound-memory@zacharticulatev`.
Configured Git marketplaces can be refreshed with the host's marketplace
upgrade operation. Restart the desktop app after an update if the current
chat still lists old skills. Adding a marketplace alone does not install it.

The Claude catalog still contains the separate designer plugin. The Codex
catalog currently exposes only Compound Memory; it does not change any other
installed plugin.

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
