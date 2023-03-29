import { TestBed } from '@angular/core/testing';

import { SidebarHelpService } from './sidebar-help.service';

describe('SidebarHelpService', () => {
  let service: SidebarHelpService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(SidebarHelpService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
