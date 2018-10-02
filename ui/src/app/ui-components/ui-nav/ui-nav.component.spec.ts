
import { fakeAsync, ComponentFixture, TestBed } from '@angular/core/testing';
import { MatSidenavModule } from '@angular/material/sidenav';
import { UiNavComponent } from './ui-nav.component';

describe('UiNavComponent', () => {
  let component: UiNavComponent;
  let fixture: ComponentFixture<UiNavComponent>;

  beforeEach(fakeAsync(() => {
    TestBed.configureTestingModule({
      imports: [MatSidenavModule],
      declarations: [UiNavComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(UiNavComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should compile', () => {
    expect(component).toBeTruthy();
  });
});
