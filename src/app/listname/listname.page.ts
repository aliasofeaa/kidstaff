import { Component, OnInit } from '@angular/core';
import { AngularFireStorage } from '@angular/fire/compat/storage';
import { AngularFirestore } from '@angular/fire/compat/firestore';
import { ToastController, LoadingController, NavController } from '@ionic/angular';

@Component({
  selector: 'app-listname',
  templateUrl: './listname.page.html',
  styleUrls: ['./listname.page.scss'],
})
export class ListnamePage implements OnInit {

  constructor(
    private storage: AngularFireStorage,
    private toastCtrl: ToastController,
    private loadingCtrl: LoadingController,
    private navCtrl: NavController,
    private firestore: AngularFirestore
  ) {}

  ngOnInit() {
  }

}
