export class Talent {
  caption!: string | undefined;
  rulePage!: number | undefined;
  constructor(caption?: string, rulePage?: number) {
    this.caption = caption;
    this.rulePage = rulePage;
  }
}
