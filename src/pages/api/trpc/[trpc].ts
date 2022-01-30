import * as trpc from '@trpc/server';
import * as trpcNext from '@trpc/server/adapters/next';
import { z } from 'zod';
import googleIt from 'google-it';

const appRouter = trpc.router().query('get-search-position', {
  input: z.object({ query: z.string() }),
  async resolve({ input }) {
    const searchResults = await googleIt({
      query: input.query,
      'only-urls': true,
      'no-display': true,
    });

    return searchResults;
  },
});

// export type definition of API
export type AppRouter = typeof appRouter;

// export API handler
export default trpcNext.createNextApiHandler({
  router: appRouter,
  createContext: () => null,
});
