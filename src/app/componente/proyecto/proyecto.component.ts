import { Component, OnInit } from '@angular/core';
import { ApiPruebaService } from '../../service/api-prueba.service';

@Component({
  selector: 'app-proyecto',
  templateUrl: './proyecto.component.html',
  styleUrls: ['./proyecto.component.css']
})
export class ProyectoComponent implements OnInit {
  characters: any;
  location: any;
  showMoldal: boolean = false;
  constructor(public api: ApiPruebaService) {
  }

  ngOnInit(): void {
    this.getPersonajes();

  }

  getPersonajes() {
    this.api.getCharacter().subscribe((data: any) => {
      this.characters = data.results;
      console.log("getCharacter", this.characters);
    });

  }

  getLocation(url: any) {
    this.showMoldal = true;
    this.api.getLocationId(url).subscribe((data: any) => {
      this.location = data;
      console.log("this.location", this.location);
    });
  }

}
