import { NextResponse, NextRequest } from 'next/server'
import * as fs from 'fs';
import { parse, stringify } from 'yaml'
 
export async function GET(request: NextRequest) {
    var headers = request.headers
    var command = headers.get("command")
    if (command == "getDeviceInfo") {
        var deviceName = headers.get("devicename")
        console.log(deviceName)
        const words = fs.readFileSync(`/opt/customrombay/database/phone_data/${deviceName}.yaml`, 'utf-8');
        return NextResponse.json(parse(words))
    }
    else if (command == "getListOfDevices") {
        var listOfFiles = fs.readdirSync("/opt/customrombay/database/phone_data/")
        console.log(listOfFiles)
        return NextResponse.json(listOfFiles)
    }
    else if (command == "getDeviceImage") {
        var deviceName = headers.get("devicename")
        console.log(deviceName)
        const bytes = fs.readFileSync(`/opt/customrombay/database/device_images/medium/${deviceName}.webp`)
        return NextResponse.json(bytes)
    }
    // console.log(words)

    // console.log("OK XDDD")
}