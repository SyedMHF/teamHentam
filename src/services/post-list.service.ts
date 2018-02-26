import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs/Observable';
import {PostList} from '../app/dashboard/post-list.interface';

@Injectable()
export class PostListService {

  constructor(private http: HttpClient) {

  }

  findPost(): Observable<PostList[]> {
    return this.http.get('https://jsonplaceholder.typicode.com/posts').map
    (res => <PostList[]> res);
  }

  findPostByUserId(userId: number): Observable<PostList> {
    return this.http.get('https://jsonplaceholder.typicode.com/posts/' + userId).map
    (res => <PostList>res);
  }
}
