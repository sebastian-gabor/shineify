export class Review {
  public rewImg: string;
  public rewName: string;
  public rewRate: string;
  public rewTitle: string;
  public rewDescription: string;

  constructor(
    rewImg: string,
    rewName: string,
    rewRate: string,
    rewTitle: string,
    rewDesc: string
  ) {
    this.rewImg = rewImg;
    this.rewName = rewName;
    this.rewRate = rewRate;
    this.rewTitle = rewTitle;
    this.rewDescription = rewDesc;
  }
}
