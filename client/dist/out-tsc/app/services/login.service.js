var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
import { Injectable } from '@angular/core';
import { RequestOptions } from '@angular/http';
import { HttpService } from './http.service';
import { DataContextService } from '../shared/data-context.service';
var LoginService = (function () {
    function LoginService(requestOptions, httpService, dataContext) {
        this.requestOptions = requestOptions;
        this.httpService = httpService;
        this.dataContext = dataContext;
    }
    LoginService.prototype.login = function (emailParam, passwordParam, onSuccess) {
        var _this = this;
        this.requestOptions.headers.set('Content-Type', 'application/json');
        var loginInfo = { email: emailParam, password: passwordParam };
        var loginSuccess;
        this.httpService.sendObjects("login", loginInfo).subscribe(function (result) {
            _this.dataContext.setAuthToken(result.token);
            _this.dataContext.refresh();
            loginSuccess = true;
        }, function (error) {
            console.log("Error at login Component" + error);
            loginSuccess = false;
        }, function () {
            onSuccess(loginSuccess);
        });
    };
    LoginService.prototype.logout = function () {
    };
    return LoginService;
}());
LoginService = __decorate([
    Injectable(),
    __metadata("design:paramtypes", [RequestOptions, HttpService, DataContextService])
], LoginService);
export { LoginService };
//# sourceMappingURL=../../../../src/app/services/login.service.js.map