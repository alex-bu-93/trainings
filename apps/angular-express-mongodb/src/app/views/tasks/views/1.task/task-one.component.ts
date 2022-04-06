import { ChangeDetectionStrategy, Component } from '@angular/core';
import { ResultMode }                         from '@trainings/result-code-editor';

const ITEMS = [
  {
    label: 'Install Angular CLI',
    marDownIt: `npm install -g @angular/cli`
  },
  {
    label: 'Create new application',
    marDownIt: `ng new notes-app`
  },
  {
    label: 'Go to folder',
    marDownIt: `cd notes-app`
  },
  {
    label: 'Execute',
    marDownIt: `ng serve`
  },
  {
    label: 'Open page and check result',
    marDownIt: `http://localhost:4200`
  },
  {
    label: 'Add FormsModule to list of imports in AppModule class',
    marDownIt: `imports: [
  ...,
  FormsModule
]`
  },
  {
    label: 'Put this code to app.component.html',
    marDownIt: `<h1>Hello Angular App</h1>
<br>Your name: <input type="text" [(ngModel)]="name">
<p>Hello, {{name}} from Angular!</p>`
  },
  {
    label: 'Put this to AppComponent class',
    marDownIt: `name = 'John'`
  },
  {
    label: 'Try to change the name. Check the result in browser',
    marDownIt: ''
  },
];

const CODE_EDITOR_MAP = {
  [ResultMode.AppComponentTs]: {
    language: 'typescript',
    model: `import { Component } from '@angular/core';

@Component({
  selector: 'trainings-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {

  name = 'John';

}`
  },
  [ResultMode.AppComponentHtml]: {
    language: 'html',
    model: `<h1>Hello Angular App</h1>
<br>Your name: <input type="text" [(ngModel)]="name">
<p>Hello, {{name}} from Angular!</p>
`
  },
  [ResultMode.AppModuleTs]: {
    language: 'typescript',
    model: `import { NgModule }      from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule }   from '@angular/forms';
import { AppComponent }  from './app.component';

@NgModule({
  imports: [
    BrowserModule,
    FormsModule
  ],
  declarations: [AppComponent],
  bootstrap: [AppComponent],
})
export class AppModule {
}`
  }
};

@Component({
  changeDetection: ChangeDetectionStrategy.OnPush,
  selector: 'aem-task-one',
  templateUrl: './task-one.component.html'
})
export class TaskOneComponent {

  items = ITEMS;
  codeEditorMap = CODE_EDITOR_MAP;

}
