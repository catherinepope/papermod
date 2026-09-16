---
date: "2026-09-16T16:36:35+01:00"
draft: false
title: "Assessing Ideas with Sequential Elimination"
tags: ["PhD Progress", "Academic"]
categories: ["Technology"]
# description: ""
# keywords: ["keyword 1", "keyword 2", "keyword 3"]
# ShowToc: true
# OpenToc: true  
---

As someone who has around 500 ideas a day, I needed a way of assessing those ideas more systematically. Most of them _seem_ exciting, but pursing dozens of projects is a shortcut to burnout. How on earth do I choose one? Well, the answer turned out to be "sequential elimination". 

Best known as a voting system, the sequential elimination method works by repeatedly eliminating the losing candidate until a single winner remains. Instead of asking myself, "Am I excited by this idea?" I subject the potential project to rigorous questioning, rating my responses on a scale of 1-10.

You can apply sequential elimination to all sorts of decisions: what paper to write, where to go on holiday, who’s your favourite Greek philosopher.[^1]  All you need is:

- Some options to test.
- Your assessment criteria.
- A method for recording your scores.

In this post, I’ll explain how I used sequential elimination to assess my journal article ideas and decide what to work on first.

## The Questions & Assessment Criteria 

Here are the questions I used for assessing the journal article ideas, along with my scoring system:

1. **What's your level of expertise?** (i.e. will you need to learn a lot) 0 = I'm guessing; 10 = I’ve got this completely covered.
2. **How much of the material do you already have?** (i.e. have you done the research) 0 = I’m starting from scratch; 10 = it’s all in the bag.
3. **How relevant is this topic to current debates in your field?** (i.e. is anyone likely to publish it) 0 = It’s really obscure; 10 = this is a hot topic.
4. **How original is your perspective and contribution?** (i.e. are you saying anything new) 0 = It’s all been said before; 10 = this is breaking news.
5. **How likely are you to complete the article within the allotted time?** (i.e. are you being unrealistic) 0 = This could take years; 10 = With luck and a tail wind, I could do this in 6 weeks.

This means every potential journal article has a maximum possible score of 50.

Other questions might include:

- **How excited are you about this idea?** 0 = not at all excited; 10 = completely buzzing.
- **How well does it fit with your strategy? Does this complement or challenge it?** 0 = This is a complete tangent; 10 
- **How many opportunities might this lead to?** 0 = It's a dead end; 10 = This is giving me more options.

## The System

It's quite a lot of work to apply the system manually, especially when you have 500 ideas a day. Initially, I developed a local Python script that asked me questions and generated a text-based report at the end. Although this worked well, I decided to experiment with asking Claude turn it into a full web-based app that I could easily share with other people. Yes, this was much easier than actually getting on with the journal article.

I was impressed with the results. I requested an app built with Vue and Tailwind so that I’d have a reasonable chance of understanding the code. I couldn’t create this kind of app from scratch, but I could describe it in detail and troubleshoot the bugs. GenAI is pretty good with these simple projects. I’m unconvinced that Claude could create a sophisticated, scalable app with authentication, unless you were prepared to do a lot of coaxing.

Anyway, here’s the app:

{{< img src="images/journal-topic-selector.jpg" alt="Screenshot of Journal Topic Selector app" center="true" >}}

Determined to avoid doing any actual writing, I then tinkered with the app, adding an option to eliminate the lowest scoring half of my ideas. Anything that scored really badly is probably best avoided. 

{{< img src="images/top-topics.jpg" alt="Screenshot of Journal Topic Selector results" center="true" >}}

I could then clearly see my top five ideas.

You’re welcome to [try the app yourself](https://velvety-zuccutto-ca2a69.netlify.app). The [code is available in GitHub](https://github.com/catherinepope/sequential-elimination) if you want to adapt it.

I also created a [version for evaluating ideas for courses and books](https://wonderful-dragon-72aee1.netlify.app/).

## Conclusion

Getting excited about ideas is fun. But subjecting them to assessment criteria is a good way of overcoming procrastination and avoiding working on too many projects at once. Confronting those ideas systematically helps us see how good they really are.

For me, a crucial part of the process it to keep a record of this score. That way, when I inevitably have the same "low potential" idea in a month's time, I can quickly dismiss it. 

You don't need to create an app. A simple spreadsheet or a piece of paper would work fine.

Now I need to stop coding and start writing.

[^1]: I tried it on Greek philosophers and Epicurus narrowly triumphed over Socrates.