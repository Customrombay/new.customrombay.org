import { Device } from "./entities/device"
import { RomForDevice } from "./entities/rom_for_device";

export async function getDeviceInfo(deviceName: string): Promise<Device | null> {
  const res = await fetch(`http://localhost:3001/api/`, { next: { revalidate: 10 }, headers: 
    {
      "command" : "getDeviceInfo",
      "devicename" : deviceName,

    }
  })
  var toReturn: object | null = await res.json();
  if (toReturn != null) {
    console.log(typeof toReturn["roms" as keyof object])
    var device: Device = new Device(
      toReturn["device-name" as keyof object],
      toReturn["device-vendor" as keyof object],
      toReturn["device-model-name" as keyof object],
      toReturn["device-description" as keyof object],
      null,
      getListOfRomsForDevice(toReturn) ?? [],
      [],
      [],
    );
    return device;
  }
  return null;
}

function getListOfRomsForDevice(toReturn: object): Array<RomForDevice> | null {
  var list: Array<object> | null = toReturn["roms" as keyof object];
  var listOfRoms: Array<RomForDevice> = [];
  if (list != null) {
    for (var rom of list as Array<object>) {
      listOfRoms.push(
        new RomForDevice(
          rom["rom-name" as keyof object],
          rom["rom-support" as keyof object],
          rom["rom-state" as keyof object],
          rom["android-version" as keyof object],
          rom["rom-notes" as keyof object],
          rom["rom-webpage" as keyof object],
          rom["phone-webpage" as keyof object],
        )
      );
    }
    return listOfRoms;
  }
  return null;
}