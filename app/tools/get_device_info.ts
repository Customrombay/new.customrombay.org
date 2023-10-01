export async function getDeviceInfo(deviceName: string) {
    const res = await fetch(`https://new.customrombay.org/api/`, { next: { revalidate: 60 }, headers: 
    {
      "command" : "getDeviceInfo",
      "devicename" : deviceName,
  
    }
    })
    return res.json()
  }