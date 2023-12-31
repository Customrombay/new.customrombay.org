import DeviceView from "../components/device_view"
import {getListOfDevices} from "../tools/get_list_of_devices"

export default async function Home() {
    var listOfDevices = await getListOfDevices()

    return (
        <main className="pt-24 pb-24">
            <article className="mx-auto p-6 text-center">
                <h1 className="text-3xl font-bold lg:text-5xl mx-5 text-center">The official Customrombay.org device gallery</h1>
                {/* <p className="text-xl lg:text-2xl mt-8 mx-5 text-center">A place to find all custom ROMs available for your device.</p> */}
                <h2 className="text-xl font-bold lg:text-3xl pt-8 mx-5 text-center">We already support 703 devices!</h2>
                <div>{listOfDevices.map((name: any, index: number) => (
                    <DeviceView key={`a${index}`} deviceModelName={name["device-model-name"]} deviceVendor={name["device-vendor"]} deviceName={`${name["device-vendor"].toString().replace(" ", "").toLowerCase()}-${name["device-name"]}`}></DeviceView>
                ))}</div>
            </article>
        </main>
    )
}