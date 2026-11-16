---
title: "Windows Update Failed? Fix the Error Without Breaking Windows"
seoTitle: "Windows Update Failed? Step-by-Step Repair Guide"
description: "Fix a Windows update that fails, rolls back or gets stuck. Check space, date, services and update components before using a repair upgrade."
summary: "Most failed Windows updates are caused by low disk space, a damaged update cache, a service that is not running, or a driver conflict. Work through the supported repair tools before considering a reset or reinstall."
quickAnswer: "Restart the PC, free at least 10 GB on the system drive, check the date and time, then run the Windows Update Troubleshooter. If the same update still fails, reset the Windows Update components from an administrator prompt, run SFC and DISM, and try the update again."
category: windows-problems
keywords:
  - "windows update failed"
  - "windows update stuck"
  - "windows update error"
  - "update rolls back"
  - "windows 11 update failed"
  - "windows 10 update failed"
symptoms:
  - "Windows Update shows a red error code or Failed to install."
  - "The update reaches a percentage, then restarts and rolls back."
  - "The update stays at the same percentage for hours with no disk activity."
  - "Windows Update cannot connect or the update service will not start."
  - "A feature update fails repeatedly with the same error."
causes:
  - title: "Not enough free disk space"
    detail: "Feature updates need room for downloaded files, a working copy, and rollback data. A nearly full drive can fail before installation starts."
  - title: "Damaged update cache or component store"
    detail: "Interrupted downloads and corrupted update files can make the same update fail every time."
  - title: "Update services stopped or misconfigured"
    detail: "Windows Update, Background Intelligent Transfer Service, and related services must be running and able to reach Microsoft."
  - title: "Driver or software conflict"
    detail: "An incompatible antivirus filter, storage driver, or device driver can block a feature update during the migration phase."
  - title: "Managed-device policy or network restriction"
    detail: "A work or school device may be configured to use an internal update server that is unavailable, or a firewall may block the download."
prep:
  - "At least 10–15 GB free on the system drive"
  - "Administrator access"
  - "A backup of important files, especially before a feature update"
  - "The exact error code, if one is shown"
  - "The Windows edition and version from Settings > System > About"
safetyNotes:
  - "Back up important files before a feature update or an in-place repair. Updates can fail in ways that make files temporarily inaccessible."
  - "Do not download Windows update repair tools from unofficial sites. Use Microsoft’s built-in tools and official download pages."
  - "On a work or school device, contact the administrator before changing update services or policies."
faqs:
  - q: "How much free space does a Windows update need?"
    a: "Microsoft recommends keeping a significant amount of free space for feature updates, and a practical target is at least 10–15 GB on the system drive. Cumulative updates need less, but a nearly full drive can still prevent installation and rollback."
  - q: "Is it safe to reset the Windows Update components?"
    a: "The supported procedure stops update services, renames the download cache, and restarts the services. It does not delete your documents. It can remove pending update downloads, which will be downloaded again. Follow Microsoft’s current instructions and use an administrator prompt."
  - q: "Will System Restore fix a failed update?"
    a: "It can return the system to a point before the update if a restore point exists and the update did not complete. It is not a substitute for a backup, and it may remove apps or drivers installed after the restore point. Check what will be affected before restoring."
  - q: "Should I use a third-party update repair tool?"
    a: "No. Most update failures can be diagnosed with Windows Update settings, the built-in troubleshooter, and Microsoft’s documented component reset. Third-party tools can change services or registry settings in ways that are difficult to reverse."
  - q: "When should I stop trying to install the update?"
    a: "Stop if the PC cannot boot, the update fails with a hardware or disk error, or the same feature update rolls back repeatedly after supported repairs. Use Microsoft’s installation assistant or an in-place repair, and have a backup ready. A failing drive should be replaced, not updated."
related:
  - windows-blue-screen-errors
  - computer-running-slow
  - computer-freezing-randomly
  - application-wont-open
