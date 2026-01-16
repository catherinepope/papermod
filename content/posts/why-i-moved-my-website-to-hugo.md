---
date: "2026-01-09T14:00:51Z"
draft: false
title: "Why I Moved My Website to Hugo"
tags: ["Hugo"]
categories: ["Technology"] 
description: "Tired of WordPress complexity? I switched to Hugo, a fast static site generator that's simple to set up and maintain. Here's why it works for me."
keywords: ["Hugo static site generator", "WordPress alternative", "static site generator", "Hugo blog", "Jekyll vs Hugo"]
ShowToc: true
# tocOpen: true  
---

I've been using WordPress for at least two decades. During that time, I've become intimately acquainted with its quirks, and mostly indulgent of them. A couple of years ago, though, I realised that I'd stopped blogging. The more significant WordPress updates - namely the block editor - had introduced a lot of friction. It was taking me 20 minutes to draft a post that should have taken only 10. Also, I noticed clients grumbling about WordPress a lot more. Although frameworks like Genesis and GeneratePress made it easier, they also added another layer (and learning curve) on top of WordPress. And keeping plugins up-to-date was a part-time job.

As a technical writer, I'd used static site generators, such as Jekyll and Hugo. Static site generators (SSGs) take text files (usually Markdown) to generate web pages. Unlike WordPress, these pages aren't generated dynamically from a database. They're small files that ensure fast loading and easy distribution through content delivery networks (CDNs). The output resembles a website from the 1990s: HTML files, images, and stylesheets. This simplicity also reduces the _attack surface_ of the site. There's no database to infiltrate or plugins to compromise.

While Static Site Generators are simple, you can achieve more sophisticated results by creating or deploying templates with the underlying programming language. Whatever your preferred language, there's probably a SSG for you. Even if you're not comfortable with coding, there are many off-the-shelf templates that require minimal tinkering. I started out with Jekyll, but didn't enjoy maintaining the Ruby-based environment. The time I spent updating all the components could have been spent writing posts. There are workarounds, [such as using Docker](../create-run-docker-container/), but I wanted to keep it simple.

## Why Hugo?

[Hugo](https://gohugo.io) is a static site generator written in the Go language. Originally created by Steve Francia in 2013, it's now an open source project maintained by a group of contributors. The website claims it's "the world's fastest framework for building websites". I don't know whether that's true, but it's certainly speedy. Also, it's very quick to set up. You install one executable file on your computer, then you're ready to create a website. No complicated environment to maintain. There are hundreds of free and paid-for Hugo themes available, along with an active community. If you're really keen, you can create your own Hugo theme with frameworks like Tailwind.

I chose the [Papermod theme](https://github.com/adityatelange/hugo-PaperMod), as it's simple and well-maintained. It took me a couple of hours to get everything configured, then I was able to publish posts in minutes. As SSGs use text files, you can write them in any app you like. I use Visual Studio Code with the Markdown All in One extension. Many of my thoughts start in Obsidian, which is also Markdown-based. That makes it easy to transplant them into a blog post without having to fiddle with the formatting.

Although it's not essential, you can make your Hugo site a git repository. This means you've got version control and you can automatically trigger deployment through GitHub or GitLab. I'm using Netlify with my GitHub repo. Every time I make and commit a change, my site is built and deployed in around 30 seconds. [Netlify also offers a free forms feature](../how-to-create-form-hugo-netlify/) which is much simpler than any of the WordPress plugins I've used.

The loading time for the website is super-fast, too. One of my priorities is to reduce the carbon footprint of my web presence. According to the [Website Carbon Calculator](https://www.websitecarbon.com), my site achieves an A+ rating, which makes it cleaner than 99% of all websites 🎉

I miss the simplicity of Jekyll, but Hugo is a much smoother overall experience for me.

## Getting Started with Hugo

If you want to try Hugo yourself, there's a [quickstart guide in the documentation](https://gohugo.io/getting-started/quick-start/). This walks you through creating a basic site. 

Then find a theme you like - there are hundreds available through [the Hugo themes directory](https://themes.gohugo.io) - and experiment. The good thing about Hugo is that you can easily create and test sites locally. If you make a complete mess, just delete it and start again.

I found [Ty Walls' Migrate from WordPress to Hugo course](https://www.udemy.com/course/wp-to-hugo/?src=sac&kw=hugo) very helpful. It's not been updated since 2021, but the principles and workflow remain the same.

Hugo is good if:

- You're comfortable with using the command line interface and text editors (there's no visual editor).
- You're happy to experiment with third-party solutions for common blog features like comments (not supported natively by Hugo).
- You're willing to learn basic Git commands (this makes deploying your site much easier, though it's not essential).

## What next with Hugo

Now that I've gained confidence with Hugo, I've become more ambitious with creating my own templates and [databases](../how-to-create-a-book-database-with-hugo-and-yaml/). I'm also exploring alternative themes. Papermod is great for a simple blog, but there are limited layout options. I also have plans to use Hugo for some documentation, book, and portfolio projects. Naturally, I occasionally get distracted by other fancy SSGs, but Hugo is the right choice for me. At least for now. 

---

I'm currently pondering a **Getting Started with Hugo** online course. Add your email below if you'd be interested, then I'll let you know if it goes ahead:

{{< newsletter-form tag="hugo" >}}