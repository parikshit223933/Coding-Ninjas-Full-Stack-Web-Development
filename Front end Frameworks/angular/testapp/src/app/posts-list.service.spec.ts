import { TestBed } from '@angular/core/testing';

import { PostsListService } from './posts-list.service';

describe('PostsListService', () => {
  let service: PostsListService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(PostsListService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
