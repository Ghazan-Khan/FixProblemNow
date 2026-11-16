---
title: "Printer Says Offline but Is Connected: How to Fix It"
seoTitle: "Printer Offline? Fix the Connection and Print Queue"
description: "Fix a printer that says offline even though it is switched on. Check the port, queue, Wi-Fi connection and driver without reinstalling Windows."
summary: "An offline printer is usually a communication problem, not a broken printer. The computer may be using the wrong port, the queue may be paused, or the printer may have dropped off the network."
quickAnswer: "Confirm the printer is awake and connected to the same network as the computer. In Windows, open the print queue, turn off Use Printer Offline, and restart the Print Spooler service. If it still fails, remove and re-add the printer using the manufacturer's current driver."
category: printer-problems
keywords:
  - "printer offline"
  - "printer says offline"
  - "printer offline but connected"
  - "printer not responding"
  - "printer unavailable"
symptoms:
  - "The printer display is on, but Windows or macOS shows it as offline."
  - "Print jobs sit in the queue and never reach the printer."
  - "The printer works over USB but not over Wi-Fi, or the reverse."
  - "The printer disappears from the list of available printers."
causes:
  - title: "Printer is asleep or in deep standby"
    detail: "Some printers drop off the network after inactivity and need a button press or a power cycle to wake."
  - title: "Wrong printer port selected"
    detail: "Windows may be sending jobs to an old IP address, a WSD port, or a USB port that no longer exists."
  - title: "Paused or stuck print queue"
    detail: "A failed job can pause the whole queue and make the printer appear offline indefinitely."
  - title: "Printer lost its Wi-Fi connection"
    detail: "A changed router, password, or band steering can leave the printer connected to an old network profile."
  - title: "Driver or spooler problem"
    detail: "An outdated or damaged driver can break communication even when the printer is reachable."
prep:
  - "The printer model number"
  - "The printer's current network report or IP address, if it prints one"
  - "Administrator access on the computer, for queue and driver changes"
  - "The Wi-Fi password, if the printer needs to rejoin the network"
safetyNotes:
  - "Unplug the printer before cleaning around the paper path, and never reach into a laser printer's fuser area."
  - "Do not install drivers from generic download sites. Use the printer manufacturer's official support page."
faqs:
  - q: "Why does my printer go offline only when I am not using it?"
    a: "Many printers enter a low-power network mode and stop responding to discovery requests. Waking the printer by pressing a button, disabling deep sleep in its settings, or assigning it a fixed IP address can help. A power cycle is the quickest test."
  - q: "Does restarting the Print Spooler delete my print jobs?"
    a: "It can cancel the jobs currently in the queue. That is often desirable when a corrupt job is blocking everything. You will need to send the document again after the spooler restarts."
  - q: "Should I use a WSD port or a TCP/IP port?"
    a: "A TCP/IP port with the printer's current address is usually more predictable on a home network, especially if you assign a DHCP reservation. WSD can work well, but it depends on discovery and is more prone to losing the device after network changes."
  - q: "Can a VPN stop my printer from working?"
    a: "Yes. A VPN can route local traffic away from your home network, making the printer unreachable. Disconnect the VPN and test before changing printer settings."
  - q: "Why does the printer work from my phone but not my laptop?"
    a: "The printer and network are probably fine. Focus on the laptop's printer port, driver, queue, firewall, and VPN. Comparing the two devices prevents unnecessary changes to the printer itself."
related:
  - printer-not-printing
  - printer-prints-blank-pages
  - printer-cannot-connect-to-wifi
  - printer-paper-jam
published: 2026-11-15
updated: 2026-11-15
featured: true
difficulty: Beginner
time: "15–30 minutes"
risk: Low
verification: "Print a one-page test document from the affected computer and confirm that the job leaves the queue and appears at the printer. Check the printer status in the operating system shows Ready rather than Offline, then wait five minutes and print a second page to make sure the connection remains stable."
whenToStop: "Stop if the printer shows a hardware error, makes grinding or clicking noises, smells hot, or has toner or ink leaking inside. Do not disassemble the fuser or power supply. If the printer is reachable on the network but no computer can print to it, contact the manufacturer's support or a printer technician rather than repeatedly reinstalling drivers."
sources:
  - label: "Microsoft Windows printer support"
    url: "https://support.microsoft.com/windows"
  - label: "HP printer support"
    url: "https://support.hp.com/us-en/printer"
  - label: "Canon support"
    url: "https://www.usa.canon.com/support"
  - label: "Epson support"
    url: "https://epson.com/Support/sl/s"
  - label: "Brother support"
    url: "https://support.brother.com/"
