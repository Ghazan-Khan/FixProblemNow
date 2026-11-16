---
title: "Wi-Fi Keeps Disconnecting: Fix a Connection That Drops"
seoTitle: "Wi-Fi Keeps Dropping? Find and Fix the Cause"
description: "Wi-Fi that disconnects repeatedly can be caused by range, interference, router settings, device power saving or a failing router. Test one layer at a time."
summary: "A drop every few minutes is different from a drop once a day. Note whether every device loses Wi-Fi or only one, whether the network disappears, and whether the router lights change. That pattern decides whether to work on the device or the network."
quickAnswer: "Check whether other devices drop at the same moment. If they do, restart the router and move it away from interference, then check for firmware updates and a failing power supply. If only one device drops, update its Wi-Fi driver, disable aggressive power saving, forget and rejoin the network, and test again."
category: internet-wifi-problems
keywords:
  - "wifi keeps disconnecting"
  - "wifi drops constantly"
  - "internet keeps dropping"
  - "wifi disconnects randomly"
  - "wifi drops every few minutes"
  - "wifi keeps disconnecting and reconnecting"
symptoms:
  - "The Wi-Fi connection drops and reconnects every few minutes."
  - "The network name disappears from the device’s Wi-Fi list."
  - "Video calls or streaming stall at the same time each day."
  - "Only one device loses Wi-Fi while others stay connected."
  - "The router lights go out or change colour when the connection drops."
causes:
  - title: "Weak signal and distance"
    detail: "At the edge of coverage, a device may hold a connection until the signal falls below a usable level, then drop and reconnect."
  - title: "Interference and channel congestion"
    detail: "Neighbouring networks, cordless phones, microwaves, and Bluetooth devices can interfere, especially on the 2.4 GHz band."
  - title: "Router overheating, ageing, or a failing power supply"
    detail: "A router that drops when warm or restarts on its own may have a failing power adapter or internal fault."
  - title: "Device power saving or a Wi-Fi driver problem"
    detail: "Aggressive power management and outdated drivers can cause a laptop or phone to drop Wi-Fi when idle."
  - title: "DHCP, band steering, or a device limit"
    detail: "A short lease, a mesh node handing off poorly, or a router that limits clients can cause repeated disconnects."
prep:
  - "The time and duration of each drop"
  - "A second device to compare"
  - "The router model and administrator login"
  - "A laptop or phone you can move near the router for testing"
safetyNotes:
  - "Do not open the router or its power supply. Replace a power adapter that is damaged, buzzing, or very hot."
  - "Do not factory-reset the router until you have noted the internet connection settings, because a reset can erase your login details."
  - "Keep the router dry and ventilated; do not stack it under other equipment."
faqs:
  - q: "Why does my Wi-Fi drop at the same time every day?"
    a: "A scheduled backup, a microwave, a cordless phone, or a neighbouring network starting up can create a repeating pattern. Note the exact time and check what else runs then. A router set to reboot on a schedule can also explain it."
  - q: "Does a Wi-Fi extender cause disconnects?"
    a: "It can. An extender with the same network name can make devices cling to a weak signal or switch between access points badly. Try a wired access point or a mesh system, and place any extender within good range of the router rather than at the edge of coverage."
  - q: "Should I use 2.4 GHz or 5 GHz?"
    a: "5 GHz is faster over shorter distances and usually less crowded. 2.4 GHz travels further through walls but is more prone to interference. If the router uses one combined name, try separating the bands during testing to see which is stable."
  - q: "Will a new router fix the problem?"
    a: "Only if the current router is faulty, outdated, or cannot cover the area. Confirm the drop happens on the router side first. Replacing a working router because one laptop drops does not help."
  - q: "When should I contact the internet provider?"
    a: "Contact the provider if the router loses its internet light, the connection drops for all devices at once, or the provider’s own status page reports an outage. Ask them to check the line before you replace equipment."
related:
  - wifi-connected-but-no-internet
  - internet-running-slow
  - router-has-no-internet-connection
  - one-device-cannot-connect-to-wifi
