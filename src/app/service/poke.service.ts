import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class PokeService {

  private apiUrl = environment.apiUrl;
  constructor(private _httpClient: HttpClient) { }

  /**
  * Search pokemon by name or id
  * @param nameOrId
  */
  searchPokemonByNameOrId(nameOrId: string): Observable<any> {

    const headers = new HttpHeaders();

    return this._httpClient.request<any>('get', `${this.apiUrl}/pokemon/${nameOrId}`,
        {
            headers: headers,
        }
    );
}
}
