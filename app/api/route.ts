import { NextResponse, NextRequest } from 'next/server'
import * as fs from 'fs';
import { parse, stringify } from 'yaml'
 
export async function GET(request: NextRequest) {
    var headers = request.headers
    var deviceName = headers.get("devicename")
    console.log(deviceName)
    const words = fs.readFileSync(`/opt/customrombay/database/phone_data/${deviceName}.yaml`, 'utf-8');
    // console.log(words)

    // console.log("OK XDDD")
    return NextResponse.json(parse(words))
}