import { ChangeDetectionStrategy, Component } from '@angular/core';
import { ResultMode }                         from '@widgets/result-code-editor';

const SECTIONS = [
  {
    label: null,
    items: [
      {
        label: 'Type command to create notes component',
        markDownIt: 'ng g c notes'
      },
      {
        label: 'Put this to app.component.html (replace previous contents)',
        markDownIt: `<h1>Notes Angular App</h1>
<app-notes></app-notes>`
      },
      {
        label: 'Define interface for Note in notes.component.ts',
        markDownIt: `interface Note {
    text: string;
}`
      },
      {
        label: 'Add this code to the template',
        markDownIt: `<ul>
  <li *ngFor="let note of notes ">{{note.text}}</li>
</ul>`
      },
      {
        label: 'Define initial notes list in NotesComponent class',
        markDownIt: `notes: Note[] = [
  {text: 'Note one'},
  {text: 'Note two'}
];`
      },
      {
        label: 'Look at rendered page and check that notes list is shown',
        markDownIt: ''
      }
    ]
  },
  {
    label: 'Add possibility to add the note to the list',
    items: [
      {
        label: 'Add these lines to the template in notes.component.html',
        markDownIt: `<textarea [(ngModel)]="text" ></textarea>
<button (click)="add()">Add</button>`
      },
      {
        label: 'Define text and add() method in NotesComponent class',
        markDownIt: `text: string;

add() {
  const note = { text: this.text };
  this.notes.push(note);
  this.text = '';
}`
      },
      {
        label: 'Execute and look how it\'s working',
        markDownIt: ''
      }
    ]
  },
  {
    label: 'Add the possibility to remove the note from the list',
    items: [
      {
        label: 'Change the template to show notes this way',
        markDownIt: `<ul>
  <li *ngFor="let note of notes; let i=index">
    {{note.text}} <button (click)="remove(i)">remove</button>
  </li>
</ul>`
      },
      {
        label: 'Define method remove',
        markDownIt: `remove(idx) {
    this.notes.splice(idx, 1);
}`
      },
      {
        label: 'Check the possibility to remove notes',
        markDownIt: ''
      }
    ]
  },
  {
    label: 'Retrieving data from the server ',
    items: [
      {
        label: 'Change app.module.ts. Add HttpModule to imports in @NgModule',
        markDownIt: `imports: [ BrowserModule, FormsModule, HttpClientModule ]`
      },
      {
        label: 'In server/server.js we need to allow cross-origin requests (because lite-server and Node are running on different servers):',
        markDownIt: `var express = require('express');
var app = express();

app.get("/notes", function(req,res) {
   res.header("Access-Control-Allow-Origin", "*");
   res.header("Access-Control-Allow-Headers", "Content-Type, X-Requested-With");
   var notes = [
       {text: "First note"},
       {text: "Second note"},
       {text: "Third note"}
   ]
   res.send(notes);
});
app.listen(8080);`
      },
      {
        label: 'Create package.json by typing npm init, to add express to package.json execute',
        markDownIt: `npm install express`
      },
      {
        label: 'Execute server on port 8080',
        markDownIt: `node server.js`
      },
      {
        label: 'Import HttpClient to notes.component.ts',
        markDownIt: ''
      },
      {
        label: 'Define notesUrl',
        markDownIt: `private notesUrl = 'http://localhost:8080/notes';  // URL to web api`
      },
      {
        label: 'Define getNotes() method',
        markDownIt: `getNotes(): Promise<Note[]> {
  return this.http.get<Note[]>(this.notesUrl).toPromise();
}`
      },
      {
        label: 'Add constructor to inject http client and retrieve data from server',
        markDownIt: `constructor(
  private http: HttpClient
) {
  this.getNotes().then(notes => {
    this.notes = notes
    console.log(notes);
  });
}`
      },
      {
        label: 'Check the result in browser',
        markDownIt: ''
      }
    ]
  }
];
const CODE_EDITOR_MAP = {
  [ResultMode.AppComponentTs]: {
    language: 'typescript',
    model: `import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
}`
  },
  [ResultMode.AppComponentHtml]: {
    language: 'html',
    model: `<h1>Notes Angular App</h1>
<app-notes></app-notes>`
  },
  [ResultMode.AppModuleTs]: {
    language: 'typescript',
    model: `import { BrowserModule }    from '@angular/platform-browser';
import { NgModule }         from '@angular/core';
import { FormsModule }      from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { NotesComponent }   from './notes/notes.component';
import { AppComponent }     from './app.component';

@NgModule({
  imports: [
    BrowserModule,
    FormsModule,
    HttpClientModule
  ],
  declarations: [
    AppComponent,
    NotesComponent
  ],
  bootstrap: [AppComponent]
})
export class AppModule {
}`
  },
  [ResultMode.NotesComponentTs]: {
    language: 'typescript',
    model: `import { Component }  from '@angular/core';
import { HttpClient } from '@angular/common/http';

interface Note {
  text: string;
}

@Component({
  selector: 'app-notes',
  templateUrl: './notes.component.html',
  styleUrls: ['./notes.component.css']
})
export class NotesComponent {

  private notesUrl = 'http://localhost:8080/notes';  // URL to web api

  text: string;
  notes: Note[] = [
    {text: 'Note one'},
    {text: 'Note two'}
  ];

  constructor(
    private http: HttpClient
  ) {
    this.getNotes().then(notes => {
      this.notes = notes
      console.log(notes);
    });
  }

  getNotes(): Promise<Note[]>{
    return this.http.get<Note[]>(this.notesUrl).toPromise();
  }

  add() {
    const note = {text: this.text};
    this.notes.push(note);
    this.text = '';
  }

  remove(idx: number) {
    this.notes.splice(idx, 1);
  }
}`
  },
  [ResultMode.NotesComponentHtml]: {
    language: 'html',
    model: `<textarea [value]="text" (keyup.enter)="add()"></textarea>
<button (click)="add()">Add</button>

<p></p>
<ul>
  <li *ngFor="let note of notes; let i=index ">
    {{note.text}} <button (click)="remove(i)">remove</button>
  </li>
</ul>`
  }
};


@Component({
  changeDetection: ChangeDetectionStrategy.OnPush,
  selector: 'aem-task-two',
  templateUrl: './task-two.component.html'
})
export class TaskTwoComponent {

  sections = SECTIONS;
  codeEditorMap: any = CODE_EDITOR_MAP;

}
