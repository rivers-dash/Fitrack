import { InMemoryDbService } from 'angular-in-memory-web-api';
import { Muscle } from './muscle';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class InMemoryDataService implements InMemoryDbService {
  createDb() {
    const muscles = [
			{ id: 1, name: 'Abs', lifts: [
				{ lift: 68, at: new Date() },
				{ lift: 68, at: new Date() },
				{ lift: 68, at: new Date() },
				{ lift: 62, at: new Date() },
				{ lift: 62, at: new Date() },
				{ lift: 68, at: new Date() },
				{ lift: 68, at: new Date() },
				{ lift: 72, at: new Date() },
				{ lift: 68, at: new Date() },
				{ lift: 72, at: new Date() }
			], },
		  { id: 2, name: 'Back', lifts: [
				{ lift: 45, at: new Date() },
				{ lift: 45, at: new Date() },
				{ lift: 52, at: new Date() },
				{ lift: 52, at: new Date() },
				{ lift: 45, at: new Date() },
				{ lift: 52, at: new Date() },
				{ lift: 57, at: new Date() },
				{ lift: 57, at: new Date() },
				{ lift: 57, at: new Date() },
				{ lift: 52, at: new Date() }
			], },
		  { id: 3, name: 'Biceps', lifts: [
				{ lift: 20, at: new Date() },
				{ lift: 25, at: new Date() },
				{ lift: 25, at: new Date() },
				{ lift: 30, at: new Date() },
				{ lift: 25, at: new Date() },
				{ lift: 25, at: new Date() },
				{ lift: 25, at: new Date() },
				{ lift: 30, at: new Date() },
				{ lift: 25, at: new Date() },
				{ lift: 25, at: new Date() }
			], },
		  { id: 4, name: 'Chest', lifts: [
				{ lift: 20, at: new Date() },
				{ lift: 20, at: new Date() },
				{ lift: 20, at: new Date() },
				{ lift: 20, at: new Date() },
				{ lift: 20, at: new Date() },
				{ lift: 25, at: new Date() },
				{ lift: 25, at: new Date() },
				{ lift: 30, at: new Date() },
				{ lift: 30, at: new Date() },
				{ lift: 30, at: new Date() }
			], },
		  { id: 5, name: 'Hamstrings', lifts: [
				{ lift: 22, at: new Date() },
				{ lift: 24, at: new Date() },
				{ lift: 24, at: new Date() },
				{ lift: 26, at: new Date() },
				{ lift: 24, at: new Date() },
				{ lift: 26, at: new Date() },
				{ lift: 26, at: new Date() },
				{ lift: 26, at: new Date() },
				{ lift: 28, at: new Date() },
				{ lift: 26, at: new Date() }
			], },
		  { id: 6, name: 'Quadriceps', lifts: [
				{ lift: 42, at: new Date() },
				{ lift: 42, at: new Date() },
				{ lift: 42, at: new Date() },
				{ lift: 42, at: new Date() },
				{ lift: 42, at: new Date() },
				{ lift: 42, at: new Date() },
				{ lift: 45, at: new Date() },
				{ lift: 45, at: new Date() },
				{ lift: 45, at: new Date() },
				{ lift: 45, at: new Date() }
			], },
		  { id: 7, name: 'Shoulders', lifts: [
				{ lift: 15, at: new Date() },
				{ lift: 15, at: new Date() },
				{ lift: 15, at: new Date() },
				{ lift: 15, at: new Date() },
				{ lift: 17.5, at: new Date() },
				{ lift: 17.5, at: new Date() },
				{ lift: 17.5, at: new Date() },
				{ lift: 15, at: new Date() },
				{ lift: 17.5, at: new Date() },
				{ lift: 17.5, at: new Date() }
			], },
		  { id: 8, name: 'Triceps', lifts: [
				{ lift: 22, at: new Date() },
				{ lift: 24, at: new Date() },
				{ lift: 24, at: new Date() },
				{ lift: 26, at: new Date() },
				{ lift: 24, at: new Date() },
				{ lift: 26, at: new Date() },
				{ lift: 26, at: new Date() },
				{ lift: 26, at: new Date() },
				{ lift: 28, at: new Date() },
				{ lift: 26, at: new Date() }
			], },
		  { id: 9, name: 'Lower Back', lifts: [
				{ lift: 15, at: new Date() },
				{ lift: 15, at: new Date() },
				{ lift: 15, at: new Date() },
				{ lift: 15, at: new Date() },
				{ lift: 15, at: new Date() },
				{ lift: 20, at: new Date() },
				{ lift: 20, at: new Date() },
				{ lift: 20, at: new Date() },
				{ lift: 15, at: new Date() },
				{ lift: 20, at: new Date() }
			], }
    ];
    return {muscles};
  }

  // Overrides the genId method to ensure that a hero always has an id.
  // If the heroes array is empty,
  // the method below returns the initial number (11).
  // if the heroes array is not empty, the method below returns the highest
  // hero id + 1.
  genId(muscles: Muscle[]): number {
    return muscles.length > 0 ? Math.max(...muscles.map(hero => hero.id)) + 1 : 11;
  }
}
