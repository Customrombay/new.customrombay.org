export async function getListOfDevices() {
    const res = await fetch(`https://new.customrombay.org/api/`, { next: { revalidate: 5 }, headers: 
    {
      "command" : "getListOfDevices",  
    }
    })
    var content = res.json()
    console.log(content)
    return content
}