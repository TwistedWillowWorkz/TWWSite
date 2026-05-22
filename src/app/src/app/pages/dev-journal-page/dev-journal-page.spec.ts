import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DevJournalPage } from './dev-journal-page';

describe('DevJournalPage', () => {
  let component: DevJournalPage;
  let fixture: ComponentFixture<DevJournalPage>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [DevJournalPage],
    }).compileComponents();

    fixture = TestBed.createComponent(DevJournalPage);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
