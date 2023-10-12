<template>
    <div id="chart">
        <apexchart type="area" height="350" :options="chartOptions" :series="series"></apexchart>
    </div>
</template>

<script>
export default {
    data: function () {
        return {
            series: [{
                data: [50, 100, 150, 100, 150, 140, 300, 120, 180, 100, 200, 120, 180, 150, 150,],
                name: 'Total Consumed',
            }],
            chartOptions: {
                grid: {
                    borderColor: '#C4C4C4',
                    strokeDashArray: 7,
                },

                fill: {
                    colors: ['#07b6bf1a',],
                    type: 'solid'

                },
                markers: {
                    strokeWidth: 2,
                    discrete: [{
                        seriesIndex: 0,
                        dataPointIndex: 6,
                        fillColor: 'white',
                        strokeColor: '#07B6BF',
                        size: 5,
                        shape: "circle"
                    }]
                },
                chart: {
                    toolbar: {
                        show: false,
                    },
                    height: 300,
                    type: 'area',
                    offsetX: 0,
                },
                dataLabels: {
                    enabled: false
                },
                stroke: {
                    curve: 'smooth',
                    colors: ['#07B6BF',],
                    width: 2,
                },
                xaxis: {
                    categories: ['1 Apr', '2 Apr', '3 Apr', '4 Apr', '5 Apr', '6 Apr', '7 Apr', '8 Apr', '9 Apr', '10 Apr', '11 Apr', '12 Apr', '13 Apr', '14 Apr', '15 Apr'],
                    labels: {
                        style: {
                            colors: '#505050C4',
                            fontSize: '12px',
                            fontWeight: 500,
                            cssClass: 'apexcharts-xaxis-label',
                        },
                    },

                },
                yaxis: {
                    labels: {
                        style: {
                            colors: '#505050C4',
                            fontSize: '12px',
                            fontWeight: 500,
                            cssClass: 'apexcharts-xaxis',
                        },
                    }
                },
                tooltip: {
                    custom: function ({ seriesIndex, dataPointIndex, w }) {
                        var data = w.globals.initialSeries[seriesIndex].data[dataPointIndex];
                        return '<ul class="border-none px-[14px] py-[7px] text-white">' +
                            '<li class="text-[14px] font-[500] leading-[20px]"><b>Total Consumed</b>: <br/> <span class="font-[400]">' + data + ' MB</span></li>' +
                            '</ul>';
                    }
                }
            },
        };
    },
};
</script>

<style>
.dark .apexcharts-tooltip.apexcharts-theme-light .apexcharts-active {
    background: transparent !important;
    border: 0 !important;
    border-radius: 12px !important;
    background: rgb(151 149 149/ 0.6) !important;


}

.dark .apexcharts-tooltip.apexcharts-theme-light {
    border: 0 !important;
    background: rgb(151 149 149/ 0.6) !important;


}

.dark .apexcharts-tooltip {
    border-radius: 12px !important;
    background: rgb(151 149 149/ 0.6) !important;
}

.apexcharts-tooltip.apexcharts-theme-light .apexcharts-active {
    background: transparent !important;
    border: 0 !important;
    border-radius: 12px !important;
    background: rgb(40 40 40/ 0.6) !important;


}

.apexcharts-tooltip.apexcharts-theme-light {
    border: 0 !important;
    background: rgb(40 40 40/ 0.6) !important;


}

.apexcharts-tooltip {
    border-radius: 12px !important;
    background: rgb(40 40 40/ 0.6) !important;
}

@media screen and (width<500px) {
    .apexcharts-xaxis-texts-g {
        display: none !important;
    }
}
</style>