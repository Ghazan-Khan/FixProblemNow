---
title: "One Device Cannot Connect to Wi-Fi: Isolate the Fault"
seoTitle: "One Device Won’t Connect to Wi-Fi? Fix It Fast"
description: "When every other device works, the fault is usually the device, its saved network, or a router rule. Test the password, MAC filtering and address pool."
summary: "If one device cannot join Wi-Fi while others can, the network is working. The cause is usually a saved profile, a password mismatch, a router rule, a band the device cannot use, or a fault in that device’s Wi-Fi adapter."
quickAnswer: "Forget the network on the device and rejoin it. Check whether the router uses MAC filtering, a device limit, or a guest network. Try the other Wi-Fi band and restart both the device and router. If the device cannot see any network, the adapter or its driver is the likely fault."
category: internet-wifi-problems
keywords:
  - "one device cannot connect to wifi"
  - "only one device won't connect to wifi"
  - "device not connecting to wifi"
  - "wifi works on phone but not laptop"
  - "router blocking device"
  - "mac filtering wifi"
symptoms:
  - "Every other device connects, but one phone, laptop, or TV cannot."
  - "The device sees the network but fails to join or asks for the password repeatedly."
  - "The device joins other Wi-Fi networks without trouble."
  - "The router’s device list does not show the affected device."
  - "The device connects briefly, then drops and cannot rejoin."
causes:
  - title: "An outdated saved network profile"
    detail: "The device may be trying an old password or security type, especially after a router change."
  - title: "Router access rules or a device limit"
    detail: "MAC filtering, a paused device, a guest-network restriction, or a client limit can block one device while others work."
  - title: "Band or standard incompatibility"
    detail: "An older device may not support 5 GHz or a newer security mode, or the router may be set to a mode the device cannot use."
  - title: "A full DHCP address pool"
    detail: "If the router has no free addresses, a new device can see the network but fail to obtain an address."
  - title: "A fault in the device’s Wi-Fi adapter or driver"
    detail: "A disabled adapter, outdated driver, or hardware fault can prevent the device from joining any network."
prep:
  - "The Wi-Fi password"
  - "Access to the router’s administration page"
  - "The affected device’s MAC address, if you need to check filtering"
  - "A second network, such as a phone hotspot, for comparison"
safetyNotes:
  - "Do not factory-reset the router to fix one device; you may lose the internet login and custom settings."
  - "Do not disable the router’s security to make a device connect. Use the correct password and WPA2 or WPA3 support."
  - "Keep router vents clear and do not open the power supply."
faqs:
  - q: "How do I find the device’s MAC address?"
    a: "On Windows, run ipconfig /all and look for the physical address of the Wi-Fi adapter. On macOS, open System Settings > Network > Wi-Fi > Details. On phones, look in Settings > About > Status or the Wi-Fi network details. A phone using a private/random address may show a different MAC on each network."
  - q: "Why can my phone connect but not my laptop?"
    a: "The laptop may have an outdated driver, a saved profile with the wrong password, a disabled adapter, or a 5 GHz-only setting that the router does not provide. Test the laptop on a phone hotspot to see whether it can join any wireless network."
  - q: "What is MAC filtering?"
    a: "A router rule that only allows listed hardware addresses to join. If it is enabled, a new device is blocked until its address is added. Check the router’s wireless security settings before assuming the device is faulty."
  - q: "Can a full DHCP pool block one device?"
    a: "Yes. The router hands out a limited range of addresses. If every address is in use, the device may associate with Wi-Fi but fail to get an address. Restart the router or increase the pool, and remove old devices you no longer use."
  - q: "When is the device itself faulty?"
    a: "If it cannot see or join any Wi-Fi network, including a hotspot, after a restart and a driver check, the adapter may be faulty. Back up the device and have it inspected. On a phone, a network settings reset is the last software step before repair."
related:
  - wifi-keeps-disconnecting
  - iphone-wont-connect-to-wifi
  - router-has-no-internet-connection
  - printer-cannot-connect-to-wifi
