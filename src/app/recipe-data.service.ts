import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class RecipeDataService {
  constructor(private http: HttpClient) {}

  getProductByName(str: string): Observable<any> {
    return this.http.get(
      'https://api.edamam.com/search?q=' +
        str +
        '&app_id=1700a8ca&app_key=8db3419cccbc43d21c5bae923f055060'
    );
  }
  getProductByUri(uri: string): Observable<any> {
    let currentUri = uri.indexOf('#');
    let uri1 = uri.substring(currentUri + 1);
    return this.http.get(
      'https://api.edamam.com/search?r=http%3A%2F%2Fwww.edamam.com%2Fontologies%2Fedamam.owl%23' +
        uri1 +
        '&app_id=1700a8ca&app_key=8db3419cccbc43d21c5bae923f055060'
    );
  }
}
