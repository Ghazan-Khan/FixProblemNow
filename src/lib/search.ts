/**
 * Shared, dependency-free search used by the search page and the header/hero
 * autocomplete. The index is generated at build time from published guides.
 */

export interface SearchDoc {
  id: string;
  url: string;
  title: string;
  category: string;
  categoryName: string;
  summary: string;
  keywords: string[];
  headings: string[];
  body: string;
  updated: string;
}

export interface SearchResult {
  doc: SearchDoc;
  score: number;
  matchedHeadings: string[];
}

const STOPWORDS = new Set([
  'a', 'an', 'and', 'are', 'as', 'at', 'be', 'been', 'but', 'by', 'can', 'cant', 'could',
  'did', 'do', 'does', 'dont', 'for', 'from', 'get', 'gets', 'got', 'had', 'has', 'have',
  'how', 'i', 'if', 'in', 'into', 'is', 'it', 'its', 'may', 'might', 'my', 'no', 'not',
  'of', 'on', 'or', 'our', 'so', 'that', 'the', 'their', 'then', 'there', 'these', 'this',
  'to', 'was', 'we', 'were', 'what', 'when', 'where', 'which', 'why', 'will', 'with',
  'wont', 'would', 'you', 'your', 'fix', 'fixes', 'fixing', 'problem', 'problems',
  'issue', 'issues', 'help', 'guide', 'guides',
]);

const SYNONYMS: Record<string, string[]> = {
  wifi: ['wifi', 'wireless', 'wlan'],
  internet: ['internet', 'online', 'web', 'broadband'],
  network: ['network', 'router', 'connection', 'connectivity'],
  laptop: ['laptop', 'notebook', 'macbook'],
  computer: ['computer', 'pc', 'desktop', 'machine'],
  phone: ['phone', 'mobile', 'smartphone', 'cellphone'],
  iphone: ['iphone', 'ios', 'apple'],
  android: ['android', 'samsung', 'pixel'],
  printer: ['printer', 'printing', 'print'],
  email: ['email', 'mail', 'inbox', 'gmail', 'outlook'],
  charge: ['charge', 'charging', 'charger', 'power'],
  battery: ['battery', 'charge', 'power'],
  screen: ['screen', 'display', 'monitor'],
  black: ['black', 'blank', 'dark'],
  slow: ['slow', 'lag', 'lagging', 'sluggish', 'performance'],
  crash: ['crash', 'crashing', 'crashes', 'freeze', 'freezing', 'closes', 'quits'],
  offline: ['offline', 'disconnected', 'unavailable'],
  connect: ['connect', 'connection', 'connecting', 'pair', 'pairing'],
  sound: ['sound', 'audio', 'speaker', 'volume'],
  update: ['update', 'updating', 'upgrade', 'patch'],
  password: ['password', 'passcode', 'login', 'signin', 'sign'],
  tv: ['tv', 'television', 'smart'],
  drive: ['drive', 'disk', 'storage', 'hdd', 'ssd'],
  usb: ['usb', 'flash', 'thumb'],
  bluetooth: ['bluetooth', 'pairing', 'wireless'],
  reset: ['reset', 'restart', 'reboot', 'power'],
  stuck: ['stuck', 'frozen', 'hang', 'hanging'],
  gmail: ['gmail', 'google', 'email'],
  outlook: ['outlook', 'microsoft', 'email'],
  windows: ['windows', 'microsoft', 'pc'],
  mac: ['mac', 'macbook', 'apple', 'macos'],
  router: ['router', 'network', 'modem'],
  queue: ['queue', 'spooler', 'jobs'],
  blank: ['blank', 'white', 'empty'],
  data: ['data', 'files', 'recovery'],
  account: ['account', 'login', 'signin', 'password'],
  controller: ['controller', 'gamepad', 'joystick'],
  streaming: ['streaming', 'buffer', 'buffering', 'playback'],
};

const SYNONYM_LOOKUP = new Map<string, string[]>();
for (const values of Object.values(SYNONYMS)) {
  const unique = [...new Set(values)];
  for (const value of unique) {
    const current = SYNONYM_LOOKUP.get(value) ?? [];
    SYNONYM_LOOKUP.set(value, [...new Set([...current, ...unique])]);
  }
}

