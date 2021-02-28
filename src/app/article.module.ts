import { NgModule } from '@angular/core';
import { PostModule } from './post.module';
import { ArticleComponent } from './article/article.component';

@NgModule({
  imports: [
    PostModule
  ],
  exports: [PostModule, ArticleComponent],
  declarations: [ArticleComponent],
})
export class ArticleModule { }
