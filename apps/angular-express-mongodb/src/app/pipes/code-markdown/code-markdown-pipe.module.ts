import { NgModule, Pipe, PipeTransform } from '@angular/core';
import * as MarkdownIt                   from 'markdown-it';

@Pipe({name: 'codeMarkdown'})
export class CodeMarkdownPipe implements PipeTransform {

  transform(str: string): string | undefined {
    return str && new MarkdownIt().render(
      `\`\`\`
${str}
\`\`\``);
  }
}

@NgModule({
  declarations: [CodeMarkdownPipe],
  exports: [CodeMarkdownPipe]
})
export class CodeMarkdownPipeModule {
}
