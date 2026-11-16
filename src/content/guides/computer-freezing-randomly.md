---
title: "Computer Freezing Randomly? How to Find the Trigger"
seoTitle: "Computer Keeps Freezing? Find the Cause Safely"
description: "A PC that freezes at random may have a heat, memory, driver, storage or power problem. Record the pattern and test one cause at a time."
summary: "Random freezes are harder to fix than consistent ones because the trigger is intermittent. Start by recording when the freeze happens, then check heat, memory, storage, drivers and power in a safe order."
quickAnswer: "Note whether the freeze happens at idle, under load, after sleep, or during a specific app. Check temperatures and vents, run the built-in memory and disk checks, update the graphics driver from the manufacturer, and test with a clean startup. Back up important files before deeper hardware tests."
category: computer-problems
keywords:
  - "computer freezing randomly"
  - "pc freezes"
  - "laptop keeps freezing"
  - "computer locks up"
  - "screen freezes but mouse moves"
symptoms:
  - "The screen and mouse stop responding and only a hard restart recovers the computer."
  - "The computer freezes during games, video calls, or heavy browsing."
  - "Freezes happen after waking from sleep or shortly after startup."
  - "The display goes black and the fans stay loud before the system restarts."
  - "A specific app triggers the freeze, but other apps work normally."
causes:
  - title: "Overheating or blocked airflow"
    detail: "Dust, a failing fan, or a blocked vent can push the processor or graphics chip into a protective slowdown or shutdown."
  - title: "Faulty memory"
    detail: "A failing RAM module can corrupt data unpredictably, especially under load or when the system wakes from sleep."
  - title: "Graphics driver or hardware fault"
    detail: "A bad driver update, overheating graphics card, or failing video memory can freeze the display while the rest of the system struggles."
  - title: "Storage errors or a failing drive"
    detail: "Bad sectors or a drive that stops responding can freeze the whole system when it tries to read or write."
  - title: "Power delivery or sleep-state problem"
    detail: "An unstable power supply, failing battery, or incompatible sleep setting can lock the machine during idle or wake."
prep:
  - "A backup of important files on another drive"
  - "The computer model and graphics card model"
  - "The approximate time and activity when each freeze happens"
  - "Administrator access for diagnostic tools and driver updates"
safetyNotes:
  - "Back up important files before running memory tests, disk repairs, or hardware diagnostics."
  - "Do not repeatedly force power off with the power button unless the computer is unresponsive; repeated hard resets can damage a failing drive."
  - "If the case is hot, smells burning, or the fan makes grinding noises, stop and seek service."
faqs:
  - q: "How can I tell a freeze from a display problem?"
    a: "If the Caps Lock light still changes, the mouse moves, or audio keeps playing, the computer may be running while the display has stopped. Try an external monitor. If everything is frozen, including lights and audio, the system itself has locked up."
  - q: "Does a memory test always find bad RAM?"
    a: "No. A short test can miss intermittent faults. Run the extended test if the built-in tool offers one, and test one module at a time if you can access the memory safely. A clean result reduces the chance of RAM failure but does not prove the memory is perfect."
  - q: "Should I reinstall Windows to stop freezes?"
    a: "Only after a backup and after checking heat, memory, storage and drivers. A reinstall removes software conflicts but will not fix failing hardware. If the freeze continues on a clean installation, the cause is likely hardware or firmware."
  - q: "Why does my computer freeze after waking from sleep?"
    a: "Sleep and wake involve the power supply, memory, graphics driver and storage. Start by updating the chipset and graphics drivers from the manufacturer, then test with sleep disabled for a day. If the freeze disappears, the sleep state or a device driver is the likely cause."
  - q: "When should I stop and get help?"
    a: "Stop if you see smoke, smell burning, hear clicking or grinding from the drive, or notice a swollen battery. Also stop if the computer freezes during startup or cannot complete a backup. A technician can test the power supply, cooling and storage directly."
related:
  - computer-running-slow
  - computer-black-screen
  - windows-blue-screen-errors
  - laptop-wont-turn-on
