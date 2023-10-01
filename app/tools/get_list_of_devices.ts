export async function getListOfDevices() {
    const res = await fetch(`http://localhost:3001/api/`, { next: { revalidate: 60 }, headers: 
    {
      "command" : "getListOfDevices",  
    }
    })
    var content = res.json()
    console.log(content)
    return content
}