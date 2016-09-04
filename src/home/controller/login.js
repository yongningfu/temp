'use strict';

import Base from './base.js';

export default class extends Base {
    /**
     * index action
     * @return {Promise} []
     */
    async indexAction(){
        //auto render template file index_index.html
        if (!this.isPost()) return  this.fail(400, "must be post request");
        let account_model = this.model("account");
        let account_name = this.post("account");
        let password = this.post("password");
        let account_record = await account_model.where({account: account_name}).find();
        if (account_record.password === password) {
            return this.json({"id": this.id});
        } else {
            return this.fail(300, "password error");
        }
    }
}