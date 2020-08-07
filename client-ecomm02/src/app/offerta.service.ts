import { Injectable } from '@angular/core';
import { OffertaDto } from './dto/offerta-dto';
import { RicercaDto } from './dto/ricerca-dto';
import { HttpClient } from '@angular/common/http';
import { Observable, Subscription } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class OffertaService {
  urlPath = 'http://localhost:8080';
  offertaForm: OffertaDto = new OffertaDto();
  listaOfferte: OffertaDto[] = [];
  risultatiOfferte: RicercaDto[] = [];
  constructor(private http: HttpClient) { }
  lista(): void {
    const oss: Observable<OffertaDto[]> = this.http.get<OffertaDto[]>(this.urlPath + '/lista-offerte');
    const sub: Subscription = oss.subscribe(risp => { this.listaOfferte = risp; });
  }

  cerca(ricerca: RicercaDto): OffertaDto {
    if (ricerca == null) {
      this.lista();
    } else {
      const oss: Observable<RicercaDto[]> = this.http.post<RicercaDto[]>(this.urlPath + '/offerta-find', ricerca);
      const sub: Subscription = oss.subscribe(risp => { this.risultatiOfferte = risp; });
    }
    return new OffertaDto();
  }
  conferma(state: string): string {
    let urlEnd: string;
    switch (state) {
      case 'modifica': {
        urlEnd = '/offerta-update';
        break;
      }
      case 'elimina': {
        urlEnd = '/offerta-delete';
        break;
      }
      case 'aggiungi': {
        urlEnd = '/offerta-add';
        break;
      }

    }
    const oss: Observable<OffertaDto> = this.http.post<OffertaDto>(this.urlPath + urlEnd, this.offertaForm);
    const sub: Subscription = oss.subscribe(risp => { this.lista(); });
    // this.state = 'ricerca';
    this.offertaForm = new OffertaDto();
    return 'ricerca';
  }
}
