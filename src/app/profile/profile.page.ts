import { Component, OnInit } from '@angular/core';
import { AngularFirestore } from '@angular/fire/compat/firestore';
import { LoadingController, ToastController } from '@ionic/angular';

@Component({
  selector: 'app-view-post',
  templateUrl: './profile.page.html',
  styleUrls: ['./profile.page.scss'],
})
export class ProfilePage implements OnInit {
  userProfile: any = {};

  constructor(
    private loadingCtrl: LoadingController,
    private toastCtrl: ToastController,
    private firestore: AngularFirestore
  ) { }

  ngOnInit() {
  }

  ionViewWillEnter() {
    this.getUserProfile();
  }

  async getUserProfile() {
    //show loader
    let loader = await this.loadingCtrl.create({
      message: "Please wait..."
    });
    loader.present();

    try {
      const useremaillocalstore = localStorage.getItem('useremail');
      this.firestore
        .collection("userdetails", (ref) => ref.where("email", "==", useremaillocalstore))
        .snapshotChanges()
        .subscribe((data: any) => {
          if (data.length > 0) {
            const e = data[0];
            this.userProfile = {
              id: e.payload.doc.id,
              name: e.payload.doc.data()["name"],
              email: e.payload.doc.data()["email"],
              telephone: e.payload.doc.data()["telephone"],
              birthday: e.payload.doc.data()["birthday"],
              address: e.payload.doc.data()["address"],
            };
          } else {
            this.userProfile = null; // No matching document found
          }

          loader.dismiss();
        });

    } catch (e: any) {
      this.showToast(e);
    }
  }

  showToast(message: string) {
    this.toastCtrl.create({
      message: message,
      duration: 3000
    }).then(toastData => toastData.present());
  }
}