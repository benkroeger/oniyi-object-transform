'use strict';

// node core modules

// 3rd party modules

// internal modules
const transform = require('..');

test('should throw when called without params argument', () => {
  expect(transform).toThrow(/params argument is required/);
});

test('should throw when called with no `source` or `src` param', () => {
  expect(() => {
    transform({});
  }).toThrow(/either\s`params.source`\sor\s`params.src`\smust\sbe\sprovided/);
});

test('should rename property `foo` to `sports`', () => {
  const source = {
    foo: 'bar',
    lorem: 'ipsum',
  };

  const transformed = transform({
    source,
    map: {
      foo: 'sports',
    },
  });

  expect(transformed.sports).toBe(source.foo);
});

test('should pick only property `foo` from source', () => {
  const source = {
    foo: 'bar',
    lorem: 'ipsum',
  };

  const transformed = transform({
    source,
    pick: ['foo'],
  });

  expect(Object.keys(transformed)).toHaveLength(1);
  expect(transformed).toHaveProperty('foo');
  expect(transformed.foo).toBe(source.foo);
});

test('should return empty object literal when `pick` param is empty array', () => {
  const source = {
    foo: 'bar',
    lorem: 'ipsum',
  };

  const transformed = transform({
    source,
    pick: [],
  });

  expect(Object.keys(transformed)).toHaveLength(0);
});

test('should not ignore undefined source values after mapping', () => {
  const source = {
    foo: 'bar',
  };

  const transformed = transform({
    source,
    map: {
      lorem: 'ipsum',
    },
  });

  expect('ipsum' in transformed).toBe(true);
  expect(transformed).toHaveProperty('ipsum');
});

test('should ignore undefined source values after mapping', () => {
  const source = {
    foo: 'bar',
  };

  const transformed = transform({
    source,
    map: {
      lorem: 'ipsum',
    },
    ignoreUndefined: true,
  });

  expect('ipsum' in transformed).toBe(false);
  expect(transformed).not.toHaveProperty('ipsum');
});
