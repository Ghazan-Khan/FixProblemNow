---
title: "Computer Turns On but Screen Is Black: Step-by-Step Fixes"
seoTitle: "Computer Turns On but Screen Is Black? Fix No Display"
description: "Lights and fans run but the screen stays dark. Test the display, cable, input source and startup state before assuming the computer is dead."
summary: "A black screen with a running computer usually means the display signal is not reaching the monitor, or the computer is failing before it can draw a picture. Work from the cable inward before opening the case."
quickAnswer: "Check that the monitor is on the correct input, reseat both ends of the display cable, and test the monitor with another device. Listen for fans or drive activity. If the computer is clearly running, try the display shortcut, an external monitor, and a power-drain reset before moving to memory or startup repairs."
category: computer-problems
keywords:
  - "computer turns on but screen is black"
  - "pc no display"
  - "monitor says no signal"
  - "laptop black screen but running"
  - "computer black screen with cursor"
symptoms:
  - "The power light and fans come on, but the monitor shows no image."
  - "The monitor displays No Signal, Check Cable, or enters standby."
  - "A laptop screen stays dark while an external monitor works."
  - "The computer appears to start, then the screen goes black before the desktop."
causes:
  - title: "Wrong monitor input or a sleeping display"
    detail: "The monitor may be set to HDMI 1 while the computer is connected to DisplayPort, or it may not wake from standby."
  - title: "Loose or failed display cable"
    detail: "A partially seated cable, bent connector, or damaged adapter can carry power but no stable video signal."
  - title: "Computer is running but not outputting video"
    detail: "A failed graphics driver, incorrect display mode, or startup fault can leave the system active with no visible image."
  - title: "Memory or graphics hardware fault"
    detail: "Loose memory, a failing graphics card, or a damaged port can stop the computer during power-on self-test."
  - title: "Operating-system startup failure"
    detail: "A recent update, driver change, or disk problem can stop Windows or macOS before the login screen appears."
prep:
  - "A known-working monitor, TV, or display cable"
  - "The computer and monitor model numbers"
  - "A torch to check ports and cable ends"
  - "Any recent changes: updates, new hardware, or a move"
safetyNotes:
  - "Unplug the computer before reseating a cable if the connector feels damaged or the case has visible damage."
  - "Do not open a power supply or touch components inside a sealed all-in-one display."
  - "If you smell burning, see smoke, or hear repeated electrical clicking, disconnect power and stop."
faqs:
  - q: "The fans run but there is no display. Is the computer booting?"
    a: "Possibly. Fans and lights only prove that power is present. Listen for a startup chime, watch for drive activity, and try an external monitor. If the computer reaches the login screen on another display, the original screen or its cable is the likely fault."
  - q: "Why does the screen work in Safe Mode but not normally?"
    a: "Safe Mode loads a basic graphics driver and fewer startup programs. If the display works there, a graphics driver, display setting, or startup application is the likely cause. Roll back the driver or remove the recent change before reinstalling anything."
  - q: "Should I reseat the RAM?"
    a: "Only on a desktop you are comfortable opening, with the power disconnected and static precautions taken. Loose memory can cause a no-display fault, but laptops and sealed all-in-ones are harder to service. Stop if you are unsure."
  - q: "How do I wake a monitor that shows no signal?"
    a: "Press a key or move the mouse, then press the monitor's input button and cycle through sources slowly. Check the monitor's power LED. A monitor in deep standby may need its own power button or a power cycle before it detects the computer."
  - q: "When should I stop troubleshooting?"
    a: "Stop if you see physical damage, liquid, smoke, sparks, or a burning smell. Stop before opening a power supply or a display assembly. If the computer works with another monitor, replace or service the faulty display rather than continuing to change system settings."
related:
  - computer-running-slow
  - computer-freezing-randomly
  - laptop-wont-turn-on
  - windows-update-failed
published: 2026-11-15
updated: 2026-11-15
featured: true
difficulty: Beginner
time: "15–35 minutes"
risk: Low
verification: "The computer should display the manufacturer logo, reach the login screen, and remain stable for at least ten minutes. If you used an external monitor, confirm that the built-in screen or the original monitor also works after you reconnect it, and check that the correct input source is selected."
whenToStop: "Stop if the case is damaged, liquid has entered the machine, or you see smoke, sparks, or a burning smell. Do not open a power supply or a sealed display. If the computer shows no image on two known-working displays after a power-drain reset and cable check, a graphics or mainboard fault may need a qualified technician."
sources:
  - label: "Microsoft Windows support"
    url: "https://support.microsoft.com/windows"
  - label: "Apple Support: If your Mac doesn't turn on"
    url: "https://support.apple.com/guide/mac-help/if-your-mac-doesnt-turn-on-mchlp2256/mac"
  - label: "Dell support: No display or blank screen"
    url: "https://www.dell.com/support/home/"
  - label: "HP support: Computer starts but screen is blank"
    url: "https://support.hp.com/"
