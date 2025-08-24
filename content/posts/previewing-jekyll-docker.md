---
title: Previewing Jekyll Sites with Docker
date: 2022-08-14
categories: ["Technology"]
tags: ["Jekyll", "tutorials"]
description: "Learn how to preview Jekyll sites using Docker instead of installing Ruby locally. Step-by-step guide with Docker run commands and Docker Compose setup for easier Jekyll development."
keywords: ["Jekyll Docker", "Jekyll preview", "Docker Compose Jekyll", "Jekyll development environment", "static site generator", "Jekyll tutorial", "Docker tutorial"]
showToc: true
tocOpen: true
draft: false
---

## Introduction

[Jekyll](https://jekyllrb.com/) is a beautifully simple way to build and deploy a static website. Well, it's simple *once* you've got everything installed and configured. Unless you're already confident with Ruby, it'll probably take you most of a wet weekend to get it running consistently.

Although the local installation is working well for me, I'm nervous it'll break. I'm already encountering a few Ruby conflicts with other projects. Resolving those issues isn't my idea of fun. Given I've been doing a lot of work with Docker lately, I decided to see whether I could run my site as a container instead. Plot spoiler: yes, I could!

In this post, I'll explain my process.

## Getting Docker and Jekyll images

Before you can get cracking, you'll need Docker installed and running on your local machine. [Docker Community Edition](https://docs.docker.com/get-docker/) is free, and simple to install. You'll get both an application and a CLI tool.

We'll use a [Jekyll image from Bret Fisher](https://github.com/BretFisher/jekyll-serve). It's optimized for running on a local dev site. As Bret says in his repo, *this isn't a production image*. Thank you to Bret for making this image available.

You'll need an existing local Jekyll website for this to work.


## Building Your Jekyll Site

To build and preview your existing site locally, run the following command from your website directory:

``` bash
docker run -p 4000:4000 -v $(pwd):/site bretfisher/jekyll-serve
```
This command:

- Runs a container using an image with Jekyll installed.
- Mounts your current working directory so Jekyll in the container then builds the site from those files.
- Maps port 4000 in the container to port 4000 on the host.

The first time you run the command, it'll take a few minutes for Docker to pull (or download) the image.

Once you've run this Docker command, you should see your site at: http://localhost:4000. As you make changes to your site, Jekyll continuously builds and serves the updated version.

Press `Ctrl + c` in your terminal to exit the container. 

As you've pulled the Jekyll image, subsequent builds should be faster.

To update the image, use the command `docker pull bretfisher/jekyll-server`.

## Using Docker Compose

The `docker run` command is quite cumbersome. I guess you could create an alias or a TextExpander snippet, but there's a neater solution.

If you create a Docker Compose file, you can launch your site with the simpler command: `docker-compose up`.

Here's a sample file:

``` yaml
services:
  jekyll:
    image: bretfisher/jekyll-serve
    ports:
      - 4000:4000
    volumes:
      - ".:/site"
```

Docker Compose allows you to deploy multi-container applications on a single machine. In this case, there's just one container for the Jekyll site.

Here's how to use it:

- Create a file called `docker-compose.yml` at the top level of your local website directory.
- Copy and paste the code above, then save the file.
- Run `docker-compose up` at the command line.

You should be able to see your website at: http://localhost:4000.

To stop your container, run: `docker-compose stop` in another terminal window or use `Ctrl + c`. You need to be in the same directory as your website.

You can then restart the container with `docker-compose restart` Or to remove the container completely, use: `docker-compose rm`.

## Conclusion

If you're unfamiliar with Docker, this solution probably isn't less faffy. However, you might find other benefits that make the shift worthwhile. For example, it's much easier to get people to collaborate on your site if they don't need to first set up a Ruby development environment. Your local machine will be cleaner, too.

If you want to [create a _new_ Jekyll site with Docker](/posts/create-jekyll-site-docker/), take a look at my other tutorial.