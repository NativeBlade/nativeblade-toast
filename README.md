# NativeBlade Toast

Toast notification shell component for [NativeBlade](https://github.com/user/nativeblade). Renders outside the WebView — no flicker during page transitions.

## Installation

```bash
composer require nativeblade/toast
```

That's it. Run `php artisan nativeblade:dev` and the component is synced automatically.

## Usage

```blade
<button onclick="__nbBridge('toast', { message: 'Saved!', type: 'success' })">
    Save
</button>

<button onclick="__nbBridge('toast', { message: 'Something went wrong', type: 'error' })">
    Delete
</button>

<button onclick="__nbBridge('toast', { message: 'Check your input', type: 'warning', duration: 5000 })">
    Validate
</button>
```

### From Shell JS

```javascript
import { nb } from '@nativeblade/wasm-app/nb.js';

// After an action, show toast via bridge
window.__nb.navigate('/settings');
```

### Types

| Type | Color |
|------|-------|
| `info` | Gray |
| `success` | Green |
| `error` | Red |
| `warning` | Yellow |

### Options

| Option | Type | Default | Description |
|--------|------|---------|-------------|
| `message` | string | `''` | Text to display |
| `type` | string | `'info'` | `info`, `success`, `error`, `warning` |
| `duration` | int | `3000` | Auto-hide delay in milliseconds |

## How It Works

This is a **shell component** — it renders outside the WebView in the native Tauri shell.

`__nbBridge('toast', payload)` sends a message to the parent shell. The bridge looks up the `toast` component in the registry and calls its `render()` function. The toast appears as a floating element in the parent window, outside the iframe.

## License

MIT
