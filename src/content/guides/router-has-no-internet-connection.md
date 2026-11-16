---
title: "Router Has No Internet Connection: Check the Right Light"
seoTitle: "Router No Internet? Diagnose the Lights and Line"
description: "Work out whether the fault is the router, the modem, the cable, or the provider. Check the status lights, power-cycle in order, and protect your settings."
summary: "A router with no internet can be failing to reach the modem, missing its login settings, or receiving no service from the provider. The status lights and a direct modem test separate those cases before you change anything."
quickAnswer: "Check the router’s internet/WAN light and the modem’s status lights. Power-cycle the modem first, then the router. Confirm the cable between them is in the correct port. If the modem shows no service, contact the provider. Do not factory-reset the router until you have saved its internet login settings."
category: router-network-problems
keywords:
  - "router no internet"
  - "router connected but no internet"
  - "router internet light red"
  - "modem no internet"
  - "router not getting internet"
  - "wan port no internet"
symptoms:
  - "Devices connect to Wi-Fi but no website loads."
  - "The router’s internet or WAN light is red, amber, or off."
  - "The modem has no online light, or its lights cycle repeatedly."
  - "The router worked before a power cut, storm, or provider change."
  - "The router’s administration page shows no WAN address."
causes:
  - title: "Provider outage or line fault"
    detail: "The service may be down in your area, or the physical line may be damaged, especially after a storm."
  - title: "Modem or router needs a power cycle"
    detail: "The modem may have lost its connection and need to re-register with the provider before the router can use it."
  - title: "Wrong cable or port"
    detail: "The cable from the modem must go to the router’s WAN/Internet port, not a LAN port, and it must be fully seated."
  - title: "Missing or changed internet login settings"
    detail: "A router that was reset or replaced may need PPPoE credentials, a VLAN setting, or a MAC clone that the provider requires."
  - title: "Failing router or power adapter"
    detail: "A router that restarts, overheats, or drops its WAN link may have a failing power supply or internal fault."
prep:
  - "The router and modem model numbers"
  - "The provider account details and any PPPoE username"
  - "A note of the router’s current internet settings before changing them"
  - "An Ethernet cable you know works"
safetyNotes:
  - "Do not open the router, modem, or power supply. Replace damaged adapters and cables."
  - "Do not factory-reset the router until you have recorded the internet login, Wi-Fi name, and any custom settings."
  - "Keep the equipment dry, ventilated, and away from water and heat."
faqs:
  - q: "What does a red internet light on the router mean?"
    a: "It usually means the router cannot reach the internet through its WAN port. The cause may be the modem, the cable, the provider line, or the router’s login settings. It does not automatically mean the router is broken."
  - q: "Should I reset the router to factory settings?"
    a: "Only as a last resort and only if you have the provider’s connection details. A reset erases the Wi-Fi name, password, and internet login. Many no-internet problems are fixed by a power cycle or a provider check, not a reset."
  - q: "How do I power-cycle the modem and router correctly?"
    a: "Turn off or unplug both. Wait about 30 seconds. Plug in the modem first and wait for its online light to become solid, which can take a few minutes. Then plug in the router and wait for its internet light. Testing too early can make the router fail to obtain an address."
  - q: "The modem works but the router does not. What next?"
    a: "Test a computer directly at the modem by cable, if your setup allows it. If that works, the router or its cable is the problem. Check the WAN port, try another Ethernet cable, and confirm the router’s internet settings."
  - q: "When should I call the provider?"
    a: "Call when the modem shows no online light, when the provider reports an outage, or when a direct modem connection has no internet. Ask them to test the line and confirm whether your equipment is provisioned."
related:
  - wifi-connected-but-no-internet
  - wifi-keeps-disconnecting
  - internet-running-slow
  - one-device-cannot-connect-to-wifi
published: 2026-11-15
updated: 2026-11-15
featured: false
difficulty: Beginner
time: "20–45 minutes"
risk: Low
verification: "The modem should show a stable online light and the router should show a connected internet/WAN light. A wired and a wireless device should both load a page. Confirm the connection survives a router restart before assuming it is fixed."
whenToStop: "Stop if any device is hot, smells burning, has damaged cables, or shows signs of liquid damage. Do not open the equipment. If the provider confirms the line is active and a direct modem connection still fails, ask for a technician rather than replacing parts repeatedly."
sources:
  - label: "Microsoft Support: Network connection issues"
    url: "https://support.microsoft.com/windows"
  - label: "Cisco Support: Router and modem basics"
    url: "https://www.cisco.com/c/en/us/support/"
  - label: "Netgear Support: No internet connection"
    url: "https://www.netgear.com/support/"
  - label: "TP-Link Support: WAN connection"
    url: "https://www.tp-link.com/support/"
---

## Read the lights before touching anything

Router and modem lights vary by model, but the pattern is usually similar:

| Light | What it suggests |
| --- | --- |
| Modem online/power steady | Modem is registered with the provider |
| Modem online light off or blinking | No service or modem not registered |
| Router internet/WAN off or red | Router cannot reach the modem or provider |
| Router power light flickering | Possible power fault |

Look up the exact meaning in the manufacturer’s manual for your model. Do not assume a red light means the same thing on every router.

## Restart in the right order

### 1. Power-cycle the modem first

Unplug the modem, wait 30 seconds, and plug it back in. Wait for its online light to become steady. This can take several minutes. Do not restart the router until the modem is ready.

### 2. Power-cycle the router

Unplug the router, wait 30 seconds, and plug it back in. Wait for the internet light to settle. Then test with a wired device before testing Wi-Fi.

### 3. Check the cable and port

The cable from the modem must be in the router’s WAN or Internet port, which is usually a different colour and labelled. A cable in a LAN port will not carry the internet connection. Reseat both ends and try a different Ethernet cable.

## Check the provider and settings

### 4. Check for an outage

Open the provider’s status page on mobile data. If there is an outage, the correct action is to wait. Do not reset equipment during a known outage.

### 5. Test directly at the modem

If your setup allows it, connect a laptop by cable directly to the modem and test. You may need to power-cycle the modem when changing the connected device. If the direct connection works, the router is the problem. If it does not, the line, modem, or provider is the problem.

### 6. Check the router’s WAN settings

Open the router’s administration page and look at the WAN/internet status. A missing IP address, a disconnected PPPoE session, or an authentication error points to a settings or provider issue. Compare the settings with what the provider requires. Do not guess at VLAN or PPPoE values.

### 7. Look for a failed adapter

If the router restarts when warm, smells hot, or has a damaged power plug, stop using it. Replace the adapter only with one that matches the router’s voltage and current rating.

## If there is still no internet

- **Try another Ethernet cable** between modem and router.
- **Connect a computer directly to the modem** and test with the provider’s instructions.
- **Ask the provider to check the line and provisioning.** Give them the modem’s status lights and any error from the router.
- **Replace the router** only after the line and modem have been tested, and keep the old settings so you can recreate them.

> [!WARNING]
> A factory reset erases the router’s internet login and Wi-Fi settings. If you do not have the provider’s connection details, a reset can leave you with no internet and no easy way to restore it.

## Confirm the fix

Test a wired device first, then Wi-Fi on two devices. Restart the router once and confirm the internet light returns to normal. If the connection drops again after a power cut or a storm, record the pattern for the provider; repeated line faults are their responsibility, not a reason to keep buying routers.
