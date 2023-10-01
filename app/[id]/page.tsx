import {getDeviceInfo} from "../tools/get_device_info"

export default async function ProductDetail({
  params,
}: {
  params: { id: string };
}) {
  var deviceDetails = await getDeviceInfo(params.id)
  var deviceName: string = deviceDetails["device-name"]
  var deviceVendor: string = deviceDetails["device-vendor"]
  var deviceModelName: string = deviceDetails["device-model-name"]
  var deviceDescription: string = deviceDetails["device-description"]
  // console.log(deviceDetails)
  return (
    <main className="relative flex flex-col">
      <article className="mx-auto mt-16 mb-8 px-4">
        <h1 className="text-5xl font-bold mb-8">{deviceVendor} {deviceModelName} ({deviceName})</h1>
        <p className="text-xl font-bold mb-8">{deviceDescription}</p>
        <h2 className="text-3xl font-bold mb-8">Custom ROMs</h2>
        <p>The following custom ROMs support beryllium:</p>
      </article>
    </main>
  )
}
