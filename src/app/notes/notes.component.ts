import { Component , EventEmitter , Output } from '@angular/core';

@Component({
  selector: 'app-notes',
  templateUrl: './notes.component.html',
  styleUrls: ['./notes.component.css']
})
export class NotesComponent   {

  notes:string[] = [];

  @Output() formDelete:EventEmitter<any> = new EventEmitter();

  addNote(note:string) {
    this.notes.push(note);
  }

  deleteNote(note:string) {
    this.notes = [] ;
    this.formDelete.emit(this.notes);
  }
  
}
