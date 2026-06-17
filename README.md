# pogal

> A private gallery for your most-used prompts — no more hunting, selecting, and copying by hand.

---

## What is pogal?

**pogal** is a desktop application (with Android support planned) that keeps all your frequently used prompts in one place. Browse, find, and copy any prompt in seconds, without digging through notes, docs, or chat histories.

It was born out of a simple frustration: if you use AI tools regularly, you likely have a set of prompts you reach for again and again — and retrieving them is always more work than it should be. pogal fixes that.

> ⚠️ **pogal is currently in active development.** Expect rough edges, missing features, and breaking changes between versions.

---

## Features

- 📚 **Prompt gallery** — Browse a curated collection of pre-built prompts
- 📋 **One-click copy** — Get any prompt into your clipboard instantly
- 🖥️ **Desktop-first** — Built as a native app with Tauri for a fast, lightweight experience
- 📱 **Android support** _(planned)_ — Take your prompt gallery on the go

---

## Roadmap

- [ ] User-defined prompts — add, edit, and delete your own
- [ ] Categories and tags for better organization
- [ ] Search and filter
- [ ] Import / export prompts
- [ ] Android app
- [ ] Sync across devices

---

## Tech Stack

| Layer         | Technology                               |
| ------------- | ---------------------------------------- |
| App framework | [Tauri](https://tauri.app/)              |
| Frontend      | [SvelteKit](https://kit.svelte.dev/)     |
| Styling       | [Tailwind CSS](https://tailwindcss.com/) |

---

## Getting Started

### Prerequisites

- [Node.js](https://nodejs.org/) (v18 or later)
- [Rust](https://www.rust-lang.org/tools/install) (required by Tauri)
- Tauri CLI: `npm install -g @tauri-apps/cli`

### Installation

```bash
git clone https://github.com/your-username/pogal.git
cd pogal
npm install
```

### Development

```bash
npm run tauri dev
```

### Build

```bash
npm run tauri build
```

---

## Contributing

pogal is in early development, so contributions, ideas, and bug reports are very welcome. Feel free to open an issue or submit a pull request.

---

## License

[MIT](LICENSE)
