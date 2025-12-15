---
date: "2023-03-30T15:12:30Z"
draft: false
title: "How to Add a Theme as a Hugo Module"
tags: ["Hugo", "Tutorials"]
categories: ["Technology"] 
description: "Learn how to add a Hugo theme using Hugo Modules in this step-by-step tutorial. Covers installing Go, initialising your site as a module, and configuring your theme with simple commands."
keywords: ["Hugo modules", "Hugo themes", "Hugo tutorial", "static site generator", "Go modules", "Hugo configuration"]
ShowToc: true
# tocOpen: true  
---

Although Hugo modules are supposed to make life simple, this took me an embarrassingly long time to fathom.

In this tutorial, I'll show you how to add a theme as a module of your Hugo site.

I'm assuming you already have a Hugo site and have chosen a theme that's available as a module. You also need to have run `git init` in your site folder.

If you want to learn more about modules, [take a look at the Hugo documentation](https://gohugo.io/hugo-modules/).

## Step 1 - Ensure you have installed Go

To use Hugo modules, you'll need Go. Run `go version` to check whether it's already installed.

⬇️ If you don't have Go, you can [download a version for your operating system](https://go.dev/doc/install).

## Step 2 - Initialise your site as a module

Before you can use modules, your website itself needs to be a module.

Make sure you're at the top level of your website directory. Then run:

`hugo mod init website-name`

Replace `website-name` with any unique name. It's conventional to use the path of your GitHub repo, for example:

`hugo mod init github.com/username/reponame`

You'll see a message to say that Go is creating your new module.

👀 To check what's happening, run `cat go.mod`. You'll see the module you just created.

## Step 3 - Add theme module as a dependency

Make sure you have the full repo link for your theme. Most of them are on GitHub. Then run:

`hugo mod get url-of-theme`

Replace `url-of-theme` with the GitHub URL (without the https). For example, the command for the Ananke theme would be:

`hugo mod get github.com/theNewDynamic/gohugo-theme-ananke/v2`

Note this time that the command is `hugo mod get`, rather than `hugo mod init`. That's what tripped me up.

Hugo tells you the theme has been added.

👀 Run `cat go.mod` again for confirmation.

## Step 4 - Edit your config file

Open your config file and add the repo URL as the value for theme. In YAML, it would look like this:

`theme: github.com/theNewDynamic/gohugo-theme-ananke/v2`

In TOML, it's:

`theme = ["github.com/theNewDynamic/gohugo-theme-ananke/v2"]`

You need the full URL (without https), rather than just the name.

Save the file and run `hugo serve`. You should see your new theme 🎉

## Conclusion

It's certainly easy to add modules, but only if you know exactly the right commands. I hope it worked for you, and in a fraction of the time it took me 😫