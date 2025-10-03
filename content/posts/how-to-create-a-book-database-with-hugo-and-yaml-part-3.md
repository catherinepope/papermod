---
date: "2025-09-30T16:40:02+01:00"
draft: true
title: "How to Create a Book Database With Hugo and YAML - Part 3"
tags: ["tag 1", "tag2", "tag3"]
categories: ["Technology"] 
description: ""
keywords: ["Hugo", "Tutorials"]
ShowToc: true
tocOpen: true  
---

## Create a Bibliography

Broken down by subject

Code is in `bibliography.html`.

Add commentary.

Using the partial again.

Here's a breakdown of what's happening in this code:

**Lines 1-6: Collect all unique subjects**

```html
{{ $subjects := slice }}
```
Creates an empty array called `$subjects` to store all the subject values.

```html
{{ range $key, $book := .Site.Data.books }}
```
Loops through every book in your `books.yaml` file.

```html
{{ range $book.subject }}
```
For each book, loops through its subject array (remember, your books can have multiple subjects like `["phd", "academic_writing"]`).

```html
{{ $subjects = $subjects | append . }}
```
Adds each subject to the `$subjects` array. At this point, you'll have duplicates if multiple books share the same subject.

**Line 7: Clean and sort**

```html
{{ $subjects = $subjects | uniq | sort }}
```
- `uniq` removes duplicates, so "phd" only appears once even if you have 10 PhD books
- `sort` alphabetizes the subjects

**Lines 9-19: Display books grouped by subject**

```html
{{ range $subjects }}
```
Loops through each unique subject.

```html
{{ $currentSubject := . }}
```
Stores the current subject in a variable. This is necessary because `.` changes meaning in nested loops.

```html
<h2>{{ . | humanize | title }}</h2>
```
Creates a heading for this subject group:
- `humanize` converts "phd_supervision" to "phd supervision"
- `title` capitalizes it to "Phd Supervision"

```html
{{ range $key, $book := $.Site.Data.books }}
```
Loops through all books again (note the `$` which refers to the top-level context, ensuring we're accessing the full book list).

```html
{{ if in $book.subject $currentSubject }}
```
Checks if the current book's subject array contains the subject we're currently displaying.

```html
<li>{{ partial "book-link.html" $book }}</li>
```
If it does, displays the book using your DRY partial! Passes the entire book object to the partial, which formats it consistently.

**In summary:** The code collects all unique subjects from your books, sorts them alphabetically, then for each subject creates a heading and lists all books that have that subject. Very elegant! And now with the partial, any formatting changes happen in one place.
