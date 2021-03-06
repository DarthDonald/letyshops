import { Injectable } from '@angular/core';

@Injectable()
export class PaginationService {

  getPaginationOptions(currentPage: number = 1, totalItems: number = 800, pageSize: number = 10) {
    let totalPages = Math.ceil(totalItems / pageSize);
    let startPage: number, endPage: number;

    if (totalPages <= 10) {
      startPage = 1;
      endPage = totalPages;
    } else {
      if (currentPage <= 6) {
          startPage = 1;
          endPage = 10;
      } else if (currentPage + 4 >= totalPages) {
          startPage = totalPages - 9;
          endPage = totalPages;
      } else {
          startPage = currentPage - 5;
          endPage = currentPage + 4;
      }
    }

    let startIndex = (currentPage - 1) * pageSize;
    let endIndex = Math.min(startIndex + pageSize, totalItems - 1);
    let pages = [];

    for (let i = startPage; i <= endPage; i++) pages.push(i);

    return {
        totalItems: totalItems,
        currentPage: currentPage,
        pageSize: pageSize,
        totalPages: totalPages,
        startPage: startPage,
        endPage: endPage,
        startIndex: startIndex,
        endIndex: endIndex,
        pages: pages
    };
  }

}
