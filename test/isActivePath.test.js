import { describe, it, expect } from 'vitest';
import { isActivePath } from '../js/utils/userInterface.js'; // <- updated path

describe('isActivePath', () => {
  it('returns true when current path matches href exactly', () => {
    expect(isActivePath('/about', '/about')).toBe(true);
  });

  it('returns true for root path "/" when path is "/"', () => {
    expect(isActivePath('/', '/')).toBe(true);
  });

  it('returns true for root path "/" when path is "/index.html"', () => {
    expect(isActivePath('/', '/index.html')).toBe(true);
  });

  it('returns true when current path includes href', () => {
    expect(isActivePath('/blog', '/blog/post-1')).toBe(true);
  });

  it('returns false when paths do not match', () => {
    expect(isActivePath('/home', '/about')).toBe(false);
  });
});
