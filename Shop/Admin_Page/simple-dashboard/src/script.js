$(document).ready(function() {
	function counter(element, count, time){
		time = time || 1000;
		var actualCounter = 0;
		function startCount(){
			actualCounter++;
			element.text(parseInt(actualCounter/time * count));
			if(actualCounter != time){
				setTimeout(startCount, 1)
			}
		}
		startCount();
		
	}
	$('.start-counter').each(function(){
		var $this = $(this);
		var count = parseInt($this.text());
		counter($this, count);
		
	});
	
	var dataset1 = [1, 10, 5, 2];
	var dataset2 = [20, 30, 15, 12];
	var dataset3 = {
		datasets: [{
			data: [70, 30],
			backgroundColor: [
        "#FF6B6B",
        "#C44D58",
      ],
    }],

    // These labels appear in the legend and in the tooltips when hovering different arcs
    labels: [
        'data 1',
        'data 2'
    ],
		
	};
	
	var ctxLine = $('#line-chart');
	var ctxPie = $('#pie-chart');
	var myLineChart = new Chart(ctxLine, {
		type: 'line',
		options: {
			legend: {
					display: false
			},
			aspectRatio: 4
		},
		data: {
			labels: ["January", "February", "March", "April"],
        datasets: [
          {
            label: "Dataset 1!",
            fill: false,
            backgroundColor: 'rgb(190, 99, 255, 0.25)',
            borderColor: 'rgb(190, 99, 255)',
            data: dataset1,
          },
            {
            label: "Dataset 2!",
            fill: false,
            backgroundColor: 'rgba(255, 99, 132, 0.25)',
            borderColor: 'rgb(255, 99, 132)',
            data: dataset2,
        }]
		}
	});
	
	var myLineChart = new Chart(ctxPie, {
		type: 'pie',
		options: {
			legend: {
					display: false
			},
			aspectRatio: 4
		},
		data: dataset3
	});
	
	$(document).on('click', '.stickynote-card .colors .color', function() {
		var $this = $(this);
		$this.addClass('active').siblings().removeClass('active');
		$this.parents('.stickynote-card').attr('class', 'stickynote-card style-'+ $this.data('color'));
	});
});