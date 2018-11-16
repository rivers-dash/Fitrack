import { Injectable } from '@angular/core';
import { Muscle } from './muscle'
import { Muscles } from './muscles'
import { Observable, of } from 'rxjs';

import { HttpClient, HttpHeaders } from '@angular/common/http';

@Injectable({
  providedIn: 'root',
})
export class MuscleService {

	private musclesUrl = 'api/muscles';  // URL to web api

  constructor(
		private http: HttpClient
	) { }

	getMuscles(): Observable<Muscle[]> {
		return this.http.get<Muscle[]>(this.musclesUrl)
	}

}
