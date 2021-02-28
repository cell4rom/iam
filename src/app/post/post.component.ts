import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import { HighlightResult } from 'ngx-highlightjs';

@Component({
  selector: 'post',
  templateUrl: './post.component.html',
  styleUrls: ['./post.component.css']

})
export class PostComponent implements OnInit {
  response: HighlightResult;

  public codeTs = `
    import { Component, ViewEncapsulation } from '@angular/core';

    @Component({
    selector: 'app-article',
    templateUrl: 'article.component.html',
    styleUrls: ['article.component.css'],
    encapsulation: ViewEncapsulation.ShadowDom
    })
    export class ArticleComponent {
      ...
    }`
  constructor() { }

  ngOnInit() {
  }

  onHighlight(e) {
    this.response = {
      language: e.language,
      r: e.r,
      second_best: '{...}',
      top: '{...}',
      value: '{...}'
    }
  }


}
