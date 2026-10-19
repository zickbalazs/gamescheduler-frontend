export interface FirstExceptionDto {
  code: number,
  detail?:{
    message: string|null
  }
}
