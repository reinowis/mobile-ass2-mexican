import { Component } from '@angular/core';

import { NavController } from 'ionic-angular';
import {SMS} from 'ionic-native';
@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {

  constructor(public navCtrl: NavController) {
    
  }
sendSMS()
{
  var options = {
    replaceLineBreaks: false,
    android: {
      intent: ''
    }
  };
  SMS.send('01655256941','I want a big taco  - sms message',options)
  .then(()=>{alert('Success');
},()=>{alert('Failed');
});
}
}
