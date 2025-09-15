---
date: "2025-09-15T11:29:48+01:00"
draft: false
title: "Manage Multiple Hugo Versions with Docker"
tags: ["Hugo", "tutorials", "Docker"]
categories: ["Technology"] 
description: "Learn how to run Hugo static sites with Docker to easily manage multiple Hugo versions. Simple tutorial with docker-compose setup and commands."
keywords: ["Hugo Docker tutorial", "static site generator", "Hugo development", "multiple Hugo versions"]
showToc: true
tocOpen: true  
---

Hugo is usually the simple solution for website generation. Recently, though, I ran into a frustrating situation: the theme I wanted to use for one site required an older version of Hugo, whereas another site demanded the latest version. Although it's possible to run multiple Hugo versions on the same machine, life is already complicated enough. In this tutorial, I'll explain how you can build and preview a Hugo site with a Docker container.

You will need:

- A Hugo site
- Basic familiarity with the command line
- Docker Community Edition

## Installing Docker

If you don't already have Docker, you'll need to download and install it. [Docker Community Edition](https://docs.docker.com/get-docker/) is free, and simple to install. You’ll get both an application and a CLI tool.

## Creating a Docker Compose File

Although you _could_ run everything directly from the command line, I think it's easier to create a Docker Compose file. This way, you don't have to remember the commands and you can create and reuse different versions.

Create a file called `docker-compose.yml` in the same directory as your Hugo site. Here's what it should look like:

```yaml
services:
  hugo:
    image: hugomods/hugo:exts-0.136.5
    container_name: hugo-dev
    ports:
      - "1313:1313"
    volumes:
      - .:/src
    working_dir: /src
    command: hugo server --bind 0.0.0.0 --port 1313 --buildDrafts --buildFuture
```
Let's break down each line of the `docker-compose.yml` file:

- `services` defines the containers you want to create and manage together.
- Within that service is a container called `hugo-dev`, which uses the `hugo:exts-0.136.5` image provided by `hugomods`. 
- Port `1313` on your computer is mapped to port `1313` inside the container, giving you access the Hugo development server.
- `volumes` mounts the current directory to `/src` inside the container, allowing you to edit files locally while the container serves your site.
- `working_dir` sets the working directory inside the container to `/src`, which is where your Hugo site files are stored locally.
- `command` runs the Hugo development server that binds to all network interfaces, serves on port 1313, and includes both draft posts and posts with future dates.

## Running Your Hugo Container

Make sure Docker is open and that you're in your Hugo site directory. If you see this error, it means Docker is unavailable:

`Cannot connect to the Docker daemon at unix:///Users/catherinepope/.docker/run/docker.sock. Is the docker daemon running?`

I nearly always forget to open it 🤦‍♀️

Once you've configured the `docker-compose.yml` file, you're ready to run it with the command:

`docker-compose up`

To run your container in the background so you can still use the command line, specify detached mode with the `-d` flag:

`docker-compose up -d`

The first time you run your Hugo container, it might take a few minutes. This is because it's downloading the Docker image. Future deployments will be much faster. Once it's ready, you'll be able to preview your site at `localhost:1313`. Any changes you make to your local files will be reflected in the preview.

## Stopping your Hugo Container

If you're in detached mode, you can use the command `docker-compose down` to stop your Hugo container. Otherwise, press `Ctrl + c`. You need to be in the same directory as your website.

You can restart the container with the command `docker-compose restart`. 

To remove a stopped container completely, use the `docker-compose rm` command. The Docker image remains on your system, so you won't need to download it again next time.

You can also view and interact with your container from within Docker Desktop:

{{< figure
  src="/images/docker-containers.jpg"
  alt="Docker Desktop containers "
  caption="Viewing Containers in Docker Desktop "
  align="center"
>}}

The app also provides a convenient way of deleting any images you no longer need. As you can see here, the file sizes are quite large:

{{< figure
  src="/images/docker-images.jpg"
  alt="Docker Desktop images "
  caption="Viewing Images in Docker Desktop "
  align="center"
>}}

You can switch between Hugo versions by changing the image tag in the `docker-compose.yml` file. You'll find different versions in the excellent [Hugomods repository](https://docker.hugomods.com/).

## Conclusion

While  this initial setup can feel fiddly if you're unfamiliar with Docker, once you've got the `docker-compose.yml` file, it's quick to tweak it when you want to experiment with a different version. There's lots more you can do with `docker-compose.yml`, but I'm keeping it simple here. You can explore the [Hugomods documentation](https://docker.hugomods.com/) for additional Docker configurations and different image options. Good luck with your Hugo site!