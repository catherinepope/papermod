---
date: "2026-02-09T07:49:16Z"
draft: false
title: "How to Add Fathom Analytics to Hugo"
tags: ["Hugo"]
categories: ["Technology"] 
description: "Learn how to add Fathom Analytics tracking to your Hugo website using the Papermod theme. Step-by-step instructions for installing the code correctly."
keywords: ["Fathom Analytics Hugo", "Hugo analytics setup", "Papermod theme analytics", "Hugo Fathom installation", "static site analytics"]
ShowToc: true
# tocOpen: true  
---

Although you can install [Fathom Analytics](../fathoming-web-analytics/) with one line of code, it's not immediately obvious where that line goes in a static site generator like Hugo 🤔

In this post, I'll explain how to add Fathom Analytics tracking to a [Hugo website](../why-i-moved-my-website-to-hugo/). 

💡 I'm using the [Papermod theme](https://github.com/adityatelange/hugo-PaperMod), which supports `extend_head.html` for adding code to the header. Some Hugo themes use different approaches. Check your theme's documentation if these steps don't work for you.

## Step 1 - Create the Partial Template

First you need a partial for your tracking link.

In your Hugo site's root directory, create a file called `extend_head.html` in `layouts/partials/`. If the `layouts` and `partials` folders don't yet exist, you'll need to create them.

As the name suggests, this partial _extends_ the current header. Any code you include here is automatically included in the `<head>` section of every page. This avoids the need to modify your theme's core files and makes life much easier when you apply theme updates.

## Step 2 - Add Your Fathom Embed Code

Open the `extend_head.html` file you just created and paste your Fathom Analytics embed code. It should look similar to this example:

```html
<!-- Fathom Analytics -->
<script src="https://cdn.usefathom.com/script.js" data-site="YOUR_SITE_ID" defer></script>
```

Replace `YOUR_SITE_ID` with your actual Fathom site ID.

## Step 3 - Save and Rebuild

Now it's time to check the code:

1. Save the `extend_head.html` file.
2. Rebuild your Hugo site and test locally (run `hugo server` in your terminal).
3. Right-click and select "View Page Source" (or similar) on your local site.
4. Look in the `<head>` section for your Fathom script 👀

If you can't see the Fathom script, check:

- The file is in the correct location: `layouts/partials/extend_head.html`.
- The file name is spelled correctly (including the underscore).
- You've rebuilt your site after adding the file.

Otherwise, move to ...

## Step 4 - Deploy and Track

To confirm the tracking code is working properly:

1. Deploy the updated site (e.g. to Netlify) 🚀
2. Visit your live website.
3. Check your Fathom Analytics dashboard after a few minutes to see your visit is being recorded.

If your visit isn't tracked, check:

- Your Fathom ID is correct.
- Your changes have been deployed to your host.
- You haven't accidentally blocked your own IP address in your Fathom settings (what kind of eejit would do that? 😳).

## Conclusion

Once your line of code is the right place, Fathom happily tracks visits to your Hugo site. If you experience any problems, the Fathom technical support people are very helpful. And there's [lots of information on their site](https://usefathom.com/docs/script/embed).

---

I’m currently pondering whether to create a **Getting Started with Hugo** online course. Add your email below if you’d be interested, then I’ll let you know if it goes ahead:

{{< newsletter-form tag="hugo" >}}