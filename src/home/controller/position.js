'use strict';

import Base from './base.js';

export default class extends Base {
    /**
     * index action
     * @return {Promise} []
     */
    async addAction(){
        ////auto render template file index_index.html
        if (!this.isPost()) return  this.fail(400, "must be post request");
        ////let account_model = this.model("account");
        let position_model = this.model("position");
        var client_data = this.post();
        let insertId = await position_model.add(client_data);
        console.log(insertId);
        return this.json({id: insertId, "message": "success"});
    }
    async findAction() {
        ////auto render template file index_index.html
        if (!this.isPost()) return  this.fail(400, "must be post request");
        ////let account_model = this.model("account");
        let position_model = this.model("position");
        var client_data = this.post();
        let Records = await position_model.where({launcher_id: client_data.id}).select();
        console.log(Records);
        //let newRecords = Records;
        let newRecords = Records.map(function(currentValue) {
            let obj = {};
            obj.longitude = currentValue.longitude;
            obj.latitude = currentValue.latitude;
            return obj;
        });
        return this.json({"data": newRecords});
    }
}