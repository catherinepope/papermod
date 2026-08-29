---
date: "2026-08-21T11:07:53+01:00"
draft: true
title: "Automatically Resizing and Converting Images With Hazel and Imagemagick"
tags: ["tag 1", "tag2", "tag3"]
# categories: 
description: ""
keywords: ["keyword 1", "keyword 2", "keyword 3"]
# ShowToc: true
# OpenToc: true  
---

NEED TO REJIG THIS:

1. HAZEL RULE
2. SCRIPT (EMBED IN HAZEL)
3. REMOVE PART ABOUT MOVING FILE TO DIFFERENT FOLDER.

In a previous post, I explained the joy of ImageMagick for quickly manipulating images. ImageMagick is even more powerful if you combine it with a Mac automation tool like Hazel. If you've not encountered it, [Hazel](https://www.noodlesoft.com/) watches whatever folders you tell it to, then automatically organises your files according to the rules you create. There's no AI calling the shots, you decide what should happen under what circumstances, then Hazel does the rest. 

As I use a lot of book covers in my posts, I set up a workflow that converts any images I download with a `.webp` format to `.jpg`, resizes them 60% of the original, then deletes the original `.webp` file. Here's how you can create a similar workflow.

For this to work, you'll need [Hazel](https://www.noodlesoft.com/) and ImageMagick installed. At $42, Hazel is moderately expensive. However, this is a one-off cost. If they release a major new version, you'll get a big discount as an existing customer.

The easiest way to install ImageMagick is with Homebrew:

`brew install imagemagick`

Once Hazel and ImageMagick are installed, you can start scripting.

## Step 1 - Create the shell script

Hazel can't interact with ImageMagick directly. You need a shell script for Hazel to execute. For example:

```
#!/bin/bash

# Get the input file path
INPUT_FILE="$1"

# Create output filename (replace .webp with .jpg)
OUTPUT_FILE="${INPUT_FILE%.*}.jpg"

# Convert to JPG, resize to 60%, set quality to 85%
magick "$INPUT_FILE" -resize 60% -quality 85 "$OUTPUT_FILE"

# Check if conversion was successful
if [ $? -eq 0 ]; then
    echo "Successfully converted: $(basename "$INPUT_FILE")"
    # Remove original file
    rm "$INPUT_FILE"
else
    echo "Error converting: $(basename "$INPUT_FILE")"
    exit 1
fi
```

As you can see, the script creates parameters and then uses them in the `magick` command. It also removes the original `webp` file so it doesn't clutter up your folder. The `fi` in the last line marks the end of the `if` statement. Yes, it looks like a typo.

Save the file, e.g. in `~/Scripts/convert-webp.sh`. Then make it executable:

```
chmod +x ~/Scripts/convert-webp.sh
```

## Step 3 - Create the Hazel rule

- Open Hazel and select the folder you want to monitor (e.g. Downloads).
- Click **+ New Rule** on the toolbar.
- Set the rule name, e.g. `Convert webp to jpg`.

- **Conditions:** Extension is .webp
- **Do the following:** Run shell script and choose 'other' to point to the script you created in Step 2

ℹ️ Ensure "Pass matched file as argument" is selected so the file path is passed as `$1`.

Now your rule is in place, you can test it.

## Step 4 - Test the rule

- Place a `.webp` file in the monitored folder.
- Right-click the file and choose **Hazel --> Apply Rules (this lets you test manually without waiting for a new file to trigger it)
- Check the destination folder for a new .jpg version that's 60% of the original size. 


