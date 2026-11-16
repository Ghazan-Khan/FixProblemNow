---
title: "Smart TV Won’t Connect to Wi-Fi: Fix the Network"
seoTitle: "Smart TV Won’t Connect to Wi-Fi? Step-by-Step Fix"
description: "Fix a smart TV that cannot find or join Wi-Fi. Check the band, password, DNS and router rules, then reset the TV network settings without losing apps."
summary: "TV Wi-Fi problems are often band or password related. Many TVs support only 2.4 GHz or handle combined-band networks poorly. Confirm the network the TV can see, then test with a wired connection or a phone hotspot to separate TV and router faults."
quickAnswer: "Restart the TV and router, then reconnect with the password. Check whether the TV supports 5 GHz and try the 2.4 GHz network if it does not. If the TV sees no networks at all, restart it with the power cable removed for a minute. If only this TV fails, reset its network settings, not the whole TV."
category: smart-tv-problems
keywords:
  - "smart tv won't connect to wifi"
  - "tv not connecting to internet"
  - "samsung tv wifi not working"
  - "lg tv wifi"
  - "roku tv wifi"
  - "tv can't find wifi network"
symptoms:
  - "The TV does not list the home Wi-Fi network."
  - "The TV lists the network but fails to connect or rejects the password."
  - "The TV connects but apps say there is no internet."
  - "Wi-Fi drops when the TV is turned off and on again."
  - "Other devices connect normally, but the TV does not."
causes:
  - title: "Unsupported band or security mode"
    detail: "Some TVs support only 2.4 GHz or an older security mode, and may not join a 5 GHz-only or WPA3-only network."
  - title: "Wrong password or a hidden network"
    detail: "A changed password, a trailing space, or a hidden SSID can stop the TV from joining."
  - title: "Router rules or weak signal"
    detail: "MAC filtering, client limits, guest isolation, or a TV placed far from the router can block or weaken the connection."
  - title: "TV firmware or network stack fault"
    detail: "A failed update or corrupted network settings can leave the TV unable to scan or connect until the network settings are reset."
  - title: "A faulty TV Wi-Fi module"
    detail: "If the TV cannot see any network, including a hotspot, the internal Wi-Fi module may have failed."
prep:
  - "The Wi-Fi name and password"
  - "The TV model and remote"
  - "Access to the router’s administration page"
  - "An Ethernet cable, if the TV has a LAN port"
safetyNotes:
  - "Do not open the TV or its power supply. Unplug it before moving or cleaning around the ports."
  - "Do not disable Wi-Fi security or create an open network to make the TV connect."
  - "Use a stable, ventilated position and avoid hanging the TV by its vents."
faqs:
  - q: "Why can my phone see the Wi-Fi but my TV cannot?"
    a: "The TV may support only 2.4 GHz and the router may be hiding that band, or the TV’s Wi-Fi module may be weaker. Try a 2.4 GHz network with a separate name, move the router or TV, and test a phone hotspot to see whether the TV can see any network."
  - q: "Does resetting the TV delete my apps?"
    a: "A network settings reset usually keeps apps and accounts. A full factory reset removes them. Use the network reset option first, and note your streaming logins before a full reset."
  - q: "Should I connect the TV by Ethernet?"
    a: "If the TV has a LAN port and the router is nearby, a cable is the most reliable option. It avoids Wi-Fi band and interference problems. Powerline or mesh adapters can help when a direct cable is not practical."
  - q: "Why does the TV connect but apps say no internet?"
    a: "The TV has joined the router but cannot reach the internet, or its DNS setting is wrong. Test another device on the same Wi-Fi. If that works, check the TV’s date and time, DNS setting, and firmware, or try a different DNS resolver."
  - q: "When is the TV faulty?"
    a: "If the TV cannot see or join any Wi-Fi network, including a hotspot, after a network reset and a power cycle, the Wi-Fi module may have failed. Use Ethernet if available or contact the manufacturer."
