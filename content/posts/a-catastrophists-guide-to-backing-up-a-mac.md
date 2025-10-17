---
date: "2025-10-17T15:14:42+01:00"
draft: true
title: "A Catastrophist's Guide to Backing Up a Mac"
tags: ["Mac Tips", "Project Management"]
categories: ["Technology"] 
description: "Complete backup strategy guide for Mac users and researchers. Learn Time Machine, ChronoSync, cloud storage, and the 3-2-1 rule to protect your data."
keywords: ["backup strategy", "Mac backup", "Time Machine", "ChronoSync", "data backup", "academic backup", "researcher data protection", "cloud backup", "external drive backup", "3-2-1 backup rule", "backup for researchers", "Mac data recovery", "backup software comparison", "academic data management", "research data backup"]
ShowToc: true
tocOpen: true  
---

One of my most memorable moments in academia was when two PhD researchers lost all their work just before submission. In one case, it was a house fire; in the other, a laptop stolen with the backup drive attached. This was devastating. In both cases, they'd created backups. Unfortunately, though, those backups were in the same physical location as the original files.

Devising a proper backup strategy is something we're always planning to do *next month*, when it's a bit quieter. We're far too busy right now. But it's precisely when we're frantically busy that we're most likely to hit the wrong button, and also when a data loss would be most inconvenient.

In this post, I'll explain the features of a good backup strategy for Macs and also suggest some potential solutions.

⚠️ Your institution or funding body might have their own strategy that you're obliged to follow.

## What's a good backup strategy?

As you'll see, there's no simple, one-shot approach here.

Ideally, backup solutions should be:

- **Automatic** - you don't have to remember to initiate them.
- **Systematic** - you've specified in advance what should be backed up.
- **Off-site** - not in the same physical location as your original files.
- **Accessible** - you can easily retrieve your files in the case of data loss.

As few solutions fulfil _all_ these criteria, you also need _multiple_ approaches. Yes, multiple backup solutions are even more boring. This is perhaps overkill for your personal files, but it's essential for important projects. Here's why:

- No backup solution is infallible. Dropbox (and similar tools) are generally reliable, but what happens if your internet goes down? Major syncing errors are rare, but then so are pandemics. Unlikely, but hugely disruptive.
- External drives can become corrupted, especially if you forget to eject them safely (link to other post).
- Emailing the latest version to a friend is convenient, but what happens if she's unavailable when you need it? Or she's accidentally deleted it? And will you remember to send that document when you're exhausted from hammering away at it all day?

Those three solutions are valid as **one part** of your backup strategy.

## The Rule of Three

IT professionals often adopt the 3-2-1 approach to backing up important files. That means **3** copies, **2** different media, and **1** offsite copy.

My own approach is similar. For my big projects, such as books and online courses, that represent months or even years of work, I back up to at least three of the following destinations:

- External drive
- Koofr
- iCloud
- GitHub
- DVD

Let's take a closer look at those locations.

### External drive

When I say "external drive", I mean a dedicated hard drive, not a memory stick. Although memory sticks are convenient, their lifespan can be short. Also, it won't survive an accidental boil wash when you forget to remove it from your trouser pocket.

An external drive is a good idea on a Mac, anyway, as it's much cheaper than upgrading to a bigger internal drive.

What I use my external drive for:

- Personal information that I don't want to share in the cloud.
- Enormous files, such as videos, that would clog up my laptop.
- An additional weekly backup in case one of my other methods fails.

#### Advantages of external drives:

- ✅ **Private** - unlike cloud-based solutions, only you can access that drive.
- ✅ **Portable** - if your laptop expires, you can plug a drive into your new one and keep going.
- ✅ **Large** - thanks to fast transfer speeds, backing up huge files to a drive is much faster than syncing to the cloud.

#### Disadvantages of external drives:

- ❌ They're generally in the same location as your laptop, therefore vulnerable to the same threats, such as fire, theft, or flood.
- ❌ They can become corrupted (especially if you forget to [eject them properly](../how-to-safely-eject-an-external-drive-on-a-mac/)).
- ❌ They have a finite lifespan (3-5 years) - you need to replace them regularly, even if they _seem_ to be working OK.

I think an external drive is a vital component of any backup strategy. Just make sure you buy one from a reputable manufacturer (not the one that Amazon is promoting). If you need to connect to multiple devices or are working with terabytes of data, a NAS (Network Attached Storage) drive might be the answer. This is essentially a server that you connect to through a network. 

### Koofr

