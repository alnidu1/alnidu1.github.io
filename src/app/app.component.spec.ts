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
    expect(compiled.querySelector('#projects h3')?.textContent).toContain('Image Translator');
    expect(compiled.querySelectorAll('#projects .project-card h3')[1]?.textContent).toContain('DoConnect');
    expect(compiled.querySelector('#projects .project-link[href="https://github.com/CS340-19/image_translator"]')?.getAttribute('href'))
      .toBe('https://github.com/CS340-19/image_translator');
    expect(compiled.querySelector('#projects .project-link[href="https://github.com/alnidu1/DoConnect"]')?.getAttribute('href'))
      .toBe('https://github.com/alnidu1/DoConnect');
    expect(compiled.querySelectorAll('#projects .project-card')[1]?.querySelector('.project-tags')?.textContent)
      .toContain('Java');
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

  it('should render accessible LinkedIn and GitHub links with icons', () => {
    const fixture = TestBed.createComponent(AppComponent);
    fixture.detectChanges();
    const compiled = fixture.nativeElement as HTMLElement;
    const links = [
      ['a[aria-label="LinkedIn profile"]', 'https://www.linkedin.com/in/andy-liu-6404ab284/'],
      ['a[aria-label="GitHub profile"]', 'https://github.com/alnidu1']
    ];

    for (const [selector, href] of links) {
      const link = compiled.querySelector<HTMLAnchorElement>(selector);
      expect(link?.getAttribute('href')).toBe(href);
      expect(link?.querySelector('svg[aria-hidden="true"]')).not.toBeNull();
    }

    const copyButtons = compiled.querySelectorAll<HTMLButtonElement>('button[data-copy-email]');
    expect(copyButtons.length).toBe(4);
    for (const button of Array.from(copyButtons)) {
      expect(button.dataset.copyEmail).toBe('liuandy246@gmail.com');
    }
  });
});
