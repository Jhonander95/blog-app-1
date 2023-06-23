import { Injectable } from '@angular/core';
import { AngularFirestore } from '@angular/fire/compat/firestore';

@Injectable({
  providedIn: 'root'
})
export class CommentsService  {

  constructor( private db: AngularFirestore ) { }

  createComment(data: any){
    this.db.collection('comments').add(data).then( res => {
      console.log('comentario creado', res );
      
    });
  }

}
 