---
date: "2026-02-02T08:15:09Z"
draft: false
title: "How to Push to GitHub and GitLab Simultaneously"
tags: ["DevOps", "Tutorials"]
categories: ["Technology"] 
description: "Learn how to push git commits to both GitHub and GitLab simultaneously using multiple remote URLs. A simple backup strategy for your repositories with step-by-step instructions."
keywords: ["git multiple remotes", "github gitlab backup", "git push two repositories", "git remote configuration", "repository backup strategy"]
ShowToc: true
tocOpen: true  
---

I'm trying to follow a [self-imposed rule of backing up important work](../a-catastrophists-guide-to-backing-up-a-mac/) to at least three places. Given much of what I do is text-based, online git repositories are an obvious choice. But what if one of them suffers a DOS attack? Or tomfoolery around data protection and tariffs means it becomes unavailable in specific regions? I resolved to push my commits to _both_ GitHub and GitLab. 

Initially, I tried [GitLab's mirroring](https://docs.gitlab.com/user/project/repository/mirror/) to automatically pull all my changes from my GitHub repo. Although this works perfectly with public repos, it was a lot more fiddly with private repos. I definitely didn't want a manual process or one that involved configuring additional passwords.

In this post, I'll share the solution that worked for me.

For this to work, you need:

- An existing local git repository
- A GitHub repo with remote configured
- A GitLab account
- [SSH keys for authentication with both GitHub and GitLab](https://gist.github.com/marcoandre1/4b0fbca83104e08d3e729a25a0cba4eb)

💡 I use the [GitHub](https://cli.github.com/) and [GitLab CLI](https://gitlab.com/gitlab-org/cli) tools, each with their own SSH key. This way, you can create repos from the command line, rather than having to go the the website. If you use Homebrew, you can install them with `brew install gh` and `brew install glab` respectively.

## Step 1 - Check current remote configuration

It's always a good idea to check the current git settings with this command:

`git remote -v`

Here's what I see:

```
origin	git@github.com:catherinepope/git-demo.git (fetch)
origin	git@github.com:catherinepope/git-demo.git (push)
```

My local git repo has remote origins on GitHub for both fetching and pushing.

## Step 2 - Create a GitLab repo

If you haven't done so already, create a corresponding repo on GitLab. You can do this either through GitLab.com or with the glab CLI tool. Here's the glab command:

`glab repo create git-demo`

It doesn't have to be the same name, but it's just easier if everything matches.

## Step 3 - Add GitLab as a Push destination

To add GitLab as a `push` destination, use the following command (updating with your username and repo name):

`git remote set-url --add --push origin git@gitlab.com:username/repo-name.git`

⚠️ This _replaces_ the GitHub remote, so you need to restore it:

`git remote set-url --add --push origin git@github.com:username/repo-name.git`

## Step 4 - Verify your configuration

Run the `git remote -v` command again to check everything is configured as expected.

You should see:

- One `fetch` URL (GitHub)
- Two `push` URls (GitLab and GitHub)

Here's what mine looks like:

```
origin	git@github.com:catherinepope/git-demo.git (fetch)
origin	git@gitlab.com:catherinepope/git-demo.git (push)
origin	git@github.com:catherinepope/git-demo.git (push)
```

## Step 5 - Test the setup

Now for the moment of truth. Use the `push` command to push to both remote repositories simultaneously:

`git push origin main` 

You should see that both your GitHub and GitLab repos are updated. 

How this works:

- `git fetch` and `git pull` only fetch from GitHub (the primary URL)
- `git push origin` pushes to both GitLab and GitHub
- Both repositories stay in sync with each push

If it hasn't worked, run `git remote -v` again and check for typos in the URLs. I'm incapable of typing them correctly the first time.

## Conclusion

There are possibly more elegant solutions, but this approach suited my purposes perfectly. With the CLI tools, it takes under a minute to create the repos in two places and add the remotes. Provided, of course, that I type all the details properly ☺️


