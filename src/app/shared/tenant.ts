/// here i create a Tenants Interface so i can keep my code looking nicer and to help avoid making silly errors


export class Tenant
{
    constructor(public _id:String, public name:String, public address:String ,  public phone:String , public debt : Number){}
}