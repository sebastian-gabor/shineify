export class Package {
  public pkgType: string;
  public pkgDesc: string;
  public pkgImg: string;
  public pkgPrice: number;

  constructor(
    pkgType: string,
    pkgDesc: string,
    pkgImg: string,
    pkgPrice: number
  ) {
    this.pkgType = pkgType;
    this.pkgDesc = pkgDesc;
    this.pkgImg = pkgImg;
    this.pkgPrice = pkgPrice;
  }
}
