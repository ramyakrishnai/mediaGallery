import { TestBed } from '@angular/core/testing';

import { LoginCredeService } from './login-crede.service';

describe('LoginCredeService', () => {
  let service: LoginCredeService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(LoginCredeService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
