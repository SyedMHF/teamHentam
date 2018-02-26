import {Component, OnDestroy, OnInit} from '@angular/core';
import {Observable} from 'rxjs/Observable';
import {PostList} from './post-list.interface';
import {PostListService} from '../../services/post-list.service';
import {Router} from '@angular/router';

@Component({
  selector: 'qs-post-dashboard',
  templateUrl: './post-list.dashboard.html',
})
export class PostListDashboard implements OnInit, OnDestroy {

  postlist$: Observable<PostList[]>;

  constructor(private postlistService: PostListService,
              private router: Router) {
  }

  loadPost(): void {
    this.postlist$ = this.postlistService.findPost();
  }

  viewPostlist(postlist: PostList): void {
    console.log(JSON.stringify(postlist));
    this.router.navigate(['/post-list', postlist.id]);
  }

  ngOnInit(): void {
    this.loadPost();
  }

  ngOnDestroy(): void {

  }
}
