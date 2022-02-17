import { HTTP_INTERCEPTORS } from "@angular/common/http"
import { AuthInterceptor } from "./shared/interceptors/auth.interceptor"
import { ErrorInterceptor } from "./shared/interceptors/toast.interceptors"


export const HttpCustomInterceptors = [
  { provide: HTTP_INTERCEPTORS, useClass: ErrorInterceptor, multi: true },
  { provide: HTTP_INTERCEPTORS, useClass: AuthInterceptor, multi: true }
]