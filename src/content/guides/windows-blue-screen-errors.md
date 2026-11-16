---
title: "Blue Screen Errors: Read the Stop Code and Recover Windows"
seoTitle: "Blue Screen of Death? Read the Stop Code and Fix It"
description: "A blue screen is a protective shutdown, not a diagnosis. Note the stop code, check recent changes, test storage and memory, and recover without losing data."
summary: "Windows stops itself when it detects a condition it cannot safely continue from. The stop code and the recent changes are the two strongest clues, so record them before trying repairs."
quickAnswer: "Photograph the stop code and any file name on the blue screen. Restart and note whether it happens once, repeatedly, or only under load. If Windows starts, check for recent driver, update or hardware changes, run SFC and DISM, and test storage and memory. If it will not start, use Safe Mode or Windows Recovery Environment."
category: windows-problems
keywords:
  - "blue screen of death"
  - "bsod"
  - "windows blue screen"
  - "stop code"
  - "critical process died"
  - "windows crashes and restarts"
symptoms:
  - "The screen turns blue with a sad face and a stop code, then the PC restarts."
  - "Windows restarts without warning and Event Viewer records an unexpected shutdown."
  - "The blue screen appears during startup, gaming, or a specific task."
  - "A file name such as a driver or system file appears under the stop code."
  - "The PC loops between blue screens and the login screen."
causes:
  - title: "A faulty or incompatible driver"
    detail: "A driver that handles storage, graphics, networking, or security can crash the kernel when it receives a request it cannot process."
  - title: "Failing memory or storage"
    detail: "Bad RAM can corrupt any running program, and a drive with bad sectors can fail while Windows is reading a critical file."
  - title: "Overheating or unstable power"
    detail: "A blocked cooler, failing fan, weak power supply, or failing battery can cause a shutdown under load that Windows reports as a crash."
  - title: "A recent update, app, or security tool"
    detail: "New low-level software and antivirus filter drivers are common triggers, especially when they are installed shortly before the first blue screen."
  - title: "Corrupted Windows system files"
    detail: "An interrupted update or damaged component store can leave Windows unable to start a required service."
prep:
  - "A phone camera to photograph the stop code"
  - "Administrator access if Windows starts"
  - "A backup of important files once the PC is stable enough"
  - "The date and activity before the first blue screen"
safetyNotes:
  - "Back up important files before running disk repairs, memory tests, or a reset."
  - "Do not open a power supply or a sealed laptop. Stop if you see smoke, sparks, a burning smell, or a swollen battery."
  - "Do not repeatedly force power off during a disk repair; interruption can make storage damage worse."
faqs:
  - q: "Do I need to memorise the whole stop code?"
    a: "Photograph the screen instead. The hexadecimal code, the short name such as CRITICAL_PROCESS_DIED, and any driver file name are all useful. Search the exact short name together with the word Microsoft, and note whether the same code appears every time."
  - q: "What does a blue screen actually mean?"
    a: "It means Windows detected a condition it could not safely recover from and stopped to avoid further damage or data corruption. It is a symptom, not a diagnosis. The same stop code can come from a driver, memory, storage, heat, or power."
  - q: "Is it safe to use System Restore?"
    a: "System Restore can return Windows files, drivers, and registry settings to an earlier point. It does not restore personal documents, and it removes apps and drivers installed after the restore point. Back up first and read the confirmation screen before continuing."
  - q: "Why does the blue screen happen only when I play games?"
    a: "Games load the graphics card, processor, and power supply more heavily than desktop work. That pattern points toward heat, power delivery, graphics drivers, or memory rather than a general Windows corruption."
  - q: "When is a blue screen a hardware repair?"
    a: "When it repeats with a memory, storage, or hardware-related stop code, when the PC will not complete a memory test, when a drive reports errors, or when the case becomes very hot. A technician can test the power supply and mainboard directly."
related:
  - windows-update-failed
  - computer-freezing-randomly
  - computer-black-screen
  - laptop-wont-turn-on
published: 2026-11-15
updated: 2026-11-15
featured: true
difficulty: Intermediate
time: "30–90 minutes"
risk: Moderate
verification: "After a change, use the PC for the activity that used to trigger the crash, ideally for a full day and at least one restart. Check Event Viewer for new unexpected shutdown events. A single clean boot is not proof; the goal is a stable pattern over normal use."
whenToStop: "Stop if the PC smells hot or burning, the fan grinds, the battery is swollen, or the case is damaged. Do not open a power supply. If blue screens continue in Safe Mode, during a memory test, or with a known-good drive, the fault is likely hardware and needs a qualified technician rather than more software changes."
sources:
  - label: "Microsoft Support: Windows stop errors"
    url: "https://support.microsoft.com/windows"
  - label: "Microsoft Learn: Bug check code reference"
    url: "https://learn.microsoft.com/windows-hardware/drivers/debugger/bug-check-code-reference2"
  - label: "Microsoft Support: Windows Memory Diagnostic"
    url: "https://support.microsoft.com/windows"
  - label: "Microsoft Learn: Windows Recovery Environment"
    url: "https://learn.microsoft.com/windows-hardware/manufacture/desktop/windows-recovery-environment--windows-re--technical-reference"
