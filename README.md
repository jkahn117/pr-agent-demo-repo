# PR Agent Demo Repo

Tiny TypeScript fixture repo for the Flue PR agent demo.

## Intended Bug

`GET /api/status` currently returns:

```json
{ "version": "1" }
```

The expected response is:

```json
{ "version": "2" }
```

## Commands

```sh
pnpm install
pnpm test
```
