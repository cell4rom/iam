import { EngineService } from './threedemo.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-engine',
  templateUrl: './threedemo.component.html',
  styleUrls: ['./threedemo.component.css'],
})
export class EngineComponent implements OnInit {
  private canEleId = 'renderCanvas';

  constructor(private engServ: EngineService) { }

  ngOnInit() {
    this.engServ.createScene(this.canEleId);
    this.engServ.animate();
  }

}
