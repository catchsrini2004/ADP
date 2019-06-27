import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class HttpDataService {


  
  isLoggedin : boolean = false;
  loginUser: any ;

  constructor(private http:HttpClient) { }



  loadMovies(url)
  {

    return this.http.get(url);
  }

  loadDetails(url)
  {

    return this.http.get(url);

  }
  loadCharacter()
  {

return this.http.get('./assets/characters.json');
  }
}
