export interface SessionDto {
  id: string,
  start: string,
  registrationIds: string[],
  status: number;
  leagueId: string,
  trackId: string|null
}
