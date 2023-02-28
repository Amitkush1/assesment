import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ShareDataService {
  subject = new BehaviorSubject<any>(false);
  subjectAsObservable = this.subject.asObservable();

  constructor() { }

  changeData(data: any) {
    this.subject.next(data);
  }
}