---

## Confirm what "offline" actually means

Operating systems use "offline" for several different states: the printer is powered off, unreachable on the network, paused by the user, or using a port that no longer works. The printer's own display is the best first clue.

- **Display is off or dark:** the printer may be asleep. Press a button, then check for a power-saving setting that turns off the network.
- **Display shows Ready:** the printer is awake. The problem is likely the connection or queue on the computer.
- **Display shows an error:** address that first. An offline status can be a side effect of a paper jam, open cover, or supply error.
- **Display shows a different network:** the printer may be on a guest network or a neighbour's network after a router change.

Also confirm the printer and computer are on the same network. A printer on a 5 GHz guest network and a laptop on the main network may not be able to see each other, depending on router isolation settings.

## Fix the queue in Windows

### 1. Open the right printer queue

Go to **Settings > Bluetooth & devices > Printers & scanners**, select your printer, and choose **Open print queue**. If jobs are listed, cancel them all. A single stuck job can hold the queue in a paused state.

### 2. Turn off "Use Printer Offline"

In the queue window, open the **Printer** menu and clear **Use Printer Offline** if it is ticked. On Windows 11, the same option may appear in the printer's properties or the queue's menu. Then send a one-page test print.

### 3. Restart the Print Spooler

The spooler is the Windows service that manages print jobs. Restarting it clears stuck jobs and rebuilds the queue.

1. Press **Windows + R**, type `services.msc`, and press Enter.
2. Find **Print Spooler**.
3. Right-click it and choose **Restart**.
4. If Restart is unavailable, choose **Start**.
5. Try printing again.

If the spooler stops immediately, a corrupt print job or driver is likely. Removing the printer and reinstalling it with the manufacturer's package is the next step.

### 4. Check the printer port

Open **Printers & scanners > your printer > Printer properties > Ports**. Note which port is ticked.

- For a network printer, a **Standard TCP/IP port** should contain the printer's current IP address.
- For USB, the port should reference the correct USB connection.
- Multiple ports with similar names can be confusing. Compare the IP with the printer's network report.

If the IP changed, create a new TCP/IP port with the current address, or set a DHCP reservation on the router so the printer keeps the same address.

### 5. Remove and re-add the printer

Before removing it, note any custom settings such as paper size or duplex defaults.

1. Remove the printer from **Printers & scanners**.
2. Restart the computer.
3. Download the full driver package from the manufacturer's support page.
4. Install it and add the printer using the manufacturer's installer rather than Windows' automatic discovery.

> [!WARNING]
> Do not reset the router or printer to factory settings just to fix an offline status. Record the printer's network name, IP address, and any custom settings first, because a reset can remove them.

## Fix the queue on macOS

1. Open **System Settings > Printers & Scanners**.
2. Select the printer and check for a message such as "Printer offline" or "Paused".
3. Click **Open Print Queue** and resume or cancel stuck jobs.
4. Remove the printer with the minus button, then add it again.
5. If the printer still fails, use **Reset printing system** from the printer list's contextual menu. This removes all printers and queued jobs, so note your settings first.

For a network printer, confirm that macOS is using the correct protocol (usually IPP or AirPrint) and the printer's current address. A VPN or restrictive firewall can also block local discovery.

## Check the network path

If the printer works over USB but not Wi-Fi, troubleshoot the network rather than the driver.

- Print the printer's network configuration page and confirm the SSID and IP address.
- Join the printer to the 2.4 GHz network if it does not support 5 GHz or if the signal is weak.
- Check whether the router has client isolation, AP isolation, or a guest-network restriction enabled.
- Temporarily move the printer closer to the router. Metal furniture and thick walls can reduce a printer's weak radio.
- If the router recently changed, re-enter the Wi-Fi password on the printer.
- Disable any VPN on the computer for the test.

Ethernet is often more reliable for a desktop printer. If the printer has an Ethernet port, connect it directly to a router LAN port and add it by IP address.

## Verify the fix

Print a test page from the printer's own menu if available, then print from two different applications, such as a text document and a web page. Confirm that:

- The printer stays online for at least ten minutes.
- The job leaves the queue rather than sitting at "printing".
- A second job prints without a power cycle.

If the printer goes offline again after a short time, enable a DHCP reservation, disable deep sleep if the manufacturer allows it, and check the router's device list for the printer's address.

## When to stop

Stop and contact the manufacturer or a qualified technician if the printer shows a hardware error code, makes grinding noises, repeatedly jams, or has ink or toner leaking inside the case. Do not open the fuser or high-voltage area of a laser printer. If the printer is under warranty, use the manufacturer's support process before attempting repairs.
