/**
* Orders.js
*
* @description :: TODO: You might write a short summary of how this model works and what it represents here.
* @docs        :: http://sailsjs.org/#!documentation/models
*"OrderID" smallint NOT NULL,
  "CustomerID" bpchar,
  "EmployeeID" smallint,
  "OrderDate" date,
  "RequiredDate" date,
  "ShippedDate" date,
  "ShipVia" smallint,
  "Freight" real,
  "ShipName" character varying(40),
  "ShipAddress" character varying(60),
  "ShipCity" character varying(15),
  "ShipRegion" character varying(15),
  "ShipPostalCode" character varying(10),
  "ShipCountry" character varying(15),
*/

module.exports = {

  attributes: {
    OrderID: {
      type: 'integer',
    },
    CustomerID: {
      model: 'Customers',
      required: false,
    },
    EmployeeID: {
      type: 'integer',
    },
    OrderDate: {
      type: 'date',
    },
    RequiredDate: {
      type: 'date',
    },
    ShippedDate: {
      type: 'date',
    },
    ShipVia: {
      type: 'integer',
    },
    Freight: {
      type: 'float',
    },
    ShipName: {
      type: 'string',
    },
    ShipAddress: {
      type: 'string',
    },
    ShipCity: {
      type: 'string',
    },
    ShipRegion: {
      type: 'string',
    },
    ShipPostalCode: {
      type: 'string',
    },
    ShipCountry: {
      type: 'string',
    }
  }
};