I used Dropbox for many years, but it became very expensive for the functionality on offer. [Koofr](https://koofr.eu) is a cheaper alternative, and one that stores your data in Europe (an important consideration for some research projects). Like Dropbox, Koofr allows you to sync documents to cloud-based storage.

What I use it for:

- Automatically syncing everyday files.
- Archiving old projects that no longer live on my laptop. 
- A WebDAV-based music library that I access through my phone (rather than paying Apple £10 a month to listen to my own music).

#### Advantages of Koofr

- ✅ Servers based in Europe with strong encryption and GDPR compliance.
- ✅ Reasonable costs which actually reduce the longer you're a customer (after 5 years, you qualify for a 50% discount).
- ✅ Stores 5 versions of your files for up to 2 years.

#### Disadvantages of Koofr

- ❌ Small company, so less established and resilient than the big players.
- ❌ Fewer third-party integrations.
- ❌ No collaborative editing, like Google Docs.

Although Koofr isn't right for everyone, I think this type of cloud-based solution is essential for maintaining backups in a location separate from your laptop.

### iCloud

The tight integration with Apple devices makes iCloud the easy option. 

What I use it for:

- Storing photos.
- Non-sensitive personal documents, such as recipes and music scores.
- Quickly sharing content with other Apple users.

#### Advantages of iCloud

- ✅ Seamless integration with Apple devices.
- ✅ Automatic selection and syncing of folders.
- ✅ Access from any Apple device or iCloud.com

#### Disadvantages of iCloud

- ❌ You're locked in to the Apple ecosystem.
- ❌ Less granular control over what gets synced and limited version control.
- ❌ Privacy concerns - data is stored in the US and might not comply with GDPR.

Due to the lack of transparency and control over what it's doing, iCloud is the least important part of my backup strategy. I also found that the cost quickly escalates for larger amounts of data.

### GitHub

Once the exclusive domain of nerds like me, GitHub is gaining in popularity as a backup solution - for very specific use cases. It's a cloud-based platform for hosting, storing, and sharing code. Crucially, it's built on the Git version control system.

What I use it for:

- Managing code for my website.
- Archiving slidedecks (which I create with Markdown and Sli.dev).
- Coding projects.

#### Advantages of GitHub

- ✅ True version control - you get complete history of changes; and you can work on multiple versions simultaneously.
- ✅ It's designed for collaboration - dozens of people can work on the same document without causing conflicts. 
- ✅ Distributed backups - every collaborator has their own copy of the project, in addition to the copy held centrally on the GitHub server.

#### Disadvantages of GitHub

- ❌ Steep learning curve and practice to build confidence. Although there are visual tools available, ideally you need to get comfortable with using the command line interface (CLI) on your Mac.
- ❌ Only really works for text files. Not suitable for binary files like videos and large images.
- ❌ Requires active management. You need to remember to commit and push your changes.
- ❌ Privacy considerations, as data stored on owner Microsoft's servers.

As someone who works a lot with code and text-based documents, GitHub is an indispensable part of my backup strategy. But, once a week, I also back up the most important code-based projects to my external drive and Koofr.

### DVD

Yes, this solution feels very twentieth century. However, DVDs are a stable format and easy to store in different places. I bought a second-hand DVD/RW drive for around £30 and a stack of writeable DVDs. Once a month, I copy my most important files to a DVD and put it in a drawer upstairs. It would be much more sensible to store it in a different building, but that requires a level of coordination that's beyond me. This way, at least, I've got my files in an accessible format if my laptop, external drive, and internet connection all conspired against me.

#### Advantages of DVDs

- ✅ DVDs last a long time (10-25 years).
- ✅ Once burned, a DVD can't be accidentally overwritten.
- ✅ Good for privacy - bandits need to know where you've hidden it and have access to a DVD drive.

#### Disadvantages of DVDs

- ❌ It's a manual process, so you need to remember to do it.
- ❌ You need another drive.
- ❌ Slow, and limited capacity. You could use Blu-ray discs instead, although they're more expensive and need another device for creating them.

This solution is a complete pain, but it's reassuring to see a physical disc. I use DVDs for smaller, critical documents, such as legal papers and tax records. I can also use them for client information if I put the disc in a lockable filing cabinet.

## Dedicated Backup Tools

Fortunately, there are some tools that make at least some of these tasks easier. I've tried out two - Time Machine and ChronoSync - and here are my experiences.

### Time Machine

Time Machine is a built-in feature on macOS that automatically backs up your Mac's apps, documents, and photos to an external drive. It creates hourly, daily, and weekly backups, allowing you to go back in time to restore your work.

#### Advantages of Time Machine

- ✅ **Completely automatic** - Runs hourly backups in the background without user intervention.
- ✅ **Full system backup** - Backs up everything, including applications, system files, settings, and user data.
- ✅ **Easy file recovery** - Intuitive interface lets you find lost files.

#### Disadvantages of Time Machine

- ❌ **Single backup location** - Typically backs up to one drive (no automatic multiple destinations) - and this drive can't be used for anything else. If that drive fails, you've lost your backup.
- ❌ **Resource intensive** - Can slow down your Mac during initial backup or when backing up large changes
- ❌ **Unpredictable timing** - It triggers based on file changes, which often coincides with when you're actively using cloud sync services.

The unpredictability and lack of control was a huge issue for me. I found that Time Machine was battling for resources with other apps. This also made me nervous about file conflicts and corruption. Although there are workarounds, such as manually disabling Time Machine during cloud syncing, you have to remember to do that.

In my situation, the disadvantages far outweighed the advantages. I want more control, dammit.

### ChronoSync

For more control, there's [ChronoSync](https://www.econtechnologies.com/chronosync/). This comprehesive app costs $49, but that's a one-off price and includes updates. It fulfils many of the same needs as Time Machine, but you get a lot more control. But with more control comes more configuration. 

How I use it:

- To back up the same files to multiple locations (external drives _and_ cloud storage).
- To schedule daily, weekly, and monthly backups.
- To synchronise multiple folders

#### Advantages of ChronoSync

- ✅ **Precise scheduling control** - set exact times and frequencies for backups (daily, weekly, specific hours)
- ✅ **Selective syncing** - choose specific folders, file types, or use complex rules for what to backup
- ✅ **Multiple destination support** - can backup to several locations simultaneously

#### Disadvantages of ChronoSync

- ❌ Non-intuitive interface (although they're poised to launch a new version).
- ❌ More complex set up and configuration than Time Machine. You need to set up backup jobs, rules, and schedules yourself.
- ❌ You need to monitor the logs to ensure that everything is working as expected.

The configurability makes ChronoSync a clear winner for me. [^1] For a one-off cost of $49, this represents exceptional value. I had to spend a while understanding its ways and fathoming a process that serves my purposes, but I think that's preferable to blindly trusting a more "convenient" solution.

## Devising Your Own Backup Strategy

You'll have different needs from me, so it's important to come up with your own backing up strategy.

Here are some questions to help you reflect on your requirements.

### Frequency

How often do you need to back up different files?

- **Daily?** -  e.g. active research data; writing; notes.
- **Weekly?** - e.g reference materials.
- **Monthly?** - e.g. teaching materials; old projects.

### Version control

Do you need version control?

- **Big projects** - you might want to roll back to previous versions if a big idea doesn't work out.
- **Collaborative projects** - the ability to compare different versions might avoid a lot of arguments.
- **Data retention** - the nature of your project might require an audit trail.

### Privacy and Sensitivity

What are the legal requirements for your project?

- **Location** - does your data need to be stored in the EU?
- **Format** - should you be archiving data in a specific format for an Open Access repository?
- **Retention** - for how long do you need to retain any data or project materials?

For funded projects, you would normally create a dedicated Data Management Plan.

## Testing Your Backup Strategy

It's never a good idea to assume that technology is behaving itself. Once you have a backup strategy in place, it requires monitoring to ensure it's still working.

Here are some tests you can carry out:

- Test the ease of retrieving an important file.
- Verify that backed-up files aren't corrupted.
- Test full restoration (imagine your laptop has been stolen) - can you access all the files you need to keep working without major disruption?

Also consider future-proofing your strategy:

- What happens if your cloud service shuts?
- What happens if you change institutions?
- What happens if you get a new laptop?

Just as you need to schedule your backups, it's important to also schedule time to review the overall strategy.

## Conclusion

There's no such thing as a perfect backup strategy, but retrieving 80% of your files is always preferable to losing all of them.

In summary:

- Don't rely on one solution.
- Make sure your tools aren't in conflict.
- Get a balance between physical and virtual.
- Consider data privacy - who else can access your files?
- Check that you can retrieve your backup easily.

You can always spot someone who's suffered a major data loss - they have an unmistakable spectral quality. Please don't let that be you. Go do it now!

[^1]: I'm not affiliated in any way with ChronoSync - I just think it's a great tool.