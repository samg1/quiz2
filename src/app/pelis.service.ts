import { Injectable } from '@angular/core';
import { AngularFirestore, AngularFirestoreCollection, AngularFirestoreDocument } from '@angular/fire/firestore';
import { Observable } from 'rxjs';
import { Ordenes } from 'src/app/models/ordenes';


@Injectable({
  providedIn: 'root'
})
export class PelisService {
  itemsCollection: AngularFirestoreCollection<Ordenes>;
  items: Observable<Ordenes[]>;

  constructor(private afs: AngularFirestore) {
    const x = this.afs.collection<Ordenes>('order').valueChanges();
    this.items = x;

   }

   getItems(){
     return this.items;
   }

   orden(x) {
    this.afs.collection('order').add(x);
   }
}
