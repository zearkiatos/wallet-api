import BaseBuilder from "./baseBuilder";

class BalanceBuilder extends BaseBuilder {
    public id:number;
    public user_id = 1;
    public amount = 100;
    constructor () {
        super();
        this.id = 1;
        this.user_id = 1;
        this.amount = 100;
    }

}

export default BalanceBuilder;