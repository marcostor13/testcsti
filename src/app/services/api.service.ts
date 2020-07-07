import { Injectable } from '@angular/core';
import { AngularFirestore } from '@angular/fire/firestore';

@Injectable({
  providedIn: 'root'
})
export class ApiService {
  constructor(private firestore: AngularFirestore) { }

  public addDocument(data: any) {
    return this.firestore.collection(data.collection).add(data.data);
  } 

  public getDocument(data: any) {
    return this.firestore.collection(data.collection).doc(data.document).snapshotChanges();
  }

  public getDocuments(data: any) {
    return this.firestore.collection(data.collection);
  }

  public updateDocument(data: any) {
    return this.firestore.collection(data.collection).doc(data.document).set(data.data);
  }

}
