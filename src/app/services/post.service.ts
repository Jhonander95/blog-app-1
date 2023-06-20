import { Injectable } from '@angular/core';
import { AngularFirestore } from '@angular/fire/compat/firestore';
import { map } from 'rxjs/operators';

//import firebase from 'firebase/app';
import * as firebase from 'firebase/app';


@Injectable({
  providedIn: 'root'
})
export class PostService {

  constructor( private db: AngularFirestore ) { }

  LoadFeatured() {
    return this.db.collection('post', ref => ref.where('isFeatured', '==', true).limit(4)).snapshotChanges().pipe(
      map( actions => {
        return actions.map( a => {
          const data = a.payload.doc.data();
          const id = a.payload.doc.id;
          return { id, data }
        })
      })
    )
  }

  LoadLatest() {
    return this.db.collection('post', ref => ref.orderBy('createdAt')).snapshotChanges().pipe(
      map( actions => {
        return actions.map( a => {
          const data = a.payload.doc.data();
          const id = a.payload.doc.id;
          return { id, data }
        })
      })
    )
  }

  LoadByCategory( categoryId: any ) {
    return this.db.collection('post', ref => ref.where('category.categoryId', '==', categoryId)).snapshotChanges().pipe(
      map( actions => {
        return actions.map( a => {
          const data = a.payload.doc.data();
          const id = a.payload.doc.id;
          return { id, data }
        })
      })
    )
  }

  LoadSimilar( categoryId: any ) {
    return this.db.collection('post', ref => ref.where('category.categoryId', '==', categoryId).limit(4)).snapshotChanges().pipe(
      map( actions => {
        return actions.map( a => {
          const data = a.payload.doc.data();
          const id = a.payload.doc.id;
          return { id, data }
        })
      })
    )
  }

  LoadById( postId: any ) {
    return this.db.doc(`post/${postId}`).valueChanges();
  }

  countViews( postId: any,  ){
    /* const viewsCount = {
      views: firebase.
    } */

    //this.db.collection('post').doc(postId).update(viewsCount.views);

   /*  const postRef = this.db.doc(`post/${postId}`).ref;
    return postRef.update({ views: firebase.firestore.FieldValue.increment(1) }); */

  }



}
 