import {getDeviceInfo} from "../tools/get_device_info"

export default async function DeviceView({deviceName} : {deviceName: string}) {
    var deviceInfo = await getDeviceInfo(deviceName)
    console.log(deviceName)
    // var deviceName: string = deviceInfo["device-name"]
    var deviceVendor: string = deviceInfo["device-vendor"]
    var deviceModelName: string = deviceInfo["device-model-name"]
    return (
    <div className="p-2">
        <a href={`/${deviceName}/`}>
            <div className="grid place-content-center h-64">
               <img className="rounded-lg shadow-sm h-64 object-cover" alt={deviceName} loading="lazy" src={`/api/image/${deviceName}.webp`}/>
            </div>
            <div className="my-2 text-xl font-semibold text-center">
                <p>{deviceModelName}</p>
                <p>({deviceName})</p>
            </div>
        </a>
    </div>)
}