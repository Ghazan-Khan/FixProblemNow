---
title: "Wi-Fi Connected but No Internet: What to Check First"
seoTitle: "Wi-Fi Connected but No Internet? Fix It Step by Step"
description: "Your device is on Wi-Fi but pages will not load. Find out whether the fault is the router, DNS, provider or your device, and fix it safely."
summary: "A Wi-Fi connection only proves that your device can reach the router. When pages will not load, the missing link is usually the router's internet connection, DNS, or a setting on one device."
quickAnswer: "Test a second device on the same Wi-Fi. If both fail, check the router's internet status light, restart the router and modem, and check your provider for an outage. If only one device fails, forget and rejoin the network, disable any VPN, and check its IP and DNS settings."
category: internet-wifi-problems
keywords:
  - "wifi connected but no internet"
  - "connected no internet access"
  - "wifi no internet"
  - "internet not working on phone"
  - "dns server not responding"
symptoms:
  - "The Wi-Fi icon shows a connection, but every website and app fails to load."
  - "Pages load for a few seconds, then stop again."
  - "The browser says the DNS server is not responding or the site cannot be reached."
  - "Only one phone, laptop, or TV is affected while other devices work."
causes:
  - title: "Provider or line outage"
    detail: "The router may be connected to your device but have no working connection to your internet provider."
  - title: "Router or modem needs a restart"
    detail: "A temporary fault in router memory or a dropped session can leave local Wi-Fi working without internet access."
  - title: "DNS resolution failure"
    detail: "Your device can reach the network by number but cannot translate website names into addresses."
  - title: "VPN, proxy, or private DNS setting"
    detail: "A VPN or custom DNS service can fail while the underlying Wi-Fi connection remains healthy."
  - title: "Captive portal or account issue"
    detail: "Public Wi-Fi, hotel networks, and some home connections require sign-in or have an expired service."
prep:
  - "A second device that can join the same Wi-Fi"
  - "Access to the router's status lights or admin app"
  - "Your internet provider's account details, if you need to check service status"
safetyNotes:
  - "Do not factory reset the router until you have recorded its Wi-Fi name, password, and any custom settings."
  - "Avoid installing DNS or driver tools from unofficial download sites. Use your provider or device maker's instructions."
faqs:
  - q: "Why does my phone say connected with no internet?"
    a: "The phone has associated with the router, but the router has not passed traffic to the internet. Common reasons include an ISP outage, a lost WAN connection, DNS failure, or a captive portal. Comparing another device tells you whether the problem is the network or just the phone."
  - q: "Does restarting the router delete my settings?"
    a: "No. A power cycle only restarts the router. A factory reset is different and erases custom settings, including the Wi-Fi name and password. Use the power cable or power button for a restart unless your provider explicitly asks for a reset."
  - q: "Can changing DNS fix no internet?"
    a: "It can fix name-resolution failures, but it will not create an internet connection that is down. Test whether numeric addresses respond before changing DNS. If your provider requires its own DNS for some services, use the provider's settings."
  - q: "Why does the internet work on my laptop but not my phone?"
    a: "A single-device failure points to that device's Wi-Fi profile, VPN, proxy, private DNS, or stored network settings. Forget the network on the phone, rejoin it, and compare its IP address with a working device."
  - q: "When should I contact my internet provider?"
    a: "Contact them when every device is affected, the router shows no internet or WAN light, a restart does not help, and their service status page reports an outage or you cannot reach it. Have your account number and router model ready."
related:
  - wifi-keeps-disconnecting
  - one-device-cannot-connect-to-wifi
  - router-has-no-internet-connection
  - internet-running-slow
published: 2026-11-15
updated: 2026-11-15
featured: true
difficulty: Beginner
time: "10–25 minutes"
risk: Low
verification: "Load two different websites on the affected device, then run a fresh search or open a video to confirm that traffic is flowing rather than coming from cache. Test a second device on the same Wi-Fi and check that both stay online for at least ten minutes before you close the case."
whenToStop: "Stop if the router, modem, or power adapter is hot to the touch, smells burnt, shows visible damage, or has been hit by lightning or a power surge. Do not open provider equipment or reset a router you do not own. If every device is offline after a restart and your provider reports no outage, ask their support team to test the line before changing more settings."
sources:
  - label: "Microsoft Windows network and internet support"
    url: "https://support.microsoft.com/windows"
  - label: "Apple Wi-Fi support"
    url: "https://support.apple.com/wifi"
  - label: "Google Nest Wi-Fi help"
    url: "https://support.google.com/googlenest"
  - label: "Cloudflare 1.1.1.1 DNS documentation"
    url: "https://developers.cloudflare.com/1.1.1.1/"
---

## Separate "Wi-Fi" from "internet"

Wi-Fi is the radio link between your device and the router. Internet access is the router's connection to your provider. They can fail independently. Your device can have a strong Wi-Fi signal and still be unable to reach anything beyond the router.

The fastest way to locate the failing link is to test a second device on the same network.

