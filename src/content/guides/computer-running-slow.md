---
title: "Computer Running Slow? Fix the Cause, Not Just the Symptom"
seoTitle: "Slow Computer? 9 Fixes That Actually Help"
description: "Find out why a computer is slow: startup apps, full storage, updates, heat, failing drives and background processes. Safe steps for Windows and macOS."
summary: "A slow computer is usually waiting on something: a full drive, too many startup apps, a failing disk, thermal throttling, or a process using all the memory. Measure first, then fix the bottleneck."
quickAnswer: "Open Task Manager or Activity Monitor and note which resource stays near 100%. Free at least 10–15% of the system drive, remove unnecessary startup apps, install pending updates, and check drive health. If the slowdown started after a specific change, undo that change first."
category: computer-problems
keywords:
  - "computer running slow"
  - "laptop slow"
  - "pc slow after update"
  - "computer slow to start"
  - "high disk usage"
  - "computer lagging"
symptoms:
  - "Windows or macOS takes minutes to reach the desktop."
  - "Apps pause, spin, or become unresponsive during ordinary tasks."
  - "The fan runs constantly and the case feels hot."
  - "Disk usage stays at or near 100% in Task Manager."
  - "The computer was fast before a recent update or new software."
causes:
  - title: "Startup apps and background processes"
    detail: "Cloud sync, chat apps, game launchers, and updaters can start with the computer and compete for disk, memory, and CPU."
  - title: "Storage nearly full or failing"
    detail: "A drive needs free space for temporary files and updates. A failing drive can also become extremely slow before it fails completely."
  - title: "Too little memory for the workload"
    detail: "When RAM is exhausted, the system swaps data to disk, which makes switching apps and opening files feel sluggish."
  - title: "Thermal throttling"
    detail: "Dust, a blocked vent, or a worn fan can cause the processor to reduce speed to protect itself."
  - title: "Malware, browser extensions, or a runaway process"
    detail: "An unwanted program or extension can consume resources continuously, even when you are not using it."
prep:
  - "Administrator access on the computer"
  - "At least 10–15% free space on the system drive"
  - "A backup of important files before any cleanup or repair"
  - "The date the slowdown started and any recent changes"
safetyNotes:
  - "Back up important files before deleting large folders, changing partitions, or running disk repair tools."
  - "Do not use registry cleaners or “one-click speed booster” downloads. They rarely help and can damage the system."
  - "Do not open the case of a laptop or all-in-one unless the manufacturer documents the procedure."
faqs:
  - q: "Will deleting temporary files speed up my computer?"
    a: "It can help when the drive is nearly full or the temporary folder is enormous, but it is not a cure for a CPU or memory bottleneck. Use the built-in Disk Cleanup or Storage settings, review what will be removed, and keep at least 10–15% of the system drive free."
  - q: "How much RAM do I need?"
    a: "For general browsing, email, and documents, 8 GB is a practical minimum on Windows and macOS. Heavy multitasking, large spreadsheets, photo editing, or virtual machines benefit from 16 GB or more. Check the manufacturer’s supported maximum before buying an upgrade."
  - q: "Does a factory reset make a slow computer fast again?"
    a: "It can remove accumulated software problems, but it also erases apps and local data. Exhaust non-destructive fixes first, confirm your backup, and treat a reset as a last resort. If the drive is failing or the cooling system is blocked, a reset will not fix the hardware."
  - q: "Why is disk usage at 100% after startup?"
    a: "Windows may be indexing files, installing updates, or running a maintenance task. Let the computer finish and check again. If it stays at 100% for hours, check for a failing drive, a stuck update, or a background service using the disk."
  - q: "When is a slow computer a hardware repair?"
    a: "Persistent disk errors, clicking noises, overheating at idle, swollen batteries, or memory errors point to hardware. Back up data immediately and have the machine diagnosed. Do not keep running a drive that is making mechanical noises."
related:
  - computer-freezing-randomly
  - computer-black-screen
  - windows-update-failed
  - laptop-wont-turn-on
