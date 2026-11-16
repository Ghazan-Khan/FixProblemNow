---
title: "Browser Keeps Crashing: Fix Tabs That Close Themselves"
seoTitle: "Browser Keeps Crashing? Fix Chrome, Edge, Firefox, Safari"
description: "Stop a browser that crashes, freezes or closes tabs. Test extensions, hardware acceleration, cache and memory before reinstalling or resetting anything."
summary: "A crashing browser can be caused by one bad extension, a graphics driver conflict, low memory, corrupted profile data, or a specific website. Test in a fresh profile or private window to separate the browser from your setup."
quickAnswer: "Update the browser and restart it. Open a private or incognito window; if that is stable, an extension or profile problem is likely. Disable extensions one at a time, clear cache, and test with hardware acceleration off. If it still crashes, check memory and disk space, then create a new profile or reinstall."
category: browser-problems
keywords:
  - "browser keeps crashing"
  - "chrome keeps crashing"
  - "edge crashing"
  - "firefox crashes"
  - "safari keeps crashing"
  - "browser closes tabs"
symptoms:
  - "The browser closes suddenly, often when opening several tabs."
  - "A tab shows ‘Aw, Snap’ or the page crashes while others survive."
  - "The browser freezes and must be force-closed."
  - "Crashes happen only on a specific site or after a browser update."
  - "The whole computer slows down before the browser closes."
causes:
  - title: "A faulty extension or add-on"
    detail: "One extension can crash the browser’s renderer or conflict with a site, especially after an update."
  - title: "Graphics driver or hardware acceleration conflict"
    detail: "Hardware acceleration can cause crashes or flickering on some graphics drivers and older devices."
  - title: "Low memory or a full disk"
    detail: "Many tabs, large web apps, and a small amount of RAM can exhaust memory. A full disk can prevent the browser from writing cache and crash data."
  - title: "Corrupted profile or cache data"
    detail: "Damaged history, cache, or preference files can cause crashes that survive restarts."
  - title: "A specific website or malware"
    detail: "A heavy or malicious page can crash a tab, and unwanted software can inject content into every page."
prep:
  - "The browser name and version"
  - "The operating-system version"
  - "A note of which sites or actions trigger the crash"
  - "Enough free disk space for cache and updates"
safetyNotes:
  - "Download browsers and extensions only from official stores and developer sites."
  - "Do not install “browser cleaner” or “speed booster” tools that request broad permissions."
  - "Do not disable antivirus or operating-system security to stop a crash."
faqs:
  - q: "How does a private window help diagnose a crash?"
    a: "A private window usually disables extensions and starts without your normal session data. If it is stable, an extension, cookie, or profile setting is likely. If it also crashes, the problem is more likely the browser installation, graphics driver, or memory."
  - q: "Which extension should I disable first?"
    a: "Start with extensions you installed or updated around the time the crashes began, especially ad blockers, download managers, VPNs, and security add-ons. Disable all of them, then re-enable one at a time and test the site that used to crash."
  - q: "Should I turn off hardware acceleration?"
    a: "It is a useful test if crashes involve flickering, video, or the whole screen. If disabling it fixes the crash, update the graphics driver from the manufacturer and then try re-enabling acceleration. Leaving it off is acceptable if the browser feels fast enough."
  - q: "Will clearing cache log me out of websites?"
    a: "Clearing cookies logs you out. Clearing only cached files and images usually does not. Choose the narrower option first, and keep passwords in a password manager so you can sign in again."
  - q: "When should I reinstall the browser?"
    a: "Reinstall after trying a new profile, disabling extensions, and checking memory and disk. Uninstall, restart, and install the latest version from the official site. Your bookmarks and passwords may sync if you are signed in; export them first if you are not."
related:
  - application-wont-open
  - computer-running-slow
  - software-installation-failed
  - phone-battery-draining-fast
published: 2026-11-15
updated: 2026-11-15
featured: false
difficulty: Beginner
time: "15–40 minutes"
risk: Low
verification: "Use the browser for the sites and tab count that used to crash it, for at least 15 minutes. Test a private window and a normal window. A fix should keep tabs open through a restart and a return to the same site."
whenToStop: "Stop if the computer crashes or restarts along with the browser, if you see disk errors, or if the machine becomes very hot. Those point to hardware or system problems, not the browser. Back up important data before reinstalling or resetting a profile."
sources:
  - label: "Google Chrome Help: Fix crashes"
    url: "https://support.google.com/chrome/"
  - label: "Microsoft Edge Support"
    url: "https://support.microsoft.com/microsoft-edge"
  - label: "Mozilla Support: Firefox crashes"
    url: "https://support.mozilla.org/"
  - label: "Apple Support: Safari"
    url: "https://support.apple.com/guide/safari/"
---

## Narrow the cause with a private window

Open a private or incognito window and use the browser normally for a few minutes, including the site that crashes.

- **Private window is stable:** an extension, cookie, or profile setting is likely.
- **Private window also crashes:** the browser installation, graphics driver, memory, or disk is more likely.

This one test saves the most time.

## Fix extensions and profile data

### 1. Update the browser and operating system

Install the latest browser and OS updates. A crash after an update is often fixed by the next patch. Restart the computer after updating.

### 2. Disable extensions

Open the extensions page and disable all extensions. Test the site. If it is stable, re-enable them in small groups, then one at a time, until the crash returns. Remove the extension that causes it and look for an alternative.

### 3. Clear cache and cookies carefully

Clear cached files and images first. If the crash persists, clear cookies for the affected site only. Clearing all cookies signs you out everywhere, so keep passwords available.

### 4. Check hardware acceleration

Open the browser’s settings and turn off hardware acceleration if the option exists. Restart the browser and test video and scrolling. If this fixes it, update the graphics driver from the computer manufacturer and try re-enabling acceleration.

### 5. Create a new profile

A new browser profile starts without extensions, cache, or settings. If it is stable, the old profile is damaged. Move bookmarks and passwords across, then remove the old profile when you are satisfied.

## Check the system

### 6. Free memory and disk space

Close unused tabs and apps. Check Task Manager or Activity Monitor for memory pressure. Keep at least 10–15% of the system drive free. A browser needs disk space for cache, updates, and crash recovery.

### 7. Scan for unwanted software

Run a scan with the built-in security tool. Unwanted software can inject ads or scripts into pages and cause crashes. Remove unfamiliar extensions, search engines, and programs.

### 8. Reinstall the browser

Uninstall the browser, restart, and install the latest version from the official site. Export bookmarks and confirm your password manager or sync before removing the old installation.

## If crashes continue

- **Test another browser.** If only one browser crashes, the issue is that browser’s installation or profile. If all browsers crash, the system, graphics driver, or hardware is more likely.
- **Check the graphics driver** and update it from the laptop or graphics-card manufacturer.
- **Run a memory and disk check** if the whole computer misbehaves, not just the browser.
- **Report the crash** to the browser developer with the version and the site that triggers it.

> [!WARNING]
> Do not install browser “repair” tools or extensions that ask to read and change all your data on every site. They can steal sessions and passwords. Use the browser’s own reset and reinstall options.

## Confirm the fix

Reopen the sites and tabs that used to crash, use the browser for 15 minutes, and restart it. If the crash returns only with one extension enabled or one site open, you have found the trigger and can decide whether to keep it.
