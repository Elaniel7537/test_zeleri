// manejar respuestas de los servicios
export class ServiceResponse {
  data?: any;
  status?: string;
  code?: number;
  error?: string;
}

export enum ServiceStatu {
  SUCCESS = "SUCCESS",
  FAIL = "FAIL",
  REJECTED = "REJECTED",
}
