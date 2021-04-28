import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { MyWorkerType, MyWorker, myWorkerDatabase } from '../shared/worker.model';

@Component({
  selector: 'app-editform-worker',
  templateUrl: './editform-worker.component.html',
  styleUrls: ['./editform-worker.component.css']
})
export class EditformWorkerComponent implements OnInit {

  personForm: FormGroup;
  disabledForms = false;

  id: number;
  name: string;
  surname: string;
  type = 0;
  phone: string;
  myWorkerType = MyWorkerType;

  @Output() editWorker = new EventEmitter<MyWorker>();
  @Output() editById = new EventEmitter<number>();



  constructor() { }

  ngOnInit(): void {

    this.personForm = new FormGroup({
      id: new FormControl({ value: 0, disabled: this.disabledForms }, [
        Validators.required,
      ]),
      firstName: new FormControl({ value: '', disabled: this.disabledForms }, [
        Validators.required,
      ]),
      surname: new FormControl({ value: '', disabled: this.disabledForms }, [
        Validators.required,
      ]),
      type: new FormControl({ value: 0, disabled: this.disabledForms }, [
        Validators.required,
      ]),
      phone: new FormControl({ value: '', disabled: this.disabledForms }, [
        Validators.required,
        Validators.pattern("[0-9]{10}")
      ])
    })

  }


  onEditWorker() {
    let worker: MyWorker = {
      id: this.personForm.controls["id"].value,
      name: this.personForm.controls["firstName"].value,
      surname: this.personForm.controls["surname"].value,
      type: this.personForm.controls["type"].value,
      phone: this.personForm.controls["phone"].value
    }
    this.editWorker.emit(worker);
  }

}
