---
title: "Printer Not Printing? Clear the Queue and Find the Block"
seoTitle: "Printer Not Printing? Fix the Queue and Driver"
description: "A printer that receives jobs but prints nothing may have a stuck queue, wrong default printer, offline status or a driver fault. Clear it safely."
summary: "If the printer shows no error but documents do not appear, the job is often stuck before it reaches the printer. Clear the queue, confirm the correct printer and port, then test with a built-in test page before reinstalling anything."
quickAnswer: "Check the printer’s display for errors, confirm it is the selected printer, and look at the print queue for a paused or failed job. Clear the queue and restart the print spooler. Print a test page from the printer’s own menu to prove the hardware works, then reconnect or reinstall the driver."
category: printer-problems
keywords:
  - "printer not printing"
  - "printer queue stuck"
  - "printer says printing but nothing happens"
  - "print job stuck"
  - "printer not responding"
  - "restart print spooler"
symptoms:
  - "Documents stay in the queue with a status of Printing or Error."
  - "The printer is on and connected, but no pages come out."
  - "The computer sends a job to the wrong printer or a virtual PDF printer."
  - "The printer prints a test page from its own menu but not from the computer."
  - "A job disappears from the queue with no output."
causes:
  - title: "Stuck or paused print queue"
    detail: "One failed job can block every job behind it, and Windows or macOS may keep retrying it silently."
  - title: "Wrong default printer or port"
    detail: "The computer may be sending the job to another printer, a PDF printer, or an old network address."
  - title: "Offline or error state"
    detail: "The printer may be in an error state for paper, toner, a jam, or a closed cover that is not obvious from the computer."
  - title: "Print spooler or driver fault"
    detail: "A corrupted spooler file or an incompatible driver can stop jobs from reaching the printer."
  - title: "Connection problem"
    detail: "A USB cable, Wi-Fi link, or network address may have changed, especially after a router restart."
prep:
  - "The printer model and connection type"
  - "The printer’s current IP address, if it is networked"
  - "The document you are trying to print, or a simple test page"
  - "Administrator access on the computer"
safetyNotes:
  - "Unplug the printer before clearing a jam or reaching inside, and let a laser printer cool because the fuser is hot."
  - "Do not touch the drum, ink cartridges’ electrical contacts, or exposed wiring."
  - "Use only the manufacturer’s power adapter and cables."
faqs:
  - q: "How do I clear a stuck print queue?"
    a: "Open the printer queue, cancel all documents, and restart the print spooler service. On Windows, open Services, find Print Spooler, and restart it. On macOS, use the printer’s queue window and resume or delete jobs. Then send a single test page."
  - q: "Why does the printer work from its own menu but not from my computer?"
    a: "That points to the computer’s driver, port, or queue rather than the printer hardware. Check the selected printer, the port, and the queue. Reinstall the driver from the manufacturer’s site for your exact model."
  - q: "Should I use a generic driver?"
    a: "A generic driver can provide basic printing, but it may lack features or cause formatting problems. Prefer the manufacturer’s driver for your model and operating-system version. If the full driver fails, the basic driver is a useful test."
  - q: "Why does the printer go offline after the router restarts?"
    a: "A network printer may receive a new IP address, while the computer keeps the old one. Set a DHCP reservation in the router or assign a static address on the printer, then update the port on the computer."
  - q: "When should I stop and get the printer serviced?"
    a: "Stop if you see smoke, smell burning, hear grinding, or find toner or ink leaking. Do not open the fuser area or power supply. Repeated jams, streaked output, or a printer that will not power on may need service."
related:
  - printer-offline
  - printer-paper-jam
  - printer-prints-blank-pages
  - printer-cannot-connect-to-wifi
published: 2026-11-15
updated: 2026-11-15
featured: true
difficulty: Beginner
time: "15–40 minutes"
risk: Low
verification: "A test page should print from the computer and from the printer’s own menu. Send a second job after restarting the computer to confirm the queue does not stall. Check that the printer stays online after a few minutes of idle time."
whenToStop: "Stop if the printer is hot, smells burning, smokes, or has leaking toner or ink. Do not reach into the fuser or power supply. If the printer repeatedly jams or reports a hardware error, arrange service rather than forcing pages through."
sources:
  - label: "Microsoft Support: Fix printer problems"
    url: "https://support.microsoft.com/windows"
  - label: "Apple Support: If you can’t print"
    url: "https://support.apple.com/guide/mac-help/mchlp1236/mac"
  - label: "HP Support: Printer not printing"
    url: "https://support.hp.com/"
  - label: "Brother Support: Printing problems"
    url: "https://support.brother.com/"
---

## Check the printer before the computer

Look at the printer’s display and status lights. A paper-out, cover-open, low-toner, or jam message can stop the queue even if the computer shows no error. Confirm that paper is loaded and the output tray is not full.

Then print a test page from the printer’s own menu. If that works, the hardware and consumables are fine and the problem is on the computer side.

## Clear the queue

### 1. Cancel stuck jobs

Open the print queue on the computer and cancel every document, including old jobs you had forgotten about. A single failed job can block the queue. Then send one simple page, not a large document.

### 2. Restart the print spooler

On Windows, open Services, find Print Spooler, and choose Restart. If the queue will not clear, stop the service, clear the spool folder only if you are comfortable doing so, and start the service again. On macOS, open the printer queue from System Settings > Printers & Scanners and resume or delete jobs.

### 3. Confirm the correct printer and port

Open the print dialog and check which printer is selected. Then check the printer’s properties and port. A network printer should use the correct IP address or hostname, not an old address or a WSD port that has stopped resolving.

### 4. Check the connection

- **USB:** try another cable and another USB port, directly on the computer rather than through a hub.
- **Wi-Fi:** confirm the printer is on the same network as the computer and has an IP address. Print the network configuration page from the printer menu if it offers one.
- **Network:** ping the printer’s IP address from the computer. If it does not respond, fix the network before changing the driver.

### 5. Reinstall the driver

Remove the printer from the computer, restart, and install the latest driver from the manufacturer for your exact model and operating system. Use the official download page, not a driver bundle site. Add the printer again and print a test page.

## If the printer still does not print

- **Print from another device.** If a phone can print, the printer and network are fine, and the original computer is the problem.
- **Try a different document.** A single corrupted file can fail to print; a plain text page tests this.
- **Check the printer’s IP address.** If it changed, update the port or set a DHCP reservation.
- **Look for a firmware update** from the manufacturer, especially if the printer is networked and recently stopped working after a router change.
- **Use the manufacturer’s diagnostic tool** if one is available for your model.

> [!WARNING]
> Do not open the fuser area immediately after printing; it can be hot enough to burn. Unplug the printer before clearing a jam or inspecting the inside.

## Confirm the fix

Print a test page from the computer, then a normal document, then a second job after a restart. Check the queue is empty and the printer stays online. If jobs print only from the printer menu, the computer’s driver or port is still the problem.
