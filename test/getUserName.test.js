import { describe, it, expect, beforeEach } from 'vitest';
import { getUsername } from '../js/utils/storage.js'; // correct path

describe('getUsername', () => {
  beforeEach(() => {
    localStorage.clear();
  });

  it('returns the name from user object in storage', () => {
    localStorage.setItem('user', JSON.stringify({ name: 'Anders' }));
    expect(getUsername()).toBe('Anders');
  });

  it('returns null when no user exists in storage', () => {
    expect(getUsername()).toBe(null);
  });
});
