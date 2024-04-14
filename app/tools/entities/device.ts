import { DeviceSpecs } from "./device_specs";
import { RomForDevice } from "./rom_for_device";
import { RecoveryForDevice } from "./recovery_for_device";
import { LinuxForDevice } from "./linux_for_device";

export class Device {
    deviceName: string;
    deviceVendor: string;
    deviceModelName: string;
    deviceDescription: string;
    deviceSpecs: DeviceSpecs | null;
    listOfRoms: Array<RomForDevice>;
    listOfRecoveries: Array<RecoveryForDevice>;
    listOfLinuxDistributions: Array<LinuxForDevice>;

    constructor(
        deviceName: string,
        deviceVendor: string,
        deviceModelName: string,
        deviceDescription: string,
        deviceSpecs: DeviceSpecs | null,
        listOfRoms: Array<RomForDevice>,
        listOfRecoveries: Array<RecoveryForDevice>,
        listOfLinuxDistributions: Array<LinuxForDevice>,
    ) {
        this.deviceName = deviceName;
        this.deviceVendor = deviceVendor;
        this.deviceModelName = deviceModelName;
        this.deviceDescription = deviceDescription;
        this.deviceSpecs = deviceSpecs;
        this.listOfRoms = listOfRoms;
        this.listOfRecoveries = listOfRecoveries;
        this.listOfLinuxDistributions = listOfLinuxDistributions;
    }
}
