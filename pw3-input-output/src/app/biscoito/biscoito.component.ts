import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-biscoito',
  imports: [],
  templateUrl: './biscoito.component.html',
  styleUrl: './biscoito.component.css'
})
export class BiscoitoComponent {
  foto="biscoito.png"

  biscoito(){
    if (this.foto=="biscoito.png"){
      this.foto="biscoito-aberto.png"
    } else{
      this.foto="biscoito.png"
    }
  }

}

