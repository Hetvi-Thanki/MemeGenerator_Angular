import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-generator',
  templateUrl: './generator.component.html',
  styleUrls: ['./generator.component.css']
})
export class GeneratorComponent {
   
  topText: string = "This is top text";
  bottomText: string = "This is bottom text";
  imageName: string = "Surprised Pikachu";
  colorName: string = "black";

  imageNameList: string[] = ["Surprised Pikachu", "Crying Pepe", "Denerys","Squint eyes","Laugh"];
  imageFileNameList: string[] = ["pikachu.jpg", "pepe_gif.png", "deaenerys_gif.png","meme2_gif.jpeg","meme1_gif.png"];

  changeImage(){
    var valueOfSearch: string = "";
    for(var i = 0; i < this.imageNameList.length; i++){
        if(this.imageNameList[i] === this.imageName){
            valueOfSearch = this.imageFileNameList[i];
        }
    }
  
    var whole: string = "assets/img/" + valueOfSearch;
    return whole;
}
 
}
