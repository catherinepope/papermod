---
date: "2026-01-07T15:30:05Z"
draft: false
title: "How to Back Up and Restore your Zotero Library"
tags: ["Zotero", "Tutorials"]
categories: ["Technology"] 
description: "Learn how to back up and restore your Zotero library using automated backups, manual copies, and emergency recovery methods to protect your research data."
keywords: ["Zotero backup", "Zotero restore", "Zotero data directory", "research data backup", "reference management backup", "Zotero sync", "academic writing tools"]
ShowToc: true
tocOpen: true  
---

Although syncing your Zotero Library ensures you have a cloud-based backup, it's also a good idea to schedule independent backups. Why am I giving you extra work to do? Well, if you accidentally delete a bunch of items in Zotero just before it syncs, your empty version is copied to the Zotero servers. This is a fairly unlikely scenario, but it's not one you'd want to encounter.

In this post, I'll explain how to back up your Zotero Library, and then outline some methods for restoring your items in different scenarios.

## Methods for backing up your Zotero Library

You might have already have a solution (such as Time Machine on a Mac) that automatically backs up everything on your computer. If so, you just need to double-check that the Zotero directory is included.

To locate your Zotero directory, go to **Settings** (Windows) or **Preferences** (Mac) **> Advanced**, then scroll down to the **Files and Folders** section. Under **Data Directory Location**, you'll see where all your Zotero data is stored.

{{< img src="images/zotero-data-directory-location.jpg" alt="Zotero Data Directory location" center="true" >}}

Click **Show Data Directory** to open the directory.

Make sure that directory is included in your routine backups. It's a good idea to both check the settings *and* review a recent backup to ensure everything has been replicated. Some backup tools unhelpfully exclude specific file types. Assume it's trying to thwart you and proceed accordingly.

If you're using a different backup method, include that Zotero directory in your routine. [I use ChronoSync on my Mac](../a-catastrophists-guide-to-backing-up-a-mac) and have created a scheduled backup task that runs at 17.20 every day. This task copies my entire Zotero directory to an external drive. I've chosen this time as I'm unlikely to be using Zotero - I don't want Zotero syncing and backing up at the same time, as that can cause conflicts. If you've enabled it, Zotero automatically syncs whenever you make a change.

Although you could manually copy that directory to a safe place, I guarantee you'll forget on the day when you've made lots of changes to you Zotero library. With backups, automation is the way.

## What's included in the backup?

While we're here, it's worth poking around in that directory, as it's helpful for understanding how Zotero works. You're then much better equipped for troubleshooting any future problems.

{{< img src="images/zotero-directory.jpg" alt="Zotero Data Directory contents" center="true" >}}

The two most important elements are:

- `zotero.sqlite` - the database that stores all your Zotero data, including metadata, notes, and tags. Zotero loads this database when it starts up.
- The `storage` folder - this is where your attachments are stored, such as PDFs and web snapshots.

Other folders include your styles and plugins, e.g. `better-bibtex`, which also has it's own database.

You'll notice a couple of `zotero.sqlite` files with a `.bak` suffix. These files provide one method of restoring your Zotero Library if it gets corrupted. More on that in a moment.

## Restoring your Zotero Library

Depending on the scenario, here are three methods you can use to restore your Zotero Library.

### Zotero Syncing

If your local Zotero Library is corrupted or empty but everything has been synced to Zotero.org, you can initiate a sync to restore it. Zotero only syncs _explicit_ deletions, so just syncing an empty library won't overwrite the server data unless you deleted those items manually.

In many cases, this straightforward approach works. But if there's a problem with your synced version, you'll need to restore from your backup files.

### Restoring from your Backup

To restore your Zotero Library from a backed up version, you need to replace your active data directory with the backed up version.

1. Disable syncing in the **Sync** tab of your Zotero settings/preferences.
2. Find your data directory using the instructions above.
3. Close Zotero.
4. Rename your data directory, e.g. from `Zotero` to `Zotero - Old`.
5. Copy the entire `Zotero` directory from your backup to the same location as `Zotero - Old`.
6. Reopen Zotero.

This time, Zotero uses your backup, rather than the old corrupted directory. You can delete `Zotero - Old` once you're sure everything is working correctly.

Once you resume syncing, any changes you made to your Library since the last backup are applied to your restored database when you next sync.

⚠️ If your damaged Library has synced with the server, you need to take some extra steps before resuming syncing. Otherwise, your restored local Library would be overwritten.

1. In Settings/Preferences, go to the **Sync** > **Show Reset Options**.
2. Click **Replace Online Library**, then **Reset**.
3. Enable syncing again.

{{< img src="images/zotero-replace-online-library.jpg" alt="Zotero Sync Reset options" center="true" >}}

Now the remote version is overwritten with the local restored version 😅

### Restoring from an Automatic Backup

Imagine your cat has trampled over your keyboard and deleted most of your items 😼 You hadn't quite got around to scheduling a backup job, and now Zotero has just synced the radically pruned version to the server. 

Those `.bak` files lurking in your Zotero folder can come to the rescue. Zotero automatically creates daily backups, typically keeping the two most recent versions: `zotero.sqlite.bak` (the latest) and `zotero.sqlite.1.bak`.

Here's what to do:

1. Disable syncing in the Sync tab of your Zotero settings/preferences.
2. Open your Zotero data directory (see above).
3. Find the `zotero.sqlite.bak` and `zotero.sqlite.1.bak` files. Choose the one that predates your data loss and make a copy of it.
4. Close Zotero.
5. In your data directory, rename `zotero.sqlite` to `zotero.sqlite.old`.
6. Rename your chosen `.bak` file to `zotero.sqlite`.
7. Reopen Zotero.

Now Zotero reads the restored database, rather than the damaged one.

⚠️ If your damaged Library synced with the server, follow the same steps outlined in the previous section to replace the online library before resuming syncing.

## Conclusion

It's unlikely you'll need to deploy any of these techniques. I've been using Zotero for over 15 years and have never experienced data loss. However, learning the hard way is never fun. Having a proper strategy means it'll be a lot easier to recover from any mishaps.

To summarise:

- Syncing your Zotero Library is a great way of creating a backup. But, you can accidentally back up a damaged version.
- Zotero takes daily automatic backups that are stored in your Data Directory. As these backups are only created daily, they won't necessarily include your latest changes. And they can get corrupted if anything happens to your hard drive.
- It's a good idea to ensure your Zotero Data Directory is included in an automated backup routine.

I haven't covered every issue or scenario here. You can find out lots more about backing up and restoring your Library in [Zotero's documentation](https://www.zotero.org/support/zotero_data). There's also advice on how you can get support in recovering from more complicated data losses.

In the meantime, make sure you're backing up, and keep the cat away from your keyboard.

---

I'm currently creating a **Getting Started with Zotero** online course. Add your email below to be the first to know when it's launched:

{{< newsletter-form tag="zotero" >}}