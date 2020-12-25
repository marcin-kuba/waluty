import { ComponentFixture, TestBed } from '@angular/core/testing'
import { ChangeValueComponent } from './change-value.component'
import { AbsPipe } from '../../services/abs.pipe'

describe('ChangeValueComponent', () => {
  let component: ChangeValueComponent
  let fixture: ComponentFixture<ChangeValueComponent>

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ChangeValueComponent, AbsPipe ],
    })
    .compileComponents()
  })

  beforeEach(() => {
    fixture = TestBed.createComponent(ChangeValueComponent)
    component = fixture.componentInstance
    fixture.detectChanges()
  })

  it('should create', () => {
    expect(component).toBeTruthy()
  })

  it('should find the <span class="crypto-change-value_up"/> with "+ 50%"', () => {
    let span: HTMLSpanElement

    component.value = 50.00
    fixture.detectChanges()
    span = fixture.nativeElement.querySelector('span')

    expect(span.classList.contains('crypto-change-value_up')).toEqual(true)
    expect(span.classList.contains('crypto-change-value_down')).toEqual(false)
    expect(span.textContent).toEqual('+ 50%')
  })

  it('should find the <span class="crypto-change-value_up"/> with "+ 50.12%"', () => {
    let span: HTMLSpanElement

    component.value = 50.12
    fixture.detectChanges()
    span = fixture.nativeElement.querySelector('span')

    expect(span.classList.contains('crypto-change-value_up')).toEqual(true)
    expect(span.classList.contains('crypto-change-value_down')).toEqual(false)
    expect(span.textContent).toEqual('+ 50.12%')
  })

  it('should find the <span class="crypto-change-value_down"/> with "- 50.12%"', () => {
    let span: HTMLSpanElement

    component.value = -50.12
    fixture.detectChanges()
    span = fixture.nativeElement.querySelector('span')

    expect(span.classList.contains('crypto-change-value_up')).toEqual(false)
    expect(span.classList.contains('crypto-change-value_down')).toEqual(true)
    expect(span.textContent).toEqual('- 50.12%')
  })

  it('should find the <span> with "0%"', () => {
    let span: HTMLSpanElement

    component.value = 0.00
    fixture.detectChanges()
    span = fixture.nativeElement.querySelector('span')

    expect(span.classList.contains('crypto-change-value_up')).toEqual(false)
    expect(span.classList.contains('crypto-change-value_down')).toEqual(false)
    expect(span.textContent).toEqual('0%')
  })
})
