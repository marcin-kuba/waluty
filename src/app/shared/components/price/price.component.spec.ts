import { ComponentFixture, TestBed } from '@angular/core/testing'
import { DebugElement, LOCALE_ID } from '@angular/core'
import { By } from '@angular/platform-browser'
import { PriceComponent } from './price.component'
import { registerLocaleData } from '@angular/common'
import localePl from '@angular/common/locales/pl'


describe('PriceComponent', () => {
  let component: PriceComponent
  let fixture: ComponentFixture<PriceComponent>

  beforeEach(async () => {
    registerLocaleData(localePl)

    await TestBed.configureTestingModule({
      declarations: [ PriceComponent ],
      providers: [{provide: LOCALE_ID, useValue: 'pl'}],
    })
    .compileComponents()
  })

  beforeEach(() => {
    fixture = TestBed.createComponent(PriceComponent)
    component = fixture.componentInstance
    fixture.detectChanges()
  })

  it('should create', () => {
    expect(component).toBeTruthy()
  })

  it('should find the <span> with ".45" fraction value', () => {
    let fractionDebugElement: DebugElement
    let fractionElement: HTMLElement

    component.value = 123.45
    fixture.detectChanges()
    fractionDebugElement = fixture.debugElement.query(By.css('.price__fraction'))
    fractionElement = fractionDebugElement.nativeElement

    expect(fractionElement.textContent).toEqual('.45')
  })

  it('should contain "12 345.67"', () => {
    let element: HTMLElement

    component.value = 12345.67
    fixture.detectChanges()
    element = fixture.nativeElement

    expect(element.textContent.replace(/\u00a0/g, ' ')).toBe('12 345.67')
  })
})
