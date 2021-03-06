# Personal GraphQL Editor

This is a template project to create your own personal "GraphQL Editor".

> It is based on [Create React App](https://github.com/facebook/create-react-app) _([`typescript` template](https://create-react-app.dev/docs/getting-started/#creating-a-typescript-app))_ and [GraphQL Editor](https://github.com/graphql-editor/graphql-editor).

## Motivations

[GraphQL Editor](https://github.com/graphql-editor/graphql-editor) is a great project and comes with a [paid Cloud offer](https://graphqleditor.com/).

Unfortunately, the Cloud version doesn't offer a free plan (they offer a 2 weeks premium trial).

As a solo developer, I don't need all the fancy "teamwork/collaborative" tools they've built in their SaaS offering. I simply need an editor for myself.

## Storage

The editor uses **the browser Local Storage** to store the GraphQL Editor schema metadata.

> **There is no way to restore lost versions**, and everything you do in your browser can be lost definitively if the local storage is cleared.

I recommend keeping a copy of the schema somewhere (GitHub, etc.), as you can copy/paste it right into the editor quite easily. 

## Product roadmap

I don't plan on improving this editor. I might upgrade the graphql-editor version from time to time.

One feature I would like to add is to automatically update a GitHub repository with the latest version of the schema metadata to avoid any data loss.
Basically commit/push to a remote repo when any change is made in the GraphQL schema. That'd make things quite more resilient to data loss.
