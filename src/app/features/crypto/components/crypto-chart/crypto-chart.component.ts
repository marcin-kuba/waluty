import { AfterViewInit, Component, Input } from '@angular/core'
import { ChartData, ChartOptions } from 'chart.js'
import { CryptoHistoricalItemModel } from '../../model/crypto.model'

const COLOR_RGB_UP = [52, 168, 83]

@Component({
  selector: 'app-crypto-chart',
  templateUrl: './crypto-chart.component.html',
  styleUrls: ['./crypto-chart.component.scss'],
})
export class CryptoChartComponent implements AfterViewInit {
  @Input() data: CryptoHistoricalItemModel[]

  public chartData: ChartData = {}
  private xAxesTickIndex = 0

  public options: ChartOptions = {
    legend: {display: false},
    elements: {
      point: {
        radius: 4,
        // backgroundColor: `rgb(${COLOR_RGB_UP.join()})`,
        borderColor: 'transparent',
        hoverRadius: 4,
      },
      line: {
        tension: 0,
        backgroundColor: 'rgba(52, 168, 83, .1)',
        borderWidth: 2,
        borderColor: 'rgb(52, 168, 83)',
        borderJoinStyle: 'bevel',
      },
    },
    scales: {
      xAxes: [
        {
          ticks: {
            autoSkip: true,
            autoSkipPadding: 10,
            maxRotation: 0,
            fontSize: 11,
            fontColor: 'rgba(0, 0, 0, .62)',
            callback: (value: string) => {
              this.xAxesTickIndex++
              return (this.xAxesTickIndex !== 1) ? value.substring(11,16) : null
            },
            // backdropColor: new CanvasGradient(),
          },
          gridLines: {
            drawOnChartArea: false,
          },
        },
      ],
      yAxes: [
        {
          ticks: {
            maxTicksLimit: 4,
            fontSize: 11,
            fontColor: 'rgba(0, 0, 0, .62)',
          },
          gridLines: {
            color: 'rgba(0, 0, 0, .05)',
          },
        },
      ],
    },
    responsive: true,
    maintainAspectRatio: false, // Maintain the original canvas aspect ratio (width / height) when resizing.
  }

  ngAfterViewInit() {
    const ctx = (document.getElementsByClassName('chartjs-render-monitor').item(0) as HTMLCanvasElement).getContext('2d')
    console.log(ctx)

    const gradient = ctx.createLinearGradient(0, 0, 0, 110)
    gradient.addColorStop(0, 'rgba(52, 168, 83, .33)')
    gradient.addColorStop(1, 'rgba(52, 168, 83, .025)')

    this.chartData = {
      labels: this.data.map(i => i.date),
      datasets: [
        {
          backgroundColor: gradient,
          pointBackgroundColor: 'transparent',
          pointHoverBackgroundColor: `rgb(${COLOR_RGB_UP.join()})`,
          label: '1 BTC = ',
          data: this.data.map(i => i.price),
        },
      ],
    }
  }
}
