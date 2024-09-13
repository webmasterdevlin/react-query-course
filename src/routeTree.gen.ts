/* prettier-ignore-start */

/* eslint-disable */

// @ts-nocheck

// noinspection JSUnusedGlobalSymbols

// This file is auto-generated by TanStack Router

import { createFileRoute } from '@tanstack/react-router'

// Import Routes

import { Route as rootRoute } from './routes/__root'
import { Route as TableImport } from './routes/table'
import { Route as HeroesImport } from './routes/heroes'
import { Route as IndexImport } from './routes/index'
import { Route as VillainsIndexImport } from './routes/villains/index'

// Create Virtual Routes

const SignUpLazyImport = createFileRoute('/sign-up')()
const SignInLazyImport = createFileRoute('/sign-in')()
const AntiHeroesLazyImport = createFileRoute('/anti-heroes')()

// Create/Update Routes

const SignUpLazyRoute = SignUpLazyImport.update({
  path: '/sign-up',
  getParentRoute: () => rootRoute,
} as any).lazy(() => import('./routes/sign-up.lazy').then((d) => d.Route))

const SignInLazyRoute = SignInLazyImport.update({
  path: '/sign-in',
  getParentRoute: () => rootRoute,
} as any).lazy(() => import('./routes/sign-in.lazy').then((d) => d.Route))

const AntiHeroesLazyRoute = AntiHeroesLazyImport.update({
  path: '/anti-heroes',
  getParentRoute: () => rootRoute,
} as any).lazy(() => import('./routes/anti-heroes.lazy').then((d) => d.Route))

const TableRoute = TableImport.update({
  path: '/table',
  getParentRoute: () => rootRoute,
} as any)

const HeroesRoute = HeroesImport.update({
  path: '/heroes',
  getParentRoute: () => rootRoute,
} as any)

const IndexRoute = IndexImport.update({
  path: '/',
  getParentRoute: () => rootRoute,
} as any)

const VillainsIndexRoute = VillainsIndexImport.update({
  path: '/villains/',
  getParentRoute: () => rootRoute,
} as any)

// Populate the FileRoutesByPath interface

declare module '@tanstack/react-router' {
  interface FileRoutesByPath {
    '/': {
      id: '/'
      path: '/'
      fullPath: '/'
      preLoaderRoute: typeof IndexImport
      parentRoute: typeof rootRoute
    }
    '/heroes': {
      id: '/heroes'
      path: '/heroes'
      fullPath: '/heroes'
      preLoaderRoute: typeof HeroesImport
      parentRoute: typeof rootRoute
    }
    '/table': {
      id: '/table'
      path: '/table'
      fullPath: '/table'
      preLoaderRoute: typeof TableImport
      parentRoute: typeof rootRoute
    }
    '/anti-heroes': {
      id: '/anti-heroes'
      path: '/anti-heroes'
      fullPath: '/anti-heroes'
      preLoaderRoute: typeof AntiHeroesLazyImport
      parentRoute: typeof rootRoute
    }
    '/sign-in': {
      id: '/sign-in'
      path: '/sign-in'
      fullPath: '/sign-in'
      preLoaderRoute: typeof SignInLazyImport
      parentRoute: typeof rootRoute
    }
    '/sign-up': {
      id: '/sign-up'
      path: '/sign-up'
      fullPath: '/sign-up'
      preLoaderRoute: typeof SignUpLazyImport
      parentRoute: typeof rootRoute
    }
    '/villains/': {
      id: '/villains/'
      path: '/villains'
      fullPath: '/villains'
      preLoaderRoute: typeof VillainsIndexImport
      parentRoute: typeof rootRoute
    }
  }
}

// Create and export the route tree

export interface FileRoutesByFullPath {
  '/': typeof IndexRoute
  '/heroes': typeof HeroesRoute
  '/table': typeof TableRoute
  '/anti-heroes': typeof AntiHeroesLazyRoute
  '/sign-in': typeof SignInLazyRoute
  '/sign-up': typeof SignUpLazyRoute
  '/villains': typeof VillainsIndexRoute
}

export interface FileRoutesByTo {
  '/': typeof IndexRoute
  '/heroes': typeof HeroesRoute
  '/table': typeof TableRoute
  '/anti-heroes': typeof AntiHeroesLazyRoute
  '/sign-in': typeof SignInLazyRoute
  '/sign-up': typeof SignUpLazyRoute
  '/villains': typeof VillainsIndexRoute
}

export interface FileRoutesById {
  __root__: typeof rootRoute
  '/': typeof IndexRoute
  '/heroes': typeof HeroesRoute
  '/table': typeof TableRoute
  '/anti-heroes': typeof AntiHeroesLazyRoute
  '/sign-in': typeof SignInLazyRoute
  '/sign-up': typeof SignUpLazyRoute
  '/villains/': typeof VillainsIndexRoute
}

export interface FileRouteTypes {
  fileRoutesByFullPath: FileRoutesByFullPath
  fullPaths:
    | '/'
    | '/heroes'
    | '/table'
    | '/anti-heroes'
    | '/sign-in'
    | '/sign-up'
    | '/villains'
  fileRoutesByTo: FileRoutesByTo
  to:
    | '/'
    | '/heroes'
    | '/table'
    | '/anti-heroes'
    | '/sign-in'
    | '/sign-up'
    | '/villains'
  id:
    | '__root__'
    | '/'
    | '/heroes'
    | '/table'
    | '/anti-heroes'
    | '/sign-in'
    | '/sign-up'
    | '/villains/'
  fileRoutesById: FileRoutesById
}

export interface RootRouteChildren {
  IndexRoute: typeof IndexRoute
  HeroesRoute: typeof HeroesRoute
  TableRoute: typeof TableRoute
  AntiHeroesLazyRoute: typeof AntiHeroesLazyRoute
  SignInLazyRoute: typeof SignInLazyRoute
  SignUpLazyRoute: typeof SignUpLazyRoute
  VillainsIndexRoute: typeof VillainsIndexRoute
}

const rootRouteChildren: RootRouteChildren = {
  IndexRoute: IndexRoute,
  HeroesRoute: HeroesRoute,
  TableRoute: TableRoute,
  AntiHeroesLazyRoute: AntiHeroesLazyRoute,
  SignInLazyRoute: SignInLazyRoute,
  SignUpLazyRoute: SignUpLazyRoute,
  VillainsIndexRoute: VillainsIndexRoute,
}

export const routeTree = rootRoute
  ._addFileChildren(rootRouteChildren)
  ._addFileTypes<FileRouteTypes>()

/* prettier-ignore-end */

/* ROUTE_MANIFEST_START
{
  "routes": {
    "__root__": {
      "filePath": "__root.tsx",
      "children": [
        "/",
        "/heroes",
        "/table",
        "/anti-heroes",
        "/sign-in",
        "/sign-up",
        "/villains/"
      ]
    },
    "/": {
      "filePath": "index.tsx"
    },
    "/heroes": {
      "filePath": "heroes.tsx"
    },
    "/table": {
      "filePath": "table.tsx"
    },
    "/anti-heroes": {
      "filePath": "anti-heroes.lazy.tsx"
    },
    "/sign-in": {
      "filePath": "sign-in.lazy.tsx"
    },
    "/sign-up": {
      "filePath": "sign-up.lazy.tsx"
    },
    "/villains/": {
      "filePath": "villains/index.tsx"
    }
  }
}
ROUTE_MANIFEST_END */