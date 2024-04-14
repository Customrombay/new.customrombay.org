import { Device } from "./entities/device";

export function generateDescriptionForDevice(device: Device) {
    var deviceDescription: string = "";
    if (device.deviceSpecs != null) {
        if (device.deviceSpecs.soc != null && device.deviceSpecs.gpu != null) {
            deviceDescription += `${device.deviceVendor} ${device.deviceModelName} is powered by the ${device.deviceSpecs.soc} CPU and equipped with the ${device.deviceSpecs.gpu} GPU.`;
            if (device.deviceSpecs.ram != null && device.deviceSpecs.storage != null) {
                deviceDescription += ` It has ${device.deviceSpecs.ram} of RAM and ${device.deviceSpecs.storage} of internal storage.`
                if (device.deviceSpecs.battery != null && device.deviceSpecs.battery["capacity" as keyof object] != null && device.deviceSpecs.battery["removable" as keyof object] != null && device.deviceSpecs.battery["tech" as keyof object] != null) {
                    if (device.deviceSpecs.battery["removable" as keyof object]) {
                        deviceDescription += ` Its ${device.deviceSpecs.battery["tech" as keyof object]} battery is removable and has a capacity of ${device.deviceSpecs.battery["capacity" as keyof object]} mAh.`;
                    }
                    else {
                        deviceDescription += ` Its ${device.deviceSpecs.battery["tech" as keyof object]} battery is non-removable and has a capacity of ${device.deviceSpecs.battery["capacity" as keyof object]} mAh.`;
                    }
                }
                if (device.deviceSpecs.release != null) {
                    deviceDescription += ` ${generateReleaseDateString(device.deviceSpecs.release)}`;
                }
            }
        }
    }
    return deviceDescription;
}

function generateReleaseDateString(releaseDate: string): string {
    if (releaseDate.includes("-")) {
        var listOfDates: Array<string> = releaseDate.split("-");
        if (listOfDates.length == 3) {
            return `It was released on ${monthNameFromNumber(listOfDates[1])} ${listOfDates[2]}, ${listOfDates[0]}.`;
        }
        return `It was released in ${monthNameFromNumber(listOfDates[1])} ${listOfDates[0]}.`;
    }
    return `It was released in ${releaseDate}.`;
}

function monthNameFromNumber(numberName: string) {
    var monthNumber: number = parseInt(numberName);
    var listOfMonths: Array<string> = [
        "January",
        "February",
        "March",
        "April",
        "May",
        "June",
        "July",
        "August",
        "September",
        "October",
        "November",
        "December"
    ];

    return listOfMonths[monthNumber -1];
}