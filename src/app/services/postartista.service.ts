import { Injectable } from '@angular/core';
import { AngularFirestore, AngularFirestoreCollection} from '@angular/fire/firestore';
import { Observable} from 'rxjs';
import { finalize, map} from 'rxjs/operators';
import { PostartistaI} from '../postartista/postartista.interface';
import { FileartistaI} from '../postartista/fileartista.interface';
import { AngularFireStorage } from '@angular/fire/storage';

export interface PostartistaID extends PostartistaI{id: string;}


@Injectable({
  providedIn: 'root'
})
export class PostartistaService {
  nombreArtista: string='';
private filePath: any;
private downloadURL: Observable<string>;
private postartistaCollection: AngularFirestoreCollection<PostartistaI>;
postartista: Observable<PostartistaID>
public selected = {
  id: null,
  titlePost:'',
  contentPost: '',
  tagsPost:'',
  registra:''
};

  constructor(private readonly afs: AngularFirestore, private storage: AngularFireStorage) { 
    this.postartistaCollection= afs.collection<PostartistaI>('postartista');
  }

  public preAddAndUpdatePost(post: PostartistaI, image: FileartistaI): void{
    this.uploadImage(post, image);
  }

  private savePost(post: PostartistaI){
    const postObj = {
      titlePost: post.titlePost,
      contentPost: post.contentPost,
      imagePost: this.downloadURL,
      tagsPost: post.tagsPost,
      fileRef: this.filePath,
      registra: this.nombreArtista
    };
    //Todo_editar post
    this.postartistaCollection.add(postObj);
  }

  private uploadImage(post: PostartistaI, image:FileartistaI){
    this.filePath=`images/${image.name}`;
    const fileRef = this.storage.ref(this.filePath);
    const task= this.storage.upload(this.filePath, image);
    task.snapshotChanges()
    .pipe(
      finalize(()=>{
        fileRef.getDownloadURL().subscribe(urlImage=>{
          this.downloadURL=urlImage;
          this.savePost(post);
          //console.log('URL_IMAGE', urlImage);
          //console.log('POST', post);
        });
      })
    ).subscribe();
  }


  public getAllPosts(): Observable<PostartistaI[]>{
    return this.postartistaCollection
    .snapshotChanges()
    .pipe(
      map(actions =>
        actions.map(a=>{
          const data= a.payload.doc.data() as PostartistaI;
          const id = a.payload.doc.id;
          return{id, ...data};
        })
        )
    );
  }


  public getOnePostartista(id: PostartistaI): Observable<PostartistaI>{
    return this.afs.doc<PostartistaI>(`postartista/${id}`).valueChanges();
  }

  public deletePostById(post:PostartistaI){
    return this.postartistaCollection.doc(post.id).delete();
  }

  addPostartista(postartista: PostartistaI){
    return this.postartistaCollection.add(postartista);
  }

  public editPostartista(postartista: PostartistaID){
    return this.postartistaCollection.doc(postartista.id).update(postartista);
  }
}
