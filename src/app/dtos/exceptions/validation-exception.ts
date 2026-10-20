export interface ValidationException {
  status: number,
  title: string,
  traceId: string,
  type: string,
  errors: Record<string, string[]>
}
