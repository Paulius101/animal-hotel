import { inject } from '@angular/core';
import {
    HttpInterceptorFn,
    HttpRequest,
    HttpHandlerFn,
    HttpErrorResponse
} from '@angular/common/http';
import { catchError, throwError } from 'rxjs';
import { MessageService } from 'primeng/api';

export const errorInterceptor: HttpInterceptorFn = (req: HttpRequest<any>, next: HttpHandlerFn) => {
    const messageService = inject(MessageService);

    return next(req).pipe(
        catchError((error: HttpErrorResponse): ReturnType<typeof throwError> => {
            if (error.error) {
                interface ErrorResponse {
                    timestamp: string;
                    status: number;
                    error: string;
                    message: string;
                }

                const errorResponse = error.error as ErrorResponse;

                messageService.add({
                    severity: 'error',
                    summary: errorResponse.error || 'Error',
                    detail: errorResponse.message || 'An unknown error occurred.',
                    life: 5000
                });
            } else {
                messageService.add({
                    severity: 'error',
                    summary: 'Error',
                    detail: 'An unknown error occurred.',
                    life: 5000
                });
            }

            return throwError(() => error);
        })
    );
};
