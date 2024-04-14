export async function getDeviceInfo(deviceName: string): Promise<object | null> {
    const res = await fetch(`http://localhost:3001/api/`, { next: { revalidate: 60 }, headers: 
    {
      "command" : "getDeviceInfo",
      "devicename" : deviceName,
  
    }
    })
    return res.json()
  }