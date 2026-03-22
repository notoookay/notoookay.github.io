# Blog

Hugo blog using the [PaperMod](https://github.com/adityatelange/hugo-PaperMod) theme. Deployed to `notoookay.github.io/blog/`.

## Prerequisites

- [Hugo](https://gohugo.io/installation/) (extended version)
- Git

## Writing a new post

```bash
cd blog_hugo
hugo new posts/my-post-title.md
```

Edit `content/posts/my-post-title.md`. Set `draft = false` in the frontmatter when ready to publish.

## Preview locally

```bash
cd blog_hugo
hugo server
```

Open `http://localhost:1313/blog/` in browser.

## Build and deploy

```bash
cd blog_hugo
hugo --destination ../blog/
```

This builds the site into the `blog/` directory at the repo root, which is what GitHub Pages serves.

Then commit changes in both `blog_hugo/` and `blog/`, and push to `main`.

## Key files

- `hugo.toml` — site config (title, social links, menu)
- `content/posts/` — blog posts
- `content/about.md` — about page
- `themes/PaperMod/` — theme (git submodule)
