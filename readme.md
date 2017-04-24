# MEAN Session 12

## Homework
[Angular Quickstart Tutorial](https://angular.io/docs/ts/latest/)


[Install Angular CLI](https://angular.io/docs/ts/latest/cli-quickstart.html)

`$ npm install -g angular-cli`

`$ ng new pirates`

`$ cd pirates`, `subl .` and `$ ng serve`

App is at `http://localhost:4200/`

We can use ES5, ES2016, or TypeScript to write Angular 2. We will write all code samples with TypeScript. (Like SASS is to CSS -added features.)

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

Try `ng generate component pirate-list`

Create components folder, place assets for `app-component` and `pirate-list-component` into it.

module: `import { PirateListComponent } from 'pirate-list-component/pirate-list.component';`

```
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { AppComponent } from './components/app-component/app.component';
import { StoryComponent } from './components/story-component/story-component.component';

@NgModule({
  declarations: [
    AppComponent,
    StoryComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule
  ],
  providers: [],
  bootstrap: [StoryComponent]
})
export class AppModule { }

```

```
import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  template: `
    <h3>{{story.name}}</h3>
    <h3 [innerText]="story.name"></h3>
    <div [style.color]="color">{{story.name}}</div>
  `
})
export class StoryComponent {
  story = { id: 100, name: 'The Force Awakens' };
  color = 'blue';
}
```

### Angular 2 Directives

ng-repeat, ng-if

Structural directives contain a *. They are replacements for [html5 native template tags](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/template) (which are a fascinating study in their own right).

*ngFor, *ngIf

[Example](https://embed.plnkr.co/?show=preview)

```
import { Component } from '@angular/core';

@Component({
  moduleId: module.id,
  selector: 'my-vehicles',
   templateUrl: './vehicles.component.html'
})
export class VehiclesComponent {
  vehicles = [
    { id: 1, name: 'X-Wing Fighter' },
    { id: 2, name: 'Tie Fighter' },
    { id: 3, name: 'Y-Wing Fighter' }
  ];
}
```

```
<ul>
  <li *ngFor="let vehicle of vehicles">
    {{vehicle.name}}
  </li>
</ul>
<div *ngIf="vehicles.length">
  <h3>You have {{vehicles.length}} vehicles</h3>
</div>
```

### Data Binding

#### Interpolation  DOM < Component  
e.g. expressions `{{ story.name }}`

#### One Way Binding  DOM < Component  
e.g `ng-bind` in Angular 1. `[innerText]="story.name"` in Angular 2. The square brackets can contain *any valid property in html*. Another example:
`<div [style.color]="color">{{ story.name }}</div>`. This is a big improvement over Angular 1 where we had a ton of directives (see below).

#### Event Binding  DOM > Component  
e.g. `ng-click`. In Angular 2 `(click)`

#### Two Way Binding  DOM < > Component
e.g. `ng-model`. In Agular two use hotdogs:
`<input [(ngModel)]="story.name" />`
Check the use of square and rounded brackets in the two case above.

[Example](https://embed.plnkr.co/?show=preview)

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
  moduleId: module.id,
  selector: 'my-app',
   templateUrl: './app.component.html',
})
export class AppComponent {
  title = 'Angular Two-Way Binding';
  story = {
    name: 'The Empire Strikes Back'
  };
  changeName(){
    this.story.name = 'Jedi rules'
  }
}
```

#### Old directives

ng-style, ng-src, ng-href, ng-click

Now: `<img [src]="path' />`
`(click)="save()`
etc.

[Example](https://embed.plnkr.co/?show=preview)





















