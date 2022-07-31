import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { FacialRekognitionModalComponent } from './facial-rekognition-modal.component';

describe('FacialRekognitionModalComponent', () => {
  let component: FacialRekognitionModalComponent;
  let fixture: ComponentFixture<FacialRekognitionModalComponent>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [ FacialRekognitionModalComponent ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(FacialRekognitionModalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
