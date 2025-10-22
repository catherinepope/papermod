---
date: "2025-10-22T08:47:33+01:00"
draft: false
title: "How to Use Zotero with Scrivener - Part 2"
tags: ["Zotero", "Scrivener", "Academic"]
categories: ["Technology"] 
description: "Why Zotero 7 broke Scrivener integration and what to do about it. Honest review of alternatives including Quarto, Zettlr, and Obsidian, plus why the RTF/ODF plugin won't return."
keywords: ["Zotero 7 Scrivener", "Scrivener Zotero integration", "RTF ODF plugin broken", "Zotero Scrivener workflow", "academic writing tools", "Scrivener alternatives", "Zettlr Zotero", "Quarto citations", "Better BibTeX", "citation management", "academic workflow", "Obsidian Zotero", "research writing software", "Zotero plugin compatibility"]
ShowToc: true
tocOpen: true  
---

Around 10 years ago, I wrote a tutorial on using Zotero with Scrivener through the RTF/ODF plugin. This method was fiddly, but ultimately produced live Zotero citations in a Word or LibreOffice document. Unfortunately, since the launch of Zotero 7, this method no longer works.

In [my previous post](../how-to-use-zotero-with-scrivener/), I described a simple Zotero-Scrivener workflow, using the RTF Scan tool. Here, I'll explain why the more complicated method is no longer working and outline some other alternatives.

**Plot spoiler:** I haven't found any solutions to match the RTF/ODF plugin. And, I think it's unlikely the plugin will ever be compatible with the latest version of Zotero. Sorry. If you definitely want to use Zotero with Scrivener, I think [RTF Scan](../how-to-use-zotero-with-scrivener/) is the most reliable method.

If you're determined to find another answer, join me for a canter through the options.

First, I'll explain my understanding of why the RTF/ODF plugin is no longer working, and why I think this is a permanent situation.

## What's happened to the RTF/ODF plugin for Zotero?

As you probably know, Zotero is a free and open source tool. This means that contributors and plugin developers are giving their time for free. Whereas Zotero 6 used the legacy Firefox extension architecture, Zotero 7 represents a completely new plugin system, based on different web technologies. In short, many Zotero plugins need to be completely rewritten, not just updated. Trying to make a plugin compatible with different platforms and architecture updates is a full-time job. And Zotero volunteers already have full-time jobs elsewhere.

## Why haven't the Scrivener developers improved Zotero compatibility?

Scrivener is developed by a small team who have to prioritise feature development. Although they've not said as much publicly, I sense their focus is now much more on novelists. Citation management is a niche area. This is frustrating, given Scrivener was originally developed for writing a thesis. Still, a writing app can't please everyone and remain useful.

Unlike Zotero, Scrivener isn't open source. As it's proprietary software, other developers are unable to create plugins to connect the two apps. At least, not without significant cooperation from Scrivener, whose limited development time is devoted to the highest-impact features.

## What are the alternative solutions?

### Downgrade to Zotero 6