| What you observe | Likely location of the fault |
| --- | --- |
| Every device fails, router shows no internet light | Provider, modem, or router WAN connection |
| Every device fails, router lights look normal | DNS, provider outage, or router configuration |
| One device fails, others work | That device's Wi-Fi profile, VPN, DNS, or proxy |
| Pages fail but video calls or games work | DNS or browser-specific issue |
| Only one website fails | The website, its CDN, or a local filter |

## Step-by-step checks

### 1. Test another device

Open a website on a phone or another computer connected to the same Wi-Fi. If it loads, the internet connection is working and the problem is isolated to the first device. Skip to the single-device section below.

If the second device also fails, continue with the router checks.

### 2. Check the router's status lights

Look at the router or modem for an internet, WAN, or globe indicator. The manufacturer's manual defines the colours, but common patterns are:

- **Solid green or white:** the router believes it has a connection.
- **Amber, red, or off:** the line or provider session may be down.
- **Blinking:** normal activity on many models, but a slow or irregular blink can indicate a fault.

Do not unplug cables yet. Note which lights change when you restart the router.

### 3. Restart the router and modem in the right order

1. Unplug the router and the modem from power.
2. Wait about 30 seconds.
3. Plug the modem in first and wait for its status lights to settle.
4. Plug in the router and wait for its internet light.
5. Reconnect one device and test a website.

If your provider supplied a combined router-modem, there is only one device to restart. Follow the provider's app or manual if it specifies a different sequence.

### 4. Check for a provider outage

Open your provider's status page or app on mobile data, not on the affected Wi-Fi. Report an outage if their map shows one. If the provider's site is also unreachable on mobile data, use their phone line or social channel.

Do not keep restarting equipment during a known outage. It will not restore service and may make it harder to see when the line recovers.

### 5. Test whether the problem is DNS

DNS translates a name such as example.com into an IP address. If DNS fails, the connection can still work for numeric addresses.

On Windows, open Command Prompt and run:

```text
ping 1.1.1.1
```

On macOS or Linux, open Terminal and run the same command. A reply means the network path works and a DNS problem is plausible. A timeout can still happen when a network blocks ping, so also try opening `https://1.1.1.1` in a browser.

If numeric access works but names do not, try setting DNS to a reputable resolver such as Cloudflare (1.1.1.1) or Google (8.8.8.8) in the device or router settings. Record the original setting first. Some managed networks and parental-control services require their own DNS.

### 6. Deal with captive portals

Hotel, airport, cafe, and some apartment networks require a sign-in page. The portal often fails to appear automatically. Open a browser and go to a plain HTTP address such as `http://neverssl.com`, which is designed to trigger the redirect. If a login page appears, complete it and test again.

If the portal loops or rejects your credentials, contact the network operator. A VPN can also block the portal page; turn it off temporarily.

### 7. Check for an account or data limit

Some fixed wireless, satellite, and mobile hotspot plans reduce speed or suspend service when a limit is reached. Sign in to the provider account and check the usage and service status. A suspended account can leave the router's local Wi-Fi fully functional.

## If only one device has no internet

### Forget and rejoin the network

On the affected device, open Wi-Fi settings, select the network, and choose Forget. Join it again and enter the password carefully. This clears a corrupted saved profile.

### Turn off VPN, proxy, and private DNS

- **VPN:** disconnect it completely, not just pause the app.
- **Proxy:** check the device's proxy settings and disable any manual proxy you did not set.
- **Private DNS:** set it to Automatic if you previously configured a custom hostname.
- **Ad blockers and firewalls:** temporarily disable them to see whether they are blocking traffic.

Turn these back on one at a time after the connection works.

### Check the IP address

An address beginning with `169.254` on IPv4 usually means the device could not obtain an address from the router's DHCP server. Rejoining the network or restarting the router often resolves it. If it persists on one device only, check whether the router has a device limit, MAC filter, or reservation conflict.

### Reset network settings as a later step

Both iOS and Android offer a network settings reset. It removes saved Wi-Fi networks, Bluetooth pairings, and VPN profiles, but not personal files. Windows and macOS have their own network reset options. Treat these as moderate steps and record any custom settings first.

> [!WARNING]
> Do not use a "Wi-Fi fixer" app or registry cleaner for this problem. The underlying cause is almost always the line, the router, DNS, or a device profile, and these tools rarely address any of them.

## Verify that it is really fixed

A single page loading is not enough. Test three things:

1. Open two different websites in a browser.
2. Run a video or voice call for a minute to check stability, not just speed.
3. Restart the affected device and confirm the connection returns automatically.

Check the router's internet light again. If it returns to amber or red, the provider-side connection is still unstable even if pages occasionally load.

## When to stop

Stop and contact your provider if the modem or router shows no internet light after a restart, if the connection drops again within minutes, or if you see damage to the incoming cable or telephone socket. Do not open the provider's equipment or move wall-mounted cabling.

If only one device is affected after a network settings reset, the device may need manufacturer support or service. Back up the device before any repair that might erase data.
