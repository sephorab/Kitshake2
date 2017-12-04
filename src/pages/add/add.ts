import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';

import { SQLite, SQLiteDatabaseConfig, SQLiteObject } from '@ionic-native/sqlite';

import { SQLiteMock } from '@ionic-native-mocks/sqlite';


@Component({
  selector: 'page-add',
  templateUrl: 'add.html'
})


export class AddPage {

  constructor(public navCtrl: NavController, private sqlite: SQLiteMock) {
      


      this.sqlite.create({
        name: 'data.db',
        location: 'default'
      })
        .then((db: SQLiteObject) => {


          db.executeSql('create table danceMoves(name VARCHAR(32))', {})
            .then(() => console.log('Executed SQL'))
            .catch(e => console.log(e));


        })
        .catch(e => console.log(e));

  }



  

}
