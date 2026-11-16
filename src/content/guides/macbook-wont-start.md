---
title: "MacBook Won’t Start: What to Check Before Recovery"
seoTitle: "MacBook Won’t Turn On? Safe Steps to Try First"
description: "A MacBook that will not start may need charge, a forced restart, or recovery. Work through power, display, and startup options before erasing anything."
summary: "Apple silicon and Intel MacBooks behave differently, so the first step is to identify the model and confirm whether the machine has power. Most no-start problems are power, display, or startup-related rather than a dead logic board."
quickAnswer: "Connect the correct charger, wait at least 30 minutes, and check for a charging light or battery icon. Try a forced restart, then listen for a fan or feel for warmth. If the Mac reacts but shows no image, test an external display. If it still will not start, use Apple’s recovery or DFU guidance for your exact model."
category: mac-problems
keywords:
  - "macbook wont start"
  - "macbook wont turn on"
  - "macbook black screen"
  - "mac won't boot"
  - "macbook no power"
  - "apple silicon mac won't start"
symptoms:
  - "The MacBook shows no image, no fan noise, and no startup sound."
  - "The screen stays black but the keyboard backlight or charging light responds."
  - "The Apple logo appears, then the Mac restarts or shuts down."
  - "Startup stops at a folder icon with a question mark or a prohibition sign."
  - "The Mac works with an external display but the built-in screen stays dark."
causes:
  - title: "Insufficient charge or a charger problem"
    detail: "A deeply discharged battery, a low-wattage adapter, or a damaged cable may not provide enough power to start the Mac."
  - title: "A startup state that needs resetting"
    detail: "The Mac may be stuck in sleep, a firmware state, or a failed startup that a documented forced restart can clear."
  - title: "Display or backlight fault"
    detail: "The Mac can be running while the screen remains dark because of a failed panel, cable, or backlight."
  - title: "Startup disk or macOS problem"
    detail: "A damaged volume, failed update, or missing startup disk can stop the boot process before the desktop appears."
  - title: "Hardware fault after liquid or impact"
    detail: "Liquid damage, a drop, or a failing logic board can prevent power-on or cause repeated shutdowns."
prep:
  - "The MacBook model and year, or the model identifier"
  - "The original or a known-good charger and cable"
  - "A second display and the correct adapter if available"
  - "A backup of important files, if the Mac can still start"
safetyNotes:
  - "Do not use a charger with a damaged cable, bent connector, or exposed wiring."
  - "Stop immediately if you see smoke, smell burning, or notice a swollen battery or a bulging case."
  - "Do not open the MacBook or disconnect the battery unless Apple documents the procedure for your model."
faqs:
  - q: "How long should I charge a MacBook before trying again?"
    a: "Connect the charger and leave it for at least 30 minutes, preferably an hour, before pressing the power button. A fully drained battery may show no response at first. Use the charger and cable rated for your model, and check that the port is free of lint or damage."
  - q: "What is the difference between Apple silicon and Intel startup?"
    a: "Apple silicon Macs use a power button hold to reach startup options and have a different recovery and DFU process. Intel Macs use key combinations such as Command-R and Option during startup. Follow Apple’s instructions for the exact model rather than mixing the two procedures."
  - q: "Does a black screen mean the logic board has failed?"
    a: "Not necessarily. A display cable, backlight, or software startup fault can produce the same symptom. If an external display works, or if the Mac responds to keys and makes sounds, the logic board may be fine and the display path is the likely problem."
  - q: "Will recovery mode erase my files?"
    a: "Recovery mode itself does not erase files. Erasing the disk or reinstalling macOS can remove data, so back up first if the Mac can start in any mode. If the disk is not visible in Disk Utility, stop and seek data recovery advice before erasing."
  - q: "When should I take the Mac to a service centre?"
    a: "Take it in after liquid contact, a drop, a swollen battery, or if it shows no response to charging and a documented forced restart. Also seek service if the Mac starts only intermittently, because that pattern often points to a hardware connection or power fault."
related:
  - laptop-wont-turn-on
  - computer-black-screen
  - iphone-black-screen
  - external-hard-drive-not-detected
