import { Component, OnInit } from "@angular/core";

@Component({
    selector: "Home",
    moduleId: module.id,
    templateUrl: "./home.component.html",
    styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
    textWrap
    constructor() {
    }

    ngOnInit(): void {

        console.log("this is the text wrap page");
        this.textWrap = 'Hello this is a textWrap';
      
    }
}
