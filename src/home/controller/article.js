"use strict";

import Base from "./base.js";

export default class extends Base {
    /**
     * 获取详细信息
     * @return {Promise} []
     */


    detailAction(self){

        console.log(self === this);
        //console.log(self);
        return this.display();
    }

    __before(){
        console.log("before all action");
    }


}