import { Component, OnInit } from '@angular/core';
import { EngineService } from '../engine/threedemo.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {
  private canEleId = 'renderAuthor';

  constructor(private engServ: EngineService) { }

  ngOnInit() {
    this.engServ.createAuthorFont(this.canEleId);
    this.engServ.animateFontAuthor();
  }

}
