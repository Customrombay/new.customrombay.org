export class RecoveryForDevice {
    recoveryName: string;
    recoverySupport: boolean;
    recoveryState: string;
    recoveryNotes: string | null;
    recoveryWebpage: string | null;
    deviceWebpage: string | null;

    constructor(
        recoveryName: string,
        recoverySupport: boolean,
        recoveryState: string,
        recoveryNotes: string | null,
        recoveryWebpage: string | null,
        deviceWebpage: string | null,
    ) {
        this.recoveryName = recoveryName;
        this.recoverySupport = recoverySupport;
        this.recoveryState = recoveryState;
        this.recoveryNotes = recoveryNotes;
        this.recoveryWebpage = recoveryWebpage;
        this.deviceWebpage = deviceWebpage;
    }
}