published: 2026-11-15
updated: 2026-11-15
featured: true
difficulty: Beginner
time: "30–60 minutes"
risk: Low
verification: "After the changes, restart the computer and time how long it takes to reach a usable desktop. Open the apps you normally use and check Task Manager or Activity Monitor again. The goal is not an empty resource graph; it is a computer that responds without prolonged waits at the same workload."
whenToStop: "Stop and back up immediately if you hear clicking or grinding from the drive, see disk or memory errors, smell burning, or notice the case becoming unusually hot. Do not open a power supply or a sealed laptop. If the slowdown persists with a clean startup and adequate free space, have the storage and cooling system checked by a technician."
sources:
  - label: "Microsoft Support: Tips to improve PC performance"
    url: "https://support.microsoft.com/windows/tips-to-improve-pc-performance-in-windows-b3b3ef5b-5953-fb6a-2528-4bbed82fba96"
  - label: "Microsoft Support: Windows startup apps"
    url: "https://support.microsoft.com/windows/configure-startup-applications-in-windows-115a420a-0bff-4a6f-90e0-1934c844e473"
  - label: "Apple Support: Speed up your Mac"
    url: "https://support.apple.com/guide/mac-help/speed-up-your-mac-mchlp2898/mac"
  - label: "Apple Support: Check your Mac's storage"
    url: "https://support.apple.com/guide/mac-help/check-storage-mchlp1116/mac"
---

## Measure before you change anything

“Slow” can mean slow to start, slow to open apps, slow to browse, or slow at everything. The fix differs. Open the built-in resource monitor and watch it during the slow task.

- **Windows:** press `Ctrl + Shift + Esc` to open Task Manager, then look at CPU, Memory, Disk, and Network. Sort each column to find the process at the top.
- **macOS:** open Activity Monitor from Applications > Utilities and check CPU, Memory, Energy, and Disk.

Write down the process name and the resource that stays near 100%. If one app is responsible, start there. If disk usage is pinned but no app explains it, check storage health and pending updates.

## Free up the bottleneck

### 1. Keep at least 10–15% of the system drive free

A nearly full drive leaves little room for temporary files, updates, and virtual memory. Use the built-in tools rather than deleting folders at random:

- **Windows:** Settings > System > Storage > Cleanup recommendations, then review each category.
- **macOS:** Apple menu > System Settings > General > Storage, then review recommendations and large files.

Empty the Recycle Bin or Trash after reviewing it. Do not delete the Windows, System, or Library folders to make space.

### 2. Review startup apps

Disable apps you do not need at login. This reduces the rush of disk and CPU activity during the first few minutes.

- **Windows:** Settings > Apps > Startup, or Task Manager > Startup apps.
- **macOS:** System Settings > General > Login Items.

Disable rather than uninstall. If an app is needed later, it can usually be started manually or re-enabled. Cloud storage and security software may legitimately need to start with the system; check before disabling them.

### 3. Install pending updates and restart properly

A pending update can leave background servicing tasks running for hours. Install operating-system updates, restart, and let the computer settle. On Windows, check Windows Update. On a Mac, check System Settings > General > Software Update.

If the slowdown began immediately after an update, look for a rollback or uninstall option for that update, or check the manufacturer’s support notes.

### 4. Check drive health

A failing drive can make every action slow while still showing no obvious error.

- **Windows:** open File Explorer, right-click the system drive, choose Properties > Tools > Check. Also check the drive manufacturer’s health utility if one is installed.
- **macOS:** open Disk Utility and run First Aid on the startup disk.

If either tool reports errors that cannot be repaired, stop using the drive for important work and back up immediately.

### 5. Look for heat and dust

Listen for a fan that runs constantly or sounds strained. Keep vents clear, use the computer on a hard surface, and clean external vents with a soft brush or compressed air according to the manufacturer’s instructions. Do not blow air into a laptop fan at close range; it can spin the fan too fast or push dust deeper.

If the computer is hot at idle and the fan is silent, the cooling system may need service. Thermal throttling makes a healthy processor behave like a slow one.

### 6. Check memory pressure

If memory is consistently above 80–90% with normal apps, close unused browser tabs and background apps, then test again. A browser with dozens of tabs can use more memory than a photo editor.

If the computer supports a memory upgrade and you are comfortable doing it, follow the manufacturer’s instructions for the exact model. Otherwise, ask a technician.

## If those steps do not work

- **Run a full malware scan** with the built-in Windows Security or a reputable security tool. Do not install multiple real-time scanners at once.
- **Create a clean startup** by disabling third-party startup items and services temporarily. If the computer becomes fast, re-enable them in small groups to find the culprit.
- **Check browser extensions** and remove ones you do not recognise. A single extension can slow every page.
- **Test with a new user profile.** A corrupted profile can carry bad settings that survive normal cleanup.
- **Consider a reset or reinstall** only after a backup. If the fresh system is still slow, the problem is hardware or firmware, not accumulated software.

> [!TIP]
> Change one category at a time — storage, startup apps, updates, heat — and test after each change. If you change five things at once, you will not know which one helped or which one caused a new problem.

## A realistic expectation

Older computers can be improved, but they cannot be made new. A machine with a mechanical hard drive will feel dramatically better with an SSD, and a machine with 4 GB of RAM may remain limited no matter how much software you remove. Compare the cost of an upgrade with the cost of a replacement before spending on parts.
