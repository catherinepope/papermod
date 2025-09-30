---
date: "2025-09-29T17:03:31+01:00"
draft: true
title: "How to Create a Book Database with Hugo"
tags: ["Hugo", "Tutorials", "tag3"]
categories: ["Technology"] 
description: ""
keywords: ["keyword 1", "keyword 2", "keyword 3"]
ShowToc: true
tocOpen: true  
---

While creating resources for some of my workshops, I realised I was recommending the same books repeatedly. This also meant I was typing the same details repeatedly - time I could be spending reading. I then started experimenting with creating a simple database in Hugo. I wanted a solution that would allow me to maintain my book details (title, author, ISBN, and URL) in one place, then pull them into specific pages with a shortcode. This way, I'd:

- Save time on adding books.
- Save time on updating any links, as they're all in one place.

In this tutorial, I'll walk you through my solution. Although I'm using books here, you could adapt the code for any repeated references, such as journal articles, web links, software tools - anything you like.

## Step 1 - Create a Data File

You won't get far in Hugo without encountering YAML. It's not everyone's idea of fun, as the indentation can be challenging. However, YAML is the perfect language for creating a data file that works like a simple database. Hugo can query any files in the `data` directory and output their contents at build time.

If you want to follow my example, create the file `data/books.yaml`.

Then copy and paste this code sample into your new file:

```yaml

setting_boundaries:
  title: "Setting Boundaries that Stick"
  author: "Juliane Taylor Shore"
  isbn: "9781648481291"
  bookshop: "https://uk.bookshop.org/a/2760/9781648481291"

thanks_feedback:
  title: "Thanks for the Feedback"
  author: "Douglas Stone & Sheila Heen"
  isbn: "9780670922635"
  bookshop: "https://uk.bookshop.org/a/2760/9780670922635"

writing_science:
  title: "Writing Science"
  author: "Joshua Schimel"
  isbn: "9780199760244"
  bookshop: "https://uk.bookshop.org/a/2760/9780199760244"

```

Each of these three blocks defines a single book entry with a unique key. In a moment, we'll use the key `writing_science` to reference that book in a shortcode. The indented lines under the identifier are the book's metadata:

- `title`: The book's full title
- `author`: The author's name
- `isbn`: The ISBN (even if you're not using this immediately, it's useful to capture this information, as it helps you build dynamic links to online bookstores).
- `bookshop`: The URL for the book on Bookshop.org. Of course, you can change this to your preferred bookstore. 

The metadata is indented by two spaces.

You can add as many book entries as you need to this file. Here are some tips:

- Each identifier must be unique. I list my books in alphabetical order so I can spot duplicates more easily (and because I used to be a librarian).
- Choose identifiers that are both descriptive and concise. Use underscores for multi-word identifiers.
- Consider any metadata that you might need in future. This saves you having to add new fields to every existing entry. You might want fields such as `subject` or `date`.

Once you have a data file, you can tell Hugo how to display it.

## Step 2 - Create a Shortcode

Create a shortcode called `layouts/shortcodes/book.html`. This is a reusable piece of code that you'll call when you want to display a book. 

Copy and paste this code into your `book.html` file:

```html
{{ $book := index .Site.Data.books (.Get 0) }}
<a href="{{ $book.bookshop }}" class="book-link">{{ $book.title }}</a> by {{ $book.author }}
```

Let's look at what's happening in this code:

**Line 1:** `{{ $book := index .Site.Data.books (.Get 0) }}`.

This line fetches the book data from your YAML file and stores it in a variable called `$book`:

- `.Site.Data.books` accesses your `data/books.yaml` file.
- `(.Get 0)` gets the first (and only) parameter you pass to the shortcode - so when you type `{{</* book "writing_science" */>}}` in the next step, this retrieves "writing_science".
- `index` looks up that key in your books data file and returns the corresponding book entry.
- `:=` assigns the result to the `$book` variable.

**Line 2:** `<a href="{{ $book.bookshop }}" class="book-link">{{ $book.title }}</a> by {{ $book.author }}`

This line generates the HTML output:

- Creates a link using the book's `bookshop` URL.
- Displays the book's `title` as the link text.
- Adds "by [author name]" after the link.
- The `book-link` class means you can style these links with CSS.

Here's where your `books.yaml` and `book.html` belong in your Hugo site:

```text
your-hugo-site/
├── data/
│   └── books.yaml
├── layouts/
│   └── shortcodes/
│       └── book.html
└── content/
    └── posts/
        └── your-post.md
```


Now you're ready to start using that shortcode to generate book links.

## Step 3 - Embed Your Shortcode

On the page where you want to mention a book, call the shortcode you just created and pass it a parameter. For _Writing Science_, it looks like this:

```html
{{</* book "writing_science" */>}}
```
Here's what's going on in that shortcode:

- `{{</* ... */>}}` is Hugo's shortcode syntax - it tells Hugo to execute a shortcode. Make sure you have two pairs of curly braces.
- `book` is the name of your shortcode (matching the filename `layouts/shortcodes/book.html`).
- `"writing_science"` is the parameter you're passing to the shortcode - it's the key that identifies which book to look up in your `data/books.yaml` file.

When Hugo processes this shortcode, it:

1. Finds the `book.html` shortcode template.
2. Passes `"writing_science"` as the first parameter.
3. Looks up that key in your `books` data file.
4. Returns the formatted HTML with the book's title, author, and link.

So, when you use `{{</* book "writing_science" */>}}` in your content, it outputs:

```html
<a href="https://uk.bookshop.org/a/2760/9780199760244" class="book-link">Writing Science</a> by Joshua Schimel
```

## Conclusion

Once you've set up your data file and shortcode, it's quick to add your books (or other resources) to multiple pages. If you ever need to change the bookstore link, you can do it in one place.

To make all those bookstore links open in a new tab, [take a look at my other Hugo tutorial](../open-external-links-in-new-tab-with-hugo/).

Data files and shortcodes are wonderfully flexible and surprisingly satisfying. You get all the benefits of Hugo's simplicity _and_ reusable content.