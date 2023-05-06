import { Response } from 'express';

interface ApiResponse<T> {
  status: string;
  data?: T;
  message?: string;
}

class ResponseHandler {
  private static prepareResponse<T>(statusCode: number, data?: T, message?: string): ApiResponse<T> {
    const status = statusCode >= 200 && statusCode < 300 ? 'success' : 'error';

    const response: ApiResponse<T> = {
      status,
      message: message || '',
    };

    if (data) {
      response.data = data;
    }

    return response;
  }

  public static sendSuccess<T>(res: Response, data: T, message?: string): void {
    const response = this.prepareResponse<T>(200, data, message);
    res.status(200).json(response);
  }

  public static sendCreated<T>(res: Response, data: T, message?: string): void {
    const response = this.prepareResponse<T>(201, data, message);
    res.status(201).json(response);
  }

  public static sendNoContent(res: Response, message?: string): void {
    const response = this.prepareResponse<null>(204, null, message);
    res.status(204).json(response);
  }

  public static sendBadRequest(res: Response, message: string): void {
    const response = this.prepareResponse<null>(400, null, message);
    res.status(400).json(response);
  }

  public static sendUnauthorized(res: Response, message: string): void {
    const response = this.prepareResponse<null>(401, null, message);
    res.status(401).json(response);
  }

  public static sendForbidden(res: Response, message: string): void {
    const response = this.prepareResponse<null>(403, null, message);
    res.status(403).json(response);
  }

  public static sendNotFound(res: Response, message: string): void {
    const response = this.prepareResponse<null>(404, null, message);
    res.status(404).json(response);
  }

  public static sendInternalServerError(res: Response, message: unknown): void {
    const errorMessage = message instanceof Error ? message.message : 'An unexpected error occurred';
    const response = this.prepareResponse<null>(500, null, errorMessage);
    res.status(500).json(response);
  }
}

export default ResponseHandler;
