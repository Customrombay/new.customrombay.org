import { Device } from "./entities/device"
import { RomForDevice } from "./entities/rom_for_device";
import { DeviceSpecs } from "./entities/device_specs";

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
      getDeviceSpecs(toReturn),
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

function getDeviceSpecs(toReturn: object): DeviceSpecs | null {
  var readSpecs: object | null = toReturn["specs" as keyof object];
  if (readSpecs != null && readSpecs != undefined) {
    var specs: DeviceSpecs = new DeviceSpecs(
      readSpecs["soc" as keyof object],
      readSpecs["gpu" as keyof object],
      readSpecs["ram" as keyof object],
      readSpecs["storage" as keyof object],
      readSpecs["is_ab_device" as keyof object],
      readSpecs["screen" as keyof object],
      readSpecs["battery" as keyof object],
      readSpecs["network" as keyof object],
      readSpecs["peripherals" as keyof object],
      readSpecs["release" as keyof object],
    );
    return specs;
  }
  return null;
}