import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { FormControl, FormGroup, Validators, ReactiveFormsModule } from '@angular/forms';
import { MyWorkerType, MyWorker } from 'src/app/shared/worker.model';

@Component({
  selector: 'app-addform-worker',
  templateUrl: './addform-worker.component.html',
  styleUrls: ['./addform-worker.component.css']
})
export class AddformWorkerComponent implements OnInit {

  personForm: FormGroup;
  disabledForms = false;

  myWorkerType = MyWorkerType;

  @Output() addWorker = new EventEmitter<MyWorker>();

  constructor() { }

  ngOnInit(): void {

    this.personForm = new FormGroup({
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
      ]),
    })

    console.log(this.personForm.value);


  }

  onAddWorker() {
    if (this.personForm.controls["firstName"] === undefined || this.personForm.controls["surname"] === undefined) {
      alert("Введите значения");
    } else {
      let worker: MyWorker = {
        name: this.personForm.controls["firstName"].value,
        surname: this.personForm.controls["surname"].value,
        type: this.personForm.controls["type"].value,
        phone: this.personForm.controls["phone"].value
      }
      this.addWorker.emit(worker);
    }
  }

}