published: 2026-11-15
updated: 2026-11-15
featured: true
difficulty: Intermediate
time: "30–60 minutes"
risk: Low
verification: "After a change, monitor the connection for at least 24 hours, including the time of day when it used to drop. A stable hour is not enough. Record whether every device stays connected and whether the router lights remain steady."
whenToStop: "Stop if the router or power adapter is hot, buzzing, smells burning, or has damaged cables. Do not open the power supply. If the line drops for all devices and the provider reports no outage, ask for a line test before buying a new router."
sources:
  - label: "Microsoft Support: Fix Wi-Fi connection issues"
    url: "https://support.microsoft.com/windows"
  - label: "Apple Support: Wi-Fi recommendations"
    url: "https://support.apple.com/guide/mac-help/mchlp1236/mac"
  - label: "Google Support: Wi-Fi troubleshooting"
    url: "https://support.google.com/android/"
  - label: "Cisco: Wi-Fi interference and channels"
    url: "https://www.cisco.com/c/en/us/support/docs/wireless/"
---

## First, find the pattern

Write down three things for each drop:

1. **Which devices dropped.** One device points to that device; all devices point to the router or line.
2. **What the router lights did.** If the internet or power light changed, the router restarted or lost its connection.
3. **What you were doing.** Large downloads, video calls, and gaming concentrate traffic and can expose a weak link.

Do not change settings until you have a pattern. Otherwise you will not know which change helped.

## If every device drops

### 1. Restart the router properly

Unplug the router’s power, wait 30 seconds, and plug it back in. Wait for the internet light to become stable before testing. A proper power cycle clears temporary faults that a software reboot may not.

### 2. Check heat, cables, and placement

Feel the router. It should be warm but not hot. Keep it out of a closed cabinet, off carpet, and away from direct sun. Check that the power adapter and the cable from the modem are fully seated and undamaged.

### 3. Look for interference

Move the router away from microwaves, cordless phone bases, baby monitors, and large metal objects. On 2.4 GHz, try changing the channel to 1, 6, or 11, using the router’s automatic channel selection first. Channel changes are safe and reversible.

### 4. Update the router firmware

Open the router’s administration page and check for a firmware update. Use the manufacturer’s official page and keep the router powered during the update. A failed firmware update can leave the router unusable, so follow the manufacturer’s instructions exactly.

### 5. Check the internet line

If the router’s internet light drops, the problem may be the line, modem, or provider. Contact the provider, report the times of the drops, and ask for a line test. Do not replace the router until the provider confirms the line is stable.

## If only one device drops

### 6. Update the Wi-Fi driver

On a laptop, open Device Manager > Network adapters, find the Wi-Fi adapter, and update the driver from the laptop manufacturer’s support page. A generic driver from a random download site may be worse than the one you have.

### 7. Disable aggressive power saving

On Windows, open the Wi-Fi adapter’s properties and check the Power Management tab. On macOS, check that Wake for network access is set as you need. On Android, check the battery settings for Wi-Fi scanning and “switch to mobile data” options.

### 8. Forget and rejoin the network

Remove the saved network and join it again. This clears stale credentials and security settings. On phones, also check whether a random/private MAC address setting is causing the router to reject the device.

### 9. Move closer for a test

Use the device next to the router for an hour. If it stays connected, the original location has a coverage problem. Add a wired access point or mesh node rather than repeatedly boosting the transmit power.

## If the drops continue

- **Set a longer DHCP lease** on the router if leases are very short, or reserve an address for the affected device.
- **Separate the 2.4 GHz and 5 GHz names** temporarily to test whether band steering is the cause.
- **Try a different device on the same spot** to separate a device fault from a coverage fault.
- **Replace an ageing router** only after the line and device have been tested.

> [!WARNING]
> Do not stack books or equipment on a router to hide cables, and do not use a power adapter with the wrong voltage. Both can cause overheating or a fire risk.

## Confirm the fix

Monitor for a full day, especially at the time the drops used to happen. Check the router log if it has one, and note whether the connection is stable for every device. If the problem returns only under heavy load, the next step is to check the line speed and the router’s capacity rather than changing Wi-Fi settings again.
