---
date: "2025-09-30T16:40:02+01:00"
draft: false
title: "How to Create a Book Database With Hugo and YAML - Part 2"
keywords: ["Hugo tutorial", "YAML database", "Hugo shortcodes", "Hugo partials", "reading lists", "book lists", "static site generator", "DRY principle", "Hugo templates", "content management"]
categories: ["Technology"] 
description: "Learn how to create subject-specific book lists in Hugo using YAML data files, shortcodes, and partials. Build flexible, maintainable reading lists with reusable code."
tags: ["Hugo", "Tutorials"]
ShowToc: true
tocOpen: true  
---

In my previous tutorial, I showed [how to create a simple YAML database in Hugo](../how-to-create-a-book-database-with-hugo-and-yaml/) for reusable book links. Only five minutes passed before I started tinkering and building something fancier.

In this tutorial, I'll explain how to create subject-specific book lists. This approach works well for quickly generating and sharing reading lists. As with the previous tutorial, you can also adapt this code for organising web links, tools, or other resources.

If you haven't done so already, please follow [the steps in Part 1](../how-to-create-a-book-database-with-hugo-and-yaml/) so you have all the necessary code.

## Step One - Add subject field to your YAML file

You should already have `books.yaml` from the previous tutorial. After each entry, add a `subject` field. Then use an array to add the values. Although you could simply add "Project Management", using an array gives you more flexibility to add multiple subjects. As you can see, the _The 12 Week Year_ example has two subjects: _Project Management_ and _Productivity_.[^1]

```yaml

making_work_visible:
  title: "Making Work Visible"
  author: "Dominica DeGrandis"
  isbn: "9781950508495"
  subject: ["Project Management"]

slow_productivity:
  title: "Slow Productivity"
  author: "Cal Newport"
  isbn: "9780241652916"
  subject: ["Project Management", "Productivity"]

twelve_week_year:
  title: "The 12 Week Year"
  author: "Brian P. Moran & Michael Lennington"
  isbn: "9781394369157"
  subject: ["Project Management", "Productivity"]
```

## Step Two - Create a shortcode

Next, you need to create a shortcode that displays books that match a specified subject. Create a file called `book-subject.html` in your `shortcodes` directory and add this code:

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

**Line 1:** `{{ $subject := .Get 0 }}`

Gets the parameter you pass to the shortcode and stores it in a variable called `$subject`. When you write `{{</* book-subject "Productivity" */>}}`, this captures "Productivity". These subjects are case sensitive.

**Line 2:** `<ul class="book-list">`

Opens an unordered (bulleted) list with a CSS class for optional styling.

**Line 3:** `{{ range $key, $book := $.Site.Data.books }}`

Loops through every book in your `books.yaml` file:

- `$.Site.Data.books` accesses your data file (the `$` refers to the global context)
- `range` iterates through each entry
- `$key` is the book's identifier (such as "twelve_week_year")
- `$book` is the book's data (title, author, ISBN, subjects)

**Line 4:** `{{ if in $book.subject $subject }}`

Checks if the subject you're looking for exists in this book's subject array:

- `$book.subject` is the array of subjects for the current book
- `$subject` is what you're searching for (e.g., "Productivity")
- `in` checks if the value exists in the array

**Lines 5-7:** Creates the list item

If the condition is true (the book has that subject), it creates a list item with a link to the book using the ISBN, displays the title and author.

**Lines 8-9:** `{{ end }}` statements

Close the `if` statement and the `range` loop.

**Line 10:** `</ul>`

Closes the unordered list.

In summary, it takes your search term, loops through all books, and displays only those that include that subject in their subject array.

Once you've saved your `book-subject.html` shortcode, you can call it in your webpage:

```html
{{</* book-subject "Project Management" */>}}
```

Replace `"Project Management"` with whichever subject you want to display.

## Step Three - Keep it DRY

After using these shortcodes for a while, you might want to change the bookshop link. Currently, you'd need to do it two places: `book.html` and `book-subject.html` - that's creating some content debt.

To observe the DRY (don't repeat yourself) principle, you need to create a _partial_ for that link. Shortcodes are for use in your content files (markdown), while partials are reusable chunks of code that live within your templates and shortcodes.

Create `layouts/partials/book-link.html` and add the following code:

```html
<a href="https://uk.bookshop.org/a/2760/{{ .isbn }}" class="book-link">{{ .title }}</a> by {{ .author }}
```

Or copy and paste the link code from your existing shortcode.

Now update your `book.html` shortcode to use the partial. You're replacing the `<a href=" ... "></a>` line:

```html
{{ $book := index .Site.Data.books (.Get 0) }}
{{ partial "book-link.html" $book }}
```

Calling a partial is slightly different from using a shortcode. There are no angled brackets and you need to prefix `book` with `$` as you're passing a variable.

Once that's working, repeat this step for your `book-subject.html` shortcode

```html
{{ $subject := .Get 0 }}
<ul class="book-list">
{{ range $key, $book := $.Site.Data.books }}
  {{ if in $book.subject $subject }}
    <li>{{ partial "book-link.html" $book }}</li>
  {{ end }}
{{ end }}
</ul>
```

Again, there's just one line that needs replacing, the `<li> ... </li>`.

Now the URL format lives in just one place - the `book-link.html` partial. Update it there, and both shortcodes automatically use the new format 🎉

Here's the structure of what's happening:

- Your markdown content file uses the `{{</* book "writing_science" */>}}` (shortcode)
- The shortcodes (`book.html` and `book-subject.html`) use `{{ partial "book-link.html" $book }}` (partial)
- The partial (`book-link.html`) contains the actual HTML formatting and link.

```text
your-hugo-site/
├── data/
│   └── books.yaml
├── layouts/
│   ├── partials/
│   │   └── book-link.html
│   └── shortcodes/
│       ├── book.html
│       └── book-subject.html
└── content/
    └── posts/
        └── your-post.md
```

## Conclusion

With the code we've explored in this tutorial, you can do much more with that YAML database. I use these examples to create reading lists for my workshops. It takes seconds to add a list of all the books on academic writing, for instance. In the next tutorial, I'll explain [how to display a full bibliography](../how-to-create-a-book-database-with-hugo-and-yaml-part-3/). Hope to see you there.

[^1]: If the lack of hyphen in "12 Week" is bothering you, I feel your pain.