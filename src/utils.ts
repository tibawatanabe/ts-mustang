export function isNil(value: any): boolean {
  return value == null;
}

export function isFunction(value: any): boolean {
  return typeof value === 'function';
}

export function isArray(value: any): boolean {
  return Array.isArray(value);
}

export function stringify(token: any): string {
  if (typeof token === 'string') {
    return token;
  }

  if (token == null) {
    return '' + token;
  }

  if (token.name) {
    return token.name;
  }

  const res = token.toString();
  const newLineIndex = res.indexOf('\n');
  return newLineIndex === -1 ? res : res.substring(0, newLineIndex);
}
