import { HttpClient, HttpParams } from "@angular/common/http";
import { Observable } from "rxjs";
import { inject, Injectable } from "@angular/core";
import { Song } from "../models/song.model";

@Injectable({
    providedIn: 'root'
})

export class AlbumService {
    private readonly http = inject(HttpClient);

    private readonly apiUrl = 
    "https://itunes.apple.com/search?term=shakira&entity=song&limit=20"

    getSongs(): Observable<Song[]> {
        return this.http.get<Song[]>(this.apiUrl);
    }

}