import { CategoriaDto } from './../dto/categoria-dto';
import { CategoriaServiceService } from './../categoria-service.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-categoria-crud',
  templateUrl: './categoria-crud.component.html',
  styleUrls: ['./categoria-crud.component.css'],
})
export class CategoriaCRUDComponent implements OnInit {

  aggiungiState:boolean = false;
  modificaState:boolean = false;
  descrizioneState:boolean = false;
  categoriaSelezionata: number;
 

  constructor(public mem: CategoriaServiceService) { }

  ngOnInit() {
    this.mem.categorie = this.mem.lista();
    this.mem.categoria.descrizione = "";
  }

  searchCriteria() {
    if (this.mem.categoria.descrizione != "") {
      this.mem.cerca();
      this.mem.categoria.descrizione = "";
      this.aggiungiState = false;
    } else {
      return this.mem.lista();
    }
  }

  aggiungi() {
    this.descrizioneState = false;
    this.modificaState = false;
    this.aggiungiState = true;
    this.mem.categTemp = new CategoriaDto();
  }

  conferma() {
    if (this.aggiungiState) {
      this.mem.addCategoria();
      this.mem.categTemp = new CategoriaDto();
    } else {
      this.mem.categorie[this.categoriaSelezionata] = this.mem.categTemp;
      this.mem.update(this.mem.categTemp);
      this.mem.lista();
      this.mem.categTemp = new CategoriaDto();
    }
  }

  annulla() {
    this.aggiungiState = false;
    this.modificaState = false;
    this.descrizioneState = false;
  }

  modifica(c: CategoriaDto, i: number) {
    this.descrizioneState = false;
    this.aggiungiState = false;
    this.modificaState = true;
    this.categoriaSelezionata = i;
    this.mem.categTemp = Object.assign({}, c);
  

  }

  rimuovi(id: number) {
    this.mem.remove(id);
  }
  visualizzaDettagliCat(c: CategoriaDto, i: number) {
    this.aggiungiState = false;
    this.modificaState = false;
    //this.descrizioneState = true;
    this.categoriaSelezionata = i;
    this.mem.categTemp = Object.assign({}, c); //copio c dentro categTemp


  }
}
