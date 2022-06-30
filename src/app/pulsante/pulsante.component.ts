import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-pulsante',
  templateUrl: './pulsante.component.html',
  styleUrls: ['./pulsante.component.css'],
})
export class PulsanteComponent implements OnInit {
  @Output() cliccato = new EventEmitter();
  @Input() nomePosto: string;
  @Input() prenotato: boolean;
  @Input() nomePrenotazione;
  @Output() nomePostoChange = new EventEmitter<string>();
  constructor() {}
  foo() {
    this.cliccato.emit(this);
  }
  mostraNome() {
    this.nomePostoChange.emit(this.nomePosto);
  }
  ngOnInit() {}
}
