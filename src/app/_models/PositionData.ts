export class PositionData {
  info: string;
  positions: Position[];
}

export class Position {
  id: number;
  positionName: string;
  shortDescription: string;

  detailDescription: string;

  profileArray: string[];
  responsibilitiesArray: string[];
  offerArray: string[];
}
