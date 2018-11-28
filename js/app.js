var ctx = document.getElementById('myChart').getContext('2d');

var blue_gradient = ctx.createLinearGradient(10, 10,40, 300);
blue_gradient.addColorStop(0, 'rgba(163, 161, 251,0.6)');
blue_gradient.addColorStop(1, 'rgba(163, 161, 251,0.1)');

var pink_gradient = ctx.createLinearGradient(10, 10,40, 300);
pink_gradient.addColorStop(0, 'rgba(163, 161, 251,0.6)');
pink_gradient.addColorStop(1, 'rgba(163, 161, 251,0.1)');

var green_gradient = ctx.createLinearGradient(10, 10,40, 300);
green_gradient.addColorStop(0, 'rgba(97, 226, 162,0.6)');
green_gradient.addColorStop(1, 'rgba(163, 161, 251,0.1)');

var chart = new Chart(ctx, {
    // The type of chart we want to create
    type: 'line',

    // The data for our dataset
    data: {
        labels: ["January", "February", "March", "April", "May", "June", "July"],
        datasets: [
            {
            label: "Leisure Jobs",
            backgroundColor: pink_gradient,
            borderColor: 'rgb(163, 161, 251)',
            pointBackgroundColor: "#fff",

            pointRadius: '4',
            data: [0, 10, 5, 2, 20, 30, 45],
        },
            {
                label: "Gym Career",
                backgroundColor: blue_gradient,
                borderColor: 'rgb(84, 216, 255)',
                pointBackgroundColor: "#fff",
                pointRadius: '4',
                data: [30, 25, 20, 15, 10, 5, 10],
            },
            {
                label: "Indeed",
                backgroundColor: green_gradient,
                borderColor: 'rgb(97, 226, 162)',
                pointBackgroundColor: "#fff",
                pointRadius: '4',
                data: [35, 30, 25, 20, 15, 10, 5],
            }
            ],
    },

    // Configuration options go here
    options: {
        responsive: true,
        title: {
            display: true,
            position: "top",
            fontSize: 13,
            fontFamily: '"Source Sans Pro", sans-serif',
        },
        tooltips: {
            mode: 'index',
            intersect: false,
        },
        hover: {
            mode: 'nearest',
            intersect: true
        },
        legend: {
            display: true,
            position: "bottom",
            labels: {
                position: "left",
            }
        },
    }
});

jQuery(document).ready(function ($) {
    $('.preview-container .preview-content span.show-all').on("click", function (e) {
        e.preventDefault();
        if($(this).text() === "View more") {
            $(this).text("Hide");
            $('.preview-container .preview-content').css('height', 'auto').animate(300)
        } else {
            $(this).text("View more");
            $('.preview-container .preview-content').animate({
                height: 130
            }, 300);
        }
    });
});
