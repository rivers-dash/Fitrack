import { Component, OnInit, Input } from '@angular/core'
import { Muscles } from '../muscles'
import { Muscle } from '../muscle'
import { MuscleService } from '../muscle.service'

import * as Chart from 'chart.js'

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {

	muscles: Muscle[]
	selectedMuscle: Muscle
	maxLift: number = 0
	sample: number = 0
	newLift: number = 0
	dates: string[]
	liftValues: number[]
	chart = []

  constructor(private muscleService: MuscleService) { }

  ngOnInit() {
		this.getMuscles()
  }

	getMuscles(): void {
	  this.muscleService.getMuscles()
			.subscribe(muscles => this.muscles = muscles)
	}

	selectMuscle(muscle: Muscle): void {
		this.selectedMuscle = muscle
		this.sample = this.selectedMuscle.lifts.length - 1
		this.displayChart()
	}

	save(): void {
		let jsdate = new Date(Date.now())
		this.selectedMuscle.lifts.push({ lift: this.newLift, at: jsdate })
		this.sample = this.selectedMuscle.lifts.length - 1
		this.newLift = 0
		this.displayChart()
	}

	displayChart(): void {
		this.dates = this.selectedMuscle.lifts.map(lift => (new Date(lift.at).getDate() + '-' + new Date(lift.at).getMonth()))
		this.liftValues = this.selectedMuscle.lifts.map(lift => lift.lift)
		this.maxLift = Math.max(...this.liftValues)
	}
}
