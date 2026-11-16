export interface CategoryFaq {
  q: string;
  a: string;
}

export interface Category {
  slug: string;
  name: string;
  navLabel: string;
  icon: string;
  tagline: string;
  metaDescription: string;
  intro: string[];
  covers: string[];
  faqs: CategoryFaq[];
  related: string[];
  featured?: boolean;
}

export const categories: Category[] = [
  {
    slug: 'computer-problems',
    name: 'Computer Problems',
    navLabel: 'Computers',
    icon: 'laptop',
    tagline: 'Startup, display, performance and hardware issues on laptops and desktops.',
    metaDescription:
      'Troubleshoot laptop and desktop problems: computers that will not turn on, black screens, slow performance, random freezing and hardware warnings.',
    intro: [
      'A computer that will not start, keeps freezing, or suddenly runs slowly can make it difficult to work, study, or stay in touch. This section covers the physical and software problems that affect laptops, desktop PCs, and all-in-one computers before you need to consider a repair shop.',
      'Guides here start with checks that cost nothing and cannot damage your data: power connections, external devices, display cables, and safe restarts. Where a step involves opening a case, changing firmware settings, or reinstalling an operating system, the guide explains the risk first and points to the manufacturer\u2019s official instructions. Use the symptom descriptions to pick the guide that matches what you can actually see and hear.',
    ],
    covers: [
      'Computers that will not power on',
      'Black screens and no-signal errors',
      'Slow performance and freezing',
      'Overheating and fan noise',
      'Startup and boot failures',
      'Display, keyboard and port problems',
    ],
    faqs: [
      {
        q: 'My computer turns on but nothing appears on the screen. Is it broken?',
        a: 'Not necessarily. Lights and fan noise show that the computer is receiving power, but the display signal, memory, or startup process may have failed. Begin with the external monitor, cable, and input checks in our black screen guide before assuming a hardware failure.',
      },
      {
        q: 'Should I reinstall Windows or macOS to fix a slow computer?',
        a: 'A reinstall is a last resort, not a first step. Storage pressure, startup apps, failing drives, and background updates explain most slowdowns. Try the non-destructive checks first, back up your files, and only then consider a reset or clean install.',
      },
      {
        q: 'When is a computer problem a repair-shop job?',
        a: 'Stop DIY troubleshooting if you see smoke, hear clicking or grinding from a drive, smell burning, or notice swollen batteries. Hardware faults inside a power supply or display assembly need qualified service. Our guides tell you when to stop.',
      },
    ],
    related: ['windows-problems', 'mac-problems', 'storage-backup-problems'],
    featured: true,
  },
  {
    slug: 'windows-problems',
    name: 'Windows Problems',
    navLabel: 'Windows',
    icon: 'windows',
    tagline: 'Updates, blue screens, boot failures and settings across Windows 10 and 11.',
    metaDescription:
      'Fix common Windows 10 and Windows 11 problems, including failed updates, blue screen errors, startup repairs, driver issues and login problems.',
    intro: [
      'Windows problems often arrive at the worst moment: an update stalls at a percentage, a blue screen restarts the PC, or the sign-in screen never finishes loading. Many of these issues have documented causes and supported recovery tools, but the order in which you try them matters.',
      'These guides use Windows 10 and Windows 11 menus and describe where settings differ. They prefer built-in tools such as Windows Update Troubleshooter, System Restore, Startup Repair, and the Windows Recovery Environment. Commands are shown with an explanation of what they change. Before any repair that could remove apps or files, you will find a backup warning and an alternative that preserves data.',
    ],
    covers: [
      'Windows Update errors and rollbacks',
      'Blue screen and stop code errors',
      'Startup and boot repair',
      'Driver and device conflicts',
      'Sign-in and profile problems',
      'Performance and storage cleanup',
    ],
    faqs: [
      {
        q: 'Which Windows version do these guides apply to?',
        a: 'Most instructions apply to Windows 11 and Windows 10 version 2004 or later. Where a menu moved between versions, the guide names both paths. Windows 8.1 and earlier are out of mainstream support and may not have the same tools.',
      },
      {
        q: 'Is it safe to run the Windows Update Troubleshooter?',
        a: 'Yes. The troubleshooter is a built-in Microsoft tool that checks update components and resets some temporary update state. It does not delete your documents. If it cannot repair the problem, the guide moves on to supported manual steps.',
      },
      {
        q: 'Do I need administrator rights to fix Windows problems?',
        a: 'Many repairs need an administrator account, including installing drivers, running system file checks, and changing update settings. The guides mark these steps clearly. If you use a managed work or school device, contact its administrator instead of bypassing restrictions.',
      },
    ],
    related: ['computer-problems', 'software-problems', 'account-login-problems'],
    featured: true,
  },
  {
    slug: 'mac-problems',
    name: 'Mac Problems',
    navLabel: 'Mac',
    icon: 'mac',
    tagline: 'MacBook, iMac and macOS startup, performance and recovery guidance.',
    metaDescription:
      'Troubleshooting guides for MacBook and macOS problems: Macs that will not start, slow performance, recovery mode, storage pressure and common fixes.',
    intro: [
      'Macs are reliable, but they still fail to start, slow down, or get stuck during an update. Apple\u2019s recovery tools are capable, yet the right entry point depends on whether your Mac has Apple silicon or an Intel processor, and whether the screen shows anything at all.',
      'This section explains macOS startup behavior, Recovery mode, Disk Utility\u2019s First Aid, Safe Mode, and when a hardware diagnostic is appropriate. Guides avoid guesswork about the cause and use checks you can perform at home. Before erasing a disk or reinstalling macOS, you will be reminded to confirm that your backups are current and to check whether the Mac can still start in another mode.',
    ],
    covers: [
      'Macs that will not start or charge',
      'macOS startup and Recovery mode',
      'Slow performance and storage pressure',
      'Application and permission issues',
      'Battery and thermal behavior',
      'External display and peripheral issues',
    ],
    faqs: [
      {
        q: 'How do I know if my Mac uses Apple silicon or Intel?',
        a: 'Open the Apple menu and choose About This Mac. A Chip entry such as M1, M2, or M3 means Apple silicon; a Processor entry naming Intel means an Intel Mac. Startup key combinations and recovery steps differ between the two.',
      },
      {
        q: 'Will Safe Mode fix a Mac?',
        a: 'Safe Mode starts macOS with fewer background items and can reveal whether a login item or third-party startup app is causing the problem. It is a diagnostic step, not a permanent fix; if the Mac behaves normally in Safe Mode, remove or update the startup items.',
      },
      {
        q: 'Can I recover files from a Mac that will not boot?',
        a: 'Sometimes. Recovery mode includes Disk Utility and, on many Macs, a way to browse a startup disk. Stop using the Mac for new work, avoid repeated forced restarts, and prioritise a backup before attempting repairs that write to the disk.',
      },
    ],
    related: ['computer-problems', 'storage-backup-problems', 'software-problems'],
    featured: true,
  },
  {
    slug: 'phone-problems',
    name: 'Phone Problems',
    navLabel: 'Phones',
    icon: 'phone',
    tagline: 'Charging, battery, screen, sound and overheating issues on any phone.',
    metaDescription:
      'Fix phone problems with practical steps: phones that will not charge, black screens, overheating, fast battery drain, speaker issues and startup failures.',
    intro: [
      'Phone problems are difficult to ignore because the device carries your contacts, messages, maps, and payments. The good news is that charging, battery, display, and overheating symptoms often have causes you can test with equipment you already own.',
      'These guides are written for both Android phones and iPhones, with model-specific notes where the steps diverge. They begin with the cable, adapter, port, and case, then move to safe restarts and software checks. Battery and heat warnings are treated seriously: if the phone is swollen, extremely hot, or has visible liquid damage, the guide will tell you to stop rather than continue charging it.',
    ],
    covers: [
      'Phones that will not charge',
      'Black screens and unresponsive displays',
      'Overheating and battery drain',
      'Speaker and microphone faults',
      'Phones that will not power on',
      'Safe mode and software resets',
    ],
    faqs: [
      {
        q: 'Can a bad cable really stop my phone from charging?',
        a: 'Yes. Cables bend internally, connectors collect lint, and chargers may not supply the voltage or current a phone expects. Testing a known-good cable and adapter is the quickest way to separate a charging accessory fault from a phone fault.',
      },
      {
        q: 'Is it safe to use my phone while it is charging and hot?',
        a: 'Avoid it if the phone is noticeably hot. Charging generates heat, and demanding apps add more. Unplug the phone, move it to a cool, ventilated place, and let it cool before charging again. Stop immediately if you see swelling or smell burning.',
      },
      {
        q: 'Will a factory reset fix a phone problem?',
        a: 'A factory reset can resolve stubborn software faults, but it erases local data and signs you out of accounts. Exhaust safer steps first, confirm that your photos, messages, and authenticator apps are backed up, and keep the reset as a deliberate last step.',
      },
    ],
    related: ['android-problems', 'iphone-problems', 'account-login-problems'],
    featured: true,
  },
  {
    slug: 'android-problems',
    name: 'Android Problems',
    navLabel: 'Android',
    icon: 'android',
    tagline: 'App crashes, updates, storage and battery issues on Android devices.',
    metaDescription:
      'Android troubleshooting for crashing apps, failed updates, battery drain, storage warnings, Wi-Fi issues and performance problems on phones and tablets.',
    intro: [
      'Android runs on thousands of device models, so a fix that works on one Samsung phone may sit under a different menu on a Pixel, Motorola, or OnePlus. This section focuses on steps that are common to modern Android versions and notes where manufacturers add their own layer.',
      'You will find guidance for apps that close immediately, Play Store errors, storage warnings, battery drain, and system updates that will not install. Each guide separates app-level fixes from system-level changes. Clearing app data and factory resets are flagged as destructive, with instructions for checking backups first. Developer options are mentioned only where they are genuinely needed.',
    ],
    covers: [
      'Apps that crash or will not open',
      'Play Store and installation errors',
      'Android system updates',
      'Battery and background activity',
      'Storage space and cache',
      'Wi-Fi, Bluetooth and mobile data',
    ],
    faqs: [
      {
        q: 'Why does one Android app keep crashing when others work?',
        a: 'A single failing app usually points to its own data, a recent update, or a permission problem rather than the whole phone. Clear the app cache first, then update or reinstall it. Clearing storage data is more disruptive because it removes the app\u2019s local settings.',
      },
      {
        q: 'Do I need to clear my Android cache regularly?',
        a: 'No. Android manages cached files automatically. Clearing a specific app\u2019s cache is a troubleshooting step, not routine maintenance. Wiping the system cache partition is not necessary for most problems and is not available on all devices.',
      },
      {
        q: 'How much free storage should I keep on Android?',
        a: 'A practical target is 10 to 15 percent of total storage, or at least a few gigabytes. Updates need temporary space, and a completely full device can slow down or fail to install security patches. Use the Storage settings to see what is actually using space.',
      },
    ],
    related: ['phone-problems', 'software-problems', 'account-login-problems'],
    featured: true,
  },
  {
    slug: 'iphone-problems',
    name: 'iPhone Problems',
    navLabel: 'iPhone',
    icon: 'iphone',
    tagline: 'iOS startup, battery, Wi-Fi and app troubleshooting for iPhone.',
    metaDescription:
      'iPhone troubleshooting guides for black screens, Wi-Fi problems, battery drain, charging issues, app crashes and iOS update failures.',
    intro: [
      'iPhones are tightly integrated, which makes many fixes straightforward but leaves fewer user-serviceable parts. When an iPhone will not turn on, will not join Wi-Fi, or drains battery quickly, the sequence of supported steps is relatively consistent across recent iOS versions.',
      'This section covers force restarting, checking battery health, managing Wi-Fi settings, updating iOS, and preparing for service. It distinguishes between a display that is off and a phone that has crashed, explains what a restore does to your data, and points to Apple\u2019s official repair and diagnostic resources. If liquid or physical damage is involved, the advice prioritises safety and data preservation over repeated restart attempts.',
    ],
    covers: [
      'Black or frozen screens',
      'Wi-Fi and cellular connectivity',
      'Charging and battery health',
      'iOS updates and storage',
      'App crashes and offloading',
      'Backups, restores and service preparation',
    ],
    faqs: [
      {
        q: 'What is the difference between a force restart and a factory reset?',
        a: 'A force restart reboots the phone without erasing anything. A factory reset erases local content and settings. Force restart is safe to try first; a reset requires a current backup and should only follow safer troubleshooting.',
      },
      {
        q: 'Why does my iPhone get hot when charging?',
        a: 'Some warmth is normal, especially with fast charging or a case that traps heat. Stop charging if the phone is uncomfortably hot, shows a temperature warning, or the battery or casing looks swollen. Move it to a cooler place and use a certified cable and adapter.',
      },
      {
        q: 'Can I fix an iPhone that will not connect to Wi-Fi without resetting it?',
        a: 'Often, yes. Start by toggling Wi-Fi, forgetting and rejoining the network, and restarting both the phone and router. A network settings reset removes saved Wi-Fi passwords but not personal data; keep it as a later step.',
      },
    ],
    related: ['phone-problems', 'account-login-problems', 'internet-wifi-problems'],
    featured: true,
  },
  {
    slug: 'internet-wifi-problems',
    name: 'Wi-Fi & Internet Problems',
    navLabel: 'Wi-Fi & Internet',
    icon: 'wifi',
    tagline: 'Connections that drop, stall, or show Wi-Fi without internet access.',
    metaDescription:
      'Fix Wi-Fi and internet problems: connected with no internet, repeated disconnects, slow speeds, DNS errors and one device that cannot get online.',
    intro: [
      'A Wi-Fi symbol only tells you that your device is talking to a router. It does not prove that the router has a working connection to your internet provider, that DNS is responding, or that the rest of the network is healthy. That distinction explains many \u201cconnected but no internet\u201d problems.',
      'These guides walk through the path from device to router to provider, in that order, so you can locate the failing link instead of restarting everything at once. You will find checks for signal strength, DNS, IP addressing, router status, and ISP outages, plus plain-language explanations of what each result means. Speed tests and router restarts are presented with realistic expectations, not promises of a specific speed.',
    ],
    covers: [
      'Connected but no internet access',
      'Wi-Fi that keeps disconnecting',
      'Slow or inconsistent speeds',
      'DNS and IP configuration errors',
      'Single-device connectivity failures',
      'Captive portals and public Wi-Fi',
    ],
    faqs: [
      {
        q: 'Why does my phone show Wi-Fi but pages will not load?',
        a: 'The phone can reach the router but not the wider internet. Common causes include an ISP outage, a router that has lost its connection, a DNS failure, or a captive portal that needs sign-in. Test another device on the same network to narrow it down.',
      },
      {
        q: 'Does restarting the router really help?',
        a: 'It often clears temporary faults in the router\u2019s memory or re-establishes a dropped connection with the provider. It is a reasonable early step, but note whether the problem returns. Repeated restarts point to a deeper issue such as heat, firmware, or line instability.',
      },
      {
        q: 'How can I tell whether the problem is my device or my provider?',
        a: 'Compare devices. If every device fails, check the router and provider. If only one device fails, focus on that device\u2019s Wi-Fi settings, VPN, proxy, or network configuration. The one-device guide walks through this comparison.',
      },
    ],
    related: ['router-network-problems', 'browser-problems', 'smart-tv-problems'],
    featured: true,
  },
  {
    slug: 'router-network-problems',
    name: 'Router & Network Problems',
    navLabel: 'Routers & Networks',
    icon: 'router',
    tagline: 'Router setup, admin access, mesh systems and home network faults.',
    metaDescription:
      'Router and home network troubleshooting: routers with no internet, Wi-Fi passwords that fail, admin access, DHCP conflicts, extenders and mesh systems.',
    intro: [
      'The router is the point where your devices meet your internet provider. When it stops handing out addresses, loses its connection, or rejects a password, every device on the network feels the failure. Router problems also look like device problems, which is why checking the router\u2019s status lights and admin pages can save a lot of time.',
      'Guides in this section explain how to reach a router\u2019s administration page, read common status indicators, check WAN and DHCP settings, and decide when a firmware update or factory reset is justified. A factory reset erases custom Wi-Fi names, passwords, port forwarding, and parental controls, so the guides treat it as a last resort and explain how to prepare first.',
    ],
    covers: [
      'Routers with no internet connection',
      'Wi-Fi passwords that are rejected',
      'Router admin page access',
      'DHCP and IP address conflicts',
      'Mesh systems and extenders',
      'Firmware, resets and security',
    ],
    faqs: [
      {
        q: 'How do I open my router\u2019s settings page?',
        a: 'Find the router\u2019s default gateway address in your device\u2019s network settings, or check the label on the router. Enter that address in a browser, then sign in with the admin credentials. The label may show a default username and password; if those were changed and lost, a factory reset may be required.',
      },
      {
        q: 'Should I update my router\u2019s firmware?',
        a: 'Security and stability updates are worth installing, but use the router manufacturer\u2019s own app or admin page. Do not download firmware from unofficial sites. Keep the router powered during the update and note any settings you have customised.',
      },
      {
        q: 'Will a factory reset fix a slow router?',
        a: 'It may help if a bad setting or accumulated configuration is responsible, but it is not a guaranteed speed fix. First check for overheating, outdated firmware, interference, and an ISP-side problem. A reset also removes your custom settings, so record them before proceeding.',
      },
    ],
    related: ['internet-wifi-problems', 'smart-tv-problems', 'gaming-peripheral-problems'],
    featured: true,
  },
  {
    slug: 'printer-problems',
    name: 'Printer Problems',
    navLabel: 'Printers',
    icon: 'printer',
    tagline: 'Offline printers, blank pages, stuck queues and wireless setup.',
    metaDescription:
      'Printer troubleshooting for offline errors, jobs that will not print, blank pages, Wi-Fi setup, paper jams and stuck print queues on any brand.',
    intro: [
      'Printers combine mechanical parts, ink or toner, drivers, and network connections, so a single symptom can have several unrelated causes. A printer that says \u201coffline\u201d may be disconnected, asleep, pointed at the wrong port, or paused in the operating system. A printer that feeds paper but prints nothing may have a clogged nozzle, an empty toner cartridge, or a driver that is sending the wrong page size.',
      'These guides help you separate those possibilities with short, reversible tests. They cover Windows and macOS print queues, USB and Wi-Fi connections, nozzle checks, and the maintenance tools built into printer software. Manufacturer-specific menu names vary, so official support links are included. Do not open a laser printer\u2019s fuser area or disassemble an inkjet print head unless you have the manufacturer\u2019s instructions and appropriate experience.',
    ],
    covers: [
      'Offline and not-responding printers',
      'Jobs stuck in the print queue',
      'Blank pages and faded prints',
      'Wi-Fi and network printer setup',
      'Paper jams and feed problems',
      'Drivers, ports and default printers',
    ],
    faqs: [
      {
        q: 'Why does my printer show offline when it is switched on?',
        a: 'A powered printer is not automatically reachable. The computer may be using the wrong port, the printer may have dropped off Wi-Fi, or the queue may be paused. Check the printer\u2019s own network status and the port selected in the print queue before reinstalling drivers.',
      },
      {
        q: 'Can a printer print blank pages if the ink is full?',
        a: 'Yes. A clogged print head, protective tape left on a new cartridge, an empty toner cartridge, or a paper mismatch can produce blank output even when ink levels look healthy. A nozzle check pattern is the quickest way to see whether the print head is firing.',
      },
      {
        q: 'Do I need the manufacturer\u2019s driver, or will the built-in driver work?',
        a: 'Windows and macOS include basic drivers for many printers, which may be enough for standard printing. For scanning, colour management, or advanced trays, install the driver from the manufacturer\u2019s official site rather than a third-party driver download page.',
      },
    ],
    related: ['computer-problems', 'internet-wifi-problems', 'software-problems'],
    featured: true,
  },
  {
    slug: 'email-problems',
    name: 'Email Problems',
    navLabel: 'Email',
    icon: 'mail',
    tagline: 'Gmail, Outlook and mail sync problems, from missing mail to passwords.',
    metaDescription:
      'Email troubleshooting for Gmail and Outlook: messages not arriving, sync failures, storage limits, spam filtering, login problems and server settings.',
    intro: [
      'Email failures are rarely random. A message may be delivered but filtered, an account may be full, a mail app may be using an outdated password, or a provider may be blocking sign-in from a client. Finding out which stage is failing turns a vague \u201cemail is broken\u201d problem into a specific fix.',
      'These guides cover Gmail and Outlook first because they account for many queries, but the same diagnostic ideas apply to other providers. You will check webmail versus an app, spam and blocked senders, storage, forwarding rules, and server settings. Never send your password, recovery code, or app-specific token to anyone who offers to fix your account; legitimate support will not ask for them.',
    ],
    covers: [
      'Mail not arriving in Gmail or Outlook',
      'Sync and send/receive failures',
      'Spam filters and blocked senders',
      'Storage limits and archiving',
      'Password and sign-in errors',
      'IMAP, POP and SMTP settings',
    ],
    faqs: [
      {
        q: 'Why can I send email but not receive it?',
        a: 'Sending and receiving use different servers, so a partial failure is normal. Check spam and blocked senders, mailbox storage, forwarding rules, and whether the provider is holding messages. If webmail receives mail but an app does not, the app or its sync settings are the likely cause.',
      },
      {
        q: 'Is it safe to give someone my email password for support?',
        a: 'No. Legitimate support staff do not need your password. If a provider offers remote assistance, they will use account recovery or an authorised process. Change your password immediately if you have already shared it, and review recent account activity.',
      },
      {
        q: 'How full is too full for an email account?',
        a: 'Most providers warn you as you approach the quota; a full mailbox can reject new messages. Check the storage indicator in the provider\u2019s settings, empty large attachments and trash, and archive old mail if your plan supports it. Deleting mail in one app may not empty the server trash.',
      },
    ],
    related: ['account-login-problems', 'browser-problems', 'software-problems'],
    featured: true,
  },
  {
    slug: 'software-problems',
    name: 'Software Problems',
    navLabel: 'Software',
    icon: 'software',
    tagline: 'Apps that will not open, install, update or run correctly.',
    metaDescription:
      'Software troubleshooting for applications that will not open, installation failures, update errors, missing runtimes, permissions and crashes on Windows and macOS.',
    intro: [
      'Software problems can look like hardware failures. A program that refuses to launch may be blocked by a security tool, missing a dependency, or trying to use a profile that has become corrupted. An installer that stops halfway may be out of disk space, blocked by a policy, or incompatible with the operating system.',
      'This section covers the practical checks that come before reinstalling everything: verifying system requirements, restarting cleanly, checking permissions, clearing caches, and reading the actual error message. Guides distinguish between damaged application data and damaged system components. Where a fix requires downloading software, they direct you to the developer\u2019s official source rather than a generic download site.',
    ],
    covers: [
      'Applications that will not launch',
      'Installation and update failures',
      'Crashes and frozen windows',
      'Permissions and security prompts',
      'Missing runtimes and dependencies',
      'Licensing and activation errors',
    ],
    faqs: [
      {
        q: 'Why does an app close immediately after I open it?',
        a: 'The app may be crashing during startup because of corrupted settings, an incompatible update, a missing component, or a security policy. Check for an error message, try a clean restart, and reset the app\u2019s own settings before reinstalling it.',
      },
      {
        q: 'Is it safe to download a missing DLL or runtime file from a random website?',
        a: 'No. Use the software developer\u2019s official installer or the runtime\u2019s official Microsoft, Apple, or vendor page. Unofficial DLL downloads can contain malware and may not match your system architecture.',
      },
      {
        q: 'Does reinstalling an app always remove my files?',
        a: 'Usually your documents remain, but app settings and local databases may be removed depending on the uninstaller and whether you choose to keep data. Back up anything important inside the app before uninstalling, and check the developer\u2019s guidance.',
      },
    ],
    related: ['windows-problems', 'mac-problems', 'browser-problems'],
    featured: false,
  },
  {
    slug: 'smart-tv-problems',
    name: 'Smart TV Problems',
    navLabel: 'Smart TVs',
    icon: 'tv',
    tagline: 'Wi-Fi, apps, sound and picture problems on Samsung, LG, Sony, TCL and more.',
    metaDescription:
      'Smart TV troubleshooting: TVs that will not connect to Wi-Fi, missing sound, black screens, app failures, firmware updates and input problems.',
    intro: [
      'Smart TVs hide a small computer behind the display. That computer runs apps, stores credentials, receives firmware updates, and negotiates HDMI and audio settings. When a TV cannot connect to Wi-Fi or an app will not load, the fix may be in the TV, the router, the app, or the HDMI chain.',
      'These guides use the settings paths shared by major brands and point out where Samsung, LG, Sony, and other menus differ. They start with input and network checks that do not erase anything, then move to app reinstallation, a soft power reset, and firmware updates. A factory reset removes accounts and picture settings, so it is reserved for cases where safer steps have failed.',
    ],
    covers: [
      'Smart TV Wi-Fi and network setup',
      'No sound and audio output settings',
      'Black screens and input problems',
      'App installation and playback errors',
      'Firmware and software updates',
      'Remote and Bluetooth pairing',
    ],
    faqs: [
      {
        q: 'Why will my smart TV not connect to Wi-Fi when my phone can?',
        a: 'The TV may be on the 5 GHz band at the edge of its range, using an outdated password, or blocked by router settings. Try a 2.4 GHz network if available, re-enter the password, and check whether the router has client isolation or MAC filtering enabled.',
      },
      {
        q: 'Does unplugging a TV for a minute really fix sound problems?',
        a: 'A full power cycle clears temporary states in the TV\u2019s electronics and can resolve audio handshake problems. Unplug the TV, wait about a minute, and plug it back in. If sound returns only until the next app launch, check the app and audio output settings instead.',
      },
      {
        q: 'Should I update my TV\u2019s firmware?',
        a: 'Install updates from the TV manufacturer when they are available, especially security and app-compatibility fixes. Use the TV\u2019s own update menu rather than a third-party firmware file. Do not switch the TV off while an update is installing.',
      },
    ],
    related: ['streaming-device-problems', 'internet-wifi-problems', 'router-network-problems'],
    featured: true,
  },
  {
    slug: 'streaming-device-problems',
    name: 'Streaming Device Problems',
    navLabel: 'Streaming Devices',
    icon: 'streaming',
    tagline: 'Roku, Fire TV, Chromecast and Apple TV buffering, setup and remote issues.',
    metaDescription:
      'Fix streaming device problems: buffering, devices that will not turn on, remote pairing, Wi-Fi drops, app errors and HDMI or audio issues.',
    intro: [
      'Streaming sticks and boxes depend on three things working together: the device, the local network, and the streaming service. Buffering can come from any of them. A remote that stops responding may need pairing, fresh batteries, or a clear line of sight. A device with no picture may be powered but not selected on the correct HDMI input.',
      'This section covers Roku, Amazon Fire TV, Google Chromecast and Android TV, and Apple TV with notes on where menus differ. Guides begin with power, input, and network checks, then move to app-level fixes and safe restarts. Account sign-out and factory resets are flagged because they remove saved services and preferences. You will also find realistic advice about internet speed, router placement, and when the service itself may be at fault.',
    ],
    covers: [
      'Buffering and playback quality',
      'Devices that will not power on',
      'Remote pairing and controls',
      'Wi-Fi and Ethernet connectivity',
      'App sign-in and update errors',
      'HDMI, audio and display settings',
    ],
    faqs: [
      {
        q: 'How much internet speed do I need to stream?',
        a: 'Requirements vary by service and resolution. As a rough guide, standard definition needs a few megabits per second, HD needs more, and 4K needs a stable connection well above that. Stability and Wi-Fi signal matter as much as the headline speed.',
      },
      {
        q: 'Why does only one streaming app buffer?',
        a: 'If other apps play normally, the device and network are probably healthy. The specific app may have a cache problem, an outdated version, or a service-side issue. Restart the app, check for updates, and test the same service on another device.',
      },
      {
        q: 'Should I factory reset my streaming device?',
        a: 'Try a restart, app update, and network check first. A factory reset removes your accounts and preferences, so you will need to sign in again. It is reasonable when the device is persistently unstable and you have recorded your login details.',
      },
    ],
    related: ['smart-tv-problems', 'internet-wifi-problems', 'router-network-problems'],
    featured: false,
  },
  {
    slug: 'browser-problems',
    name: 'Browser Problems',
    navLabel: 'Browsers',
    icon: 'browser',
    tagline: 'Chrome, Edge, Firefox and Safari crashes, slowdowns and loading errors.',
    metaDescription:
      'Browser troubleshooting for Chrome, Edge, Firefox and Safari: crashes, pages that will not load, extensions, cache problems and profile errors.',
    intro: [
      'A browser problem can look like an internet problem. If one site fails in one browser while other sites load, the network is probably fine. If every browser fails, the operating system\u2019s network settings or the connection itself deserve attention. Separating those cases is the first useful test.',
      'These guides cover crashes, slow pages, certificate warnings, redirects, extensions, and profiles. They use each browser\u2019s built-in settings and avoid recommending registry cleaners or \u201cspeed booster\u201d tools. Clearing browsing data is presented with its consequences: it can sign you out and remove saved form entries. Bookmarks and passwords sync only when you are signed in and sync is enabled.',
    ],
    covers: [
      'Browsers that crash or freeze',
      'Websites that will not load',
      'Extension and profile conflicts',
      'Cache, cookies and site data',
      'Certificate and privacy warnings',
      'Search redirects and unwanted changes',
    ],
    faqs: [
      {
        q: 'How do I know if a website is down or my browser is broken?',
        a: 'Try the same site in another browser or on another device. If it fails everywhere, the site or your network is the likely cause. If it fails only in one browser, clear that browser\u2019s cache, disable extensions, or try a private window.',
      },
      {
        q: 'Will clearing my browser cache delete my passwords?',
        a: 'Clearing cache and cookies can sign you out of sites, but saved passwords are stored separately in the password manager. Still, review the checkboxes in the clear-data dialog so you do not remove history, passwords, or autofill data you intended to keep.',
      },
      {
        q: 'Is a private window a real fix for browser problems?',
        a: 'It is a useful diagnostic. A private window usually starts without extensions and with a clean session. If the site works there, an extension, cache entry, or cookie is likely responsible. It is not a permanent privacy or security guarantee.',
      },
    ],
    related: ['internet-wifi-problems', 'software-problems', 'account-login-problems'],
    featured: true,
  },
  {
    slug: 'gaming-peripheral-problems',
    name: 'Gaming & Peripheral Problems',
    navLabel: 'Gaming & Peripherals',
    icon: 'gamepad',
    tagline: 'Controllers, headsets, Bluetooth and USB devices that will not connect.',
    metaDescription:
      'Fix gaming and peripheral problems: controllers that will not pair, Bluetooth devices that will not connect, headset audio issues, USB recognition and drivers.',
    intro: [
      'Controllers, headsets, keyboards, and mice are simple devices with several possible connection paths: USB, Bluetooth, a proprietary wireless receiver, or a console-specific protocol. When one stops working, the cause is often pairing, power, or the port rather than a failed device.',
      'Guides in this section cover Bluetooth pairing on Windows, macOS, Android, iOS, and consoles, plus wired USB recognition and audio routing. They explain how to remove stale pairings, update firmware through official tools, and test a device on a second system. If a controller or headset shows physical damage or will not charge, stop forcing connections and treat it as a hardware problem.',
    ],
    covers: [
      'Bluetooth pairing failures',
      'Controller connection and drift',
      'Headset microphone and audio',
      'USB device recognition',
      'Wireless receivers and dongles',
      'Console and PC peripheral setup',
    ],
    faqs: [
      {
        q: 'Why will my Bluetooth device not appear in the list?',
        a: 'The device may not be in pairing mode, may be paired to another phone or computer, or may have a depleted battery. Remove old pairings, put the device into pairing mode using its manufacturer\u2019s instructions, and keep it close during discovery.',
      },
      {
        q: 'Do controller drift and connection drops have the same cause?',
        a: 'No. Connection drops usually involve pairing, interference, or power. Analog stick drift is a physical or calibration issue in the controller. Firmware updates can help some controllers, but drift often requires repair or replacement.',
      },
      {
        q: 'Can I use a Bluetooth headset with a games console?',
        a: 'It depends on the console. Some support only their own wireless protocol or a USB adapter. Check the console manufacturer\u2019s official compatibility information before assuming a standard Bluetooth headset will pair.',
      },
    ],
    related: ['computer-problems', 'software-problems', 'phone-problems'],
    featured: false,
  },
  {
    slug: 'storage-backup-problems',
    name: 'Storage, Backup & Data Problems',
    navLabel: 'Storage & Backups',
    icon: 'storage',
    tagline: 'Drives that disappear, full disks, failed backups and data recovery.',
    metaDescription:
      'Storage and backup troubleshooting: external drives not detected, USB drives not recognised, full disks, failed backups and protecting data before repairs.',
    intro: [
      'Storage problems are different from most other tech problems because the data matters more than the device. A drive that is not detected may have a cable fault, a partition problem, or a failing disk. The wrong repair attempt can turn a recoverable situation into permanent data loss.',
      'These guides prioritise preservation. They explain how to check cables and ports, read Disk Management or Disk Utility without writing to the disk, recognise warning signs such as clicking or repeated disconnects, and verify that a backup actually contains your files. Formatting, initialising, and repairing a volume are treated as destructive or potentially destructive steps, with a backup warning before each one.',
    ],
    covers: [
      'External drives not detected',
      'USB drives and memory cards',
      'Full disks and storage pressure',
      'Backup verification',
      'Drive health warnings',
      'Data recovery preparation',
    ],
    faqs: [
      {
        q: 'My external drive is not showing up. Should I format it?',
        a: 'Not until you know why. Formatting can erase the partition table and make recovery harder. Check the cable, port, and another computer first, then look at Disk Management or Disk Utility to see whether the drive is detected but lacks a readable volume.',
      },
      {
        q: 'Does a clicking hard drive mean all data is lost?',
        a: 'No, but it is a serious warning. Stop powering the drive repeatedly and do not attempt consumer recovery software on a drive that is clicking, grinding, or not spinning consistently. A professional data-recovery service may be the safest option for important data.',
      },
      {
        q: 'How do I know my backup is working?',
        a: 'Open the backup and restore a sample file to a different location. Check the date of the most recent backup and whether it includes the folders you expect. A backup you have never tested is only a possibility, not a confirmed copy.',
      },
    ],
    related: ['computer-problems', 'mac-problems', 'windows-problems'],
    featured: true,
  },
  {
    slug: 'account-login-problems',
    name: 'Account & Login Problems',
    navLabel: 'Accounts & Login',
    icon: 'account',
    tagline: 'Passwords, two-factor codes, lockouts and account recovery.',
    metaDescription:
      'Account and login troubleshooting: forgotten passwords, two-factor authentication codes that fail, locked accounts, recovery options and keeping accounts secure.',
    intro: [
      'Account problems are stressful because the recovery process is deliberately restrictive. A password reset may require access to an old phone number, a backup email, or a signed-in device. Two-factor codes can fail because of clock drift, a changed phone, or a backup code that was never saved.',
      'These guides explain the supported recovery paths for major platforms and the order to try them. They never ask you to share a password, one-time code, or recovery key, and they warn about messages that imitate support staff. Where an account may have been compromised, the priority shifts from regaining access to securing the account and any connected payment or email services.',
    ],
    covers: [
      'Forgotten passwords and resets',
      'Two-factor and verification codes',
      'Locked and disabled accounts',
      'Recovery email and phone updates',
      'Suspicious sign-in activity',
      'Passkeys and security keys',
    ],
    faqs: [
      {
        q: 'Why is my two-factor code rejected?',
        a: 'The most common causes are a code that has already expired, a device clock that is not set automatically, or a code from the wrong account. Wait for a fresh code, check the device time, and use a backup code if you have one. Do not share the code with anyone.',
      },
      {
        q: 'Can FixProblemNow recover my account for me?',
        a: 'No. Only the service that operates the account can reset it. We explain the official recovery steps and help you prepare the information a provider may ask for, but we cannot access, unlock, or change your account.',
      },
      {
        q: 'What should I do if I think my account was hacked?',
        a: 'Change the password from a device you trust, sign out other sessions, enable two-factor authentication, and check recovery settings and forwarding rules. If payment details are stored, review recent transactions and contact the provider through its official support channel.',
      },
    ],
    related: ['email-problems', 'browser-problems', 'phone-problems'],
    featured: false,
  },
  {
    slug: 'other-tech-problems',
    name: 'Other Technology Problems',
    navLabel: 'Other Tech',
    icon: 'grid',
    tagline: 'Smart home, wearables, cameras and the devices that do not fit elsewhere.',
    metaDescription:
      'Troubleshooting for other technology: smart home devices, wearables, security cameras, e-readers, projectors and everyday gadgets that will not connect.',
    intro: [
      'Not every technology problem belongs in a tidy category. Smart plugs, video doorbells, fitness trackers, e-readers, projectors, and older gadgets all combine an app, a wireless connection, and a manufacturer account. When one fails, the same basic questions apply: is it powered, is it on the right network, and is the app or service working?',
      'This section collects practical guidance for those devices without pretending that every model behaves the same. You will find advice on 2.4 GHz versus 5 GHz Wi-Fi, app permissions, firmware updates, and account hand-offs when a device changes owners. Where a manufacturer has a specific reset or pairing procedure, follow its official instructions rather than a generic sequence.',
    ],
    covers: [
      'Smart home hubs and plugs',
      'Video doorbells and cameras',
      'Wearables and fitness trackers',
      'E-readers and tablets',
      'Projectors and streaming accessories',
      'Device handover and account removal',
    ],
    faqs: [
      {
        q: 'Why do some smart home devices need 2.4 GHz Wi-Fi?',
        a: 'Many low-power smart devices use a Wi-Fi chip that supports only the 2.4 GHz band. If your router uses one network name for both bands, the device may fail to join. Check the manufacturer\u2019s setup instructions for band requirements and any supported split-network method.',
      },
      {
        q: 'What should I do before giving away a smart device?',
        a: 'Remove it from your account using the manufacturer\u2019s app, perform a factory reset, and delete any saved recordings or personal data. Simply deleting the app does not unlink the device from your account.',
      },
      {
        q: 'Is a firmware update always safe?',
        a: 'Official updates usually improve security and compatibility, but they can occasionally introduce new problems. Install them when you can keep the device powered and connected, and avoid interrupting the process. If a device is working and unsupported by the manufacturer, weigh the risk before updating.',
      },
    ],
    related: ['smart-tv-problems', 'internet-wifi-problems', 'gaming-peripheral-problems'],
    featured: false,
  },
];

export const categoryBySlug = new Map(categories.map((category) => [category.slug, category]));

export function getCategory(slug: string): Category {
  const category = categoryBySlug.get(slug);
  if (!category) throw new Error(`Unknown category: ${slug}`);
  return category;
}

export function categoryName(slug: string): string {
  return getCategory(slug).name;
}
