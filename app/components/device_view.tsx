import Image from 'next/image'

export default function DeviceView({deviceName} : {deviceName: string}) {
    return (
    <div className="p-2">
        <a href={`/${deviceName}/`}>
            <div className="grid place-content-center h-64">
               <img className="rounded-lg shadow-sm h-64 object-cover" alt={deviceName} loading="lazy" src={`/${deviceName}.png`}/>
            </div>
            <div className="my-2 text-xl font-semibold text-center">
                <p>Poco F1</p>
                <p>(beryllium)</p>
            </div>
        </a>
    </div>)
}