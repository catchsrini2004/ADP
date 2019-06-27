import { Component, OnInit } from '@angular/core';
import { HttpDataService } from '../http-data.service';

@Component({
  selector: 'app-characters',
  templateUrl: './characters.component.html',
  styleUrls: ['./characters.component.css']
})
export class CharactersComponent implements OnInit {

  constructor(private httpdata : HttpDataService) { }

  charData :any  = [];
  showLoading : boolean  = true;
  selectedChar ;

  loadMoviesData  = [];

  loadCharDetails : any = [];

  showChar : boolean = false;
  showFilmDetails = false;

  errorLoad = false;
  

    changeValue()
    {
  
  debugger;
  
        this.showChar = true;
        this.errorLoad = false;
          this.httpdata.loadDetails(this.selectedChar).subscribe(

            (data )=>
            {

              this.loadCharDetails = data;

                debugger;
                this.loadMoviesData = [];
                for(var i = 0 ; i < this.loadCharDetails.films.length;i++)
                {

                  var  url = this.loadCharDetails.films[i];
                  this.httpdata.loadMovies(url).subscribe(
                    (data) =>
                    {
                      debugger;
                      this.loadMoviesData.push(data);
                      this.errorLoad = false;

                    },
                    (error)=>
                    {
                      debugger;
                    }
                  )

                }

                this.showChar  = false;

                this.showFilmDetails = true;

               
              
            },
            (error) => 
            {
                 debugger;
                 this.showChar  = false;
                 this.errorLoad  = true;
                 this.showFilmDetails = false;

                 console.log('Error in loading data !! ');
            }
          )
  
               
  
    }
  



  ngOnInit() {

    this.httpdata.loadCharacter().subscribe(

      (data) =>
      {
        this.charData = data;

        this.showLoading = false;

        debugger;

      },
      (error) =>
      {

        debugger;
      }
    )

  }

}