published: 2026-11-15
updated: 2026-11-15
featured: false
difficulty: Intermediate
time: "45–90 minutes"
risk: Moderate
verification: "After each change, use the computer normally for at least a day, including the activity that used to trigger the freeze. A freeze-free hour is not proof. If the problem returns, note whether it happens at the same point, which suggests the same component or driver is still involved."
whenToStop: "Stop if the computer smells hot or burning, the fan grinds, the case is damaged, or the battery looks swollen. Do not open a power supply or a sealed laptop. If freezes continue after temperature, memory, storage and driver checks, ask a technician to test the power supply and mainboard rather than replacing parts at random."
sources:
  - label: "Microsoft Support: Windows memory diagnostic"
    url: "https://support.microsoft.com/windows/memory-problems-in-windows-11-1f7e6a7a-8c4d-4d6b-8a6e-0e5b5f5b5f5b"
  - label: "Microsoft Support: Windows performance and stability"
    url: "https://support.microsoft.com/windows"
  - label: "Apple Support: If your Mac restarts or shuts down unexpectedly"
    url: "https://support.apple.com/guide/mac-help/if-your-mac-restarts-or-shuts-down-unexpectedly-mchlp2256/mac"
  - label: "Intel support: Processor diagnostics"
    url: "https://www.intel.com/content/www/us/en/support/articles/000005567/processors.html"
---

## Record the pattern first

A freeze that happens once a week is difficult to diagnose if you change ten settings immediately. For the next few episodes, write down:

- What you were doing: idle, browsing, gaming, video call, waking from sleep.
- How long the computer had been on.
- Whether the screen froze, went black, or restarted itself.
- Whether the Caps Lock light or mouse still responded.
- Any recent update, new device, or new app.
- The room temperature and whether the fan was loud.

This record often separates a heat or load problem from a sleep, driver, or storage problem.

## Check heat and power first

### 1. Improve airflow and listen to the fan

Use the computer on a hard, flat surface. Do not block the vents with a blanket, cushion, or closed cabinet. Clean external vents with a soft brush or short bursts of compressed air, following the manufacturer’s instructions.

Listen for a fan that never changes speed, sounds like it is grinding, or stays silent while the case becomes very hot. A failed fan or dried thermal paste needs service on most laptops.

### 2. Check the power source

On a laptop, test with the charger connected and then on battery alone. A failing battery or adapter can cause freezes under load. On a desktop, bypass a power strip or extension lead and plug directly into a wall outlet. Do not continue using a power supply that buzzes, smells hot, or has damaged cables.

## Test memory and storage

### 3. Run the built-in memory test

- **Windows:** search for Windows Memory Diagnostic, choose Restart now and check for problems, and let the test complete. For a longer test, use the extended option if available.
- **macOS:** Apple Diagnostics is available on Intel Macs by holding D during startup; Apple silicon Macs use a different startup diagnostic path. Follow Apple’s instructions for your model.

If errors appear, stop and have the memory checked or replaced. If the test passes, it does not completely rule out an intermittent module, but it makes memory less likely.

### 4. Check the drive

Use the operating system’s disk check or the drive manufacturer’s health tool. Look for reported errors, pending sectors, or a drive that disappears from the system. A drive that clicks or grinds is a stop signal: back up immediately and replace it.

## Isolate software and drivers

### 5. Update graphics and chipset drivers from the manufacturer

Use the laptop or motherboard manufacturer’s support page, not a generic driver updater. Install the graphics driver recommended for your exact model. If the freezes started after a driver update, use the rollback option or install the previous version from the manufacturer.

### 6. Test with a clean startup

Disable third-party startup apps and non-essential services, then restart and use the computer normally. If the freezes stop, re-enable items in small groups until the trigger returns. This is slower than disabling everything permanently, but it identifies the conflict.

### 7. Check sleep and fast startup

If freezes only happen after sleep, disable sleep temporarily and test for a day. On Windows, also test with fast startup disabled. If the problem disappears, update the chipset and graphics drivers, then re-enable the feature and test again.

## If those steps do not work

- **Review system logs.** Windows Event Viewer and macOS Console can show a repeating error before a freeze. Note the time and the device or driver named; do not delete logs.
- **Test one memory module at a time** if you can access the memory safely. Label each module and change one at a time.
- **Boot from a live USB.** If the computer is stable in a live environment, the installed operating system or a driver is more likely than the hardware.
- **Check for firmware updates** from the manufacturer. A firmware update is a higher-risk step; use the official tool and keep the computer powered.
- **Ask a technician to test the power supply and cooling system** if the freeze persists. Replacing parts without testing is expensive and often inconclusive.

> [!WARNING]
> Do not keep using a computer that freezes and then smells hot, spins its fan loudly at idle, or restarts during a backup. Stop, disconnect power, and protect your data before continuing.

## Confirm the fix

Use the computer for the activity that used to trigger the freeze, ideally for several days. If it stays stable, make a note of what changed so you can reverse it if a new problem appears. If the freeze returns, compare the new pattern with your original record; a change in timing is a clue, not a failure.