export function normalizeText(input: string): string {
  return input
    .normalize('NFKD')
    .replace(/[\u0300-\u036f]/g, '')
    .toLowerCase()
    .replace(/['\u2019\u2018]/g, '')
    .replace(/wi[\s-]?fi/g, 'wifi')
    .replace(/e[\s-]?mail/g, 'email')
    .replace(/blue[\s-]?tooth/g, 'bluetooth')
    .replace(/[^a-z0-9]+/g, ' ')
    .trim()
    .replace(/\s+/g, ' ');
}

export function tokenize(input: string): string[] {
  return normalizeText(input)
    .split(' ')
    .filter((token) => token.length > 1 && !STOPWORDS.has(token));
}

function variantsFor(token: string): string[] {
  return SYNONYM_LOOKUP.get(token) ?? [token];
}

interface PreparedDoc {
  doc: SearchDoc;
  title: string;
  keywords: string;
  headings: string;
  summary: string;
  body: string;
  titleTokens: Set<string>;
  keywordTokens: Set<string>;
  headingTokens: Set<string>;
  summaryTokens: Set<string>;
  bodyTokens: Set<string>;
}

function tokensOf(text: string): Set<string> {
  return new Set(tokenize(text));
}

function prepare(doc: SearchDoc): PreparedDoc {
  return {
    doc,
    title: normalizeText(doc.title),
    keywords: normalizeText(doc.keywords.join(' ')),
    headings: normalizeText(doc.headings.join(' ')),
    summary: normalizeText(doc.summary),
    body: normalizeText(doc.body),
    titleTokens: tokensOf(doc.title),
    keywordTokens: tokensOf(doc.keywords.join(' ')),
    headingTokens: tokensOf(doc.headings.join(' ')),
    summaryTokens: tokensOf(doc.summary),
    bodyTokens: tokensOf(doc.body),
  };
}

function hasToken(tokens: Set<string>, variant: string): boolean {
  if (tokens.has(variant)) return true;
  if (variant.length < 4) return false;
  for (const token of tokens) {
    if (token.startsWith(variant) || (token.length >= 5 && variant.startsWith(token))) {
      return true;
    }
  }
  return false;
}

function matchField(tokens: Set<string>, variants: string[]): number {
  for (const variant of variants) {
    if (hasToken(tokens, variant)) return 1;
  }
  return 0;
}

/**
 * Rank documents for a query. Phrase matches score highest, followed by title,
 * keyword, category, heading, summary and body matches. Documents that match
 * every query term are preferred; if none do, partial matches are returned so a
 * long, descriptive query does not produce an empty page.
 */
export function searchDocs(
  docs: SearchDoc[],
  rawQuery: string,
  category = '',
): SearchResult[] {
  const normalized = normalizeText(rawQuery);
  if (!normalized) return [];

  const tokens = [...new Set(tokenize(rawQuery))];
  if (tokens.length === 0) return [];

  const fullMatches: SearchResult[] = [];
  const partialMatches: SearchResult[] = [];

  for (const doc of docs) {
    if (category && doc.category !== category) continue;
    const prepared = prepare(doc);
    let score = 0;
    let matchedGroups = 0;
    const matchedHeadings = new Set<string>();

    for (const token of tokens) {
      const variants = variantsFor(token);
      const titleMatch = matchField(prepared.titleTokens, variants);
      const keywordMatch = matchField(prepared.keywordTokens, variants);
      const categoryMatch = matchField(
        tokensOf(doc.categoryName),
        variants,
      );
      const headingMatch = matchField(prepared.headingTokens, variants);
      const summaryMatch = matchField(prepared.summaryTokens, variants);
      const bodyMatch = matchField(prepared.bodyTokens, variants);

      if (titleMatch || keywordMatch || categoryMatch || headingMatch || summaryMatch || bodyMatch) {
        matchedGroups += 1;
      }

      if (titleMatch) score += 16;
      if (keywordMatch) score += 10;
      if (categoryMatch) score += 7;
      if (headingMatch) score += 5;
      if (summaryMatch) score += 4;
      if (bodyMatch) score += 1.5;

      if (headingMatch) {
        for (const heading of doc.headings) {
          const normalizedHeading = normalizeText(heading);
          if (variants.some((variant) => normalizedHeading.includes(variant))) {
            matchedHeadings.add(heading);
          }
        }
      }
    }

    if (matchedGroups === 0) continue;

    // Reward full coverage and exact phrases.
    if (tokens.length > 1) {
      score += (matchedGroups / tokens.length) * 18;
    }
    if (prepared.title.includes(normalized)) score += 45;
    if (prepared.keywords.includes(normalized)) score += 22;
    if (prepared.summary.includes(normalized)) score += 10;
    if (prepared.headings.includes(normalized)) score += 8;

    const result: SearchResult = {
      doc,
      score: Math.round(score * 10) / 10,
      matchedHeadings: [...matchedHeadings].slice(0, 2),
    };

    if (matchedGroups === tokens.length) {
      fullMatches.push(result);
    } else {
      partialMatches.push(result);
    }
  }

  const results = fullMatches.length > 0 ? fullMatches : partialMatches;
  return results.sort((a, b) => b.score - a.score || a.doc.title.localeCompare(b.doc.title));
}

export function suggestQueries(query: string, limit = 6): string[] {
  const normalized = normalizeText(query);
  if (normalized.length < 2) return [];
  const suggestions = new Set<string>();
  for (const [key, values] of Object.entries(SYNONYMS)) {
    if (key.startsWith(normalized) || values.some((value) => value.startsWith(normalized))) {
      suggestions.add(key);
    }
    if (suggestions.size >= limit) break;
  }
  return [...suggestions].slice(0, limit);
}
