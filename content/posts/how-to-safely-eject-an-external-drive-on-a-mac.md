---
date: "2025-10-10T09:14:09+01:00"
draft: false
title: "How to Safely Eject an External Drive on a Mac"
tags: ["Mac Tips"]
categories: ["Technology"] 
description: "Fix the 'Disk Not Ejected Properly' error on Mac with Jettison. Learn why safe ejection matters for external drives and how to automate it to prevent data loss and corruption."
keywords: ["disk not ejected properly", "Mac external drive error", "safely eject external drive Mac", "Jettison app", "Mac backup drive", "prevent data corruption", "macOS sleep external drive", "automatic drive ejection", "Mac M2 external drive issues"]
ShowToc: true
tocOpen: true  
---

When I replaced my MacBook recently, it suddenly started shrieking "Disk Not Ejected Properly" every time I wakened it from its slumbers. As the disk is my external backup drive, I felt nervous.

My previous MacBook (an M3) handled the ejection without any problems; my replacement M2 has other ideas.[^1]

Sometimes the error is triggered by the length of time it takes the drive to respond, rather than failing to eject safely. Either way, the risks are the same.

## Why is it important to eject external devices safely?

Ejecting safely is important because it:

- **Prevents data loss** - your Mac might be holding data in a temporary memory buffer (or write cache) to improve performance. Ejecting the drive tells your computer to hurry up and finish transferring this data to permanent storage.
- **Avoids data corruption** - if you disconnect a drive while it's writing data, the file - or even the entire file system - can become corrupted. Then your drive is unreadable 🙀 This is especially unfortunate if you're using it as a backup.
- **Protects the device's firmware** - in _rare_ cases, an unexpected disconnect corrupts the internal firmware that manages the drive. Then the drive is effectively useless.

## What can you do to eject a drive safely?

### Buy a newer device

Inevitably, many of the search results told me to bin my perfectly good external drive and buy a new one. While newer devices might handle ejection better, there's no guarantee.

Some drives include their own power management, which can interfere with the macOS sleep/wake cycles - so a new drive might not solve the problem. I'm a nerd, but even I can't face researching _those_ issues.

### Remember to eject the drive manually

Theoretically, you could right-click the drive on your desktop and select "Eject", but who's going to do that consistently? Not me, certainly.

### Install an app that manages ejection for you

The most elegant solution I found was an [app called Jettison](https://www.stclairsoft.com/Jettison/). For around $10, Jettison safely ejects any external drives when your Mac goes to sleep or you close the lid. You can decide which drives it controls, and there's also a manual override with configurable hotkeys.

{{< img src="images/jettison.jpg" alt="Screenshot of Jettison" caption="Jettison settings" center="true" >}}

The app was easy to install (I can't remember doing it, which is always a good sign) and it's a one-off cost. No recurring payments for the rest of time.

## Conclusion

I've been using Jettison for a couple of months now. It runs in the background, quietly and unobtrusively. My drive is safely ejected each time and I never have to think about it. Bliss. 

[^1]: I returned the M3 when I left my job. For financial and environmental reasons, I bought a refurbished M2 from the excellent [MacFinder](https://www.macfinder.co.uk).

---

_I'm not affiliated in any way with either Jettison or MacFinder - I'm just a happy customer of both._