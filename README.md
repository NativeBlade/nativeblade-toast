# NativeBlade Toast

Toast notification shell component for [NativeBlade](https://github.com/user/nativeblade). Renders outside the WebView — no flicker during page transitions.

## Installation

```bash
composer require nativeblade/toast
```

That's it. Run `php artisan nativeblade:dev` and the component is synced automatically.

## Usage

### Blade (Livewire directive)

```blade
<button wire:nb-bridge="toast" wire:nb-payload='{"message":"Saved!","type":"success"}'>
    Save
</button>

<button wire:nb-bridge="toast" wire:nb-payload='{"message":"Something went wrong","type":"error"}'>
    Delete
</button>

<button wire:nb-bridge="toast" wire:nb-payload='{"message":"Check your input","type":"warning","duration":5000}'>
    Validate
</button>
```

### Inline (onclick)

```blade
<button onclick="__nbBridge('toast', { message: 'Saved!', type: 'success' })">
    Save
</button>
```

### From PHP (NativeResponse)

```php
use NativeBlade\Facades\NativeBlade;

// Show toast after a Livewire action
NativeBlade::response()->alert('Saved!')->toResponse();
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

`wire:nb-bridge="toast"` triggers a click handler that sends a message to the parent shell via `postMessage`. The bridge looks up the `toast` component in the registry and calls its `render()` function. The toast appears as a floating element in the parent window, outside the iframe.

## License

MIT
