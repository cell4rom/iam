import { NgModule } from '@angular/core';
import { PostComponent } from './post/post.component';
import { HighlightModule, HighlightOptions } from 'ngx-highlightjs';

import xml from 'highlight.js/lib/languages/xml';
import scss from 'highlight.js/lib/languages/scss';
import typescript from 'highlight.js/lib/languages/typescript';
import javascript from 'highlight.js/lib/languages/javascript';
import java from 'highlight.js/lib/languages/java';
import { ArticleComponent } from './article/article.component';

export function hljsLanguages() {
  return [
    {name: 'javascript', func: javascript},
    {name: 'typescript', func: typescript},
    {name: 'java', func: java},
    {name: 'scss', func: scss},
    {name: 'xml', func: xml}
  ];
}
@NgModule({
  imports: [
   HighlightModule.forRoot({ languages: hljsLanguages })
  ],
  exports: [PostComponent],
  declarations: [PostComponent],
})
export class PostModule { }
