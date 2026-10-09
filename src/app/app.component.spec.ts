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

  it('should link to projects and the resume PDF', () => {
    const fixture = TestBed.createComponent(AppComponent);
    fixture.detectChanges();
    const compiled = fixture.nativeElement as HTMLElement;

    expect(compiled.querySelector('.main-nav a[href="#projects"]')?.textContent).toContain('Projects');
    expect(compiled.querySelector('#projects h2')?.textContent).toContain('Projects');
    expect(compiled.querySelector('.hero-resume-link')?.textContent).toContain('Resume');
    expect(compiled.querySelector('.hero-resume-link')?.getAttribute('href'))
      .toBe('assets/andy-liu-resume.pdf');
    expect(compiled.querySelector('.hero-resume-link')?.getAttribute('target')).toBe('_blank');
    expect(compiled.querySelector('.brand-symbol text')?.textContent).toBe('A');
    expect(compiled.querySelector('.brand-symbol text')?.getAttribute('x')).toBe('17');
    expect(compiled.querySelector('.brand-symbol circle')).toBeNull();
  });

  it('should keep education and contact section labels outside their cards', () => {
    const fixture = TestBed.createComponent(AppComponent);
    fixture.detectChanges();
    const compiled = fixture.nativeElement as HTMLElement;
    const education = compiled.querySelector('#education');
    const contact = compiled.querySelector('#contact');

    expect(education?.querySelector('.education-card .education-copy h2')?.textContent).toContain('Go Vols');
    expect(education?.querySelector('.education-card .section-kicker')).toBeNull();
    expect(contact?.querySelector('.contact-card h2')?.textContent).toContain('Got a good one?');
    expect(contact?.querySelector('.contact-card .section-kicker')).toBeNull();
    expect(contact?.querySelector(':scope > .container > .section-header .section-kicker')?.textContent)
      .toContain('YOUR TURN');
  });

  it('should render a matching icon for each skills card', () => {
    const fixture = TestBed.createComponent(AppComponent);
    fixture.detectChanges();
    const cards = fixture.nativeElement.querySelectorAll('.skill-card');

    expect(cards.length).toBe(3);
    for (const card of Array.from(cards)) {
      expect(card.querySelector('.skill-icon svg[aria-hidden="true"]')).not.toBeNull();
    }
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