published: 2026-11-15
updated: 2026-11-15
featured: false
difficulty: Beginner
time: "20–60 minutes"
risk: Low
verification: "The Mac should start normally, reach the desktop, and remain awake for at least 15 minutes. Confirm that the battery reports a charge and that the charger is recognised. If you used an external display, reconnect the built-in screen and confirm it also works."
whenToStop: "Stop if the case is swollen, the Mac smells hot or burning, or liquid has entered the machine. Do not open the bottom case or disconnect the battery without Apple’s documented procedure. If there is no response after charging, a forced restart, and an external display test, use Apple support or an authorised service provider."
sources:
  - label: "Apple Support: If your Mac doesn’t turn on"
    url: "https://support.apple.com/guide/mac-help/if-your-mac-doesnt-turn-on-mchlp2256/mac"
  - label: "Apple Support: If your Mac doesn’t start up all the way"
    url: "https://support.apple.com/guide/mac-help/mchlp2256/mac"
  - label: "Apple Support: Mac startup key combinations"
    url: "https://support.apple.com/guide/mac-help/mchl338cf9a8/mac"
  - label: "Apple Support: Repair or service"
    url: "https://support.apple.com/"
---

## Identify the Mac and confirm power

Apple silicon Macs (M1 and later) and Intel Macs use different startup and recovery procedures. Open the Apple menu > About This Mac if the machine starts at all, or check the model number on the underside or the original packaging.

Then connect the charger and look for a response:

- **Apple silicon:** the MagSafe or USB-C connector may show an amber or green light, and the Mac may warm slightly near the charging port.
- **Intel:** check the MagSafe light or the battery icon on screen if any image appears.
- **USB-C:** try the other ports and a known-good cable. Some cables charge but do not carry enough power to start the Mac.

Leave the charger connected for at least 30 minutes. A Mac with a completely flat battery can appear dead until it has some charge.

## Try a documented restart

### 1. Force the Mac to power off and on

For most MacBooks, press and hold the power button for about 10 seconds, release it, wait a few seconds, then press it once to start. On Apple silicon, holding the power button during startup opens startup options. Do not hold it again unless you intend to enter that menu.

### 2. Check for signs of life

Listen for a fan, feel for warmth, and watch the Caps Lock light if the keyboard has one. Try adjusting the brightness with the keyboard keys. A Mac that responds to keys but shows no image may be running with a display fault.

### 3. Test an external display

Connect a monitor or TV using the correct adapter. If the external display shows the desktop, the Mac is working and the built-in screen, its cable, or its backlight is the likely fault.

## Handle startup and recovery

### 4. Start in Safe Mode

Safe Mode loads fewer system extensions and can bypass a problem login item or driver. The key combination depends on the Mac:

- **Apple silicon:** shut down, then hold the power button until startup options appear. Choose your startup disk, hold Shift, and select Continue in Safe Mode.
- **Intel:** start and immediately hold Shift until the login window appears.

If Safe Mode works, remove recent login items, extensions, or software before restarting normally.

### 5. Use macOS Recovery

Recovery gives you Disk Utility, Reinstall macOS, and other tools without starting the normal system. Use Apple’s current instructions for your model, because the key combination and the Apple silicon flow differ. From Recovery:

- Open Disk Utility and run First Aid on the startup volume.
- Check that the internal disk appears at all. If it does not, stop before erasing.
- Reinstall macOS only if you have a backup or accept the risk of data loss.

### 6. Check the startup disk

A folder icon with a question mark means the Mac cannot find a startup disk. A prohibition sign means a startup disk was found but cannot be used. In both cases, Recovery and Disk Utility are the next step, and a failing drive is a possibility.

## If the Mac still will not start

- **Try another charger and cable**, ideally the original one for your model.
- **Reset the SMC** only on Intel Macs with a removable battery or documented SMC reset procedure. Apple silicon Macs do not use an SMC reset.
- **Use Apple’s DFU or revive guidance** for Apple silicon only if Apple documents it for your model and you have the correct second Mac and cable. This is an advanced step.
- **Book a diagnostic** with Apple or an authorised provider if the Mac is unresponsive, damaged, or has liquid contact.

> [!WARNING]
> Do not put a MacBook in rice, a freezer, or an oven after liquid contact. Do not charge a Mac with a swollen battery. Disconnect power if the case is bulging and seek service.

## Confirm the fix

Once the Mac starts, check the battery health, confirm the charger is recognised, and restart normally to make sure the fix survives a full boot. If the problem only happens after the battery has been drained, note that pattern; it points to the battery or charging path rather than macOS.
