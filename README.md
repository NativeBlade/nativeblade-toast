# NativeBlade Toast

Toast notification shell component for [NativeBlade](https://github.com/user/nativeblade). Renders outside the WebView — no flicker during page transitions.

## Installation

```bash
composer require nativeblade/toast
```

That's it. Auto-discovery handles the rest.

## Usage

### Basic

```blade
<x-nativeblade-toast message="Settings saved!" />
```

### Types

```blade
<x-nativeblade-toast message="File uploaded" type="success" />
<x-nativeblade-toast message="Something went wrong" type="error" />
<x-nativeblade-toast message="Check your input" type="warning" />
<x-nativeblade-toast message="New version available" type="info" />
```

### Custom Duration

```blade
{{-- 5 seconds --}}
<x-nativeblade-toast message="Please wait..." type="info" :duration="5000" />
```

### Triggered by Livewire

```blade
<button wire:click="save">Save</button>

@if($saved)
    <x-nativeblade-toast message="Saved!" type="success" />
@endif
```

```php
class Settings extends Component
{
    public bool $saved = false;

    public function save()
    {
        // ...
        $this->saved = true;
    }
}
```

### Triggered from JavaScript (Shell)

```javascript
import { nb } from '@nativeblade/wasm-app/nb.js';

// From any shell component
nb.navigate('/settings'); // after save, the page renders with the toast
```

## Props

| Prop | Type | Default | Description |
|------|------|---------|-------------|
| `message` | string | `''` | Text to display |
| `type` | string | `'info'` | `info`, `success`, `error`, `warning` |
| `duration` | int | `3000` | Auto-hide delay in milliseconds |

## How It Works

This is a **shell component** — it renders outside the WebView in the native Tauri shell. The Blade template outputs a hidden `<div data-nb="toast">` with data attributes. NativeBlade extracts this from the HTML response and passes it to the JavaScript `render()` function, which creates a floating toast element in the parent window.

Because it lives outside the iframe, the toast persists across page transitions and never flickers during navigation.

## License

MIT
