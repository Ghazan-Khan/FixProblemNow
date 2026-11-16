---
title: "Outlook Not Syncing Emails: Fix the Desktop and Web"
seoTitle: "Outlook Not Syncing? Fix Send and Receive"
description: "Fix Outlook when new mail does not arrive, sends stay in the outbox, or folders stop updating. Compare with Outlook on the web before repairing anything."
summary: "Outlook sync problems are usually connection, account, mailbox size, or local profile issues. Checking Outlook on the web first tells you whether the mail is reaching the mailbox or the desktop app is failing to collect it."
quickAnswer: "Open Outlook on the web and check whether new mail is there. If it is, the desktop app has a sync or profile problem: check the connection status, use Send/Receive, restart Outlook, and repair the Office installation. If web is also missing mail, check the account, mailbox storage, and provider status."
category: email-problems
keywords:
  - "outlook not syncing"
  - "outlook not receiving emails"
  - "outlook stuck on connecting"
  - "outlook send receive not working"
  - "outlook outbox stuck"
  - "outlook offline"
symptoms:
  - "New messages appear in Outlook on the web but not in the desktop app."
  - "The status bar says Disconnected, Working Offline, or Trying to connect."
  - "Messages stay in the Outbox and are not sent."
  - "Folders update on one device but not another."
  - "Outlook is slow, freezes, or shows a sync error."
causes:
  - title: "Network or provider connectivity"
    detail: "A dropped connection, VPN, firewall, or provider outage can stop Outlook from reaching the mail server."
  - title: "Outlook is working offline"
    detail: "The app can be set to work offline and will not send or receive until the setting is turned off."
  - title: "Mailbox full or a blocked attachment"
    detail: "A full mailbox or an oversized message can stop sending and may prevent new mail from being delivered."
  - title: "Corrupted local profile or data file"
    detail: "The local cache or Outlook profile can become damaged, especially after a crash or an interrupted update."
  - title: "Account settings or authentication"
    detail: "A changed password, expired token, or incorrect server setting can leave the account disconnected."
prep:
  - "Access to Outlook on the web"
  - "The account password and any multi-factor device"
  - "The mailbox storage status"
  - "The exact error message or status text"
safetyNotes:
  - "Do not delete the Outlook profile or local data file until you have a backup or know the mail is on the server."
  - "Do not disable your security software permanently to make Outlook connect."
  - "Do not enter your password into a support tool or add-in you did not install deliberately."
faqs:
  - q: "How do I know whether Outlook is offline?"
    a: "Look at the status bar at the bottom of the Outlook window. It may say Working Offline, Disconnected, or Trying to connect. Open the Send/Receive tab and check the Work Offline button; if it is highlighted, click it to go back online."
  - q: "Why is mail in Outlook on the web but not in the desktop app?"
    a: "The mailbox has the message, so the server is fine. The desktop app is failing to sync, often because of a damaged local cache, a profile problem, or a connection issue. Restart Outlook, check the connection status, and repair Office before recreating the profile."
  - q: "What should I do if messages are stuck in the Outbox?"
    a: "Check that you are online and that the message has no oversized attachment. Open the Outbox, move the message to Drafts, and try sending a short test message. If the test sends, the original message is the problem. Do not delete the Outbox file directly."
  - q: "Will repairing Office delete my email?"
    a: "A standard repair does not remove your mailbox or account. A quick repair is low risk; an online repair reinstalls Office components but should keep your data. Back up important local items and confirm where your mail is stored before any repair."
  - q: "When should I contact my administrator or provider?"
    a: "Contact them if Outlook on the web is also missing mail, if the account is over quota, if authentication fails after a password reset, or if the provider reports an outage. Work or school accounts may have policies that block the desktop client."
related:
  - gmail-not-receiving-emails
  - cant-log-in-to-account
  - application-wont-open
  - one-device-cannot-connect-to-wifi
published: 2026-11-15
updated: 2026-11-15
featured: false
difficulty: Beginner
time: "20–45 minutes"
risk: Low
verification: "Send a test message from another account and confirm it appears in both Outlook on the web and the desktop app. Check that the status bar shows Connected and that a reply leaves the Outbox. Restart Outlook once and confirm sync resumes without a manual refresh."
whenToStop: "Stop before deleting a profile or local data file if you are unsure where the mail is stored. Stop if the account shows unfamiliar activity or repeated password prompts after a reset. Contact your administrator for work or school accounts rather than changing server settings."
sources:
  - label: "Microsoft Support: Fix Outlook connection problems"
    url: "https://support.microsoft.com/outlook"
  - label: "Microsoft Support: Repair Office applications"
    url: "https://support.microsoft.com/office"
  - label: "Microsoft Support: Outlook not sending or receiving"
    url: "https://support.microsoft.com/outlook"
  - label: "Microsoft 365 status"
    url: "https://status.office365.com/"
---

## Check the web inbox first

Open Outlook on the web and send yourself a test message from another account.

- **Web has the message, desktop does not:** the mailbox is fine and the desktop app is failing to sync.
- **Neither has the message:** the mail has not reached the mailbox, or the account is not receiving it. Check storage, the provider status, and the sender.

This one check prevents most unnecessary profile repairs.

## Fix the desktop app

### 1. Check the connection status

Look at the bottom status bar. If it says Working Offline, open the Send/Receive tab and turn off Work Offline. If it says Disconnected, check that the computer has internet access and that a VPN or firewall is not blocking Outlook.

### 2. Use Send/Receive and restart

Press F9 or use Send/Receive > Send/Receive All Folders. Then close Outlook completely and reopen it. A restart clears a surprising number of temporary sync faults.

### 3. Check the Outbox

If messages are stuck, open the Outbox and look for a large attachment or a message with an error. Move the message to Drafts, then send a short test message. If the test sends, the original message or attachment is the problem.

### 4. Check mailbox storage

Open the account settings or the web mailbox and check the quota. A full mailbox can block sending and receiving. Empty Deleted Items, archive large attachments, and remove items you no longer need.

### 5. Repair Office

Open Settings > Apps > Microsoft 365 or Office > Modify > Quick Repair. If that does not help, run Online Repair. Both keep your account and mailbox, but close Outlook first and allow time for the repair.

### 6. Recreate the Outlook profile

If the app still will not sync, create a new Outlook profile and add the same account. This replaces the local profile settings without deleting the mailbox on the server. Keep the old profile until the new one works, in case you need to refer to local settings.

### 7. Check account authentication

If Outlook keeps asking for a password, sign in to the web mailbox first. A password change, expired token, or multi-factor prompt can leave the desktop client disconnected. Remove the saved credential only if you can sign in again with the current password.

## If mail is still missing

- **Check the provider status page** for an outage.
- **Check spam, junk, and rules** in Outlook on the web. Server-side rules apply to every device.
- **Ask the sender for a bounce message** if their mail never arrives.
- **Contact your administrator** for a work or school account. Server policies may block the desktop client or a specific attachment type.

> [!WARNING]
> Do not delete the local Outlook data file to “reset” sync unless the mail is safely on the server and you have confirmed the account type. For some accounts, local data is the only copy of certain items.

## Confirm the fix

Send a test from another account, confirm it appears on the web and in the desktop app, and check that a reply leaves the Outbox. Restart Outlook and confirm the status stays Connected. If the problem only affects one folder, check for a rule or a sync filter on that folder.
