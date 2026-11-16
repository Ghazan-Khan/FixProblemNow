---
title: "iPhone Won’t Connect to Wi-Fi: Fix the Connection"
seoTitle: "iPhone Won’t Connect to Wi-Fi? 8 Fixes to Try"
description: "Fix an iPhone that will not join Wi-Fi, keeps asking for the password, or connects without internet. Safely test the network, router and iPhone settings."
summary: "Start by testing whether other devices can use the same Wi-Fi. If they can, the problem is on the iPhone; if they cannot, the router or internet service is the cause. Only reset network settings after simpler steps fail."
quickAnswer: "Turn Wi-Fi off and on, restart the iPhone, and rejoin the network. If it still fails, forget the network and enter the password again, check that the date and time are automatic, and disable any VPN or private relay temporarily. If only this iPhone is affected, reset network settings; this removes saved Wi-Fi passwords but not apps or photos."
category: iphone-problems
keywords:
  - "iphone won't connect to wifi"
  - "iphone wifi not working"
  - "iphone keeps asking for wifi password"
  - "iphone connected to wifi but no internet"
  - "reset network settings iphone"
symptoms:
  - "The iPhone does not see the network name at all."
  - "The iPhone sees the network but will not join, or asks for the password repeatedly."
  - "Wi-Fi connects but pages and apps do not load."
  - "Wi-Fi drops when the iPhone locks or moves away from the router."
  - "Other devices work on the same network, but the iPhone does not."
causes:
  - title: "A saved network with an outdated password"
    detail: "If the router password changed, the iPhone may keep trying the old credentials until the network is forgotten."
  - title: "Router band, band steering, or client limit"
    detail: "Some routers separate 2.4 GHz and 5 GHz networks, limit connected devices, or handle older iPhones poorly on a combined network."
  - title: "VPN, private relay, or DNS interference"
    detail: "A VPN profile, iCloud Private Relay, or custom DNS setting can break name resolution or block the connection."
  - title: "iOS network settings fault"
    detail: "A corrupted network configuration can survive restarts and make the iPhone fail to join even a working network."
  - title: "Weak signal or a router fault"
    detail: "Distance, walls, interference, or a router that needs a restart can prevent a stable connection."
prep:
  - "The Wi-Fi password"
  - "A second device to test the same network"
  - "Access to the router, if you administer it"
  - "The iOS version from Settings > General > About"
safetyNotes:
  - "Resetting network settings removes saved Wi-Fi passwords, VPN configurations, and paired Bluetooth devices. It does not delete photos or apps."
  - "Do not join an open network you do not trust just to test; use a network you control."
  - "Do not install configuration profiles or VPN apps from unknown sources to ‘fix’ Wi-Fi."
faqs:
  - q: "Why does my iPhone say the password is incorrect when it is right?"
    a: "The iPhone may be using an old saved password, the keyboard may be inserting a space, or the router may be rejecting the device for another reason. Forget the network and re-enter the password carefully. If it still fails, test the same password on another device."
  - q: "Should I reset network settings?"
    a: "It is a reasonable step when only one iPhone is affected and simpler steps fail. It removes saved Wi-Fi passwords and Bluetooth pairings, so note those first. It does not remove apps, photos, or Apple ID data."
  - q: "What does ‘connected, no internet’ mean on iPhone?"
    a: "The iPhone has joined the router but cannot reach the internet through it. The fault may be the router’s connection, the internet provider, a captive portal, or a DNS problem. Test another device on the same Wi-Fi before changing iPhone settings."
  - q: "Can a VPN stop Wi-Fi from working?"
    a: "Yes. A VPN or DNS profile can break connectivity if its server is unreachable or it conflicts with the local network. Disable the VPN, try again, and re-enable it only after the basic connection works."
  - q: "When is the iPhone itself faulty?"
    a: "If the iPhone cannot join any Wi-Fi network, including a known-good one, after a restart and a network settings reset, the Wi-Fi hardware may be faulty. Back up and contact Apple support or an authorised provider."
related:
  - wifi-connected-but-no-internet
  - iphone-black-screen
  - one-device-cannot-connect-to-wifi
  - router-has-no-internet-connection
