---
date: "2025-11-18T08:07:50Z"
draft: false
title: "Running Out of Zotero Storage? Here's What to Do"
tags: ["Zotero"]
categories: ["Technology"] 
description: "Learn how to manage Zotero storage limits and avoid running out of space. Discover when to upgrade your storage plan, how to use linked files, and the best ways to sync PDFs across multiple devices."
keywords: ["Zotero storage", "Zotero storage limit", "Zotero sync", "Zotero linked files", "Zotero file syncing", "Zotero storage full", "manage Zotero storage"]
ShowToc: true
tocOpen: false
---

If you've been merrily saving ebooks, journal articles, and web snapshots to Zotero, you might run out of storage space. There's a limit to how much you can sync for free. In this post, I'll explain how to check your storage limit, how to save storage space, and how to increase the space.

The current limit is 300Mb, which usually equates to a few hundred PDFs. Once you've reached this threshold, you need to pay an annual subscription before you can sync any more data. You'll see an exclamation mark next to your sync icon. 

## Checking your Zotero storage

To check how much space you've used, visit the Zotero website. If you're not already logged in, do so by clicking the **Log In** link in the top-right hand corner of the Zotero homepage.

{{< img src="images/zotero-upgrade-storage.jpg" alt="Screenshot of Zotero homepage" center="true" >}}

Now click **Upgrade Storage**. You can see your quota and how much of it you've used.

{{< img src="images/zotero-storage.jpg" alt="Screenshot of Zotero storage settings" center="true" >}}

Here you can see that I've exceeded my quota, which means I can no longer sync my Library.

If you've exceeded or are nudging towards 100%, you could simply click **Purge Storage in My Library** to delete all your attachments. It's very unlikely you actually want to do this, though, as you'd lose all those files you saved.

The good news is that extra Zotero space is very cheap. 2Gb costs only $20 a year and this should give you space for several thousand PDFs. $20 is a small price to pay to have all your PDFs safely stored on Zotero and accessible from any device. It's been the same price for years, so they're unlikely to suddenly increase it.

## Switching off syncing

If you're saving a lot of PDFs but don't want to spend the money, another option is to switch off syncing so you're not taking up space on the Zotero server. To do this, go to the Sync tab in your Zotero.

On Windows, this is under **Edit > Settings**.

On a Mac, it's **Zotero > Settings** 

Uncheck the box that says **Sync attachment files in My Library**. 

{{< img src="images/zotero-file-syncing.jpg" alt="Screenshot of Zotero file syncing settings" center="true" >}}

This prevents your PDFs, images, and web snapshots from being uploaded to Zotero's servers and counting toward your storage limit. However, your citation data (authors, titles, tags, notes, etc.) still sync across all your devices - only the file attachments themselves won't sync.

The problem with disabling syncing is that you'll only be able to access those file attachments on the computer where they are saved - they won't be synced to all your devices. Also, they're not backed up to the Zotero server.

## Linking Zotero to external files

If you already have lots of journal articles stored elsewhere and don't want to pay for Zotero storage, you could just link to them instead. You can either link to a local file on your device, or one that's stored in a cloud storage platform like Dropbox. 

I'll show you both methods.

### Linking a local file

You can link to files stored on your computer instead of storing them in Zotero. Right-click the item to which you want to attach your PDF, click **Add Attachment**, then **Linked File**.

{{< img src="images/zotero-linked-file.jpg" alt="Screenshot of linking a file in Zotero" center="true" >}}

The PDF is now attached to the item, but the file itself won't be synced to the Zotero server. Zotero syncs the *link information* (the file path), but not the actual file.

**Important**: If you use Zotero on multiple devices, you'll need to:

- Keep the PDFs themselves in sync using cloud storage (like Dropbox) OR manually copy them to each device.
- Set up the "Linked Attachment Base Directory" in Zotero on each device (under **Advanced > Files and Folders**) so Zotero knows where to find the files. As you'll see, this needs to be the same location or file path.

{{< img src="images/zotero-base-directory.jpg" alt="Screenshot of Zotero base directory settings" center="true" >}}

Without these steps, you'll see the linked file listed in Zotero on your other devices, but won't be able to open it.

If you want to convert linked files back to stored files (so they sync through Zotero), you can do this from the **Tools > Manage Attachments** menu.

{{< img src="images/zotero-manage-attachments.jpg" alt="Screenshot of Manage Attachments feature in Zotero" center="true" >}}

### Linking a remote file

If you want to link to a remote file, you can add a URL instead. The major disadvantage with this method is that Zotero can't access the full text. Zotero is great at searching the content inside your PDFs, as well as the bibliographic data.

Here's how it would work with Dropbox.

- Find the local version of your file - usually in the Dropbox folder.
- Right-click the file, then choose **Copy Dropbox link**.
- In Zotero, right-click the item, choose **Add Attachment**, then **Web Link**. 
- Paste the Dropbox URL in the box.

{{< img src="images/zotero-web-link.jpg" alt="Screenshot of adding web link in Zotero" center="true" >}}

You'll see the Dropbox URL has been stored. I can then click the link to view the file. 

{{< img src="images/zotero-dropbox-link.jpg" alt="Screenshot of linked Dropbox file in Zotero" center="true" >}}

Although I can now access this file from any device, I can't access it when I'm offline. And the text won't be searchable within Zotero.

## Conclusion

There are some more complicated ways around external file storage - you can [check the Zotero documentation for details](https://www.zotero.org/support/sync). I think it's best to keep it simple and use the built-in Zotero storage. Most people don't exceed the free limit. You can keep within it by making sure you're not saving any unnecessary content or retaining files you no longer need. Whatever approach you take, make sure it's intentional. That way, you won't suddenly lose your journal articles. If you're comfortable with installing plugins and want to use cloud storage, take a look at my post on [Zotmoov](../managing-zotero-attachments-with-zotmoov/).

---

I'm currently creating a **Getting Started with Zotero** online course. Add your email below to be the first to know when it's launched:

{{< newsletter-form tag="zotero" >}}