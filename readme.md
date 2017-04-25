# MEAN Session 12

## Homework
Pirates list should display when on the pirates route. Use *ngFor and *ngIf similarly to the vessels html.

## Reading
[Angular Quickstart Tutorial](https://angular.io/docs/ts/latest/)

## Angular 2

[Install Angular CLI](https://angular.io/docs/ts/latest/cli-quickstart.html)

`$ npm install -g angular-cli`

`$ ng new pirates`

`$ cd pirates`, `subl .` and `$ ng serve`

App is at `http://localhost:4200/`

We can use ES5, ES2016, or TypeScript to write Angular 2. We will write all code samples with TypeScript. (Like SASS is to CSS - added features.)

### app.module.ts

Angular modules

```
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { AppComponent } from './app.component';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
```

Note: 
* ES6 modules, named imports from node_modules. 
* Custom imports from local file system `('./ ...')`. 
* ES6 destructuring syntax `import { BrwoserModule }`
* ES6 Classes

@Decorators - metadata about components (where to find the template etc.)
- `@NgModule` decorates the exported class AppModule
- `imports` replaces angular 1 dependency injection e.g.: `angular.module('app, [])`
- bootstrap defines the starting component
- export AppModule replaces `<div ng-app='app'>` and is our root module

### Components

Contains the application logic that controls a portion or region of the view

```
import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'app works!';
}
```

Note: `selector` is the tag. In Angular 1 this was a component declaration e.g. `appRoot`

The @Component decorates (provides metadata to) the exported component. 

### main.ts

The kickoff point for the application:

`platformBrowserDynamic().bootstrapModule(AppModule);`

Which uses the selector in the html file:

```
<!doctype html>
<html>
<head>
  <meta charset="utf-8">
  <title>Stories</title>
  <base href="/">

  <meta name="viewport" content="width=device-width, initial-scale=1">
  <link rel="icon" type="image/x-icon" href="favicon.ico">
</head>
<body>
  <app-root>Loading...</app-root>
</body>
</html>

```

Note: no ng-app.

### Angular 2 Directives

ng-repeat, ng-if

Structural directives contain a *. They are replacements for [html5 native template tags](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/template) (which are a fascinating study in their own right).

*ngFor, *ngIf

[Example]

Try `ng generate component vessels`

app.module:

```
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { AppComponent } from './app.component';
import { VesselsComponent } from './vessels/vessels.component';

@NgModule({
  declarations: [
    AppComponent,
    VesselsComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule
  ],
  providers: [],
  bootstrap: [VesselsComponent]
})
export class AppModule { }

```

vessels.component:

```
import { Component } from '@angular/core';

@Component({
  selector: 'app-vessels',
  templateUrl: './vessels.component.html',
  styleUrls: ['./vessels.component.css']
})
export class VesselsComponent {

  vessels = [
    { id: 1, name: 'Adventure Galley' },
    { id: 2, name: 'HMS Rackham' },
    { id: 3, name: 'Y-Wing Fighter' }
  ];

}
```

vessels.component.html:

```
<ul>
  <li *ngFor="let vessel of vessels">
    {{vessel.name}}
  </li>
</ul>
<div *ngIf="vessels.length">
  <h3>You have {{vessels.length}} vessels</h3>
</div>
```

### Data Binding

#### Interpolation  DOM < Component  
e.g. expressions `{{ vessel.name }}`

#### One Way Binding  DOM < Component  
e.g `ng-bind` in Angular 1. `[innerText]="vessel.name"` in Angular 2. The square brackets can contain *any valid property in html*. Another example:
`<div [style.color]="color">{{ vessel.name }}</div>`. This is a big improvement over Angular 1 where we had a ton of directives (see below).

#### Event Binding  DOM > Component  
e.g. `ng-click`. In Angular 2 `(click)`

#### Two Way Binding  DOM < > Component
e.g. `ng-model`. In Agular two use hotdogs:
`<input [(ngModel)]="vessel.name" />`
Check the use of square and rounded brackets in the two case above.

`ng generate component binding`

app.module:

```
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { AppComponent } from './app.component';
import { VesselsComponent } from './vessels/vessels.component';
import { BindingComponent } from './binding/binding.component';

@NgModule({
  declarations: [
    AppComponent,
    VesselsComponent,
    BindingComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule
  ],
  providers: [],
  bootstrap: [BindingComponent]
})
export class AppModule { }
```

binding.component:

```
import { Component } from '@angular/core';

@Component({
  selector: 'app-binding',
  templateUrl: './binding.component.html',
  styleUrls: ['./binding.component.css']
})
export class BindingComponent {
   title = 'Angular Two-Way Binding';
  story = {
  name: 'The Sack of the Edmund Fitzgerald'
  };

}
```

binding.component.html:

```
<div>
  <h3>{{title}}</h3>
  <div>
    2 Way Binding
    <input [(ngModel)]="story.name">
  </div>
  <p>{{story.name}}</p>
  <div>
    1 Way Binding
    <input [value]="story.name">
  </div>
</div>
```

Note the one way binding.

Add a button:

```
<div>
  <h3>{{title}}</h3>
  <div>
    2 Way Binding
    <input [(ngModel)]="story.name">
  </div>
  <p>{{story.name}}</p>
  <div>
    1 Way Binding
    <input [value]="story.name">
  </div>
  <button (click)="changeName()">OK</button> 
</div>
```

Add function to component:

```
import { Component } from '@angular/core';

@Component({
  selector: 'app-binding',
  templateUrl: './binding.component.html',
  styleUrls: ['./binding.component.css']
})
export class BindingComponent {
   title = 'Angular Two-Way Binding';
  story = {
  name: 'The Sack of the Edmund Fitzgerald'
  };

  changeName(){
    this.story.name = 'Skull and Cross Bones'
  }

}
```

#### Old directives

ng-style, ng-src, ng-href, ng-click

Now: `<img [src]="path' />`, `(click)="save()`, etc.


### Routing 

`ng generate component pirates`

app.component.html:

```
<div>
  <header>
    <h1>Pirates</h1>
    <h3>Router Demo</h3>
    <nav>
      <ul>
        <li><a [routerLink]="['/pirates']" href="">Pirates</a></li>
        <li><a [routerLink]="['/vessels']" href="">Vessels</a></li>
      </ul>
    </nav>
  </header>
  <main>
    <section>
      <router-outlet></router-outlet>
    </section>
  </main>
</div>
```

app-routing.module

```
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { PiratesComponent } from './pirates/pirates.component';
import { VesselsComponent } from './vessels/vessels.component';

const routes: Routes = [
  { path: 'pirates', component: PiratesComponent },
  { path: 'vessels', component: VesselsComponent }
];
@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
export const routableComponents = [
  PiratesComponent,
  VesselsComponent
];
```

app.module:

```
import { AppRoutingModule, routableComponents } from './app-routing.module';
```

```
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    AppRoutingModule
  ],
```

Add styles to app.component:

```
import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  styles: [`
    nav ul {list-style-type: none;}
    nav ul li {padding: 4px;cursor: pointer;display:inline-block}
  `],
})
export class AppComponent {
  title = 'app works!';
}
```

Touch ups

default path

`{ path: '', pathMatch: 'full', redirectTo: 'pirates', },`

`{ path: '**', pathMatch: 'full', component: PageNotFoundComponent }`

```
import { Component } from '@angular/core';

@Component({
  moduleId: module.id,
  template: `
    <article class="template">
      <h4>Inconceivable!</h4>
      <div>I do not think this page is where you think it is.</div>
    </article>
  `
})
export class PageNotFoundComponent { }
```


#### pirates

pirates:

```
  pirates = [
  {
    name: 'John Rackham',
    image: 'avatar.svg',
    weapon: 'Sword',
    vessel: 'Bounty'
  }, {
    name: 'Donald Trump',
    image: 'avatar.svg',
    weapon: 'Twitter',
    vessel: 'Stout'
  }, {
    name: 'Sea Dog',
    image: 'avatar.svg',
    weapon: 'Sword',
    vessel: 'Bounty'
  }, {
    name: 'Jean Lafitte',
    image: 'avatar.svg',
    weapon: 'Sword',
    vessel: 'Bounty'
  }
  ]
```

Add to pirates.component:

```
import { Component } from '@angular/core';

@Component({
  selector: 'app-pirates',
  templateUrl: './pirates.component.html',
  styleUrls: ['./pirates.component.css']
})
export class PiratesComponent {

  pirates = [
  {
    name: 'John Rackham',
    image: 'avatar.svg',
    weapon: 'Sword',
    vessel: 'Bounty'
  }, {
    name: 'Donald Trump',
    image: 'avatar.svg',
    weapon: 'Twitter',
    vessel: 'Stout'
  }, {
    name: 'Sea Dog',
    image: 'avatar.svg',
    weapon: 'Sword',
    vessel: 'Bounty'
  }, {
    name: 'Jean Lafitte',
    image: 'avatar.svg',
    weapon: 'Sword',
    vessel: 'Bounty'
  }
  ]
}
```

Edit the pirates.component.html to show a pirates list.





### Notes

HTTP 
- $http.get('api/...') vs 
- http.get('api/...')

Can return a promise but returns an rxjs observable by default.

1. Import the http module into the app root
2. Call http.get in a service and return a mapped result
3. Subscribe to the service's function in a component

In a new api folder in app.


=======


### Vessels Service

Isolate data management in reusable services and use dependency injection to make them available. 

Using onInit hooks to load code before rendering.

Angular 1 used a confusing array of factories, providers, serivces etc. In Angular 2 we simply use a class.

Current vessels.component:

```
import { Component } from '@angular/core';

@Component({
  selector: 'app-vessels',
  templateUrl: './vessels.component.html',
  styleUrls: ['./vessels.component.css']
})
export class VesselsComponent {

  vessels = [
    { id: 1, name: 'Adventure Galley' },
    { id: 2, name: 'HMS Rackham' },
    { id: 3, name: 'Y-Wing Fighter' }
  ];

}
```

vessel.service - a reusable service:

```
import { Injectable } from '@angular/core';

@Injectable()
export class VesselService {
  getVessels() {
    return [
    { id: 1, name: 'Adventure Galley' },
    { id: 2, name: 'HMS Rackham' },
    { id: 3, name: 'Y-Wing Fighter' }
    ]
  }
}
```

It simply exports a class.
















