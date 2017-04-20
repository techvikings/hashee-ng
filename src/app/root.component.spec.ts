import { TestBed, async } from '@angular/core/testing';

import { HasheeRootComponent } from './root.component';

describe('HasheeRootComponent', () => {
  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [
        HasheeRootComponent
      ],
    }).compileComponents();
  }));

  it('should create the app', async(() => {
    const fixture = TestBed.createComponent(HasheeRootComponent);
    const app = fixture.debugElement.componentInstance;
    expect(app).toBeTruthy();
  }));

  it(`should have as title 'app works!'`, async(() => {
    const fixture = TestBed.createComponent(HasheeRootComponent);
    const app = fixture.debugElement.componentInstance;
    expect(app.title).toEqual('app works!');
  }));

  it('should render title in a h1 tag', async(() => {
    const fixture = TestBed.createComponent(HasheeRootComponent);
    fixture.detectChanges();
    const compiled = fixture.debugElement.nativeElement;
    expect(compiled.querySelector('h1').textContent).toContain('app works!');
  }));
});
