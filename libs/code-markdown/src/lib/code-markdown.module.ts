import { NgModule }               from '@angular/core';
import { CommonModule }           from '@angular/common';
import { CodeMarkdownPipeModule } from './code-markdown-pipe.module';
import { CodeMarkdownComponent }  from './code-markdown.component';

@NgModule({
  imports: [
    CommonModule,
    CodeMarkdownPipeModule
  ],
  declarations: [CodeMarkdownComponent],
  exports: [CodeMarkdownComponent]
})
export class CodeMarkdownModule {
}