published: 2026-11-15
updated: 2026-11-15
featured: false
difficulty: Intermediate
time: "20–45 minutes"
risk: Low
verification: "The device should join the network automatically after a restart and keep the connection for at least an hour. Confirm that it receives an IP address and can load a page, then check the router’s device list to see that it appears with an active connection."
whenToStop: "Stop if the router or its adapter is hot, damaged, or smells burning. Do not factory-reset a router you do not know how to reconfigure. If the device cannot join any network and a driver update does not help, have the device’s wireless adapter inspected."
sources:
  - label: "Microsoft Support: Wi-Fi connection issues in Windows"
    url: "https://support.microsoft.com/windows"
  - label: "Apple Support: If your device won’t connect to Wi-Fi"
    url: "https://support.apple.com/guide/mac-help/mchlp1236/mac"
  - label: "Google Support: Connect to Wi-Fi"
    url: "https://support.google.com/android/"
  - label: "TP-Link Support: MAC filtering and DHCP"
    url: "https://www.tp-link.com/support/"
---

## Confirm the network is fine

Use a second device to load a page on the same Wi-Fi. If it works, the internet and router are functioning. The problem is specific to the affected device or to a rule that applies to it.

Then check whether the device can see other networks. If it cannot see any Wi-Fi at all, the device’s adapter is the likely issue. If it sees networks but cannot join yours, the saved profile or router rule is more likely.

## Fix the device side

### 1. Forget and rejoin the network

Remove the saved network and join it again with the current password. Check the keyboard for capitalisation, trailing spaces, and the wrong keyboard layout. On a phone, make sure you are joining the correct band if the router has separate names.

### 2. Restart the device and the router

Restart the device first, then the router. A router that has been running for months can accumulate stale client entries. Wait for the router to fully start before reconnecting the device.

### 3. Check the Wi-Fi adapter and driver

On Windows, open Device Manager and confirm the Wi-Fi adapter is enabled and has no warning icon. Update the driver from the laptop manufacturer’s support page. On macOS, check Network settings for a disabled Wi-Fi service. On a phone, toggle airplane mode and Wi-Fi.

### 4. Test another network

Connect the device to a phone hotspot. If it joins, the device’s hardware works and the original router or its settings are the likely cause. If it cannot join the hotspot either, the device’s adapter or driver is the problem.

## Fix the router side

### 5. Check MAC filtering and paused devices

Open the router’s administration page and look for MAC filtering, access control, parental controls, or a paused-device list. A device can be blocked there without affecting others. If filtering is on, add the device’s address or turn the feature off deliberately.

### 6. Check the DHCP pool and device limit

Look for the DHCP address range and the list of connected clients. If the pool is exhausted or the router has a low client limit, remove old devices or widen the range. A router with a limit of 10 clients will refuse the eleventh.

### 7. Check the band and security mode

An older device may not support 5 GHz or WPA3-only mode. Try the 2.4 GHz network and a WPA2/WPA3 mixed mode if the router offers one. Do not disable security entirely; use the strongest mode the device supports.

### 8. Check guest-network isolation

A guest network often blocks access to other devices and sometimes to the local network. If the device is on a guest network by mistake, join the main network. If you need the device to reach a printer or computer, guest isolation will prevent it.

## If it still will not connect

- **Reserve an IP address** for the device in the router’s DHCP settings, then reconnect.
- **Reset network settings** on the device. This removes saved Wi-Fi passwords and Bluetooth pairings but keeps personal data.
- **Try a different Wi-Fi adapter** on a desktop, or a USB Wi-Fi adapter on a laptop, to test whether the built-in adapter has failed.
- **Update the router firmware** if the model is old and the manufacturer lists a fix for client compatibility.

> [!WARNING]
> Do not turn off Wi-Fi security or create an open network just to connect one device. An open network lets nearby devices access your traffic and your local network.

## Confirm the fix

Reconnect the device, confirm it has an IP address, and load a page. Restart the device once to check that it rejoins automatically. If it connects but cannot reach local devices, recheck guest-network isolation and any client-isolation setting.
