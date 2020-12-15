import { TestBed } from "@angular/core/testing";
import { NgxCutOptionsService } from "./ngx-cut-options.service";
import { FOR_ROOT_OPTIONS_TOKEN, NgxCutModule } from "./ngx-cut.module";


describe('NgxCutModule', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [NgxCutModule.forRoot()]
    });
  });

  it(`should provide services`, () => {
    const options = TestBed.inject(FOR_ROOT_OPTIONS_TOKEN);
    expect(options).toBe(undefined);
  });

  it(`should provide services2`, () => {
    const optionsService = TestBed.inject(NgxCutOptionsService);
    expect(optionsService).toEqual(new NgxCutOptionsService());
  });
})
