import { Component } from '@angular/core';

@Component({
  selector: 'app-listado',
  templateUrl: './listado.component.html'
})
export class ListadoComponent  {

  heroes: string[] = ['Spiderman', 'Ironman', 'Hulk', 'Thor'];
  heroeBorrado: string = '';

  borrarHeroe() {
    //this.heroes = this.heroes.slice(3, 0);
    //console.log('borrando...');
    //this.heroes = this.heroes.slice(0,-1);
    //console.log(this.heroes);
    this.heroeBorrado = this.heroes.shift() || '';
  }

}
