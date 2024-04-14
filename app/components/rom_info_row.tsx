import { RomForDevice } from "../tools/entities/rom_for_device"

export default function RomInfoRow({romForDevice} : {romForDevice: RomForDevice}) {
    return (
        <tr>
            <td>
                <a href={romForDevice.romWebpage ?? undefined} className="text-xl no-underline">
                    {romForDevice.romName}
                </a>
            </td>
            <td>
                <p className="text-right text-xl">
                    <a href={romForDevice.deviceWebpage ?? undefined} className="no-underline">
                        {romDataGenerate(romForDevice)}
                    </a>
                </p>
            </td>
        </tr>
    )
}

function romDataGenerate(romForDevice: RomForDevice): string {
    var output: string = "";
    if (!romForDevice.romSupport) {
        output = "No";
        return output;
    }
    else {
        if (romForDevice.romState == "") {
            output = "Yes";
            if ((romForDevice.androidVersion == null || romForDevice.androidVersion == "" || romForDevice.androidVersion == "null") && (romForDevice.romNotes == null || romForDevice.romNotes == "" || romForDevice.romNotes == "null")) {
                return output;
            }
            else if (romForDevice.androidVersion != null && romForDevice.androidVersion != "" && romForDevice.androidVersion != "null") {
                output += ` (Android: ${romForDevice.androidVersion})`;
                return output;
            }
            else {
                output += ` (${romForDevice.romNotes})`;
                return output;
            }
        }
        else {
            output = romForDevice.romState;
            if ((romForDevice.androidVersion == null || romForDevice.androidVersion == "" || romForDevice.androidVersion == "null") && (romForDevice.romNotes == null || romForDevice.romNotes == "" || romForDevice.romNotes == "null")) {
                return output;
            }
            else if (romForDevice.androidVersion != null && romForDevice.androidVersion != "" && romForDevice.androidVersion != "null") {
                output +=  ` (Android: ${romForDevice.androidVersion})`;
                return output;
            }
            else {
                output += ` (${romForDevice.romNotes})`;
                return output;
            }
        }
    }
}
