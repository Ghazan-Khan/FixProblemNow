---
title: "Printer Cannot Connect to Wi-Fi: Rejoin the Network"
seoTitle: "Printer Won’t Connect to Wi-Fi? Fix the Network"
description: "Fix a printer that cannot join Wi-Fi. Check the 2.4 GHz band, password, router isolation and IP address, then reconnect with WPS or the printer’s setup mode."
summary: "Many printers support only 2.4 GHz Wi-Fi and cannot join a combined or 5 GHz-only network. Start by confirming the band and password, then reconnect the printer and give it a stable address."
quickAnswer: "Check that the printer supports your network’s band and security type. Move it within range, restart the router and printer, and reconnect using the printer’s setup wizard or WPS if supported. If the router uses client isolation or MAC filtering, adjust it. Set a DHCP reservation so the address does not change."
category: printer-problems
keywords:
  - "printer cannot connect to wifi"
  - "printer won't connect to wifi"
  - "wireless printer not connecting"
  - "printer 2.4 ghz wifi"
  - "printer wps not working"
  - "printer offline wifi"
symptoms:
  - "The printer cannot find the Wi-Fi network during setup."
  - "The printer finds the network but fails to connect or asks for the password again."
  - "The printer connects, then goes offline after the router restarts."
  - "The printer works by USB but not over Wi-Fi."
  - "The printer’s network light is off or blinking."
causes:
  - title: "5 GHz-only or combined-band network"
    detail: "Many printers support only 2.4 GHz. A router that hides the 2.4 GHz network or uses one combined name can prevent setup."
  - title: "Wrong password or security mode"
    detail: "A changed password, a WPA3-only mode, or a hidden network can stop the printer from joining."
  - title: "Weak signal or poor placement"
    detail: "A printer in a cupboard, far from the router, or behind metal furniture may not hold a stable connection."
  - title: "Router isolation, MAC filtering, or a device limit"
    detail: "Guest-network isolation and access rules can block a printer even when the password is correct."
  - title: "Changed IP address or a stale driver port"
    detail: "After a router restart, the printer may receive a new address while the computer still uses the old one."
prep:
  - "The Wi-Fi name and password"
  - "The printer model and its network setup instructions"
  - "Access to the router’s administration page"
  - "A USB cable for a temporary wired setup, if the printer supports it"
safetyNotes:
  - "Do not open the printer or its power supply. Use the manufacturer’s adapter."
  - "Do not disable Wi-Fi security or create an open network to make the printer connect."
  - "Keep the printer away from water, heat, and blocked vents."
faqs:
  - q: "Why can’t my printer see the 5 GHz network?"
    a: "Many printers have a 2.4 GHz-only radio. If the router uses one combined name, the printer may still connect to the 2.4 GHz radio, but some setups fail. Temporarily give the 2.4 GHz network a separate name, connect the printer to it, and then decide whether to keep the split."
  - q: "What is WPS and should I use it?"
    a: "Wi-Fi Protected Setup lets a device join by pressing a button or entering a PIN. It can simplify printer setup, but the PIN method is less secure. Use the push-button method if your router and printer support it, and disable WPS PIN if you do not need it."
  - q: "Why does the printer go offline after a router restart?"
    a: "It probably received a new IP address. Reserve an address for the printer in the router’s DHCP settings, or assign a static address on the printer. Then update the printer port on each computer."
  - q: "Can a printer connect to a guest network?"
    a: "It can, but guest networks often isolate devices, so computers on the main network may not see the printer. Use the main network for a printer you want to share, or allow local access if the router supports it."
  - q: "When should I use USB instead?"
    a: "USB is a reliable alternative for a single computer, especially if the printer is old or the Wi-Fi is unstable. It does not provide network printing for phones or other computers. Use it as a test or a permanent setup if wireless is not workable."
related:
  - printer-offline
  - printer-not-printing
  - one-device-cannot-connect-to-wifi
  - wifi-keeps-disconnecting
published: 2026-11-15
updated: 2026-11-15
featured: false
difficulty: Intermediate
time: "20–45 minutes"
risk: Low
verification: "The printer should show a stable Wi-Fi or network light, appear in the router’s device list with an address, and print from a computer and a phone. Restart the router and confirm the printer rejoins automatically without changing its address."
whenToStop: "Stop if the printer or adapter is hot, damaged, or smells burning. Do not open the printer or bypass network security. If the printer cannot join any network after a reset and a manual setup, contact the manufacturer’s support."
sources:
  - label: "HP Support: Connect a printer to Wi-Fi"
    url: "https://support.hp.com/"
  - label: "Brother Support: Wireless network setup"
    url: "https://support.brother.com/"
  - label: "Canon Support: Wireless LAN settings"
    url: "https://www.canon.com/support/"
  - label: "Epson Support: Wi-Fi setup"
    url: "https://support.epson.net/"
---

## Confirm what the printer supports

Check the printer’s specifications for Wi-Fi bands and security. Most home printers use 2.4 GHz and support WPA2. Some older models do not support WPA3-only networks or 5 GHz at all.

If the router uses one network name for both bands, the printer may connect to the wrong radio. Temporarily split the names: give the 2.4 GHz network its own name, connect the printer, and test. You can merge them again later if the printer stays connected.

## Reconnect the printer

### 1. Restart the router and printer

Restart the router first and wait for it to stabilise. Then restart the printer. A printer that has been in sleep mode for a long time may not rejoin automatically.

### 2. Check the password and network name

Enter the Wi-Fi password carefully, watching for capital letters and special characters. If the network is hidden, the name must match exactly. Do not use a guest network unless you understand its isolation rules.

### 3. Use the printer’s setup method

Follow the manufacturer’s instructions for your model. Most printers offer a setup wizard on the display, a WPS button method, or a temporary direct connection to a phone app. Use the method the manufacturer documents rather than guessing.

### 4. Check router access rules

Open the router’s administration page and check:

- MAC filtering or access control.
- Parental controls or paused devices.
- Client isolation or guest-network isolation.
- The DHCP address range and device limit.

Turn off a rule only if you understand what it protects, and add the printer’s address if filtering is required.

### 5. Give the printer a stable address

Find the printer’s MAC address in its network settings and reserve an IP address in the router’s DHCP table. Then update the printer port on each computer to use the reserved address. This prevents the printer from going offline after a router restart.

### 6. Reinstall the driver on the computer

Remove the printer from the computer, restart, and add it again using the manufacturer’s driver. If the computer still looks for the old address, create a new port with the printer’s current IP address.

## If it still will not connect

- **Move the printer closer** to the router for setup, then move it back and test.
- **Try a different security mode** supported by both devices, such as WPA2/WPA3 mixed, rather than WPA3-only.
- **Use USB** to confirm the printer works and to install the driver, then retry wireless.
- **Reset the printer’s network settings** using its menu, not a full factory reset, and start the setup again.
- **Update the printer firmware** from the manufacturer if a known wireless bug applies to your model.

> [!WARNING]
> Do not use WPS PIN if you can avoid it, and do not disable Wi-Fi security to force a connection. An open network exposes your printer and other devices to nearby users.

## Confirm the fix

Print from a computer and a phone, then restart the router and confirm the printer rejoins with the same address. Check the printer’s network light and the router’s device list. If it drops again, the address reservation or signal strength is the next thing to check.
