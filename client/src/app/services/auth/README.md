# auth.service.ts

contains authentication services

## Usage

```typescript
import { Component, OnInit } from '@angular/core';
import { AuthService } from './auth.service';

@Component({
    // ...
})
export class InstanceComponent implements OnInit {
    constructor(private auth: AuthService){ }

    ngOnInit(): void{
        this.auth.routeGuard() // if account not logged in navigate to landing page
    }
}

```