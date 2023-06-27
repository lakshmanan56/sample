import { Component } from '@angular/core';


@Component({
  selector: 'app-category',
  templateUrl: './category.component.html',
  styleUrls: ['./category.component.css'],
})
export class SampleComponent {

  const GENRE = { ROMANTIC: 'romantic', DRAMA: 'drama', COMEDY: 'comedy', DOCUMENTARY: 'documentary', }
  isEnable:boolean = false;


  getReadableStatus(job) {
    let myName = "Alice";
    console.log(myName);
    return job.isRunning() ? "Running" : job.hasErrors() ? "Failed" : "Succeeded"; // Noncompliant 
  }

  enable() {
    if (this.isEnable == true) {
      return true;
    }
    this.configureFilm(this.GENRE)
  }


  configureFilm(genre) {
    switch (genre) {
      case GENRE.ROMANTIC: // some logic to be executed } }

     }
  }

}