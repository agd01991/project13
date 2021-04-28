import { Component } from '@angular/core';
// import { worker } from 'cluster';
import { MyWorker, myWorkerDatabase, MyWorkerType } from './shared/worker.model';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Список сотрудников';
  workers: MyWorker[] = myWorkerDatabase;
  myWorkerType = MyWorkerType;

  getByType(type:number) {
    return this.workers.filter(worker => worker.type === type);
  }

  onDeleteWorker(id: number) {
    let index = this.workers.findIndex((worker) => worker.id === id);
    if (index !== -1) {
      this.workers.splice(index, 1);
    }
  }

  onAddWorker(worker: MyWorker) {
    if (worker.name == '', worker.surname == '') {
      alert("Введите значения!")
    } else {
      let id = this.workers.length > 0 ? 
      this.workers[this.workers.length - 1].id + 1
      : 0;
      worker.id = id;
      this.workers.push(worker);
    }
    
  }

   onEditWorker(worker: MyWorker, ) {
    for (let i = 0; i < this.workers.length; i++) {
      console.log(this.workers[i].id);
      console.log('Worker: ' + worker.id);

      if (this.workers[i].id == worker.id) {
        console.log("Massiv: " + this.workers[i].id)

        this.workers.splice(this.workers[i].id, 1, worker);
        break;
      }
    }
  }
}
