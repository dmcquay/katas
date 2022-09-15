const isAllUnique = (s: string): boolean => {
  let seen: Record<string, true> = {};
  for (let i = 0; i < s.length; i++) {
    if (seen[s[i]]) {
      return false;
    }
    seen[s[i]] = true;
  }
  return true;
};

// Map
export function lengthOfLongestSubstring(s: string): number {
  let start = 0;
  let maxLength = 0;
  const map: Map<string, number> = new Map();
  for (let end = 0; end < s.length; end++) {
    if (map.has(s[end])) {
      start = Math.max(start, map.get(s[end])! + 1);
    }
    map.set(s[end], end);
    maxLength = Math.max(maxLength, end - start + 1);
  }
  return maxLength;
}

// no substring. track indexes with map instead.
export function lengthOfLongestSubstringOptimize2(s: string): number {
  let start = 0;
  let maxLength = 0;
  const map: Record<string, number> = {};
  for (let end = 0; end < s.length; end++) {
    if (map[s[end]] !== undefined) {
      start = Math.max(start, map[s[end]] + 1);
    }
    map[s[end]] = end;
    maxLength = Math.max(maxLength, end - start + 1);
  }
  return maxLength;
}

// indexOf
export function lengthOfLongestSubstringOptimize1(s: string): number {
  let start = 0;
  let maxLength = 0;
  for (let end = 1; end <= s.length; end++) {
    let str = s.substring(start, end);
    if (isAllUnique(str)) {
      maxLength = Math.max(maxLength, str.length);
    } else {
      start += str.indexOf(s[end - 1]) + 1;
    }
  }
  return maxLength;
}

export function lengthOfLongestSubstringCorrect(s: string): number {
  let start = 0;
  let maxLength = 0;
  for (let end = 1; end <= s.length; end++) {
    let str = s.substring(start, end);
    if (isAllUnique(str)) {
      maxLength = Math.max(maxLength, str.length);
    } else {
      do {
        start++;
      } while (!isAllUnique(s.substring(start, end)));
    }
  }
  return maxLength;
}

function lengthOfLongestSubstring1(s: string): number {
  let seen: Record<string, true> = {};
  let count = 0;
  let maxCount = 0;
  for (let i = 0; i < s.length; i++) {
    if (seen[s[i]]) {
      seen = {};
      count = 0;
    }
    seen[s[i]] = true;
    count++;
    if (count > maxCount) maxCount = count;
  }
  return maxCount;
}
