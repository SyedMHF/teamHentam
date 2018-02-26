import {Component, OnDestroy, OnInit} from '@angular/core';
import {Observable} from 'rxjs/Observable';
import {PostList} from './post-list.interface';
import {PostListService} from '../../services/post-list.service';
import {ActivatedRoute, Router} from '@angular/router';

@Component({
  selector: 'qs-post-list',
  templateUrl: './post-list.page.html',
})
export class PostListPage implements OnInit, OnDestroy {

  id$: Observable<PostList>;

  constructor(private postlistService: PostListService,
              private router: Router,
              private route: ActivatedRoute) {
  }

  ngOnInit(): void {
    this.route.params.subscribe((params: { id: number }) => {
      console.log('Post Id:' + params.id);
      this.id$ = this.postlistService.findPostByUserId(params.id);
    });
  }

  ngOnDestroy(): void {

  }

  //@TODO
  goBack(): void {
    this.router.navigate(['/post-list.dashboard']);
  }
}