If you want to retain the RTF/ODF approach, you could stick with Zotero 6. The [RTF/ODF plugin](https://zotero-odf-scan.github.io/zotero-odf-scan/) is still available, but is no longer updated.

I think this is a short-term solution, though. At some point, you'll need to upgrade to Zotero 7 for either new features or security reasons.

I tried running Zotero 6 and 7 in parallel, but that didn't work for me. You might get different results.

✅ Retain your existing workflow.
❌ Short-term solution.

### Use a different workflow

From scouring the Zotero discussion forums, I see there are other approaches using Markdown. The simplest (but by no means simple) approach is with a Mac-only tool called [Docdown](https://github.com/lowercasename/docdown). You can find [a description and links on the Scrivener thread](https://forums.zotero.org/discussion/121053/a-scrivener-workflow-for-macs).

Like other users, this method didn't work consistently for me. That's not a reflection on Docdown, which is excellent - it's much more to do with the complexity of the underlying workflow. Also, you won't get live citations in your final document (i.e. you'll be unable to edit them with the Zotero toolbar).

✅ If it works for you, offers a lot of control over your Zotero workflow.
❌ Complicated and (for some users) inconsistent. 

### Use a different writing app

I started using Scrivener well over a decade ago. At that time, it was essentially a choice between Word or Scrivener. Nowadays, there are dozens of alternatives. None offers Scrivener's sublime project management tools, but they do offer other benefits. If citation management is more important than visual tools like the Corkboard, then it might be time to experiment.

The apps I'm outlining here all rely on the [Better BibTex plugin](https://retorque.re/zotero-better-bibtex/) for Zotero. This plugin generates stable citation keys and auto-updating files.

⚠️ You can generate a Word document from these apps, but you won't be able to edit your citations using the Zotero toolbar. Only the RTF/ODF plugin offers live citations.

I'm currently experimenting with:

#### Quarto

Quarto is a Markdown-based scientific and technical publishing system. This powerful but complex tool allows you to create articles, presentations, websites, and books. My early hunch is that I'll be using it for full-length books, as it offers a lot of control over layout and also tools for indexing.

Theoretically, Quarto should integrate with your Zotero library and provide a citation picker in editors like Visual Studio Code, Positron, and RStudio. This feature didn't work for me in VS Code or Positron - and it looks like I'm not alone based on forum discussions. The Better BibTex workflow was fine, though.

Quarto is a big commitment and probably overkill for many use cases. Depending on your technical chops, expect to spend a month getting to grips with it.

✅ Allows you to create and format content quickly, then output in a range of formats.
❌ You need to be comfortable with using the Command Line Interface and installing lots of related tools. Or buckle up for a steep learning curve.

#### Zettlr

[Zettlr](https://www.zettlr.com/) is the closest alternative to Scrivener that I found. It's both a note-taking app and a writing app, so it supports you from the initial idea through to the finished manuscript. Zettlr is free and open source, and it's available for Mac, Window, and Linux.

Like in Scrivener, you can use split screen to view multiple documents and also set word targets. You'd need to be comfortable with Markdown, but you can grasp the basics in half an hour. Zettlr itself is also straightforward. You could probably be up and running in a weekend.

Although Zettlr doesn't offer direct Zotero integration, there's a relatively simple workaround using the Better BibTex plugin. You'll find a [clear explanation in the Zettlr docs](https://docs.zettlr.com/en/core/citations/).

I suspect I'll be using Zettlr for shorter writing projects that don't need advanced features like indexes.

✅ Close to Scrivener's features, but with a simpler Zotero workflow.
❌ Lacks Scrivener's visual planning capabilities.

#### Obsidian

[Obsidian](https://obsidian.md) is my favourite note-taking tool. Like with Zotero, there are many community plugins available. One of the best is [Longform](https://github.com/kevboh/longform), which helps you manage and export multiple notes as one manuscript. 

There are also several plugins that'll connect your Zotero library (through Better BibTex) and many successful [Obsidian-Zotero workflows](https://girlinbluemusic.com/how-to-connect-zotero-and-obsidian-for-the-ultimate-phd-workflow/). But I found them quite fragile. Everything is grand until one part of the toolchain is updated and everything falls apart. You then have to spend a boring afternoon trying to troubleshoot the problem (rather than actually doing some writing). This approach is fine if you don't resent the time required for making technology cooperate.

Also, I discovered that I like keeping my main notebook and writing separate. If I try to draft a chapter in my notebook, I get overwhelmed by everyone else's ideas. But using Markdown-based solutions for both notetaking and writing means I can easily copy important quotes without worrying about formatting.

✅ You can keep your writing and notes in one place and also connect your Zotero library.
❌ It's a complicated toolchain that's likely to break.

It's important to experiment with writing apps before committing. The advantage of Markdown-based solutions is that your work is portable.

## Conclusion

As you can see, there are no easy or elegant solutions. In short, I think the options are:

- Stick with Zotero 6 and hope someone updates the plugin (I don't think they will).
- Pursue one of the more complicated solutions and prepare to spend time maintaining the toolchain.
- Use the RTF Scan method - you don't get live citations, but it's simple and reliable.
- Find a different writing tool, like Quarto, Zettlr, or Obsidian.

Unfortunately, the pace of change means that we all need to keep reviewing our workflow, especially when we're relying on the generosity of developers giving their time and expertise for free. A big thank you to Frank Bennett and Sebastian Karcher who created the RTF/ODF plugin and have done so much for the Zotero community.

There might be other options out there that I've not discovered. Please do let me know of any alternatives. Best of luck with finding a solution that works for you.