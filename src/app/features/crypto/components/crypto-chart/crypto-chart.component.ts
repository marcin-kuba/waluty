import { AfterViewInit, Component, Input, OnInit } from '@angular/core'
import { CurrencyPipe } from '@angular/common'
import { ChartData, ChartOptions } from 'chart.js'
import { CryptoHistoricalItemModel } from '../../model/crypto.model'

const COLOR_RGB_UP = [52, 168, 83]
const COLOR_RGB_DOWN = [234, 67, 53]

@Component({
  selector: 'app-crypto-chart',
  templateUrl: './crypto-chart.component.html',
  styleUrls: ['./crypto-chart.component.scss'],
  providers: [CurrencyPipe],
})
export class CryptoChartComponent implements OnInit, AfterViewInit {
  @Input() data: CryptoHistoricalItemModel[]

  public options: ChartOptions
  public chartData: ChartData = {}
  public chartColor: string = [112, 117, 122].join()
  private xAxesTickIndex = 0

  constructor(private currencyPipe: CurrencyPipe) {
  }

  ngOnInit() {
    if (Array.isArray(this.data)) {
      const dataPrice = this.data.map(i => i.price)
      if (dataPrice[0] > dataPrice[dataPrice.length - 1]) {
        this.chartColor = COLOR_RGB_DOWN.join()
      } else if (dataPrice[0] < dataPrice[dataPrice.length - 1]) {
        this.chartColor = COLOR_RGB_UP.join()
      }
    }

    this.options = {
      legend: {display: false},
      elements: {
        point: {
          radius: 4,
          borderColor: 'transparent',
          hoverRadius: 4,
        },
        line: {
          tension: 0,
          backgroundColor: `rgba(${this.chartColor}, .1)`,
          borderWidth: 2,
          borderColor: `rgb(${this.chartColor})`,
          borderJoinStyle: 'bevel',
        },
      },
      scales: {
        xAxes: [
          {
            ticks: {
              autoSkip: false,
              autoSkipPadding: 10,
              maxRotation: 0,
              fontSize: 11,
              fontColor: 'rgba(0, 0, 0, .62)',
              fontFamily: 'Roboto,HelveticaNeue,Arial,sans-serif',
              callback: (value: string) => {
                const output = value.substring(11, 16)
                this.xAxesTickIndex++
                return (this.xAxesTickIndex !== 1) ? (output.substring(3, 5) === '00' && (output.substring(0, 2) === '01' || output.substring(0, 2) === '06' || output.substring(0, 2) === '11' || output.substring(0, 2) === '17' || output.substring(0, 2) === '22') ? output : null) : null
              },
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
              fontFamily: 'Roboto,HelveticaNeue,Arial,sans-serif',
            },
            gridLines: {
              color: 'rgba(0, 0, 0, .05)',
            },
          },
        ],
      },
      tooltips: {
        displayColors: false,
        backgroundColor: '#fff',
        titleFontSize: 12,
        titleFontColor: 'rgba(0,0,0,.67)',
        titleFontFamily: 'Roboto, HelveticaNeue, Arial, sans-serif',
        titleFontStyle: 'normal',
        bodyFontSize: 12,
        bodyFontColor: 'rgba(0,0,0,.87)',
        bodyFontFamily: 'Roboto, HelveticaNeue, Arial, sans-serif',
        bodyFontStyle: 'normal',
        borderWidth: 1,
        borderColor: 'rgba(0, 0, 0, .1)',
        cornerRadius: 2,
        xPadding: 8,
        yPadding: 8,
        callbacks: {
          label: (tooltipItem) => this.currencyPipe.transform(tooltipItem.yLabel, ' ', 'code', '.2'),
        },
      },
      responsive: true,
      maintainAspectRatio: false, // Maintain the original canvas aspect ratio (width / height) when resizing.
    }
  }

  ngAfterViewInit() {
    const ctx = (document.getElementsByClassName('chartjs-render-monitor').item(0) as HTMLCanvasElement).getContext('2d')
    const gradient = ctx.createLinearGradient(0, 0, 0, 110)
    gradient.addColorStop(0, `rgba(${this.chartColor}, .33)`)
    gradient.addColorStop(1, `rgba(${this.chartColor}, .025)`)

    this.chartData = {
      labels: this.data.map(i => i.date),
      datasets: [
        {
          backgroundColor: gradient,
          pointBackgroundColor: 'transparent',
          pointHoverBackgroundColor: `rgb(${this.chartColor})`,
          data: this.data.map(i => i.price),
        },
      ],
    }
  }
}
