---
date: "2025-09-30T16:40:02+01:00"
draft: true
title: "How to Create a Database With Hugo and YAML - Part 2"
tags: ["tag 1", "tag2", "tag3"]
categories: ["Technology"] 
description: ""
keywords: ["Hugo", "Tutorials"]
ShowToc: true
tocOpen: true  
---

Link to previous tutorial and external links

`books.yaml`

Added a `subject` field. Although you could simply add "project_management", using an array gives you more flexibility to add multiple subjects. As you can see with _The 12 Week Year_ example, that has two subjects: project management and productivity.[^1]

```yaml

making_work_visible:
  title: "Making Work Visible"
  author: "Dominica DeGrandis"
  isbn: "9781950508495"
  subject: ["project_management"]

slow_productivity:
  title: "Slow Productivity"
  author: "Cal Newport"
  isbn: "9780241652916"
  subject: ["project_management"]

twelve_week_year:
  title: "The 12 Week Year"
  author: "Brian P. Moran & Michael Lennington"
  isbn: "9781394369157"
  subject: ["project_management", "productivity"]
```


Here's the code for the `book-subject.html` shortcode:

```html
{{ $subject := .Get 0 }}
<ul class="book-list">
{{ range $key, $book := $.Site.Data.books }}
  {{ if in $book.subject $subject }}
    <li>
      <a href="https://uk.bookshop.org/a/2760/{{ $book.isbn }}">{{ $book.title }}</a> 
      by {{ $book.author }}
    </li>
  {{ end }}
{{ end }}
</ul>
```

Here's what's happening in this code (much of it will be familiar from the previous tutorial):

**Line 1:** `{{/* $subject := .Get 0 */}}`

Gets the parameter you pass to the shortcode and stores it in a variable called `$subject`. So when you write `{{</* books-by-subject "productivity" */>}}`, this captures "productivity".

**Line 2:** `<ul class="book-list">`

Opens an unordered (bulleted) list with a CSS class for styling.

**Line 3:** `{{/* range $key, $book := $.Site.Data.books */}}`

Loops through every book in your `books.yaml` file:
- `$.Site.Data.books` accesses your data file (the `$` refers to the global context)
- `range` iterates through each entry
- `$key` is the book's identifier (like "twelve_week_year")
- `$book` is the book's data (title, author, ISBN, subjects)

**Line 4:** `{{/* if in $book.subject $subject */}}`

Checks if the subject you're looking for exists in this book's subject array:
- `$book.subject` is the array of subjects for the current book
- `$subject` is what you're searching for (e.g., "productivity")
- `in` checks if the value exists in the array

**Lines 5-7:** Creates the list item

If the condition is true (the book has that subject), it creates a list item with a link to the book using the ISBN, displays the title and author.

**Lines 8-9:** `{{/* end */}}` statements

Close the `if` statement and the `range` loop.

**Line 10:** `</ul>`

Closes the unordered list.

So in summary: it grabs your search term, loops through all books, and displays only those that have that subject in their subjects array.


Once you've saved your book-subject.html shortcode, you can call it in your webpage:

```html
{{</* book-subject "project_management" */>}}
```

Replace `"project_management"` with whichever subject you want to display.

## Keeping it DRY

If you wanted to change the URL format, you'd now need to do it two places: `book.html` and `booksubject.html` - that's creating some content debt.

If you want to observe the DRY (don't repeat yourself) principle, you need to create a partial.

It requires a slightly different approach since shortcodes can't directly call other shortcodes from within template code.

The best DRY solution is to create a partial for the book formatting, then use that partial in both shortcodes.

### Step 1: Create a partial

Create layouts/partials/book-link.html:

```html
<a href="https://uk.bookshop.org/a/2760/{{ .isbn }}" class="book-link">{{ .title }}</a> by {{ .author }}
```

### Step 2: Update your existing `book.html` shortcode

```html
{{ $book := index .Site.Data.books (.Get 0) }}
{{ partial "book-link.html" $book }}
```

### Step 3: Update your existing `book-subject.html` shortcode

```html
{{ $subject := .Get 0 }}
<ul class="book-list">
{{ range $key, $book := $.Site.Data.books }}
  {{ if eq $book.subject $subject }}
    <li>{{ partial "book-link.html" $book }}</li>
  {{ end }}
{{ end }}
</ul>
```

There's just one line that needs replacing, the `<li> ... </li>'.

Now the URL format lives in just one place - the `book-link.html` partial. Update it there, and both shortcodes automatically use the new format.


## Create a Bibliography

Broken down by subject

Code is in `bibliography.html`.

Add commentary.

Need to ask Claude to make it DRY.

[^1]: If the lack of hyphen in "12 Week" is bothering you, I feel your pain.