related:
  - one-device-cannot-connect-to-wifi
  - wifi-connected-but-no-internet
  - streaming-device-buffering
  - router-has-no-internet-connection
published: 2026-11-15
updated: 2026-11-15
featured: false
difficulty: Beginner
time: "20–40 minutes"
risk: Low
verification: "The TV should join the network, show a connected status, and load a streaming app or the manufacturer’s internet test. Turn the TV off and on and confirm it rejoins automatically. Check that playback works for several minutes without dropping."
whenToStop: "Stop if the TV or power adapter is hot, smells burning, or has a damaged cable. Do not open the TV or bypass network security. If the TV cannot see any network after a reset and a power cycle, contact the manufacturer rather than dismantling it."
sources:
  - label: "Samsung Support: TV Wi-Fi connection"
    url: "https://www.samsung.com/support/"
  - label: "LG Support: TV network connection"
    url: "https://www.lg.com/support/"
  - label: "Sony Support: TV Wi-Fi"
    url: "https://www.sony.com/electronics/support"
  - label: "Roku Support: Wi-Fi connection"
    url: "https://support.roku.com/"
---

## Check what the TV can see

Open the TV’s network settings and scan for wireless networks.

- **The network is listed:** the radio works. The problem is the password, security mode, router rule, or signal.
- **No networks are listed:** the TV’s Wi-Fi may be disabled, the module may have failed, or the TV needs a full power cycle.

Then compare with a phone in the same room. If the phone sees ten networks and the TV sees none, the TV’s Wi-Fi is the likely problem.

## Reconnect the TV

### 1. Power-cycle the TV properly

Turn the TV off and unplug it for at least a minute. This is different from standby, which leaves the network module powered. Plug it back in and scan again. On some TVs, holding the power button for a few seconds performs a soft reset.

### 2. Re-enter the password carefully

Use the on-screen keyboard and check for capital letters, trailing spaces, and the correct special characters. If the router has a guest network, confirm which network you are joining.

### 3. Try the correct band

If the router has separate 2.4 GHz and 5 GHz names, try both. Many TVs work only on 2.4 GHz, while others perform better on 5 GHz at short range. If the router combines the bands, temporarily split them to test.

### 4. Check router rules

Look for MAC filtering, access control, a paused device, a client limit, or guest-network isolation. A TV on a guest network may reach the internet but not local devices, and some routers block new clients until approved.

### 5. Test a phone hotspot

Connect the TV to a phone hotspot with a simple password. If it joins, the TV’s Wi-Fi works and the home router or its settings are the cause. Turn the hotspot off afterwards to avoid data charges.

### 6. Reset the TV’s network settings

Use the TV menu’s network reset option, not a full factory reset. Reconnect and test. If the TV still cannot see the network, check for a firmware update using a USB drive if the TV supports offline updates.

### 7. Use Ethernet if available

A cable removes Wi-Fi from the equation. If the router is too far away, a powerline adapter or a mesh node with an Ethernet port may be more reliable than repeating the Wi-Fi setup.

## If the TV still will not connect

- **Check the TV’s date and time.** An incorrect clock can break secure connections for some apps.
- **Try a different DNS resolver** in the TV’s network settings, then retest.
- **Update the TV firmware** from the manufacturer, using the official method for your model.
- **Contact the manufacturer** if no network is visible after a reset and power cycle. The Wi-Fi module may need service.

> [!WARNING]
> Do not open the TV casing. Capacitors inside can hold a charge after the TV is unplugged. Use the manufacturer’s service network for internal repairs.

## Confirm the fix

Join the network, open a streaming app, and play a few minutes of video. Turn the TV off and on and confirm it reconnects automatically. If the TV connects but playback buffers, use the [streaming buffer guide](/streaming-device-problems/streaming-device-buffering/) rather than resetting the Wi-Fi again.
