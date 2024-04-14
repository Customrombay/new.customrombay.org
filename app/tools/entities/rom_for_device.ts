export class RomForDevice {
    romName: string;
    romSupport: boolean;
    romState: string;
    androidVersion: string;
    romNotes: string;
    romWebpage: string | null;
    deviceWebpage: string | null;

    constructor(
        romName: string,
        romSupport: boolean,
        romState: string,
        androidVersion: string,
        romNotes: string,
        romWebpage: string | null,
        deviceWebpage: string | null,
    ) {
        this.romName = romName;
        this.romSupport = romSupport;
        this.romState = romState;
        this.androidVersion = androidVersion;
        this.romNotes = romNotes;
        this.romWebpage = romWebpage;
        this.deviceWebpage = deviceWebpage;
    }
}
