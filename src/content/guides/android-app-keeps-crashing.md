---
title: "Android App Keeps Crashing: Fix It Without Losing Data"
seoTitle: "Android App Keeps Crashing? Step-by-Step Fixes"
description: "An Android app that closes, freezes or shows ‘keeps stopping’ can usually be fixed with storage, cache, update and reinstall checks. Back up first."
summary: "An app crash is often a local problem with that app’s data, storage space, or permissions rather than the whole phone. Start with a restart and free storage, then clear cache before clearing data, because clearing data can remove local files and sign-ins."
quickAnswer: "Restart the phone, free storage, and update the app. Then force stop it and clear its cache, not its data. If it still crashes, reinstall the app after checking that your account data is synced. If many apps crash, update Android System WebView and test in safe mode."
category: android-problems
keywords:
  - "android app keeps crashing"
  - "app keeps stopping android"
  - "app has stopped"
  - "android app closes"
  - "app crashing after update"
  - "clear cache android"
symptoms:
  - "An app closes immediately after opening or after a few seconds."
  - "A dialog says the app has stopped or keeps stopping."
  - "The app freezes and the screen goes black before returning to the home screen."
  - "Only one app crashes, while others work normally."
  - "Several apps crash after an Android update."
causes:
  - title: "Corrupted app cache or local data"
    detail: "A partial download, interrupted update, or damaged cache file can make the app fail during startup."
  - title: "Low storage or memory"
    detail: "Apps need free space for temporary files. A nearly full phone can crash apps when they try to write or update."
  - title: "An app update that is incompatible with the phone"
    detail: "A new version may require a newer Android release, more memory, or a permission that is not granted."
  - title: "A system component used by many apps"
    detail: "Android System WebView and Google Play services are used by many apps, so a fault there can make several unrelated apps crash."
  - title: "A permission or account problem"
    detail: "An app that cannot access storage, a sign-in token that has expired, or a restricted background setting can cause it to close."
prep:
  - "Enough free storage for the app and its updates"
  - "Your login details for the app"
  - "A backup or sync of important in-app data"
  - "The app version and the Android version"
safetyNotes:
  - "Clearing app data can delete local files, chats, and sign-ins. Back up or sync before using Clear data."
  - "Install apps only from the official store or the developer’s official site. Sideloaded APKs can be malicious."
  - "Do not disable system apps you do not recognise; some are required by other apps."
faqs:
  - q: "What is the difference between clear cache and clear data?"
    a: "Cache is temporary files the app can rebuild. Clearing it is low risk. Data includes accounts, settings, local messages, and files, so clearing it can sign you out or remove content. Try cache first, and back up before clearing data."
  - q: "Why do several apps crash at once?"
    a: "When many apps fail, the cause is usually a shared component such as Android System WebView, Google Play services, low storage, or a recent system update. Test in safe mode and update the shared components before reinstalling each app."
  - q: "Does reinstalling an app delete my data?"
    a: "Uninstalling usually removes local app data. If the app stores data in your account or cloud, signing in after reinstall may restore it. Check the app’s own backup or export option first, and confirm what will be removed."
  - q: "Can a bad SD card crash apps?"
    a: "Yes. An app moved to a failing or slow SD card can crash or fail to start. Move the app back to internal storage, or remove the card and test. Back up the card before removing it permanently."
  - q: "When should I stop troubleshooting an app?"
    a: "Stop if the app holds important unsynced data, if the phone is hot or the battery is swelling, or if the crash started after a system update and affects core apps. Contact the app developer with the version and error details, or use the phone manufacturer’s support."
related:
  - application-wont-open
  - phone-battery-draining-fast
  - cant-log-in-to-account
  - browser-keeps-crashing
published: 2026-11-15
updated: 2026-11-15
featured: false
difficulty: Beginner
time: "15–40 minutes"
risk: Low
verification: "Open the app, use the feature that used to crash it, and close and reopen it. Then restart the phone and test once more. A fix that only works until the next restart is not complete; note whether the crash returns after an update."
whenToStop: "Stop before clearing data if the app holds unsynced notes, chats, drafts, or files. Back up first or export the data. If many apps crash after a system update, or the phone becomes very hot, stop installing and clearing things and seek manufacturer support."
sources:
  - label: "Google Support: Fix apps that crash on Android"
    url: "https://support.google.com/android/"
  - label: "Google Play Help: App troubleshooting"
    url: "https://support.google.com/googleplay/"
  - label: "Android Developers: App quality"
    url: "https://developer.android.com/quality"
  - label: "Samsung Support: Apps closing or crashing"
    url: "https://www.samsung.com/support/"
---

## Confirm it is the app, not the phone

Open a different app and use it normally. If only one app crashes, the problem is probably local to that app. If several apps crash, look at shared causes such as storage, WebView, or a recent system update.

Note the exact message. “App has stopped” is generic, but a message naming a component, a permission, or a file gives you a better search term.

## Fix the app

### 1. Restart the phone

A restart clears temporary memory and stops stuck background processes. It is the lowest-risk step and sometimes enough after an app update.

### 2. Free storage

Open Settings > Storage and check free space. Aim to keep at least 10% free. Delete old downloads, clear the cache of large media apps, and move photos to a computer or cloud service. Do not delete the Android system folders.

### 3. Update the app and Android

Open the Play Store, find the app, and install any pending update. Then check Settings > System > System update. An app built for a newer Android version may crash on an older one; the store page usually lists the minimum version.

### 4. Force stop and clear cache

Open Settings > Apps > [app] > Storage and choose Clear cache. Then force stop the app and reopen it. This removes temporary files without signing you out.

If the app still crashes, you can try Clear data, but read the warning first. It can remove local messages, drafts, and accounts. Back up anything important before you continue.

### 5. Check permissions

Open the app’s permissions and confirm that storage, camera, microphone, or location access matches what the app needs. A denied permission should produce a message rather than a crash, but some apps handle it badly. Grant only the permissions you are comfortable with.

### 6. Reinstall the app

Uninstall the app, restart the phone, and install it again from the official store. This replaces damaged app files. Sign in and check whether your data returns from the account or cloud. If the app stores data only on the phone, export it first.

## If the app still crashes

- **Update Android System WebView and Google Play services** from the Play Store. Many apps rely on them, and an outdated component can cause crashes across several apps.
- **Boot into safe mode** to disable third-party apps temporarily. If the crashing app works in safe mode, another installed app may be interfering.
- **Move the app off the SD card** if it is stored there. A slow or failing card can cause crashes and data loss.
- **Check the app’s reviews and support page** for a known issue with your phone model or Android version.
- **Contact the developer** with the app version, Android version, phone model, and the exact steps that trigger the crash.

> [!WARNING]
> Do not install modified APKs or “cracked” versions of an app to work around a crash. They can contain malware, and they often break account security. Use the official store or the developer’s signed download.

## Confirm the fix

Use the app for the task that used to crash it, then restart the phone and test again. If the crash only happens with one feature, report that detail to the developer. If it returns after an app update, the new version is the likely cause; check whether a rollback or a fix is available.
