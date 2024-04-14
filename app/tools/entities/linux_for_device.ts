export class LinuxForDevice {
    distributionName: string;
    distributionSupport: boolean;
    distributionState: string;
    distributionNotes: string | null;
    distributionWebpage: string | null;
    deviceWebpage: string | null;

    constructor(
        distributionName: string,
        distributionSupport: boolean,
        distributionState: string,
        distributionNotes: string | null,
        distributionWebpage: string | null,
        deviceWebpage: string | null,
    ) {
        this.distributionName = distributionName;
        this.distributionSupport = distributionSupport;
        this.distributionState = distributionState;
        this.distributionNotes = distributionNotes;
        this.distributionWebpage = distributionWebpage;
        this.deviceWebpage = deviceWebpage;
    }
}