---

## Treat the blue screen as evidence

A blue screen is Windows protecting itself. It is not a verdict on which part has failed. Before you change anything, collect three facts:

- **The stop code.** For example `CRITICAL_PROCESS_DIED`, `IRQL_NOT_LESS_OR_EQUAL`, or `PAGE_FAULT_IN_NONPAGED_AREA`.
- **Any named file.** A line such as `ntoskrnl.exe` or a driver name narrows the search, though it is not always the guilty file.
- **The pattern.** Did it happen once after an update, every time Windows starts, only under load, or after waking from sleep?

If the PC restarts too quickly to read the screen, turn off automatic restart later in this guide, or use Event Viewer once Windows starts.

## Recover access first

### 1. Restart and see whether Windows returns

Hold the power button for about ten seconds if the PC is unresponsive, wait a few seconds, and power on. If Windows reaches the desktop, do not start a long repair yet. Note the time, then check Event Viewer > Windows Logs > System for the critical error and the bug check code.

### 2. Remove recent changes

If the first blue screen followed a driver, update, new RAM, a new dock, or security software, undo that change. Unplug new hardware, roll back the driver from Device Manager, or uninstall the update from Windows Update history. Change one thing at a time.

### 3. Start in Safe Mode if Windows will not load

From the sign-in screen, hold Shift and choose Restart to reach the Windows Recovery Environment. Then choose Troubleshoot > Advanced options > Startup Settings > Restart and select Safe Mode. Safe Mode loads a minimal driver set.

If the PC is stable in Safe Mode, a third-party driver or startup program is the likely trigger. If it still crashes in Safe Mode, suspect storage, memory, or the Windows installation itself.

### 4. Stop the restart loop long enough to read the code

In Safe Mode or from a working desktop, open System Properties > Advanced > Startup and Recovery and clear Automatically restart. The next blue screen will stay on screen long enough to photograph. Re-enable the setting after troubleshooting if you prefer automatic restarts.

## Repair Windows and test hardware

### 5. Run SFC and DISM

Open an administrator Command Prompt or PowerShell and run:

```
sfc /scannow
```

Then:

```
DISM /Online /Cleanup-Image /RestoreHealth
```

The first repairs protected system files. The second repairs the component store that Windows uses to service itself. Both can take several minutes, and both need a restart afterwards.

### 6. Check the drive

Run the manufacturer’s storage health tool if one is installed. In Windows, you can also open File Explorer, right-click the system drive, and use Properties > Tools > Check. If the tool reports errors it cannot repair, stop using the drive for important work and back up immediately.

### 7. Test memory

Search for Windows Memory Diagnostic and choose Restart now and check for problems. Let it complete; use the extended test if offered. If errors appear, have the memory checked or replaced. A clean result reduces the chance of bad RAM but does not prove the modules are perfect.

### 8. Reduce heat and check power

Clean external vents, keep the machine on a hard surface, and listen for a fan that is grinding or silent under load. On a desktop, plug directly into a wall outlet rather than a power strip, and stop using any power supply that buzzes or smells hot. On a laptop, test with the charger connected and again on battery.

## If the blue screen continues

- **Use System Restore** to a point before the first crash, if one exists and the PC can reach the recovery tools.
- **Check for a firmware update** from the manufacturer for your exact model. Use the official tool and keep the PC powered during the update.
- **Boot from a live USB.** If the PC is stable there, the installed Windows installation or a driver is more likely than the hardware.
- **Reset or reinstall Windows** only after a backup. Choose to keep files only if you have verified the backup, and expect to reinstall apps.
- **Ask a technician to test the power supply, cooling, and storage** if crashes persist on a clean installation.

> [!WARNING]
> Repeated blue screens can be a failing drive signalling that it is about to stop working. If the PC will start at all, copy important files to another drive before running further tests.

## Confirm the fix

Restart the PC a few times and use it normally for a day, including the workload that used to crash it. Open Event Viewer and check that no new bug check events appear. If the same stop code returns, compare the timing with your notes; a code that changes may point to a different cause, while an identical code points to the same component or driver.
