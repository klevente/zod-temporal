import { describe, expect, test } from 'vitest';
import { instant } from './instant';

describe('instant', () => {
  test.each([
    ['2023-02-08Z', '2023-02-08T00:00:00Z'],
    ['2023-02-08T15:32:34Z', '2023-02-08T15:32:34Z'],
    ['2023-02-08+0200', '2023-02-07T22:00:00Z'],
    ['2023-02-08T15:32:34+0200', '2023-02-08T13:32:34Z'],
  ])(
    'should return an `Instant` with the correct value if input is an ISO 8601 date(time) string',
    (input, expected) => {
      const result = instant.parse(input);
      expect(result.toJSON()).toEqual(expected);
    },
  );

  test.each([['2023-02-08'], ['2023-02-08T15:32:34']])(
    'should throw exception if input does not have a timezone',
    (input) => {
      expect(() => instant.parse(input)).toThrow();
    },
  );
});
