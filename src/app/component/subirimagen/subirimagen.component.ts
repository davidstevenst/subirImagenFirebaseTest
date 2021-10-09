import { Component, OnInit } from '@angular/core';
import { AngularFireStorage } from '@angular/fire/storage';
import { Router } from '@angular/router';
import { Observable, pipe } from 'rxjs';
import {finalize, map} from 'rxjs/operators';



@Component({
  selector: 'app-subirimagen',
  templateUrl: './subirimagen.component.html',
  styleUrls: ['./subirimagen.component.css']
})
export class SubirimagenComponent implements OnInit {
  public porcentaje = 0;
  public finalizado = false;
  public URLPublica = '';

  uploadPercent:Observable<number>;

  evento:any;

  urlstring:any ="";
  constructor(private storage:AngularFireStorage,
              private router:Router) { }

  ngOnInit(): void {
    this.borrarImagen();
  }


  preparasubida(e){
   console.log(e)
    this.evento=e;
  }


  upload() {
    const file=this.evento.target.files[0];
    const id= Math.random().toString(36).substring(2);
    const filePath = 'upload/profile'+id;
    const ref=this.storage.ref(filePath);
    let urlimage="";
  
    let task = ref.put(file).then((result) => {
      
      

     

      this.storage.ref(filePath).getDownloadURL().subscribe(r =>{
        urlimage=r;
        this.router.navigate(['RevisaImagen',r])
      });
    
    })
    ref.put(file).percentageChanges().subscribe((porcentaje) => {
      this.porcentaje = Math.round(porcentaje);
      if (this.porcentaje == 100) {
        this.finalizado = true;
      }
    });
  }
 

  borrarImagen(){
    const filePath = 'upload/profilesr7124m5uyr';
    const ref=this.storage.ref(filePath).delete();
  }


}





