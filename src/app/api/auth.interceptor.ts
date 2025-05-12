import { HttpEvent, HttpInterceptorFn, HttpRequest, HttpResponse } from '@angular/common/http';
import { environment } from '../../environments/environment';
import { tap } from 'rxjs';

export const authInterceptor: HttpInterceptorFn = (req, next) => {
  return next(addKey(req)).pipe(
    tap(
      (res: HttpEvent<any>) => {
        if (res instanceof HttpResponse) {
          console.log(
            `%c[API Response] ${req.method} ${req.urlWithParams} - Status ${res.status}`,
            'color: #2196F3; font-weight: bold')
        }
      }
    )
  )
};

const addKey = (req: HttpRequest<any>) => {
  return req.clone({
    setHeaders: {
      'X-Api-Key': environment.apiKey
    }
  })
}