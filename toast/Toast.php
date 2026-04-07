<?php

namespace App\NativeBlade\Components;

use Illuminate\View\Component;

class Toast extends Component
{
    public function __construct(
        public string $message = '',
        public string $type = 'info',
        public int $duration = 3000,
    ) {}

    public function render()
    {
        return view('nbc::toast');
    }
}
