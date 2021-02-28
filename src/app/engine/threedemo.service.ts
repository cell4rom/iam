import * as THREE from 'three';
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class EngineService {
  private canvas: HTMLCanvasElement;
  private renderer: THREE.WebGLRenderer;
  private camera: THREE.PerspectiveCamera;
  private scene: THREE.Scene;
  private light: THREE.AmbientLight;
  private text : THREE.Mesh;
  private font : THREE.FontLoader ;

  private cube: THREE.Mesh;

  constructor(private http : HttpClient){

  }

  createScene(elementId: string): void {
    // The first step is to get the reference of the canvas element from our HTML document
    this.canvas = <HTMLCanvasElement>document.getElementById(elementId);

    this.renderer = new THREE.WebGLRenderer({
      canvas: this.canvas,
      alpha: true,    // transparent background
      antialias: true // smooth edges
    });
    this.renderer.setSize(600, 500) 
   // this.renderer.setSize( window.innerWidth, window.innerHeight) ;

    // create the scene
    this.scene = new THREE.Scene();

    this.camera = new THREE.PerspectiveCamera(
      75, window.innerWidth / window.innerHeight, 0.1, 1000
    );
    this.camera.position.z = 10;
    this.scene.add(this.camera);

    // soft white light
    this.light = new THREE.AmbientLight( 0x404040 );
    this.light.position.z = 10;
   // this.scene.add(this.light);

    let geometry = new THREE.BoxGeometry(3, 3, 3);
    let material = new THREE.MeshBasicMaterial({ color: 0x000ff0 });
    this.cube = new THREE.Mesh( geometry, material );
    this.scene.add(this.cube);
  }

  animate(): void {
    this.render();
  }

  render() {
    requestAnimationFrame(() => {
      this.render();
    });

    this.cube.rotation.x += 0.01;
    this.cube.rotation.y += 0.01;
    this.renderer.render(this.scene, this.camera);
  }

  resize() {
    let width = 600 ;//window.innerWidth;
    let height = 500 ; //window.innerHeight;

    this.camera.aspect = width / height;
    this.camera.updateProjectionMatrix();

    this.renderer.setSize( width, height );
  }


  createAuthorFont(elementId: string): void {
    this.canvas = <HTMLCanvasElement>document.getElementById(elementId);

    this.renderer = new THREE.WebGLRenderer({
      canvas: this.canvas,
      alpha: true,    // transparent background
      antialias: true // smooth edges
    });
    //this.renderer.setSize(300, 90) ;
    this.renderer.setSize(300, 90) ;
    this.scene = new THREE.Scene();
    //this.scene.background = new THREE.Color(0xffffff);

    // create an locate the camera
    this.camera = new THREE.PerspectiveCamera(20,
                1.2,
                1, 1000);

    this.camera.position.z = 400;
    this.scene.add(this.camera);

    let loader = new THREE.FontLoader();
   this.text = new THREE.Mesh();
    this.getJSON('../../assets/font/fontAuthor.json')
    .then(res => {
      this.font = loader.parse(res);
      let geometryFirstName = new THREE.TextGeometry("Samir Romdhani", {font: this.font, size: 14, height: 4});
      let geometryLastName = new THREE.TextGeometry("Romdhani", {font: this.font, size: 18, height: 6});
      let material = new THREE.MeshBasicMaterial({color:0X034b59});
       this.text = new THREE.Mesh(geometryFirstName, material);
       let text2 = new THREE.Mesh(geometryLastName, material);
       this.text.position.x = -80;
       text2.position.y = -20;
       text2.position.x = -20;
       this.scene.add(this.text);
       //this.scene.add(text2);
    }
    );
   };

   animateFontAuthor(): void {
    this.renderFontAuthor();
  }

  renderFontAuthor() {
    requestAnimationFrame(() => {
      this.renderFontAuthor();
    });
    //this.text.rotation.z -= 0.01;
    this.renderer.render(this.scene, this.camera);
  }

  public getJSON(file : any) {
    return this.http.get(file).toPromise();
}
}
