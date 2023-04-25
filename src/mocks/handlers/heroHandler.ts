import { rest } from 'msw';

const baseUrl = '**/api';

export const HEROES = [
  {
    id: '7ggew732dw',
    firstName: 'Barry',
    lastName: 'Allen',
    house: 'DC',
    knownAs: 'Flash',
  },
  {
    id: '1ggew732dw',
    firstName: 'Scott',
    lastName: 'Summer',
    house: 'Marvel',
    knownAs: 'Cyclopes',
  },
];

export const heroHandler = [
  rest.get(`${baseUrl}/heroes`, (req, res, ctx) => {
    return res(ctx.json(HEROES));
  }),

  rest.delete(`${baseUrl}/heroes/:id`, (req, res, ctx) => {
    return HEROES.find(h => {
      return h.id === req.params.id;
    })
      ? res(ctx.status(200))
      : res(ctx.status(404));
  }),

  rest.post(`${baseUrl}/heroes`, async (req, res, ctx) => {
    return res(ctx.json(await req.json()));
  }),

  rest.put(`${baseUrl}/heroes/:id`, (req, res, ctx) => {
    return HEROES.find(h => {
      return h.id === req.params.id;
    })
      ? res(ctx.status(200))
      : res(ctx.status(404));
  }),
];