published: 2026-11-15
updated: 2026-11-15
featured: true
difficulty: Intermediate
time: "30–75 minutes"
risk: Moderate
verification: "Open Windows Update and confirm that the update shows as successfully installed, then restart and check Settings > System > About for the expected version and build. Run Windows Update again to confirm there are no pending restarts or repeated failures, and use the PC normally for a day before assuming the update is stable."
whenToStop: "Stop if the computer cannot start after the update, shows a disk or memory error, or reports that the update is not applicable to your hardware. Do not force power off during an update unless the screen has been frozen for an extended period and the manufacturer or Microsoft instructs it. If a drive is failing, back up and replace it rather than retrying the update."
sources:
  - label: "Microsoft Support: Troubleshoot problems updating Windows"
    url: "https://support.microsoft.com/windows/troubleshoot-problems-updating-windows-188c2b0f-10a7-d72f-65b8-32d177eb136c"
  - label: "Microsoft Learn: Reset Windows Update components"
    url: "https://learn.microsoft.com/troubleshoot/windows-client/installing-updates-features-roles/reset-windows-update-components"
  - label: "Microsoft Support: Windows Update FAQ"
    url: "https://support.microsoft.com/windows/windows-update-faq-8a903416-6f45-0718-f5c7-375e92dddeb2"
  - label: "Microsoft: Download Windows 11"
    url: "https://www.microsoft.com/software-download/windows11"
---

## Start with the simple blockers

### 1. Read the error code and note the update name

Open Settings > Windows Update and look for the error code, such as `0x80070070`, `0x800f0922`, or `0x80073712`. Note the exact update name and whether it is a cumulative update, a feature update, or a driver update. The code narrows the cause, and you will need it if you contact Microsoft or your administrator.

### 2. Restart and retry once

A pending restart can leave the update in a failed state. Restart the computer through Start > Power > Restart, not by holding the power button. Then open Windows Update and select Retry. If the same update fails at the same point, move on rather than repeating the same action.

### 3. Free space on the system drive

Open Settings > System > Storage and review Cleanup recommendations. Empty the Recycle Bin, remove old downloads, and move large personal files to another drive. Do not delete the Windows folder or system files.

If the drive is small, connect an external drive and move photos, videos, or archives off the system drive. Keep at least 10–15 GB free before a feature update.

### 4. Check date, time, and network

An incorrect system clock can break secure connections to update servers. Set the time automatically in Settings > Time & language > Date & time. Then check that the computer can reach other websites. A captive portal, VPN, or firewall can block Windows Update even when browsing works. Disconnect the VPN and retry.

### 5. Run the Windows Update Troubleshooter

Go to Settings > System > Troubleshooters > Other troubleshooters and run Windows Update. On Windows 10, the path is Settings > Update & Security > Troubleshoot. Let the tool finish and apply any fixes it offers, then retry the update.

## Repair the update components

### 6. Reset the Windows Update cache

If the troubleshooter does not help, use Microsoft’s documented component reset. Open an administrator Command Prompt or PowerShell, and run the commands in the order Microsoft lists. The sequence typically stops the update services, renames the `SoftwareDistribution` and `catroot2` folders, and restarts the services.

Do not copy a random command list from a forum. Use the current Microsoft Learn procedure linked in the sources. Renaming the folders removes cached downloads; Windows recreates them automatically. Your documents and apps are not removed.

### 7. Run SFC and DISM

Open an administrator prompt and run:

```
sfc /scannow
```

Then run:

```
DISM /Online /Cleanup-Image /RestoreHealth
```

The first checks and repairs protected system files. The second repairs the component store that Windows Update uses. Both can take several minutes. Restart after they finish, then retry the update.

### 8. Check for a driver or software conflict

If the update fails during the migration phase, a third-party antivirus, storage filter driver, or older device driver may be interfering. Temporarily uninstall or update the conflicting software using the manufacturer’s removal tool, then retry. Do not disable security software permanently, and do not remove a driver you cannot reinstall.

On a work or school device, stop here and contact the administrator. Group Policy or an internal update server may be blocking the update by design.

## If the update still fails

- **Use the official installation assistant.** For a Windows 11 feature update, Microsoft’s installation assistant can bypass some update-service problems while keeping files and apps. Download it only from Microsoft’s Windows 11 page.
- **Try an in-place repair upgrade.** Mount the official Windows ISO, run `setup.exe` from within Windows, and choose to keep files, settings, and apps. This repairs the operating system while preserving data, but it is a significant step: back up first and confirm the edition matches.
- **Check the update catalog.** A specific cumulative update may be available as a standalone package from the Microsoft Update Catalog. Install only the package that matches your Windows version and architecture.
- **Look for a known issue.** Search the exact error code together with the update number on Microsoft’s release health page. A documented block may mean the correct action is to wait for a fix, not to force the update.

> [!WARNING]
> Do not use a “Windows update repair” tool from an unofficial download site, and do not disable Windows Update permanently. If an update is genuinely blocked by a known issue, Microsoft or your administrator will publish the supported workaround.

## Confirm the result

After a successful update, open Windows Update and check that no restart is pending. Then restart normally, confirm the version in Settings > System > About, and use the computer for a day. If a new driver or app stops working after the update, roll back that driver or reinstall the app rather than uninstalling the update immediately.
