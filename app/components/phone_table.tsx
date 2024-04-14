import { RomForDevice } from "../tools/entities/rom_for_device"
import RomInfoRow from "./rom_info_row"

export default function PhoneTable({listOfRoms} : {listOfRoms: Array<RomForDevice>}) {
    return (
        <table>
            <tbody>
                {listOfRoms.map((rom: RomForDevice, index: number) => (
                    <RomInfoRow key={`a${index}`} romForDevice={rom}></RomInfoRow>
                ))}
            </tbody>
        </table>
    )
}