---

## Confirm the computer is actually running

A black screen is not the same as a dead computer. Before changing settings, establish what is still working.

- **Listen:** fans, a startup chime, or a hard-drive hum suggest power is present.
- **Look:** check the power LED, keyboard backlight, Caps Lock light, and any drive activity light.
- **Feel:** warm exhaust air means the system is running, though it does not prove the display is receiving a signal.
- **Wait:** some computers take a minute or more after a failed update before showing anything.

If the computer is completely silent and dark, use the [laptop won’t turn on guide](/computer-problems/laptop-wont-turn-on/) instead. The rest of this guide assumes the machine has power.

## Test the display path first

### 1. Wake the monitor and select the right input

Press a key, move the mouse, and press the monitor’s power button once. Then use the input/source button to cycle through HDMI, DisplayPort, USB-C, and any other ports. Move slowly: some monitors take several seconds to lock onto a signal.

If the monitor has a power LED, note its colour. Amber or orange usually means standby; no light may mean the monitor is unplugged or its power supply has failed.

### 2. Reseat both ends of the cable

Disconnect the display cable at the computer and the monitor, inspect the connector for bent pins or debris, and reconnect it firmly. Try a different cable if you have one. For a desktop, move the cable to a different graphics output if the computer has more than one.

Do not force a connector. A USB-C cable that carries video is not the same as a charge-only cable, and an adapter may pass power but not a display signal.

### 3. Test the monitor with another device

Connect the monitor to a laptop, games console, or streaming device that you know works. If the monitor still shows no image, the monitor or its cable is the problem. If it displays correctly, the computer is the likely source.

### 4. Try an external display on a laptop

Connect a laptop to a TV or monitor with the correct cable. Then use the display shortcut:

- **Windows:** press `Windows + P` and choose Duplicate or Extend.
- **Mac:** use System Settings > Displays, or press the brightness/display keys.

If the external display works but the laptop panel stays dark, the laptop screen, its ribbon cable, or the backlight may have failed. A flashlight held at an angle can sometimes reveal a faint image, which points to a backlight problem rather than a dead computer.

## Reset the display state

### 5. Perform a power-drain reset

Shut down the computer if you can. Disconnect the power adapter, and on a laptop with a removable battery, remove it. Hold the power button for 15 to 20 seconds. Reconnect power only, then start the computer.

On a desktop, switch off the power supply at the rear, unplug it, and hold the case power button for 15 seconds. Reconnect and start. This clears some temporary power and display states without erasing data.

### 6. Remove external devices

Unplug USB drives, docks, printers, and second monitors. A faulty dock or USB device can interfere with startup or video output. Start with only the power cable and the display connected, then add devices back one at a time.

## Move to startup and hardware checks

### 7. Try Safe Mode or Recovery

If you can reach a startup menu but not the desktop, use the manufacturer’s recovery key or the Windows Advanced Startup menu. Safe Mode loads a basic graphics driver. If the display works there, roll back the graphics driver or remove the recent update or app.

On a Mac, try starting in Safe Mode by holding Shift during startup. Apple’s recovery options differ between Apple silicon and Intel Macs, so use the official [macOS recovery instructions](https://support.apple.com/guide/mac-help/mchl338cf9a8/mac) for your model.

### 8. Check memory and graphics hardware only if comfortable

On a desktop, with the power disconnected, you can reseat memory modules and the graphics card. Use an anti-static strap or touch the metal case before handling components. Change one component at a time and test after each change.

Do not open a laptop beyond the manufacturer’s documented service panels, and never open a power supply. If you are not comfortable, stop here.

## If those steps do not work

- **Try a different display port** on the graphics card or laptop dock.
- **Reset the monitor** to factory settings using its own menu, then reselect the input.
- **Boot from a live USB** if you have one. If the live environment displays correctly, the installed operating system or its graphics driver is the likely fault.
- **Check for a recall or service bulletin** using the computer model and serial number on the manufacturer’s support site.
- **Ask a technician** to test the graphics output and mainboard if two known-good displays remain blank.

> [!WARNING]
> Do not repeatedly power-cycle a computer that makes grinding, clicking, or electrical buzzing noises. Disconnect it and seek service. Repeated attempts can turn a recoverable fault into data loss.

## Confirm the fix

Once an image appears, check the display resolution, refresh rate, and input source. Restart the computer normally and confirm the image returns. If the problem only happens after a specific app or update, note that pattern before it recurs, because it narrows the cause to software rather than the cable.
