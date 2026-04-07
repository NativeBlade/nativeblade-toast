# NativeBlade Toast

Toast notification shell component for [NativeBlade](https://github.com/user/nativeblade). Renders outside the WebView — no flicker during page transitions.

## Installation

```bash
composer require nativeblade/toast
```

That's it. Run `php artisan nativeblade:dev` and the component is synced automatically.

## Usage

### Via JavaScript (Bridge)

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

### Via Blade Component

```blade
<x-nativeblade-toast message="Settings saved!" type="success" />

@if($saved)
    <x-nativeblade-toast message="Done!" type="success" />
@endif
```

### Via Shell JS

```javascript
import { nb } from '@nativeblade/wasm-app/nb.js';

nb.navigate('/settings');
// toast from shell component
window.__nb.navigate('/save');
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

**Via Bridge:** `__nbBridge('toast', payload)` sends a message to the parent shell. The bridge looks up the `toast` component in the registry and calls its `render()` function.

**Via Blade:** The template outputs a hidden `<div data-nb="toast">` with data attributes. NativeBlade extracts this during page navigation and calls the shell `render()` function.

In both cases, the toast appears as a floating element in the parent window, outside the iframe. It persists across page transitions and never flickers.

## License

MIT
