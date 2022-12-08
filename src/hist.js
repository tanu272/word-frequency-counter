import React, { Component } from 'react';
import CanvasJSReact from './canvasjs.react';
var CanvasJS = CanvasJSReact.CanvasJS;
var CanvasJSChart = CanvasJSReact.CanvasJSChart;
class Barchart extends Component {
	render() {
		const options = {
			title: {
				text: "Word Frequency Count"
			},
			data: [
			{
				// Change type to "doughnut", "line", "splineArea", etc.
				type: "column",
				dataPoints: [
					{ label: "Apple",  y: 100  },
					{ label: "Orange", y: 15  },
					{ label: "Banana", y: 25  },
					{ label: "Mango",  y: 30  },
					{ label: "Grape",  y: 28  }
				]
			}
			]
		}
		return (
		<div>
			<CanvasJSChart options = {options}
				/* onRef={ref => this.chart = ref} */
			/>
			{/*You can get reference to the chart instance as shown above using onRef. This allows you to access all chart properties and methods*/}
		</div>
		);
	}
}
export default Barchart;