---
date: "2025-11-20T15:02:10Z"
draft: false
title: "Managing Zotero Attachments with Zotmoov"
tags: ["Zotero", "Tutorials"]
categories: ["Technology"]
description: "Zotfile no longer works with Zotero 7. Learn how to use Zotmoov instead to automatically move PDFs to cloud storage like Dropbox or OneDrive, avoiding Zotero storage limits while keeping your library organised."
keywords: ["Zotfile", "Zotmoov", "Zotero 7", "Zotfile alternative", "Zotero cloud storage", "Zotero linked files", "Zotfile replacement", "Zotero 7 plugins"]
ShowToc: true
# OpenToc: true
---

In my previous post, I explained [several options for managing your Zotero storage](../managing-storage-in-zotero/). If you're willing to install a plugin, there's another solution: [Zotmoov](https://github.com/wileyyugioh/zotmoov).

If you've been using Zotero for a while, you've probably heard of Zotfile, a popular plugin that allowed users to automatically organise PDFs and keep them synced through cloud storage. Unfortunately, Zotfile is no longer maintained and doesn't work with Zotero 7. The good news is that Zotmoov offers some of the same features, while others are now a core part of Zotero 7.

In this post, I'll explain how you can use Zotmoov to automatically move your PDF attachments to cloud drives so they don't count towards your Zotero storage limit. And you can easily access them through other apps.

## Installing Zotmoov

First, [download the latest version of Zotmoov](https://github.com/wileyyugioh/zotmoov/releases). You're looking for a file ending in `.xpi`.

Once downloaded:

1. Open Zotero.
2. Go to **Tools > Plugins**.
3. Click the gear icon in the top-right corner.
4. Select **Install Plugin From File**.
5. Navigate to your downloaded `.xpi` file and click **Open**.
6. Restart Zotero if prompted.

{{< img src="images/zotero-install-plugin.jpg" alt="Screenshot of installing plugin in Zotero" center="true" >}}

## Configuring Zotmoov to move attachments automatically

Next, you need to tell Zotmoov where to move your files. 

On Windows, go to **Edit > Settings**. On Mac, it's **Zotero > Settings**.

1. Click the new **Zotmoov** tab.

2. Under **Directory to Move/Copy Files To**, click **Choose Directory** and select your cloud storage folder (for example, a Zotero folder inside your Dropbox or OneDrive).

3. Check the box that says **Automatically Move/Copy Files when Added**.

{{< img src="images/zotero-zotmoov-settings.jpg" alt="Screenshot of Zotmoov settings in Zotero" center="true" >}}

## Setting up the Linked Attachment Base Directory

This step is crucial if you use Zotero on multiple devices. It tells Zotero where to find your linked files.

In the same Settings/Preferences window, go to **Advanced > Files and Folders**.

Under **Linked Attachment Base Directory**, click **Choose** and select the same folder you chose in Zotmoov (your cloud storage folder). Make sure this folder exists on all your devices where you use Zotero (your cloud storage service will sync it automatically).

{{< img src="images/zotero-base-directory.jpg" alt="Screenshot of Zotero base directory settings" center="true" >}}

## Testing Zotmoov

Let's make sure everything works:

1. Use the Zotero browser connector to save an article with a PDF.
2. You should see the PDF appear briefly in Zotero, then Zotmoov moves it to your chosen folder.
3. Check your cloud storage folder: the PDF should be there 👀
4. In Zotero, expand the item to see its attachments. You should see a link icon on the PDF, indicating it's a linked file rather than a stored file.

If the PDF was moved successfully, Zotmoov is working 🎉 From now on, all new attachments are automatically moved to your external storage. They'll no longer count towards your Zotero storage limit.

## Moving existing attachments with Zotmoov

If you already have PDFs stored in Zotero before installing Zotmoov, you'll need to move them manually. Fortunately, you can do this in bulk:

1. In your Zotero library, select the items you want to move (use <span class="key">Ctrl</span> + <span class="key">A</span> on Windows or <span class="key">Cmd</span> + <span class="key">A</span> on Mac to select all items).
2. Or you can search for items with PDF attachments by clicking the search icon, choosing **Advanced Search**, the selecting **Attachment File Type > PDF** (see screenshot below)
3. Right-click on the selected files.
4. Choose **ZotMoov: Move Selected to Directory**.

Zotmoov moves all the PDFs to your cloud storage folder and converts them to linked files.

{{< img src="images/zotero-attachment-file-type.jpg" alt="Screenshot of searching by attachment file type in Zotero" center="true" >}}

**Tip:** If you have a large library, you might want to do this in batches. Otherwise, Zotero might slow down or crash 🐌 

## What about other Zotfile features?

Zotmoov focuses primarily on moving files. If you relied on other Zotfile features, here's where you can find them:

- **Annotation extraction:** This is now built into Zotero 7. Right-click on any PDF and select - **Add Note from Annotations** to extract your highlights and notes.
- **File renaming:** Zotero 7 has improved its built-in file renaming capabilities. You can customise how files are named in **Settings/Preferences > General > File Renaming**.

For other Zotmoov features and advanced configuration options, see the [Zotmoov documentation on GitHub](https://github.com/wileyyugioh/zotmoov).

## Conclusion

While Zotfile is no longer an option for Zotero 7 users, Zotmoov provides a straightforward way to automatically manage your PDF storage with cloud drives. Combined with Zotero 7's built-in features for annotation extraction and file renaming, you have everything you need to keep your research library organised without hitting storage limits.

Personally, I pay $20 a year for additional Zotero storage, as I prefer not to rely on just one cloud host. However, one of Zotero's many advantages is its array of plugins. A big thank you to the Zotfile developers who helped so many of us. And another big thank you to the Zotmoov team for this valuable plugin.

---

I'm currently creating a **Getting Started with Zotero** online course. Add your email below to be the first to know when it's launched:

{{< newsletter-form tag="zotero" >}}