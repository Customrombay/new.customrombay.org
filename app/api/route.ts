import { NextResponse, NextRequest } from 'next/server'
import * as fs from 'fs';
import { parse, stringify } from 'yaml'
 
export async function GET(request: NextRequest) {
    var headers = request.headers
    var command = headers.get("command")
    if (command == "getDeviceInfo") {
        var deviceName = headers.get("devicename")
        console.log(deviceName)
        if (fs.existsSync(`/opt/customrombay/database/phone_data/${deviceName}.yaml`)) {
            const words = fs.readFileSync(`/opt/customrombay/database/phone_data/${deviceName}.yaml`, 'utf-8');
            return NextResponse.json(parse(words))
        }
        return NextResponse.json(null)
    }
    else if (command == "getListOfDevices") {
        var listOfDevices = fs.readFileSync("/opt/customrombay/database/main.yaml", "utf-8")
        return NextResponse.json(parse(listOfDevices))
    }
    else if (command == "getDeviceImage") {
        var deviceName = headers.get("devicename")
        console.log(deviceName)
        const bytes = fs.readFileSync(`/opt/customrombay/database/device_images/medium/${deviceName}.webp`)
        return NextResponse.json(bytes)
    }
    else {
        return NextResponse.json("Hello world")
    }
    // console.log(words)

    // console.log("OK XDDD")
}