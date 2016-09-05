'use strict';

import Base from './base.js';

export default class extends Base {
    /**
     * index action
     * @return {Promise} []
     */
    async indexAction(){

        this.setCorsHeader();
        if (!this.isPost()) return  this.fail(400, "must be post request");
        let account_model = this.model("account");
        let account_name = this.post("account");
        let password = this.post("password");
        let account_record = await account_model.where({account: account_name}).find();
        if (account_record.password === password) {
            return this.json({"id": account_record.id});
        } else {
            return this.fail(300, "password error");
        }
    }

    setCorsHeader(){
        this.header("Access-Control-Allow-Origin", this.header("origin") || "*");
        this.header("Access-Control-Allow-Headers", "x-requested-with");
        this.header("Access-Control-Request-Method", "GET,POST,PUT,DELETE");
        this.header("Access-Control-Allow-Credentials", "true");
    }

}