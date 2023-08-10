import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Categories } from '../interfaces/categories';

@Injectable({
  providedIn: 'root'
})
export class CategoriesService {

  apiUrl = 'http://localhost:8000/api'

  constructor(private http: HttpClient) { }

  getCategoriesById(id: string): Observable<Categories> {
    return this.http.get<Categories>(`${this.apiUrl}/categories/${id}`);
  }

  getAllCategories(): Observable<Categories[]> {
    return this.http.get<Categories[]>(`${this.apiUrl}/categories`);
  }

  createCategory(Categories: Categories): Observable<Categories> {
    return this.http.post<Categories>(`${this.apiUrl}/categories`, Categories);
  }

  updateCategory(id: number, Categories: any): Observable<any> {
    return this.http.put<Categories>(`${this.apiUrl}/categories/${id}`, Categories);
  }

  deleteCategory(id: string): Observable<any> {
    return this.http.delete<any>(`${this.apiUrl}/categories/${id}`);
  }
}
