---
date: "2025-12-09T09:30:04Z"
draft: false
title: "How to Import Your EndNote Library into Zotero"
tags: ["Zotero", "Tutorials"]
categories: ["Technology"] 
description: "Learn how to import your EndNote library into Zotero using the XML method. This step-by-step guide shows you how to transfer your references, PDFs, groups, and formatting to Zotero successfully."
keywords: ["EndNote to Zotero", "import EndNote library", "EndNote XML export", "migrate from EndNote", "EndNote Zotero migration", "switch from EndNote", "transfer EndNote to Zotero"]
ShowToc: true
# tocOpen: true  
---

One of the questions I’m asked most frequently is whether it’s possible for EndNote users to switch easily to Zotero. Yes, it is! Many of the tutorials focus on exporting your library in RIS format. Although straightforward, this method doesn't retain your PDF attachments, Groups, or formatting. In this tutorial, I'll walk you through the XML method. XML is a more sophisticated file format that's readable by many tools. You need to follow the instructions precisely, but you'll get a much better result.

## Export an XML file from EndNote

In EndNote, click **File > Export**. You'll see a pop-up window like this:

{{< img src="images/endnote-export-filename.jpg" alt="Screenshot of EndNote export options" center="true" >}}

1. Accept the default filename of **My EndNote Library**.
2. **Save file as type** should be **XML**.
3. If you want to export your entire EndNote Library, ensure **Export Selected References** is **unchecked**.
4. 👉 And here's the most important part: under **Where**, you need to navigate to your EndNote `.Data` folder:
   - **Mac users:** This is typically in Documents and has the same name as your library with `.Data` added (e.g., `My EndNote Library.Data`).
   - **Windows users:** This is typically in `My Documents` or `My Documents\EndNote` and also has `.Data` added to your library name.

💡 This folder contains your PDFs in subfolders. By placing the XML file here, you give Zotero access all your PDFs so it can attach them to the imported records.

{{< img src="images/endnote-data.jpg" alt="Screenshot of EndNote data location" center="true" >}}

## Import the XML file into Zotero

In Zotero, click **File > Import**, then locate the file you just exported from EndNote. You then have a couple of options:

- Check the box if you want to place your imported items in a new Collection (Zotero's equivalent of Groups) with the same name as your saved file (e.g. `My Endnote Library`). If you leave the box unchecked, they'll just be added to **My Library**.

- Choose whether you want to copy any attachments to your Zotero storage folder - they then contribute towards your [storage limit](../managing-storage-in-zotero/) of 300Mb. If you choose **Link to files in original location**, they won't be synced by Zotero.

{{< img src="images/zotero-import-mendeley.jpg" alt="Screenshot of Zotero" center="true" >}}

You should now see that Zotero has created a new Collection called `My EndNote Library`, which contains all your imported items, retaining the groups, attachments, and formatting.

{{< img src="images/zotero-endnote.jpg" alt="Screenshot of imported EndNote library in Zotero" center="true" >}}

## Conclusion

I think this method is both effective and straightforward, provided you save your `.xml` file in the right place. For more information and troubleshooting, [visit the Zotero support page](https://www.zotero.org/support/kb/importing_records_from_endnote).

Creating this tutorial has reminded me how much I dislike EndNote. If you're moving to Zotero, I feel sure you're going to be much happier.
