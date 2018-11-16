import { Component, OnInit, Input } from '@angular/core';
import * as Chart from 'chart.js'

@Component({
  selector: 'app-line-chart',
  templateUrl: './line-chart.component.html',
  styleUrls: ['./line-chart.component.css']
})
export class LineChartComponent implements OnInit {

	@Input() xValues: string[]
	@Input() yValues: string[]
	x: string[]
	y: string[]
	chart = []

  constructor() { }

	ngOnInit(): void {
	}

	ngOnChanges(): void {
		this.displayChart()
		console.log(document.getElementById("canvas"))
		console.log('2', this.chart)
		console.log(this.xValues)
		console.log(this.yValues)
	}

	displayChart(): void {
		this.chart = new Chart('canvas', {
			type: 'line',
			data: {
				labels: this.xValues,
				datasets: [
					{
						data: this.yValues,
						borderColor: "#ffcc00",
						fill: false
					},
				]
			},
			options: {
				legend: {
					display: false
				},
				scales: {
					xAxes: [{
						display: true
					}],
					yAxes: [{
						display: true,
						ticks: {
							beginAtZero: true
						}
					}],
				}
			}
		})
	}

}
