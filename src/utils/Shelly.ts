import { SwitchStatus } from "./types";

export class Shelly {

    ip = "192.168.0.40" as string;

    constructor() {}

    get getIp() {
        return this.ip;
    }

    get priseConfiguration()
    {
        return "";
    }

    allumer()
    {
        fetch(`http://${this.ip}/rpc/Switch.Set?id=0&on=true`)
    } 

    eteindre()
    {
        fetch(`http://${this.ip}/rpc/Switch.Set?id=0&on=false`)
    }

    async getConsommation(): Promise<string[]>
    {
        let res = await fetch(`http://${this.ip}/rpc/Switch.GetStatus?id=0`);
        if (!res) return [null, null]
        let data = await res.json() as SwitchStatus;
        if (!data) return [null, null]
        // console.log(data)
        return [`${data.apower.toString()}`, `${data.current.toString()}`]
    }

    changerCouleur(hex: string)
    {
        let rgb = hex.slice(1).match(/.{1,2}/g)
        parseInt(rgb[0], 16)


        fetch(`http://${this.ip}/rpc/PLUGS_UI.SetConfig?config={"leds":{"mode":"switch","colors":{"switch:0":{"on":{"rgb":[${hexToPourcent(rgb[0])},${hexToPourcent(rgb[1])},${hexToPourcent(rgb[2])}],"brightness":100},"off":{"rgb":[100,100,100],"brightness":100}},"power":{"brightness":100}},"night_mode":{"enable":true,"brightness":10,"active_between":["22:00","06:00"]}},"controls":{"switch:0":{"in_mode":"detached"}}}`)
    }
}

function hexToPourcent(value: string): number
{
    let int = parseInt(value, 16);
    return Math.floor((int*100)/255)
}