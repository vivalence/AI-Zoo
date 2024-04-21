import { faker } from '@faker-js/faker';

function generateDummy() {
  return {
    id: faker.string.uuid(),
    model: `Model_${faker.number.int({ max: 100 })}`,
    source: faker.internet.url(),
    cost: {
      currency: 'USD',
      per_million_tokens_input: faker.number.float({ max: 11 }).toFixed(2),
      per_million_tokens_output: faker.number.float({ max: 50 }).toFixed(2),
      per_million_tokens_blend_3_1: (faker.number.float({ min: 1, max: 10 }) * 3 + faker.number.float({ min: 10, max: 50 }) / 4).toFixed(2),
    },
    speed: {
      tokens_per_second: faker.number.float({ min: 5, max: 20 }).toFixed(2),
      latency_first_token_ms: faker.number.float({ min: 10, max: 100 }).toFixed(2),
    },
    technical: {
      token_window: faker.number.int({ min: 1000, max: 5000 }),
    },
    quality: {
      some_metric: faker.number.float({ min: 0.5, max: 1 }),
    },
  };
}

export const dummy = faker.helpers.multiple(generateDummy, {
  count: 100
})
