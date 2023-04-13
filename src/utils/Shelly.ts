export class Shelly {

    ip = "" as string;

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

    

}