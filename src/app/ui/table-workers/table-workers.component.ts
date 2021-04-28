import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { MyWorker, MyWorkerType } from 'src/app/shared/worker.model';

@Component({
  selector: 'app-table-workers',
  templateUrl: './table-workers.component.html',
  styleUrls: ['./table-workers.component.css']
})
export class TableWorkersComponent implements OnInit {

  

  @Input() title: string;
  @Input() workers: MyWorker[] = [];
  @Output() deleteWorker = new EventEmitter<number>();

  id: number;
  name: string;
  surname: string;
  phone: string;
  type = 0;
  myWorkerType = MyWorkerType;

  @Output() editWorker = new EventEmitter<MyWorker>();


  constructor() { }

  ngOnInit(): void {
  
    
  }

  onDeleteWorker(id: number) {
    this.deleteWorker.emit(id);
  }


}
