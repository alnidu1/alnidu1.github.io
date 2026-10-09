import { TestBed } from '@angular/core/testing';
import { RouterTestingModule } from '@angular/router/testing';
import { AppComponent } from './app.component';

describe('AppComponent', () => {
  beforeEach(() => TestBed.configureTestingModule({
    imports: [RouterTestingModule],
    declarations: [AppComponent]
  }));

  it('should create the app', () => {
    const fixture = TestBed.createComponent(AppComponent);
    const app = fixture.componentInstance;
    expect(app).toBeTruthy();
  });

  it('should render the portfolio introduction', () => {
    const fixture = TestBed.createComponent(AppComponent);
    fixture.detectChanges();
    const compiled = fixture.nativeElement as HTMLElement;
    expect(compiled.querySelector('.hero h1')?.textContent).toContain('Hey, I’m');
  });

  it('should render accessible LinkedIn, GitHub, and email links with icons', () => {
    const fixture = TestBed.createComponent(AppComponent);
    fixture.detectChanges();
    const compiled = fixture.nativeElement as HTMLElement;
    const links = [
      ['a[aria-label="LinkedIn profile"]', 'https://www.linkedin.com/in/andy-liu-6404ab284/'],
      ['a[aria-label="GitHub profile"]', 'https://github.com/alnidu1'],
      ['a[aria-label="Email Andy Liu"]', 'mailto:liuandy246@gmail.com']
    ];

    for (const [selector, href] of links) {
      const link = compiled.querySelector<HTMLAnchorElement>(selector);
      expect(link?.getAttribute('href')).toBe(href);
      expect(link?.querySelector('svg[aria-hidden="true"]')).not.toBeNull();
    }
  });
});
