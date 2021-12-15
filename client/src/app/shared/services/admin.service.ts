import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { AdminModule } from 'src/app/features/admin/admin.module';

@Injectable({
  providedIn: 'root',
})
export class AdminService {

  constructor(private http: HttpClient) { }

}
