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
import { DataService } from '../data.service';
import { HttpService } from '../services/http.service';
import { COMMENT_DATA } from '../mock-data/data';
import { USER_DATA } from '../mock-data/data';
var HomeComponent = (function () {
    function HomeComponent(dataService, httpService) {
        this.dataService = dataService;
        this.httpService = httpService;
    }
    HomeComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.commentList = COMMENT_DATA;
        this.userData = USER_DATA;
        this.httpService.getObjects("currentuser").subscribe(function (result) {
            var user = result;
            console.log(user.id);
            console.log(result);
            _this.httpService.getObjects("userprofile/" + user.id).subscribe(function (result) {
                _this.userData = result;
                console.log(result);
            });
            ;
        });
    };
    return HomeComponent;
}());
HomeComponent = __decorate([
    Component({
        selector: 'app-home',
        templateUrl: './home.component.html',
        styleUrls: ['./home.component.css'],
        providers: [DataService]
    }),
    __metadata("design:paramtypes", [DataService, HttpService])
], HomeComponent);
export { HomeComponent };
//# sourceMappingURL=../../../../src/app/home/home.component.js.map