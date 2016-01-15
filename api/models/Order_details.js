/**
* Order_details.js
*
* @description :: TODO: You might write a short summary of how this model works and what it represents here.
* @docs        :: http://sailsjs.org/#!documentation/models
* "OrderID" smallint NOT NULL,
  "ProductID" smallint NOT NULL,
  "UnitPrice" real NOT NULL,
  "Quantity" smallint NOT NULL,
  "Discount" real NOT NULL,
*
*
*
*
*/

module.exports = {

  attributes: {
    OrderID : {
      model: 'Orders',
      required: false,
    },
    ProductID : {
      type: 'integer',
    },
    UnitPrice: {
      type: 'float',
    },
    Quantity: {
      type: 'integer',
    },
    Discount: {
      type: 'float',
    }
  }
};

