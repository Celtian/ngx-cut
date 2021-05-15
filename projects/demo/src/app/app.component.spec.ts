import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';
import { NgxCutModule } from 'projects/ngx-cut/src/public-api';
import { AppComponent } from './app.component';

describe('AppComponent', () => {
  let fixture: ComponentFixture<AppComponent>;
  let component: AppComponent;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [
        AppComponent
      ],
      imports: [
        NgxCutModule
      ]
    }).compileComponents();

    fixture = TestBed.createComponent(AppComponent);
    component = fixture.componentInstance;
  }));

  it('should create the app', () => {
    expect(component).toBeTruthy();
  });

  it(`should get github link`, waitForAsync(() => {
    fixture.detectChanges();
    const compiled = fixture.debugElement.nativeElement;
    expect(compiled.querySelector('.github-logo').href).toContain('https://github.com/celtian/ngx-cut');
  }));

  describe('onResize', () => {
    it('should trigger onResize method when window is resized', () => {
      const spyOnResize = spyOn(component, 'onResize');
      window.dispatchEvent(new Event('resize'));
      expect(spyOnResize).toHaveBeenCalled();
    });

    it('should return windowSize text for 150px', () => {
      window.dispatchEvent(new Event('resize'));
      spyOnProperty(window, 'innerWidth').and.returnValue(150);
      fixture.detectChanges();
      expect(component.windowSize).toBe('Window size is <strong>150px</strong>. Activated breakpoint is <strong>xs</strong>.')
    });

    it('should return windowSize text for 350px', () => {
      window.dispatchEvent(new Event('resize'));
      spyOnProperty(window, 'innerWidth').and.returnValue(350);
      fixture.detectChanges();
      expect(component.windowSize).toBe('Window size is <strong>350px</strong>. Activated breakpoint is <strong>sm</strong>.')
    });

    it('should return windowSize text for 450px', () => {
      window.dispatchEvent(new Event('resize'));
      spyOnProperty(window, 'innerWidth').and.returnValue(450);
      fixture.detectChanges();
      expect(component.windowSize).toBe('Window size is <strong>450px</strong>. Activated breakpoint is <strong>md</strong>.')
    });

    it('should return windowSize text for 550px', () => {
      window.dispatchEvent(new Event('resize'));
      spyOnProperty(window, 'innerWidth').and.returnValue(550);
      fixture.detectChanges();
      expect(component.windowSize).toBe('Window size is <strong>550px</strong>. Activated breakpoint is <strong>lg</strong>.')
    });

    it('should return windowSize text for 650px', () => {
      window.dispatchEvent(new Event('resize'));
      spyOnProperty(window, 'innerWidth').and.returnValue(650);
      fixture.detectChanges();
      expect(component.windowSize).toBe('Window size is <strong>650px</strong>. Activated breakpoint is <strong>xl</strong>.')
    });
  });

  describe('ngOnInit', () => {
    it('should return windowSize text for 150px', () => {
      spyOnProperty(window, 'innerWidth').and.returnValue(150);
      fixture.detectChanges();
      expect(component.windowSize).toBe('Window size is <strong>150px</strong>. Activated breakpoint is <strong>xs</strong>.')
    });

    it('should return windowSize text for 350px', () => {
      spyOnProperty(window, 'innerWidth').and.returnValue(350);
      fixture.detectChanges();
      expect(component.windowSize).toBe('Window size is <strong>350px</strong>. Activated breakpoint is <strong>sm</strong>.')
    });

    it('should return windowSize text for 450px', () => {
      spyOnProperty(window, 'innerWidth').and.returnValue(450);
      fixture.detectChanges();
      expect(component.windowSize).toBe('Window size is <strong>450px</strong>. Activated breakpoint is <strong>md</strong>.')
    });

    it('should return windowSize text for 550px', () => {
      spyOnProperty(window, 'innerWidth').and.returnValue(550);
      fixture.detectChanges();
      expect(component.windowSize).toBe('Window size is <strong>550px</strong>. Activated breakpoint is <strong>lg</strong>.')
    });

    it('should return windowSize text for 650px', () => {
      spyOnProperty(window, 'innerWidth').and.returnValue(650);
      fixture.detectChanges();
      expect(component.windowSize).toBe('Window size is <strong>650px</strong>. Activated breakpoint is <strong>xl</strong>.')
    });
  })
});
