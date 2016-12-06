var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { DataService } from '../data.service';
import { LoginService } from '../services/login.service';
var UserLoginComponent = (function () {
    function UserLoginComponent(router, dataService, loginService) {
        this.router = router;
        this.dataService = dataService;
        this.loginService = loginService;
        this.details = {
            username: "",
            password: "",
            rememberMe: true
        };
        this.valid = true;
    }
    UserLoginComponent.prototype.ngOnInit = function () {
    };
    UserLoginComponent.prototype.onSubmit = function () {
        var _this = this;
        this.loginService.login(this.details.username, this.details.password, function () { return _this.router.navigate(['']); });
    };
    return UserLoginComponent;
}());
UserLoginComponent = __decorate([
    Component({
        selector: 'user-login',
        templateUrl: './user-login.component.html',
        styleUrls: ['./user-login.component.css'],
        providers: [DataService]
    }),
    __metadata("design:paramtypes", [Router,
        DataService,
        LoginService])
], UserLoginComponent);
export { UserLoginComponent };
//# sourceMappingURL=../../../../src/app/user-login/user-login.component.js.map