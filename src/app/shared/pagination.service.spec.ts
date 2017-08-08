import { TestBed, inject } from '@angular/core/testing';

import { PaginationService } from './pagination.service';

describe('PaginationService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [PaginationService]
    });
  });

  it('should be created', inject([PaginationService], (service: PaginationService) => {
    expect(service).toBeTruthy();
  }));

  it('should return right pagination options', inject([PaginationService], (service: PaginationService) => {
    let response = service.getPaginationOptions(2, 200, 5);
    expect(response).toEqual({
      totalItems: 200,
      currentPage: 2,
      pageSize: 5,
      totalPages: 40,
      startPage: 1,
      endPage: 10,
      startIndex: 5,
      endIndex: 10,
      pages: [1,2,3,4,5,6,7,8,9,10]
    });
  }));
});
