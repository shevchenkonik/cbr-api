import { formatDate } from '../../../lib/utils'; // Replace 'yourModule' with the actual module name

describe('formatDate', () => {
  it('formats a date correctly with double-digit day and month', () => {
    const date = new Date(2023, 11, 20); // Note: JavaScript months are 0-indexed
    expect(formatDate(date)).toEqual('20/12/2023');
  });

  it('prepends zero for single-digit day and month', () => {
    const date = new Date(2023, 8, 9);
    expect(formatDate(date)).toBe('09/09/2023');
  });

  it('works correctly for different years', () => {
    const date = new Date(2025, 5, 15);
    expect(formatDate(date)).toBe('15/06/2025');
  });
});
