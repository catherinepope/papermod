---
date: "2025-09-18T09:04:15+01:00"
draft: false
title: "Open External Links in a New Tab With Hugo"
tags: ["Hugo", "Tutorials"]
categories: ["Technology"] 
description: "Configure Hugo to automatically open external links in new tabs while keeping internal links in the same window. Complete tutorial with code examples for YAML and TOML configs."
keywords: ["Hugo", "external links", "render hooks", "Hugo tutorial", "web development", "static site generator", "Goldmark", "Hugo configuration", "new tab links"]
ShowToc: true
tocOpen: true
---

After months of faffing around and configuring external links manually in Hugo, I decided there must be a better way. There is! Here's the solution that worked for me for [my bookstore links](../how-to-create-a-book-database-with-hugo-and-yaml/). Some themes include native support, so it's a case of checking the documentation and adding a line to your `hugo.yaml` or `hugo.toml` config file. If, like me, you're using a theme that doesn't support this feature, here's a method that might work for you.

## Step 1 - Update your config file

First you need to add a block to your Hugo configuration file. Depending on your theme and setup, the config file is likely to be called either `hugo.yaml` or `hugo.toml`.

Here's the YAML version:

```yaml
markup:
  goldmark:
    renderer:
      unsafe: true
    parser:
      attribute:
        block: true
        title: true
```

Either add the `markup` block, or update your existing `markup` block so it includes these settings. 

Let's look at what this block is doing:

- Hugo uses Goldmark as its default Markdown parser.
- `unsafe: true` allows the renderer to include raw HTML that you write in your templates.
- The `attribute` settings enable Hugo to handle HTML attributes in links.

If your Hugo site uses TOML, here's what it should look like:

```toml
[markup]
  [markup.goldmark]
    [markup.goldmark.renderer]
      unsafe = true
    [markup.goldmark.parser]
      [markup.goldmark.parser.attribute]
        block = true
        title = true
```

It's always a good idea to take a backup, especially if you're not confident with changing settings. As you might have already learned the hard way, the config file is sensitive to spacing and indents, so make sure everything is properly aligned. This is easier to achieve in tools such as Visual Studio Code.

## Step 2 - Create a Render Hook template

Fortunately, this isn't as complicated as it sounds. The render hook tells Hugo: "whenever you encounter a Markdown link, use this template instead of the default HTML output."

### Create the file structure

Create a new file called `render-link.html` and place it in the `layouts/_default/_markup` directory. The `layouts` directory will already be there, but you might need to create the `_default` and `markup` sub-directories.
    
Here's what the directory structure should look like:  
    
```text
your-site/
├── layouts/
│   └── _default/
│       └── _markup/
│           └── render-link.html
```

### Add the code

In `render-link.html`, copy and paste the following code:

```html
{{- $link := .Destination -}}
{{- $isExternal := strings.HasPrefix $link "http" -}}
{{- if not $isExternal -}}
  {{- $isExternal = strings.HasPrefix $link "//" -}}
{{- end -}}

<a href="{{ .Destination | safeURL }}"
   {{- with .Title }} title="{{ . }}"{{ end }}
   {{- if $isExternal }} target="_blank" rel="noopener"{{ end -}}
>{{ .Text | safeHTML }}</a>
```
 
This code extracts the URL (`.Destination`) from your Markdown link and stores it in a variable called `$link`. The next couple of lines are checking whether it contains `http` - if so, it's an external link. The HTML for external links (`if $isExternal`) is then rewritten to add `target="_blank"`.

You'll also notice `rel="noopener"` in the code - this is a security best practice that protects your site when opening external links in new tabs. The external site is unable to access or manipulate your original page.

## Conclusion

Now when you preview your Hugo site, internal links should open in the same tab, while external links appear in a new tab. There are alternative solutions, such as using JavaScript. The advantage of this method is that it works at build-time, rather than at run-time, so your site will be faster. A speedier site and external links in new tabs means a better experience for both you and your readers.