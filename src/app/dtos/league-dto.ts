import {SessionDto} from './session-dto';

export interface LeagueDto {
  id: string,
  name: string,
  description: string|null,
  interval: string,
  start: string,
  end: string,
  practice?: SessionDetail,
  qualify?: SessionDetail,
  race?: SessionDetail,
  currentTrackId: string,
  currentClassIds: string[],
  sessions: SessionDto[]
}


interface SessionDetail{
  sessionName: string,
  durationInMinutes: number,
  laps: number
}
