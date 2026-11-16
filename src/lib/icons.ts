/**
 * Small, original stroke icon set. All icons use a 24x24 viewBox and inherit
 * stroke colour, width, and line caps from the parent SVG.
 */
export const icons = {
  laptop:
    '<rect x="3" y="5" width="18" height="11" rx="2"/><path d="M2 19h20"/><path d="M10 16h4"/>',
  windows:
    '<rect x="3.5" y="3.5" width="7.5" height="7.5" rx="1"/><rect x="13" y="3.5" width="7.5" height="7.5" rx="1"/><rect x="3.5" y="13" width="7.5" height="7.5" rx="1"/><rect x="13" y="13" width="7.5" height="7.5" rx="1"/>',
  mac:
    '<rect x="3" y="4" width="18" height="12" rx="2"/><path d="M8 20h8M12 16v4"/><path d="M10.5 8.5h3"/>',
  phone:
    '<rect x="6.5" y="2.5" width="11" height="19" rx="2.5"/><path d="M10.5 5h3"/><circle cx="12" cy="18" r="0.75" fill="currentColor" stroke="none"/>',
  android:
    '<rect x="6" y="3" width="12" height="18" rx="3"/><path d="M9 8h6"/><circle cx="10" cy="15" r="0.75" fill="currentColor" stroke="none"/><circle cx="14" cy="15" r="0.75" fill="currentColor" stroke="none"/>',
  iphone:
    '<rect x="6.5" y="2" width="11" height="20" rx="3"/><path d="M10 4.5h4"/><path d="M9.5 17.5h5"/>',
  wifi:
    '<path d="M2.5 8.5a15 15 0 0 1 19 0"/><path d="M5.5 12a10.5 10.5 0 0 1 13 0"/><path d="M8.8 15.5a5.5 5.5 0 0 1 6.4 0"/><circle cx="12" cy="19" r="1" fill="currentColor" stroke="none"/>',
  router:
    '<rect x="3" y="13" width="18" height="7" rx="2"/><path d="M7 13V9M17 13V9M7 9 5 4M17 9l2-5"/><circle cx="7.5" cy="16.5" r="0.75" fill="currentColor" stroke="none"/><circle cx="16.5" cy="16.5" r="0.75" fill="currentColor" stroke="none"/>',
  printer:
    '<path d="M7 8V3h10v5"/><rect x="3" y="8" width="18" height="9" rx="2"/><path d="M7 14h10v7H7z"/><circle cx="17.5" cy="11" r="0.75" fill="currentColor" stroke="none"/>',
  mail:
    '<rect x="3" y="5" width="18" height="14" rx="2"/><path d="m3.5 7 8.5 6 8.5-6"/>',
  software:
    '<rect x="3" y="4" width="18" height="16" rx="2"/><path d="M3 8h18"/><circle cx="6" cy="6" r="0.5" fill="currentColor" stroke="none"/><path d="m8 12-2 2 2 2M12 16h4"/>',
  tv:
    '<rect x="3" y="5" width="18" height="12" rx="2"/><path d="M8 21h8M12 17v4"/>',
  streaming:
    '<rect x="3" y="5" width="18" height="14" rx="3"/><path d="m10 9 5 3-5 3z"/>',
  browser:
    '<rect x="3" y="5" width="18" height="14" rx="2"/><path d="M3 9h18"/><path d="M6 7h.01M9 7h.01"/>',
  gamepad:
    '<path d="M7 7h10a5 5 0 0 1 5 5v4a2.5 2.5 0 0 1-4.4 1.7L16 16H8l-1.6 1.7A2.5 2.5 0 0 1 2 16v-4a5 5 0 0 1 5-5z"/><path d="M6 11h4M8 9v4"/><circle cx="16" cy="11" r="0.75" fill="currentColor" stroke="none"/><circle cx="18" cy="13" r="0.75" fill="currentColor" stroke="none"/>',
  storage:
    '<rect x="3" y="5" width="18" height="6" rx="2"/><rect x="3" y="13" width="18" height="6" rx="2"/><path d="M7 8h.01M7 16h.01"/>',
  account:
    '<circle cx="12" cy="8" r="4"/><path d="M4 21c0-4 3.6-6 8-6s8 2 8 6"/>',
  grid:
    '<rect x="3" y="3" width="7" height="7" rx="1.5"/><rect x="14" y="3" width="7" height="7" rx="1.5"/><rect x="3" y="14" width="7" height="7" rx="1.5"/><rect x="14" y="14" width="7" height="7" rx="1.5"/>',
  search: '<circle cx="11" cy="11" r="7"/><path d="m20 20-3.5-3.5"/>',
  'arrow-right': '<path d="M4 12h16M14 6l6 6-6 6"/>',
  'arrow-up': '<path d="M12 20V4M6 10l6-6 6 6"/>',
  'chevron-down': '<path d="m6 9 6 6 6-6"/>',
  'chevron-right': '<path d="m9 6 6 6-6 6"/>',
  check: '<path d="m4 12.5 5 5L20 6.5"/>',
  shield:
    '<path d="M12 3 5 6v6c0 4.5 3 7.5 7 9 4-1.5 7-4.5 7-9V6z"/><path d="m9 12 2 2 4-4"/>',
  clock: '<circle cx="12" cy="12" r="9"/><path d="M12 7v5l3.5 2"/>',
  alert:
    '<path d="M12 3 2.5 20h19z"/><path d="M12 9v5"/><circle cx="12" cy="17" r="0.75" fill="currentColor" stroke="none"/>',
  info: '<circle cx="12" cy="12" r="9"/><path d="M12 11v5"/><circle cx="12" cy="8" r="0.75" fill="currentColor" stroke="none"/>',
  wrench:
    '<path d="M14.5 6.5a4.5 4.5 0 0 0-6 5.8L4 16.8V20h3.2l4.5-4.5a4.5 4.5 0 0 0 5.8-6L14.8 12l-2.8-2.8z"/>',
  menu: '<path d="M4 7h16M4 12h16M4 17h16"/>',
  close: '<path d="m6 6 12 12M18 6 6 18"/>',
  external: '<path d="M14 4h6v6M20 4l-9 9"/><path d="M18 14v5a1 1 0 0 1-1 1H5a1 1 0 0 1-1-1V7a1 1 0 0 1 1-1h5"/>',
  spark: '<path d="M12 3v4M12 17v4M3 12h4M17 12h4M5.6 5.6l2.8 2.8M15.6 15.6l2.8 2.8M18.4 5.6l-2.8 2.8M8.4 15.6l-2.8 2.8"/><circle cx="12" cy="12" r="2.5"/>',
  'thumbs-up':
    '<path d="M7 10v10H4a1 1 0 0 1-1-1v-8a1 1 0 0 1 1-1z"/><path d="M7 10l4-7a2 2 0 0 1 2 2v4h4.5a2 2 0 0 1 2 2.4l-1.2 6a2 2 0 0 1-2 1.6H7"/>',
  'thumbs-down':
    '<path d="M7 14V4H4a1 1 0 0 0-1 1v8a1 1 0 0 0 1 1z"/><path d="M7 14l4 7a2 2 0 0 0 2-2v-4h4.5a2 2 0 0 0 2-2.4l-1.2-6a2 2 0 0 0-2-1.6H7"/>',
  refresh:
    '<path d="M20 11a8 8 0 0 0-14.9-4M4 4v5h5"/><path d="M4 13a8 8 0 0 0 14.9 4M20 20v-5h-5"/>',
  battery:
    '<rect x="2" y="8" width="17" height="9" rx="2"/><path d="M22 11v3"/><path d="M5 11h6"/>',
  plug: '<path d="M9 3v6M15 3v6"/><path d="M6 9h12v2a6 6 0 0 1-12 0z"/><path d="M12 17v4"/>',
  bluetooth: '<path d="m6 7 12 10-6 4V3l6 4L6 17"/>',
  volume:
    '<path d="M4 9v6h4l5 4V5L8 9z"/><path d="M16 9a4 4 0 0 1 0 6"/><path d="M18.5 6.5a8 8 0 0 1 0 11"/>',
  key: '<circle cx="8" cy="15" r="4"/><path d="m11 12 9-9M16 4l4 4M14 6l4 4"/>',
  lock: '<rect x="4" y="10" width="16" height="11" rx="2"/><path d="M8 10V7a4 4 0 0 1 8 0v3"/><path d="M12 14v3"/>',
  database:
    '<ellipse cx="12" cy="6" rx="8" ry="3"/><path d="M4 6v6c0 1.7 3.6 3 8 3s8-1.3 8-3V6"/><path d="M4 12v6c0 1.7 3.6 3 8 3s8-1.3 8-3v-6"/>',
  monitor: '<rect x="3" y="4" width="18" height="13" rx="2"/><path d="M8 21h8M12 17v4"/>',
  usb: '<path d="M12 21V6"/><path d="m9 9 3-3 3 3"/><rect x="9.5" y="18" width="5" height="3" rx="1"/><path d="M12 12h4l2 2M12 16H8l-2-2"/>',
  home: '<path d="m3 11 9-8 9 8"/><path d="M5 10v10h14V10"/><path d="M10 20v-6h4v6"/>',
  book: '<path d="M4 4h7a3 3 0 0 1 3 3v13a3 3 0 0 0-3-3H4z"/><path d="M20 4h-4a3 3 0 0 0-3 3v13a3 3 0 0 1 3-3h4z"/>',
  plus: '<path d="M12 5v14M5 12h14"/>',
  minus: '<path d="M5 12h14"/>',
  copy: '<rect x="9" y="9" width="11" height="11" rx="2"/><path d="M15 9V5a1 1 0 0 0-1-1H5a1 1 0 0 0-1 1v9a1 1 0 0 0 1 1h4"/>',
  headphones:
    '<path d="M4 14v-2a8 8 0 0 1 16 0v2"/><rect x="3" y="14" width="4" height="6" rx="1.5"/><rect x="17" y="14" width="4" height="6" rx="1.5"/>',
} as const;

export type IconName = keyof typeof icons;
