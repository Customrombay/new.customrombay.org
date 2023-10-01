import { NextResponse, NextRequest } from 'next/server'
import * as fs from 'fs';
import { parse, stringify } from 'yaml'
 
export async function GET(request: NextRequest) {
    var url = request.nextUrl
    var fileName = url.toString().split("/").slice(-1)
    if (fs.existsSync(`/opt/customrombay/database/device_images/medium/${fileName}`)) {
        const bytes = fs.readFileSync(`/opt/customrombay/database/device_images/small/${fileName}`)

        const headers = new Headers();

        headers.set("Content-Type", "image/*");
        
        return new NextResponse(bytes, { status: 200, statusText: "OK", headers })
    }
    else {
        const bytes = fs.readFileSync(`/opt/customrombay/phone.png`)

        const headers = new Headers();

        headers.set("Content-Type", "image/*");
        
        return new NextResponse(bytes, { status: 200, statusText: "OK", headers })
    }
    // var headers = request.headers
    // var command = headers.get("command")
    // if (command == "getDeviceInfo") {
    //     var deviceName = headers.get("devicename")
    //     console.log(deviceName)
    //     const words = fs.readFileSync(`/opt/customrombay/database/phone_data/${deviceName}.yaml`, 'utf-8');
    //     return NextResponse.json(parse(words))
    // }
    // else if (command == "getListOfDevices") {
    //     var listOfFiles = fs.readdirSync("/opt/customrombay/database/phone_data/")
    //     console.log(listOfFiles)
    //     return NextResponse.json(listOfFiles)
    // }
    // else if (command == "getDeviceImage") {
    //     var deviceName = headers.get("devicename")
    //     console.log(deviceName)
    //     const bytes = fs.readFileSync(`/opt/customrombay/database/device_images/medium/${deviceName}.webp`)
    //     return NextResponse.json(bytes)
    // }
    // console.log(words)

    // console.log("OK XDDD")
}