published: 2026-11-15
updated: 2026-11-15
featured: false
difficulty: Beginner
time: "15–30 minutes"
risk: Low
verification: "The iPhone should join the network automatically after a restart, load a web page over Wi-Fi with mobile data turned off, and stay connected when you lock and unlock it. Test the same spot where the connection used to fail."
whenToStop: "Stop if the iPhone becomes very hot, the battery is swollen, or the case is damaged. Do not reset network settings before noting saved Wi-Fi and Bluetooth devices if you rely on them. If the iPhone cannot join any known-good network after a reset, contact Apple support rather than opening the device."
sources:
  - label: "Apple Support: If your iPhone or iPad won’t connect to Wi-Fi"
    url: "https://support.apple.com/guide/iphone/if-your-iphone-or-ipad-wont-connect-to-a-wi-fi-network-iphc1e6a1b0b/ios"
  - label: "Apple Support: Wi-Fi recommendations"
    url: "https://support.apple.com/guide/iphone/connect-to-the-internet-iph2c0f8d3b/ios"
  - label: "Apple Support: Reset network settings"
    url: "https://support.apple.com/guide/iphone/reset-iphone-settings-iph7f7f1f2b/ios"
  - label: "Apple Support: Use private Wi-Fi addresses"
    url: "https://support.apple.com/en-us/102509"
---

## Decide which side is failing

Before changing anything on the iPhone, test a second device on the same Wi-Fi.

- **Other devices work:** the problem is the iPhone or its saved network settings.
- **No device works:** the problem is the router or the internet connection. Use the [Wi-Fi connected but no internet guide](/internet-wifi-problems/wifi-connected-but-no-internet/) instead.
- **Only devices far from the router fail:** the problem is coverage, not the iPhone.

## Fix the iPhone connection

### 1. Toggle Wi-Fi and restart

Open Settings, turn Wi-Fi off, wait a few seconds, and turn it on again. Then restart the iPhone. This clears temporary network state without changing saved passwords.

### 2. Rejoin the network

Tap the network name and enter the password carefully. If the keyboard adds a capital letter or a space, delete it. If the network is hidden, choose Other and enter the exact name and security type.

### 3. Forget and re-add the network

Open Settings > Wi-Fi, tap the information button next to the network, and choose Forget This Network. Then join it again. This removes the old saved credentials and forces a fresh handshake.

### 4. Check date, time, and VPN

Set Date & Time to automatic. Then open Settings > General > VPN & Device Management and disconnect any active VPN. If a configuration profile is installed that you do not recognise, do not delete it blindly; ask your administrator or the provider.

### 5. Try private Wi-Fi address settings

For a network you trust, open the network’s settings and try turning Private Wi-Fi Address off, then rejoin. Some routers with strict MAC filtering reject the rotating address. Turn it back on for public networks.

### 6. Reset network settings

If only this iPhone fails, open Settings > General > Transfer or Reset iPhone > Reset > Reset Network Settings. The iPhone restarts and removes saved Wi-Fi passwords, VPN settings, and Bluetooth pairings. Apps, photos, and Apple ID data remain.

### 7. Check the router from its side

If you administer the router, confirm that it is not blocking the iPhone through MAC filtering, a guest-network rule, or a device limit. Restart the router, and check whether the 2.4 GHz and 5 GHz networks have different names. Try joining the other band.

## If the iPhone still will not connect

- **Test another Wi-Fi network**, such as a friend’s or a mobile hotspot. If the iPhone joins that network, the original router is the likely cause.
- **Update iOS** to the latest available version. A known Wi-Fi bug may already be fixed.
- **Check for a carrier settings update** in Settings > General > About.
- **Back up and contact Apple support** if the iPhone cannot join any network after a network settings reset and a restart.

> [!WARNING]
> Do not use a “Wi-Fi booster” app that claims to repair hardware, and do not install configuration profiles from unofficial sites. They cannot fix a failed Wi-Fi chip and may expose your data.

## Confirm the fix

Turn off mobile data, join the Wi-Fi, and load a page that you have not opened before. Lock the iPhone, wait a minute, and unlock it to confirm the connection stays. Restart once more and check that it rejoins automatically.
