export interface IBase {}

export class Base implements IBase {
    public static run(txt: string): string {
        return txt;
    }
}
