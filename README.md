# Example

## SvelteKit x WASM

- No additional dependancies, full live reloading is flawless.
- Only `wasm-pack` is used to build the rust cargo project module.

### Setup

- Use a submodule or a seperate folder to mange the rust cargo project.
- Edit module path as required in `package.json`'s tasks `mod:build` and `mod:watch`.
- Use `rustup` and install required packages as needed.

### Usage

- Use `pnpm mod:build` to build the rust cargo project once (requires `wasm-pack` and `rustup` environment).
- Use `pnpm dev` to use Vite's default development server.
- Use `pnpm dev:mod` to also support the live reloading of rust module changes. (requires `nodemon`)