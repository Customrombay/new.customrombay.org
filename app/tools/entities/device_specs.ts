export class DeviceSpecs {
    soc: string | null;
    gpu: string | null;
    ram: string | null;
    storage: string | null;
    isABDevice: boolean | null;
    screen: object | null;
    battery: object | null;
    network: Array<string> | null;
    peripherals: Array<string> | null;
    release: string | null;

    constructor(
        soc: string | null,
        gpu: string | null,
        ram: string | null,
        storage: string | null,
        isABDevice: boolean | null,
        screen: object | null,
        battery: object | null,
        network: Array<string> | null,
        peripherals: Array<string> | null,
        release: string | null,
    ) {
        this.soc = soc;
        this.gpu = gpu;
        this.ram = ram;
        this.storage = storage;
        this.isABDevice = isABDevice;
        this.screen = screen;
        this.battery = battery;
        this.network = network;
        this.peripherals = peripherals;
        this.release = release;
    }
}
