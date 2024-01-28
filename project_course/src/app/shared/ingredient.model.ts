export class ingredient
{
    public name: string;
    public amount: number;

    constructor(name: string, amount: number)
    {
        this.name= name;
        this.amount= amount;
    }

    // A typescript shortcut for constructors:
    //   constructor(public name: string, public amount: number) {}
    // In this way the members of class are declared automatically
    // and don't need to declare by hand 
}
