import {Component, OnInit} from '@angular/core';
import {SettingsService} from '../../../core/settings/settings.service';
import {SystemService} from '../../../core/system/system.service';
import {FormGroup, FormBuilder, Validators} from '@angular/forms';
import {CustomValidators} from 'ng2-validation';
import {Router} from "@angular/router";

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  valForm: FormGroup;
  test: any;
  errorMessage: any;

  constructor(public settings: SettingsService, fb: FormBuilder, private systemService: SystemService,private router:Router) {

    this.valForm = fb.group({
      'mobile': [null, Validators.compose([Validators.required])],
      'password': [null, Validators.required]
    });

  }

  submitForm($ev, value: any) {
    $ev.preventDefault();
    for (let c in this.valForm.controls) {
      this.valForm.controls[c].markAsTouched();
    }
    if (this.valForm.valid) {


      if (value.mobile=="123123" && value.password =="123123"){
        this.router.navigate(['/home']);
      }
      // this.systemService.login(value.mobile,value.password)
      //   .subscribe(
      //     success => {
      //       let result:any;
      //       result = success;
      //       if (result.code == 0){
      //         this.systemService.setUser(result.returnValue.user);
      //         this.systemService.setUser(result.returnValue.user);
      //         this.systemService.setUser(result.returnValue.user);
      //         this.router.navigate(['/home']);
      //       }else{
      //         this.errorMessage = result.errorReason;
      //       }
      //     },
      //     error => this.errorMessage = <any>error,
      //   );
    }
  }

  ngOnInit() {


    // this.systemService.postTest()
    //   .subscribe(
    //     success => {
    //       let result:any;
    //       result = <any>success;
    //       if (result.code == 0){
    //         this.test = result.returnValue;
    //       }else{
    //         this.errorMessage = result.errorReason;
    //       }
    //     },
    //     error => this.errorMessage = <any>error,
    //   );
  }

}
