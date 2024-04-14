import {getDeviceInfo} from "../tools/get_device_info"
import { Device } from "../tools/entities/device";
import PhoneTable from "../components/phone_table";

export default async function ProductDetail({
  params,
}: {
  params: { id: string };
}) {
  var deviceDetails: Device | null = await getDeviceInfo(params.id);
  if (deviceDetails == null) {
    return (
      <main className="relative flex flex-col">
        <article className="prose lg:prose-lg dark:prose-dark mx-auto mt-16 mb-8 px-4">
          <h1 className="text-5xl font-bold mb-8">404 Not found</h1>
          <p className="text-xl font-bold mb-8">Oh no...</p>
        </article>
      </main>
    )
  }
  var deviceName: string = deviceDetails.deviceName;
  var deviceVendor: string = deviceDetails.deviceVendor;
  var deviceModelName: string = deviceDetails.deviceModelName;
  var deviceDescription: string = deviceDetails.deviceDescription;
  // console.log(deviceDetails)
  return (
    <main className="relative flex flex-col">
      <article className="prose lg:prose-lg dark:prose-dark mx-auto mt-16 mb-8 px-4">
        <h1 className="text-5xl font-bold mb-8">{deviceVendor} {deviceModelName} ({deviceName})</h1>
        <p className="text-xl font-bold mb-8">{deviceDescription}</p>
        <h2 className="text-3xl font-bold mb-8">Custom ROMs</h2>
        <p>The following custom ROMs support {deviceName}:</p>
        <PhoneTable listOfRoms={deviceDetails.listOfRoms}></PhoneTable>
      </article>
    </main>
  )
}
