export interface MyWorker {
  name: string;
  surname: string;
  type: number;
  phone: string;
  id?: number;
}

export enum MyWorkerType {
  programmer,
  designer,
  copywriter,
  manager,
}

export let myWorkerDatabase: MyWorker[] = [
  { id: 0, name: 'Даниил', surname: 'Алексеев', type: 0, phone: '89888666609' },
  { id: 1, name: 'Марк', surname: 'Гурьянов', type: 1, phone: '85475483984' },
  { id: 2, name: 'Агнесса', surname: 'Полужникова', type: 2, phone: '809234872' },
  { id: 3, name: 'Ярослав', surname: 'Хоменко', type: 3, phone: '85493023874' }

]
