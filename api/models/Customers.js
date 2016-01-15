/**
* Customers.js
*
* @description :: TODO: You might write a short summary of how this model works and what it represents here.
* @docs        :: http://sailsjs.org/#!documentation/models
* "CustomerID" bpchar NOT NULL,
  "CompanyName" character varying(40) NOT NULL,
  "ContactName" character varying(30),
  "ContactTitle" character varying(30),
  "Address" character varying(60),
  "City" character varying(15),
  "Region" character varying(15),
  "PostalCode" character varying(10),
  "Country" character varying(15),
  "Phone" character varying(24),
  "Fax" character varying(24),
*
*/

module.exports = {

  attributes: {
    CustomerID: {
      type: 'string',
      primaryKey: true,
    },
    CompanyName: {
      type: 'string',
    },
    ContactName: {
      type: 'string',
    },
    ContactTitle: {
      type: 'string',
    },
    Address: {
      type: 'string',
    },
    City: {
      type: 'string',
    },
    Region: {
      type: 'string',
    },
    PostalCode: {
      type: 'string',
    },
    Country: {
      type: 'string',
    },
    Phone: {
      type: 'string',
    },
    characFax: {
      type: 'string',
    }
  }
};

