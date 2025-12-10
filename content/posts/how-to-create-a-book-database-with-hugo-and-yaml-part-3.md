---
date: "2025-10-05T12:40:02+01:00"
draft: false
title: "How to Create a Book Database with Hugo and YAML - Part 3"
tags: ["Hugo", "Tutorials"]
categories: ["Technology"] 
description: "Learn how to create an auto-generated bibliography in Hugo by extending your YAML book database. Display all books organized by subject using shortcodes and partials."
keywords: ["Hugo", "YAML", "bibliography", "data files", "shortcodes", "Hugo tutorial", "book database", "reading list", "partials"] 
ShowToc: true
tocOpen: true  
---

Once I got my YAML book list set up, I couldn't stop thinking of different uses for it. Although I'm mainly using it to generate reading lists for specific workshops, I thought it would be useful to also generate a [full reading list or bibliography](../../workshops/resources/reading-list/).

In this tutorial, I'll extend the code from [Part 1](../how-to-create-a-book-database-with-hugo-and-yaml/) and [Part 2](../how-to-create-a-book-database-with-hugo-and-yaml-part-2/) to retrieve and display all the books, arranged by subject. To follow along, you'll need the following files from those earlier tutorials:

- `books.yaml`
- `book-link.html`

## Step 1 - Create a Bibliography shortcode

First create `layouts/shortcodes/bibliography.html`, then copy and paste the following code:

```html
{{ $subjects := slice }}
{{ range $key, $book := .Site.Data.books }}
  {{ range $book.subject }}
    {{ $subjects = $subjects | append . }}
  {{ end }}
{{ end }}
{{ $subjects = $subjects | uniq | sort }}

{{ range $subjects }}
  {{ $currentSubject := . }}
  <h2>{{ . }}</h2>
  <ul class="book-list">
  {{ range $key, $book := $.Site.Data.books }}
    {{ if in $book.subject $currentSubject }}
      <li>{{ partial "book-link.html" $book }}</li>
    {{ end }}
  {{ end }}
  </ul>
{{ end }}
```

Here's a breakdown of what's happening in this code:

**Lines 1-7: Collect and prepare all subjects**

```html
{{ $subjects := slice }}
```
Creates an empty array to hold all the subject values.

```html
{{ range $key, $book := .Site.Data.books }}
```
Loops through every book in `books.yaml`.

```html
{{ range $book.subject }}
```
For each book, loops through its subject array (since books can have multiple subjects like `["Project Management", "Productivity"]`).

```html
{{ $subjects = $subjects | append . }}
```
Adds each subject to the `$subjects` array. At this stage, you'll have duplicates - if there are 5 books about "Productivity", you'll have "Productivity" listed 5 times.

```html
{{ $subjects = $subjects | uniq | sort }}
```
- `uniq` removes duplicates (5 instances of "Productivity" become just 1)
- `sort` alphabetises them

**Lines 9-20: Display books organized by subject**

```html
{{ range $subjects }}
```
Loops through each unique subject.

```html
{{ $currentSubject := . }}
```
Stores the current subject in a variable so we can reference it in the nested loop below.

```html
<h2>{{ . }}</h2>
```
Creates a heading with the subject name.

```html
<ul class="book-list">
```
Opens an unordered list for this subject's books with a `class` that you can style.

```html
{{ range $key, $book := $.Site.Data.books }}
```
Loops through all books again. The `$` ensures we're accessing the full site context, not just the current loop's context.

```html
{{ if in $book.subject $currentSubject }}
```
Checks whether the current book's subject array contains the subject we're currently displaying.

```html
<li>{{ partial "book-link.html" $book }}</li>
```
If the book has this subject, displays it using the DRY partial from [Part 2](../how-to-create-a-book-database-with-hugo-and-yaml-part-2/).

**In summary:** Collects all unique subjects from your books, sorts them alphabetically, then creates a section for each subject with all matching books listed underneath.

## Step 2 - Insert the Bibliography shortcode

Create a page where you want your bibliography to appear (e.g., `content/bibliography.md`), then add your shortcode:

​```
{{</* bibliography */>}}
​```

When Hugo builds your site, it generates a complete bibliography with all your books organised by subject 🎉

## Conclusion

This approach is a simple way of generating a reading list that you can update in one place, then display in different formats. For a slightly more sophisticated version, take a look at [my kit list](../../kit-list/), where I've added descriptions and slightly fancier styling. This example exemplifies the flexibility of Hugo. I hope you enjoy yourself with it as much as I did.

