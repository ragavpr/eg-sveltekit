# Example

## SvelteKit WASM JS module

- Used a WASM Node.js module as a submodule and built using `wasm-build` in SvelteKit
- No live changes yet

### Usage

- pull the submodule and build it

```
git submodule update --remote
wasm-pack build --target web
```


- `pnpm install` dependancies

- `pnpm build` then `pnpm preview` to run the server