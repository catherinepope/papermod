---
date: "2025-09-19T10:12:42+01:00"
draft: false
title: "How to Keep Your Mac Awake"
tags: ["Mac Tips"]
categories: ["Technology"] 
description: "Learn two simple solutions to prevent your Mac from going to sleep during long file transfers. Use the built-in caffeinate command or the free Amphetamine app to keep your MacBook awake for hours without changing system settings."
keywords: ["mac sleep prevention", "caffeinate command", "amphetamine app", "macos terminal", "prevent mac sleep", "mac file transfer", "macbook stay awake", "mac power settings", "terminal commands mac", "mac productivity tools", "stop mac sleeping", "macos utilities"]
ShowToc: true
tocOpen: true  
---

Recently, I need to transfer some humongous video files, with a estimated time of 16 hours 😳 Every time I turned my back for a moment, my MacBook immediately went to sleep and cancelled the transfer. No amount of swearing or fiddling with the settings solved the problem. Has anyone actually counted the number of power and sleep settings in MacOS? Anyway, finally, I found two neat solutions to this problem, both of which involve stimulants.

## Solution 1: Caffeinate

Initially, I couldn't believe the simplicity of this solution that's hidden in MacOS. Just open your terminal and type `caffeinate` at the prompt. Yes, quite. You're giving your Mac a shot of espresso ☕️ If you're unfamiliar with the Terminal, the easiest way to open is to press Cmd + Space, type "terminal" in the Spotlight search box, then press Enter.

Once the window has popped up, type `caffeinate` at the prompt.

While the window is open, your Mac won't go to sleep. When you've finished, click inside the terminal window and press Ctrl + c. Once you've confirmed any warning messages, the window closes and your Mac can enjoy a well-earned rest.

⚠️ Make sure your laptop is plugged in or your battery is fully charged.

If you have a rough idea of how long your data transfer is going to take, you can set a timer for the `caffeinate` command. This is specified with `-t` and the number of seconds. One hour would be 3600 (60 x 60). Here's the command:

`caffeinate -t 3600`

If you're reading a long document on screen, you can also specify that just the display remains awake by adding the `-d` flag:

`caffeinate -d -t 3600`

Closing the terminal stops `caffeinate`.

## Solution 2: Amphetamine

[Amphetamine](https://amphetamine.macupdate.com/) is a free third-party app that gives you more flexibility and a friendly interface. Once installed, you'll see a pill icon in your toolbar. From there, you can specify the duration, or ask it to keep your Mac awake while an app is running or a specific file is downloading.

{{< img src="images/amphetamine.jpg" alt="Screenshot of Amphetamine app" caption="Amphetamine app" center="true" >}}

This app from William Gustafson is simple to use and very effective.

## Conclusion

Either method saves you trying to remember what on earth you did with your power and display settings. Those settings are useful for your day-to-day energy management, but `caffeinate` and Amphetamine are better for temporary needs.

Don't forget, though: just like you, your Mac needs a rest sometimes.

