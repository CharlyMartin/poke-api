## Intro

This frontend app is built on top of PokeAPI to display a list of Pokemons as well as an individual page for each of them. It is a Single Page Application (SPA) built with [React](https://react.dev/) and [Vite](https://vitejs.dev/).

## Philosophy

It felt like a better option to use an SPA over a server-side rendered (SSR) app. The index page supports pagination and displays a configurable amount of results per page. That potentially means a lot of user interactions and network requests in a short amount of time. To make sure to user interface (UI) stays interactive and fast, data fetching and loading is handled in the UI, to avoid an extra round-trip to the server.

## Stack

1. [Tailwind CSS](https://tailwindcss.com/) for styling
2. [React Router](https://reactrouter.com/en/main) for routing
3. [React Query](https://tanstack.com/query/latest/docs/react/overview) for remote data fetching and caching

## Endpoints

The app relies on [PokeAPI](https://pokeapi.co/) for data. It uses two endpoints:

1. `https://pokeapi.co/api/v2/pokemon` to fetch the list of pokemon on the index page (`/`). This endpoint also handles pagination and navigation via the `offset` and `limit` query parameters.
2. `https://pokeapi.co/api/v2/pokemon/:name` to fetch the details of one pokemon entity. This is endpoint is both on the index page (`/`), to populate the card information, and on the view page (`/pokemon/:name`).

## Improvements

Here is a non-exhaustive list of things that can be improved on the app:

- [ ] Image loading optimisation. Right now, the app only uses HTML `<img>` tags,
- [ ] Better loading states (skeleton & spinners). Right now, only text is used for loading data,
- [ ] Better error states,
- [ ] Better data validation / sanitation for search query params on the client,
- [x] Grid responsiveness on the index page
- [ ] Add some tests on the main features
