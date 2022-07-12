export interface ErrorDto {
  errorType: ErrorType;
  code: string;
  message: string;
  roleCode: string;
  objectId: string;
  details: string[];
  parameters: [index: number];
}

export enum ErrorType {
  General = 'GENERAL',
}
