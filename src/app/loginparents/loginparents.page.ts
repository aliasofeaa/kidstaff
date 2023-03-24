import { Component, OnInit } from '@angular/core';
import {AngularFireAuth} from '@angular/fire/compat/auth';
import {
  LoadingController,
  NavController,
  ToastController } from '@ionic/angular';
import { User } from '../models/user.mode';

@Component({
  selector: 'app-loginparents',
  templateUrl: './loginparents.page.html',
  styleUrls: ['./loginparents.page.scss'],
})
export class LoginparentsPage implements OnInit {
  user = {} as User;
  constructor(
    private toastCtrl: ToastController,
    private loadingCtrl: LoadingController,
    private afAuth: AngularFireAuth,
    private navCtrl: NavController
    ) {}

  ngOnInit() {}

  async login(user: User){
    if(this.formValidation()){
      //show loader
      let loader = this.loadingCtrl.create({
        message: "Please wait..."
      });
      (await loader).present ();

      try{
        localStorage.setItem('useremail', user.email);
        await this.afAuth
        .signInWithEmailAndPassword(user.email, user.password)
        .then(data =>
          console.log(data));

        //redirect to home page
        this.navCtrl.navigateRoot ("mainparents"); 
      } catch (e: any){
        this.showToast(e);
      }

      //dismiss loader
      (await loader).dismiss();
    }
  }

  formValidation(){
    if (!this.user.email){
      this.showToast("Enter email");
      return false;
    }

    if (!this.user.password){
      this.showToast("Enter password");
      return false;
    }

    return true;
  }

  showToast (message:string){
    this.toastCtrl.create({
      message:message,
      duration:3000
    }).then(toastData => toastData.present());
  }

}
