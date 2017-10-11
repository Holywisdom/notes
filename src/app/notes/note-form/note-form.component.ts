import { Component, EventEmitter , Output } from '@angular/core';

@Component({
  selector: 'app-note-form',
  templateUrl: './note-form.component.html',
  styleUrls: ['./note-form.component.css']
})
export class NoteFormComponent {

  @Output() formSubmit:EventEmitter<string> = new EventEmitter();
  @Output() formDelete:EventEmitter<any> = new EventEmitter();

  note = '' ;

  addNote(event:MouseEvent) {
    event.preventDefault();
    this.formSubmit.emit(this.note);
    this.note = '' ; 
  }

  deleteNote(event:MouseEvent) {
    event.preventDefault();
    this.formDelete.emit(this.note);
    this.note = '' ;
  }


}
