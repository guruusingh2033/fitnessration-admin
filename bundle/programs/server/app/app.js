var require = meteorInstall({"imports":{"api":{"addOns.js":["meteor/mongo",function(require,exports,module){

/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//                                                                                                                 //
// imports/api/addOns.js                                                                                           //
//                                                                                                                 //
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
                                                                                                                   //
module.export({                                                                                                    // 1
  AddOns: function () {                                                                                            // 1
    return AddOns;                                                                                                 // 1
  }                                                                                                                // 1
});                                                                                                                // 1
var Mongo = void 0;                                                                                                // 1
module.import('meteor/mongo', {                                                                                    // 1
  "Mongo": function (v) {                                                                                          // 1
    Mongo = v;                                                                                                     // 1
  }                                                                                                                // 1
}, 0);                                                                                                             // 1
var AddOns = new Mongo.Collection('addOns', {                                                                      // 3
  idGeneration: 'MONGO'                                                                                            // 3
});                                                                                                                // 3
                                                                                                                   //
if (Meteor.isServer) {                                                                                             // 5
  Meteor.publish('addOns', function () {                                                                           // 6
    return AddOns.find();                                                                                          // 7
  });                                                                                                              // 8
}                                                                                                                  // 9
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

}],"anomalyTriggers.js":["meteor/mongo",function(require,exports,module){

/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//                                                                                                                 //
// imports/api/anomalyTriggers.js                                                                                  //
//                                                                                                                 //
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
                                                                                                                   //
module.export({                                                                                                    // 1
  AnomalyTriggers: function () {                                                                                   // 1
    return AnomalyTriggers;                                                                                        // 1
  }                                                                                                                // 1
});                                                                                                                // 1
var Mongo = void 0;                                                                                                // 1
module.import('meteor/mongo', {                                                                                    // 1
  "Mongo": function (v) {                                                                                          // 1
    Mongo = v;                                                                                                     // 1
  }                                                                                                                // 1
}, 0);                                                                                                             // 1
var AnomalyTriggers = new Mongo.Collection('anomalyTriggers', {                                                    // 3
  idGeneration: 'MONGO'                                                                                            // 3
});                                                                                                                // 3
                                                                                                                   //
if (Meteor.isServer) {                                                                                             // 5
  Meteor.publish('anomalyTriggers', function () {                                                                  // 6
    return AnomalyTriggers.find();                                                                                 // 7
  });                                                                                                              // 8
}                                                                                                                  // 9
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

}],"blocks.js":["meteor/mongo",function(require,exports,module){

/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//                                                                                                                 //
// imports/api/blocks.js                                                                                           //
//                                                                                                                 //
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
                                                                                                                   //
module.export({                                                                                                    // 1
  Blocks: function () {                                                                                            // 1
    return Blocks;                                                                                                 // 1
  }                                                                                                                // 1
});                                                                                                                // 1
var Mongo = void 0;                                                                                                // 1
module.import('meteor/mongo', {                                                                                    // 1
  "Mongo": function (v) {                                                                                          // 1
    Mongo = v;                                                                                                     // 1
  }                                                                                                                // 1
}, 0);                                                                                                             // 1
var Blocks = new Mongo.Collection('blocks', {                                                                      // 3
  idGeneration: 'MONGO'                                                                                            // 3
});                                                                                                                // 3
                                                                                                                   //
if (Meteor.isServer) {                                                                                             // 5
  Meteor.publish('blocks', function () {                                                                           // 6
    return Blocks.find();                                                                                          // 7
  });                                                                                                              // 8
}                                                                                                                  // 9
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

}],"bundleTypes.js":["meteor/mongo",function(require,exports,module){

/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//                                                                                                                 //
// imports/api/bundleTypes.js                                                                                      //
//                                                                                                                 //
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
                                                                                                                   //
module.export({                                                                                                    // 1
  BundleTypes: function () {                                                                                       // 1
    return BundleTypes;                                                                                            // 1
  }                                                                                                                // 1
});                                                                                                                // 1
var Mongo = void 0;                                                                                                // 1
module.import('meteor/mongo', {                                                                                    // 1
  "Mongo": function (v) {                                                                                          // 1
    Mongo = v;                                                                                                     // 1
  }                                                                                                                // 1
}, 0);                                                                                                             // 1
var BundleTypes = new Mongo.Collection('bundleTypes', {                                                            // 3
  idGeneration: 'MONGO'                                                                                            // 3
});                                                                                                                // 3
                                                                                                                   //
if (Meteor.isServer) {                                                                                             // 5
  Meteor.publish('bundleTypes', function () {                                                                      // 6
    return BundleTypes.find();                                                                                     // 7
  });                                                                                                              // 8
}                                                                                                                  // 9
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

}],"deleted.js":["meteor/mongo",function(require,exports,module){

/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//                                                                                                                 //
// imports/api/deleted.js                                                                                          //
//                                                                                                                 //
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
                                                                                                                   //
module.export({                                                                                                    // 1
  Deleted: function () {                                                                                           // 1
    return Deleted;                                                                                                // 1
  }                                                                                                                // 1
});                                                                                                                // 1
var Mongo = void 0;                                                                                                // 1
module.import('meteor/mongo', {                                                                                    // 1
  "Mongo": function (v) {                                                                                          // 1
    Mongo = v;                                                                                                     // 1
  }                                                                                                                // 1
}, 0);                                                                                                             // 1
var Deleted = new Mongo.Collection('deleted', {                                                                    // 3
  idGeneration: 'MONGO'                                                                                            // 3
});                                                                                                                // 3
                                                                                                                   //
if (Meteor.isServer) {                                                                                             // 5
  Meteor.publish('deleted', function () {                                                                          // 6
    return Deleted.find();                                                                                         // 7
  });                                                                                                              // 8
}                                                                                                                  // 9
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

}],"fulfillmentSettings.js":["meteor/mongo",function(require,exports,module){

/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//                                                                                                                 //
// imports/api/fulfillmentSettings.js                                                                              //
//                                                                                                                 //
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
                                                                                                                   //
module.export({                                                                                                    // 1
	FulfillmentSettings: function () {                                                                                // 1
		return FulfillmentSettings;                                                                                      // 1
	}                                                                                                                 // 1
});                                                                                                                // 1
var Mongo = void 0;                                                                                                // 1
module.import('meteor/mongo', {                                                                                    // 1
	"Mongo": function (v) {                                                                                           // 1
		Mongo = v;                                                                                                       // 1
	}                                                                                                                 // 1
}, 0);                                                                                                             // 1
var FulfillmentSettings = new Mongo.Collection('fulfillmentSettings', {                                            // 3
	idGeneration: 'MONGO'                                                                                             // 3
});                                                                                                                // 3
FulfillmentSettings.attachSchema(new SimpleSchema({                                                                // 4
	deliveryFee: {                                                                                                    // 5
		type: Number,                                                                                                    // 5
		decimal: true                                                                                                    // 5
	},                                                                                                                // 5
	'timestamps.deliveryFee': {                                                                                       // 6
		type: Date,                                                                                                      // 6
		optional: true                                                                                                   // 6
	},                                                                                                                // 6
	freeDeliveryThreshold: {                                                                                          // 8
		type: Number                                                                                                     // 8
	},                                                                                                                // 8
	'timestamps.freeDeliveryThreshold': {                                                                             // 9
		type: Date,                                                                                                      // 9
		optional: true                                                                                                   // 9
	},                                                                                                                // 9
	minDays: {                                                                                                        // 11
		type: Number                                                                                                     // 11
	},                                                                                                                // 11
	'timestamps.minDays': {                                                                                           // 12
		type: Date,                                                                                                      // 12
		optional: true                                                                                                   // 12
	},                                                                                                                // 12
	cutoffTime: {                                                                                                     // 14
		type: Number                                                                                                     // 14
	},                                                                                                                // 14
	'timestamps.cutoffTime': {                                                                                        // 15
		type: Date,                                                                                                      // 15
		optional: true                                                                                                   // 15
	}                                                                                                                 // 15
}), {                                                                                                              // 4
	transform: true                                                                                                   // 16
});                                                                                                                // 16
                                                                                                                   //
if (Meteor.isServer) {                                                                                             // 18
	Meteor.publish('fulfillmentSettings', function () {                                                               // 19
		return FulfillmentSettings.find();                                                                               // 20
	});                                                                                                               // 21
}                                                                                                                  // 22
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

}],"ingredients.js":["meteor/mongo",function(require,exports,module){

/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//                                                                                                                 //
// imports/api/ingredients.js                                                                                      //
//                                                                                                                 //
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
                                                                                                                   //
module.export({                                                                                                    // 1
  Ingredients: function () {                                                                                       // 1
    return Ingredients;                                                                                            // 1
  }                                                                                                                // 1
});                                                                                                                // 1
var Mongo = void 0;                                                                                                // 1
module.import('meteor/mongo', {                                                                                    // 1
  "Mongo": function (v) {                                                                                          // 1
    Mongo = v;                                                                                                     // 1
  }                                                                                                                // 1
}, 0);                                                                                                             // 1
var Ingredients = new Mongo.Collection('ingredients', {                                                            // 3
  idGeneration: 'MONGO'                                                                                            // 3
});                                                                                                                // 3
                                                                                                                   //
if (Meteor.isServer) {                                                                                             // 5
  Meteor.publish('ingredients', function () {                                                                      // 6
    return Ingredients.find();                                                                                     // 7
  });                                                                                                              // 8
}                                                                                                                  // 9
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

}],"locationSurcharges.js":["meteor/mongo",function(require,exports,module){

/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//                                                                                                                 //
// imports/api/locationSurcharges.js                                                                               //
//                                                                                                                 //
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
                                                                                                                   //
module.export({                                                                                                    // 1
  LocationSurcharges: function () {                                                                                // 1
    return LocationSurcharges;                                                                                     // 1
  }                                                                                                                // 1
});                                                                                                                // 1
var Mongo = void 0;                                                                                                // 1
module.import('meteor/mongo', {                                                                                    // 1
  "Mongo": function (v) {                                                                                          // 1
    Mongo = v;                                                                                                     // 1
  }                                                                                                                // 1
}, 0);                                                                                                             // 1
var LocationSurcharges = new Mongo.Collection('locationSurcharges', {                                              // 3
  idGeneration: 'MONGO'                                                                                            // 3
});                                                                                                                // 3
LocationSurcharges.attachSchema(new SimpleSchema({                                                                 // 4
  surcharge: {                                                                                                     // 5
    type: Number,                                                                                                  // 5
    decimal: true                                                                                                  // 5
  },                                                                                                               // 5
  postalPrefix: {                                                                                                  // 6
    type: String                                                                                                   // 6
  }                                                                                                                // 6
}), {                                                                                                              // 4
  transform: true                                                                                                  // 7
});                                                                                                                // 7
                                                                                                                   //
if (Meteor.isServer) {                                                                                             // 9
  Meteor.publish('locationSurcharges', function () {                                                               // 10
    return LocationSurcharges.find();                                                                              // 11
  });                                                                                                              // 12
}                                                                                                                  // 13
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

}],"mealPlans.js":["meteor/mongo",function(require,exports,module){

/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//                                                                                                                 //
// imports/api/mealPlans.js                                                                                        //
//                                                                                                                 //
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
                                                                                                                   //
module.export({                                                                                                    // 1
  MealPlans: function () {                                                                                         // 1
    return MealPlans;                                                                                              // 1
  }                                                                                                                // 1
});                                                                                                                // 1
var Mongo = void 0;                                                                                                // 1
module.import('meteor/mongo', {                                                                                    // 1
  "Mongo": function (v) {                                                                                          // 1
    Mongo = v;                                                                                                     // 1
  }                                                                                                                // 1
}, 0);                                                                                                             // 1
var MealPlans = new Mongo.Collection('mealPlans', {                                                                // 3
  idGeneration: 'MONGO'                                                                                            // 3
});                                                                                                                // 3
                                                                                                                   //
if (Meteor.isServer) {                                                                                             // 5
  Meteor.publish('mealPlans', function () {                                                                        // 6
    return MealPlans.find();                                                                                       // 7
  });                                                                                                              // 8
}                                                                                                                  // 9
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

}],"mealStock.js":["meteor/mongo","../helpers",function(require,exports,module){

/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//                                                                                                                 //
// imports/api/mealStock.js                                                                                        //
//                                                                                                                 //
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
                                                                                                                   //
module.export({                                                                                                    // 1
	MealStock: function () {                                                                                          // 1
		return MealStock;                                                                                                // 1
	}                                                                                                                 // 1
});                                                                                                                // 1
var Mongo = void 0;                                                                                                // 1
module.import('meteor/mongo', {                                                                                    // 1
	"Mongo": function (v) {                                                                                           // 1
		Mongo = v;                                                                                                       // 1
	}                                                                                                                 // 1
}, 0);                                                                                                             // 1
var formatDate = void 0;                                                                                           // 1
module.import('../helpers', {                                                                                      // 1
	"formatDate": function (v) {                                                                                      // 1
		formatDate = v;                                                                                                  // 1
	}                                                                                                                 // 1
}, 1);                                                                                                             // 1
var MealStock = new Mongo.Collection('mealStock', {                                                                // 4
	idGeneration: 'MONGO'                                                                                             // 4
});                                                                                                                // 4
MealStock.attachSchema(new SimpleSchema({                                                                          // 5
	initial: {                                                                                                        // 6
		type: Number,                                                                                                    // 6
		optional: true                                                                                                   // 6
	},                                                                                                                // 6
	adjustment: {                                                                                                     // 7
		type: Number,                                                                                                    // 7
		optional: true                                                                                                   // 7
	},                                                                                                                // 7
	restock: {                                                                                                        // 8
		type: Number,                                                                                                    // 8
		optional: true                                                                                                   // 8
	},                                                                                                                // 8
	output: {                                                                                                         // 9
		type: Number,                                                                                                    // 9
		optional: true                                                                                                   // 9
	},                                                                                                                // 9
	sales: {                                                                                                          // 10
		type: Number,                                                                                                    // 10
		optional: true                                                                                                   // 10
	},                                                                                                                // 10
	nonSales: {                                                                                                       // 11
		type: Number,                                                                                                    // 11
		optional: true                                                                                                   // 11
	},                                                                                                                // 11
	stock: {                                                                                                          // 12
		type: Number,                                                                                                    // 12
		optional: true                                                                                                   // 12
	},                                                                                                                // 12
	lastUpdated: {                                                                                                    // 14
		type: Object,                                                                                                    // 14
		optional: true,                                                                                                  // 14
		blackbox: true                                                                                                   // 14
	},                                                                                                                // 14
	meal: {                                                                                                           // 15
		type: Mongo.ObjectID                                                                                             // 15
	},                                                                                                                // 15
	date: {                                                                                                           // 16
		type: String                                                                                                     // 16
	}                                                                                                                 // 16
}), {                                                                                                              // 5
	transform: true                                                                                                   // 17
});                                                                                                                // 17
                                                                                                                   //
if (Meteor.isServer) {                                                                                             // 19
	Meteor.publish('mealStock', function () {                                                                         // 20
		return MealStock.find();                                                                                         // 21
	});                                                                                                               // 22
	Meteor.publish('mealStockForDates', function (minDate, maxDate) {                                                 // 24
		return MealStock.find({                                                                                          // 25
			date: {                                                                                                         // 25
				$gte: minDate,                                                                                                 // 25
				$lte: maxDate                                                                                                  // 25
			}                                                                                                               // 25
		});                                                                                                              // 25
	});                                                                                                               // 26
}                                                                                                                  // 27
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

}],"meals.js":["meteor/mongo",function(require,exports,module){

/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//                                                                                                                 //
// imports/api/meals.js                                                                                            //
//                                                                                                                 //
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
                                                                                                                   //
module.export({                                                                                                    // 1
  Meals: function () {                                                                                             // 1
    return Meals;                                                                                                  // 1
  }                                                                                                                // 1
});                                                                                                                // 1
var Mongo = void 0;                                                                                                // 1
module.import('meteor/mongo', {                                                                                    // 1
  "Mongo": function (v) {                                                                                          // 1
    Mongo = v;                                                                                                     // 1
  }                                                                                                                // 1
}, 0);                                                                                                             // 1
var Meals = new Mongo.Collection('meals', {                                                                        // 3
  idGeneration: 'MONGO'                                                                                            // 3
});                                                                                                                // 3
                                                                                                                   //
if (Meteor.isServer) {                                                                                             // 5
  Meteor.publish('meals', function () {                                                                            // 6
    return Meals.find();                                                                                           // 7
  });                                                                                                              // 8
}                                                                                                                  // 9
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

}],"orders.js":["meteor/mongo","../helpers",function(require,exports,module){

/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//                                                                                                                 //
// imports/api/orders.js                                                                                           //
//                                                                                                                 //
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
                                                                                                                   //
module.export({                                                                                                    // 1
  Orders: function () {                                                                                            // 1
    return Orders;                                                                                                 // 1
  }                                                                                                                // 1
});                                                                                                                // 1
var Mongo = void 0;                                                                                                // 1
module.import('meteor/mongo', {                                                                                    // 1
  "Mongo": function (v) {                                                                                          // 1
    Mongo = v;                                                                                                     // 1
  }                                                                                                                // 1
}, 0);                                                                                                             // 1
var formatDate = void 0;                                                                                           // 1
module.import('../helpers', {                                                                                      // 1
  "formatDate": function (v) {                                                                                     // 1
    formatDate = v;                                                                                                // 1
  }                                                                                                                // 1
}, 1);                                                                                                             // 1
var Orders = new Mongo.Collection('orders', {                                                                      // 3
  idGeneration: 'MONGO'                                                                                            // 3
});                                                                                                                // 3
                                                                                                                   //
if (Meteor.isServer) {                                                                                             // 6
  Meteor.publish('orders', function () {                                                                           // 7
    return Orders.find();                                                                                          // 8
  });                                                                                                              // 9
  Meteor.publish('ordersByDate', function (minDate, maxDate) {                                                     // 11
    return Orders.find({                                                                                           // 12
      'deliveryOptions.date': {                                                                                    // 12
        $gte: minDate,                                                                                             // 12
        $lt: maxDate                                                                                               // 12
      }                                                                                                            // 12
    });                                                                                                            // 12
  });                                                                                                              // 13
  Meteor.publish('orderById', function (id) {                                                                      // 15
    return Orders.find(id);                                                                                        // 16
  });                                                                                                              // 17
  Meteor.publish('futureOrders', function (id) {                                                                   // 19
    return Orders.find({                                                                                           // 20
      'deliveryOptions.date': {                                                                                    // 20
        $gte: formatDate(new Date())                                                                               // 20
      }                                                                                                            // 20
    });                                                                                                            // 20
  });                                                                                                              // 21
}                                                                                                                  // 22
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

}],"partners.js":["meteor/mongo",function(require,exports,module){

/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//                                                                                                                 //
// imports/api/partners.js                                                                                         //
//                                                                                                                 //
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
                                                                                                                   //
module.export({                                                                                                    // 1
  Partners: function () {                                                                                          // 1
    return Partners;                                                                                               // 1
  }                                                                                                                // 1
});                                                                                                                // 1
var Mongo = void 0;                                                                                                // 1
module.import('meteor/mongo', {                                                                                    // 1
  "Mongo": function (v) {                                                                                          // 1
    Mongo = v;                                                                                                     // 1
  }                                                                                                                // 1
}, 0);                                                                                                             // 1
var Partners = new Mongo.Collection('partners', {                                                                  // 2
  idGeneration: 'MONGO'                                                                                            // 2
});                                                                                                                // 2
                                                                                                                   //
if (Meteor.isServer) {                                                                                             // 3
  Meteor.publish('partners', function () {                                                                         // 4
    return Partners.find();                                                                                        // 5
  });                                                                                                              // 6
}                                                                                                                  // 7
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

}],"portions.js":["meteor/mongo",function(require,exports,module){

/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//                                                                                                                 //
// imports/api/portions.js                                                                                         //
//                                                                                                                 //
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
                                                                                                                   //
module.export({                                                                                                    // 1
  Portions: function () {                                                                                          // 1
    return Portions;                                                                                               // 1
  }                                                                                                                // 1
});                                                                                                                // 1
var Mongo = void 0;                                                                                                // 1
module.import('meteor/mongo', {                                                                                    // 1
  "Mongo": function (v) {                                                                                          // 1
    Mongo = v;                                                                                                     // 1
  }                                                                                                                // 1
}, 0);                                                                                                             // 1
var Portions = new Mongo.Collection('portions', {                                                                  // 3
  idGeneration: 'MONGO'                                                                                            // 3
});                                                                                                                // 3
                                                                                                                   //
if (Meteor.isServer) {                                                                                             // 5
  Meteor.publish('portions', function () {                                                                         // 6
    return Portions.find();                                                                                        // 7
  });                                                                                                              // 8
}                                                                                                                  // 9
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

}],"promotions.js":["meteor/mongo",function(require,exports,module){

/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//                                                                                                                 //
// imports/api/promotions.js                                                                                       //
//                                                                                                                 //
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
                                                                                                                   //
module.export({                                                                                                    // 1
	Promotions: function () {                                                                                         // 1
		return Promotions;                                                                                               // 1
	}                                                                                                                 // 1
});                                                                                                                // 1
var Mongo = void 0;                                                                                                // 1
module.import('meteor/mongo', {                                                                                    // 1
	"Mongo": function (v) {                                                                                           // 1
		Mongo = v;                                                                                                       // 1
	}                                                                                                                 // 1
}, 0);                                                                                                             // 1
var Promotions = new Mongo.Collection('promotions', {                                                              // 3
	idGeneration: 'MONGO'                                                                                             // 3
});                                                                                                                // 3
Promotions.attachSchema(new SimpleSchema({                                                                         // 4
	name: {                                                                                                           // 5
		type: String                                                                                                     // 5
	},                                                                                                                // 5
	deliveryFee: {                                                                                                    // 6
		type: Boolean,                                                                                                   // 6
		defaultValue: false                                                                                              // 6
	},                                                                                                                // 6
	start: {                                                                                                          // 7
		type: String                                                                                                     // 7
	},                                                                                                                // 7
	end: {                                                                                                            // 8
		type: String                                                                                                     // 8
	},                                                                                                                // 8
	fulfillmentStart: {                                                                                               // 9
		type: String,                                                                                                    // 9
		optional: true                                                                                                   // 9
	},                                                                                                                // 9
	fulfillmentEnd: {                                                                                                 // 10
		type: String,                                                                                                    // 10
		optional: true                                                                                                   // 10
	},                                                                                                                // 10
	discount: {                                                                                                       // 11
		type: Number,                                                                                                    // 11
		optional: true                                                                                                   // 11
	},                                                                                                                // 11
	overridePrice: {                                                                                                  // 12
		type: Number,                                                                                                    // 12
		optional: true,                                                                                                  // 12
		decimal: true                                                                                                    // 12
	},                                                                                                                // 12
	type: {                                                                                                           // 13
		type: String                                                                                                     // 13
	},                                                                                                                // 13
	promoCode: {                                                                                                      // 14
		type: String                                                                                                     // 14
	},                                                                                                                // 14
	sku: {                                                                                                            // 15
		type: String                                                                                                     // 15
	},                                                                                                                // 15
	usageLimit: {                                                                                                     // 16
		type: Number,                                                                                                    // 16
		optional: true                                                                                                   // 16
	},                                                                                                                // 16
	premiumAllowance: {                                                                                               // 18
		type: Number,                                                                                                    // 18
		optional: true                                                                                                   // 18
	},                                                                                                                // 18
	premiumCap: {                                                                                                     // 19
		type: Number,                                                                                                    // 19
		optional: true                                                                                                   // 19
	},                                                                                                                // 19
	mealPlan: {                                                                                                       // 21
		type: SimpleSchema.RegEx.Id,                                                                                     // 21
		optional: true,                                                                                                  // 21
		defaultValue: null                                                                                               // 21
	},                                                                                                                // 21
	portion: {                                                                                                        // 22
		type: SimpleSchema.RegEx.Id,                                                                                     // 22
		optional: true,                                                                                                  // 22
		defaultValue: null                                                                                               // 22
	},                                                                                                                // 22
	bundleType: {                                                                                                     // 23
		type: SimpleSchema.RegEx.Id,                                                                                     // 23
		optional: true,                                                                                                  // 23
		defaultValue: null                                                                                               // 23
	}                                                                                                                 // 23
}), {                                                                                                              // 4
	transform: true                                                                                                   // 24
});                                                                                                                // 24
                                                                                                                   //
if (Meteor.isServer) {                                                                                             // 26
	Meteor.publish('promotions', function () {                                                                        // 27
		return Promotions.find();                                                                                        // 28
	});                                                                                                               // 29
}                                                                                                                  // 30
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

}],"sides.js":["meteor/mongo",function(require,exports,module){

/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//                                                                                                                 //
// imports/api/sides.js                                                                                            //
//                                                                                                                 //
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
                                                                                                                   //
module.export({                                                                                                    // 1
  Sides: function () {                                                                                             // 1
    return Sides;                                                                                                  // 1
  }                                                                                                                // 1
});                                                                                                                // 1
var Mongo = void 0;                                                                                                // 1
module.import('meteor/mongo', {                                                                                    // 1
  "Mongo": function (v) {                                                                                          // 1
    Mongo = v;                                                                                                     // 1
  }                                                                                                                // 1
}, 0);                                                                                                             // 1
var Sides = new Mongo.Collection('sides', {                                                                        // 3
  idGeneration: 'MONGO'                                                                                            // 3
});                                                                                                                // 3
                                                                                                                   //
if (Meteor.isServer) {                                                                                             // 5
  Meteor.publish('sides', function () {                                                                            // 6
    return Sides.find();                                                                                           // 7
  });                                                                                                              // 8
}                                                                                                                  // 9
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

}],"stockCache.js":["meteor/mongo",function(require,exports,module){

/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//                                                                                                                 //
// imports/api/stockCache.js                                                                                       //
//                                                                                                                 //
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
                                                                                                                   //
module.export({                                                                                                    // 1
  StockCache: function () {                                                                                        // 1
    return StockCache;                                                                                             // 1
  }                                                                                                                // 1
});                                                                                                                // 1
var Mongo = void 0;                                                                                                // 1
module.import('meteor/mongo', {                                                                                    // 1
  "Mongo": function (v) {                                                                                          // 1
    Mongo = v;                                                                                                     // 1
  }                                                                                                                // 1
}, 0);                                                                                                             // 1
var StockCache = new Mongo.Collection('stockCache', {                                                              // 2
  idGeneration: 'MONGO'                                                                                            // 2
});                                                                                                                // 2
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

}],"surveys.js":["meteor/mongo",function(require,exports,module){

/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//                                                                                                                 //
// imports/api/surveys.js                                                                                          //
//                                                                                                                 //
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
                                                                                                                   //
module.export({                                                                                                    // 1
  Surveys: function () {                                                                                           // 1
    return Surveys;                                                                                                // 1
  }                                                                                                                // 1
});                                                                                                                // 1
var Mongo = void 0;                                                                                                // 1
module.import('meteor/mongo', {                                                                                    // 1
  "Mongo": function (v) {                                                                                          // 1
    Mongo = v;                                                                                                     // 1
  }                                                                                                                // 1
}, 0);                                                                                                             // 1
var Surveys = new Mongo.Collection('surveys', {                                                                    // 2
  idGeneration: 'MONGO'                                                                                            // 2
});                                                                                                                // 2
                                                                                                                   //
if (Meteor.isServer) {                                                                                             // 3
  Meteor.publish('surveys', function () {                                                                          // 4
    return Surveys.find();                                                                                         // 5
  });                                                                                                              // 6
}                                                                                                                  // 7
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

}],"timeSlots.js":["meteor/mongo",function(require,exports,module){

/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//                                                                                                                 //
// imports/api/timeSlots.js                                                                                        //
//                                                                                                                 //
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
                                                                                                                   //
module.export({                                                                                                    // 1
  TimeSlots: function () {                                                                                         // 1
    return TimeSlots;                                                                                              // 1
  }                                                                                                                // 1
});                                                                                                                // 1
var Mongo = void 0;                                                                                                // 1
module.import('meteor/mongo', {                                                                                    // 1
  "Mongo": function (v) {                                                                                          // 1
    Mongo = v;                                                                                                     // 1
  }                                                                                                                // 1
}, 0);                                                                                                             // 1
var TimeSlots = new Mongo.Collection('timeSlots', {                                                                // 3
  idGeneration: 'MONGO'                                                                                            // 3
});                                                                                                                // 3
                                                                                                                   //
if (Meteor.isServer) {                                                                                             // 5
  Meteor.publish('timeSlots', function () {                                                                        // 6
    return TimeSlots.find();                                                                                       // 7
  });                                                                                                              // 8
}                                                                                                                  // 9
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

}],"users.js":["meteor/mongo",function(require,exports,module){

/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//                                                                                                                 //
// imports/api/users.js                                                                                            //
//                                                                                                                 //
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
                                                                                                                   //
var Mongo = void 0;                                                                                                // 1
module.import('meteor/mongo', {                                                                                    // 1
  "Mongo": function (v) {                                                                                          // 1
    Mongo = v;                                                                                                     // 1
  }                                                                                                                // 1
}, 0);                                                                                                             // 1
                                                                                                                   //
// export const Users = new Mongo.Collection('users', {idGeneration: 'MONGO'});                                    // 3
if (Meteor.isServer) {                                                                                             // 5
  Meteor.publish('users', function () {                                                                            // 6
    return Meteor.users.find();                                                                                    // 7
  });                                                                                                              // 8
}                                                                                                                  // 9
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

}]},"StockCalculator.js":["babel-runtime/helpers/classCallCheck","./date","./api/mealStock","./helpers",function(require,exports,module){

/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//                                                                                                                 //
// imports/StockCalculator.js                                                                                      //
//                                                                                                                 //
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
                                                                                                                   //
var _classCallCheck2 = require("babel-runtime/helpers/classCallCheck");                                            //
                                                                                                                   //
var _classCallCheck3 = _interopRequireDefault(_classCallCheck2);                                                   //
                                                                                                                   //
function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }                  //
                                                                                                                   //
module.export({                                                                                                    // 1
  StockCalculator: function () {                                                                                   // 1
    return StockCalculator;                                                                                        // 1
  }                                                                                                                // 1
});                                                                                                                // 1
var addDays = void 0,                                                                                              // 1
    formatDate = void 0,                                                                                           // 1
    today = void 0;                                                                                                // 1
module.import('./date', {                                                                                          // 1
  "addDays": function (v) {                                                                                        // 1
    addDays = v;                                                                                                   // 1
  },                                                                                                               // 1
  "formatDate": function (v) {                                                                                     // 1
    formatDate = v;                                                                                                // 1
  },                                                                                                               // 1
  "today": function (v) {                                                                                          // 1
    today = v;                                                                                                     // 1
  }                                                                                                                // 1
}, 0);                                                                                                             // 1
var MealStock = void 0;                                                                                            // 1
module.import('./api/mealStock', {                                                                                 // 1
  "MealStock": function (v) {                                                                                      // 1
    MealStock = v;                                                                                                 // 1
  }                                                                                                                // 1
}, 1);                                                                                                             // 1
var mealSales = void 0;                                                                                            // 1
module.import('./helpers', {                                                                                       // 1
  "mealSales": function (v) {                                                                                      // 1
    mealSales = v;                                                                                                 // 1
  }                                                                                                                // 1
}, 2);                                                                                                             // 1
                                                                                                                   //
var StockCalculator = function () {                                                                                //
  StockCalculator.calculate = function () {                                                                        //
    function calculate(initial, date, mealId, api) {                                                               //
      var mealStock = api.findMealStock(mealId, date) || {}; //MealStock.findOne({meal:mealId, date:date}) || {};  // 7
                                                                                                                   //
      var sales = mealSales(mealId, date);                                                                         // 9
      var output = sales + (mealStock.nonSales || 0);                                                              // 10
      var stock = initial + (mealStock.adjustment || 0) - output + (mealStock.restock || 0);                       // 11
      return {                                                                                                     // 13
        initial: initial,                                                                                          // 14
        adjustment: mealStock.adjustment,                                                                          // 15
        sales: sales,                                                                                              // 16
        nonSales: mealStock.nonSales || 0,                                                                         // 17
        output: output,                                                                                            // 18
        restock: mealStock.restock || 0,                                                                           // 19
        stock: stock                                                                                               // 20
      };                                                                                                           // 13
    }                                                                                                              // 22
                                                                                                                   //
    return calculate;                                                                                              //
  }();                                                                                                             //
                                                                                                                   //
  function StockCalculator(mealId) {                                                                               // 24
    (0, _classCallCheck3.default)(this, StockCalculator);                                                          // 24
    this.today = formatDate(new Date());                                                                           // 25
    this.firstDate = '2016-08-29';                                                                                 // 26
    this.mealId = mealId;                                                                                          // 27
    this._calcCache = {};                                                                                          // 28
    this._mealStockCache = {};                                                                                     // 29
    this._cache = {};                                                                                              // 30
  }                                                                                                                // 31
                                                                                                                   //
  StockCalculator.prototype.cachedValues = function () {                                                           //
    function cachedValues(date) {                                                                                  //
      return this._calcCache[date];                                                                                // 34
    }                                                                                                              // 35
                                                                                                                   //
    return cachedValues;                                                                                           //
  }();                                                                                                             //
                                                                                                                   //
  StockCalculator.prototype.initCache = function () {                                                              //
    function initCache(date) {}                                                                                    //
                                                                                                                   //
    return initCache;                                                                                              //
  }();                                                                                                             //
                                                                                                                   //
  StockCalculator.prototype.findMealStock = function () {                                                          //
    function findMealStock(date) {                                                                                 //
      if (!this._mealStockCache[date]) {                                                                           // 42
        this._mealStockCache[date] = MealStock.findOne({                                                           // 43
          meal: this.mealId,                                                                                       // 43
          date: date                                                                                               // 43
        });                                                                                                        // 43
      }                                                                                                            // 44
                                                                                                                   //
      return this._mealStockCache[date];                                                                           // 45
    }                                                                                                              // 46
                                                                                                                   //
    return findMealStock;                                                                                          //
  }();                                                                                                             //
                                                                                                                   //
  StockCalculator.prototype.forDate = function () {                                                                //
    function forDate(date) {                                                                                       //
      date = typeof date == 'string' ? date : formatDate(date);                                                    // 49
                                                                                                                   //
      if (!this._cache[date]) {                                                                                    // 51
        this._cache[date] = this._forDate(date);                                                                   // 52
      }                                                                                                            // 53
                                                                                                                   //
      return this._cache[date];                                                                                    // 55
    }                                                                                                              // 56
                                                                                                                   //
    return forDate;                                                                                                //
  }();                                                                                                             //
                                                                                                                   //
  StockCalculator.prototype._forDate = function () {                                                               //
    function _forDate(date) {                                                                                      //
      var _this = this;                                                                                            // 58
                                                                                                                   //
      if (date < formatDate(today())) {                                                                            // 59
        return this.findMealStock(date);                                                                           // 60
      }                                                                                                            // 61
                                                                                                                   //
      var firstDate = formatDate(today());                                                                         // 62
      var currentDate = firstDate;                                                                                 // 63
      var prevDate;                                                                                                // 64
                                                                                                                   //
      while (currentDate <= date) {                                                                                // 65
        if (!this._calcCache[currentDate]) {                                                                       // 66
          var mealStock = this.findMealStock(currentDate) || {};                                                   // 67
          var initial = currentDate == firstDate ? mealStock.initial : this._calcCache[prevDate].stock || 0;       // 68
          this._calcCache[currentDate] = StockCalculator.calculate(initial, currentDate, this.mealId, {            // 69
            findMealStock: function (mealId, date) {                                                               // 70
              return _this.findMealStock(date);                                                                    // 70
            }                                                                                                      // 70
          });                                                                                                      // 69
        }                                                                                                          // 72
                                                                                                                   //
        prevDate = currentDate;                                                                                    // 73
        currentDate = formatDate(addDays(currentDate, 1));                                                         // 74
      }                                                                                                            // 75
                                                                                                                   //
      return this._calcCache[date];                                                                                // 76
    }                                                                                                              // 77
                                                                                                                   //
    return _forDate;                                                                                               //
  }();                                                                                                             //
                                                                                                                   //
  return StockCalculator;                                                                                          //
}();                                                                                                               //
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

}],"date.js":function(require,exports){

/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//                                                                                                                 //
// imports/date.js                                                                                                 //
//                                                                                                                 //
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
                                                                                                                   //
function today() {                                                                                                 // 1
    var now = new Date();                                                                                          //
    return createDay(now.getFullYear(), now.getMonth(), now.getDate());                                            //
}                                                                                                                  // 4
exports.today = today;                                                                                             // 1
function createDay(year, month, day) {                                                                             // 6
    return new Date(year, month, day, 0, 0, 0);                                                                    //
}                                                                                                                  // 8
exports.createDay = createDay;                                                                                     // 6
function addDays(date, days) {                                                                                     // 9
    date = convertToDate(date);                                                                                    //
    return createDay(date.getFullYear(), date.getMonth(), date.getDate() + days);                                  //
}                                                                                                                  // 12
exports.addDays = addDays;                                                                                         // 9
function firstDayOfMonth(month) {                                                                                  // 13
    return createDay(month.getFullYear(), month.getMonth(), 1);                                                    //
}                                                                                                                  // 15
exports.firstDayOfMonth = firstDayOfMonth;                                                                         // 13
function calendarDaysForMonth(month, square) {                                                                     // 16
    if (square === void 0) { square = true; }                                                                      //
    var days = [];                                                                                                 //
    var firstDay = firstDayOfMonth(month);                                                                         //
    if (square) {                                                                                                  //
        for (var i = 0; i < 7 - (7 - firstDay.getDay()); ++i) {                                                    //
            days.unshift(addDays(firstDay, -(i + 1)));                                                             //
        }                                                                                                          //
    }                                                                                                              //
    var day = firstDay;                                                                                            //
    while (day.getMonth() == month.getMonth() || day.getMonth() > month.getMonth() && days.length % 7 && square) {
        days.push(day);                                                                                            //
        day = addDays(day, 1);                                                                                     //
    }                                                                                                              //
    return days;                                                                                                   //
}                                                                                                                  // 30
exports.calendarDaysForMonth = calendarDaysForMonth;                                                               // 16
function convertToDate(date) {                                                                                     // 32
    if (typeof date == 'string') {                                                                                 //
        return new Date(Date.parse(date + ' 00:00'));                                                              //
    }                                                                                                              //
    else {                                                                                                         //
        return date;                                                                                               //
    }                                                                                                              //
}                                                                                                                  // 39
exports.convertToDate = convertToDate;                                                                             // 32
function formatDate(date) {                                                                                        // 41
    if (date) {                                                                                                    //
        return date.getFullYear() + '-' + _.padStart(date.getMonth() + 1, 2, '0') + '-' + _.padStart(date.getDate(), 2, '0');
    }                                                                                                              //
}                                                                                                                  // 45
exports.formatDate = formatDate;                                                                                   // 41
function weeksForMonth(month) {                                                                                    // 47
    var days = calendarDaysForMonth(month);                                                                        //
    var weeks = [];                                                                                                //
    for (var i = 0; i < days.length / 7; ++i) {                                                                    //
        weeks.push(days.slice(i * 7, i * 7 + 7));                                                                  //
    }                                                                                                              //
    return weeks;                                                                                                  //
}                                                                                                                  // 54
exports.weeksForMonth = weeksForMonth;                                                                             // 47
//# sourceMappingURL=date.js.map                                                                                   //
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

},"helpers.js":["./api/orders",function(require,exports,module){

/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//                                                                                                                 //
// imports/helpers.js                                                                                              //
//                                                                                                                 //
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
                                                                                                                   //
module.export({                                                                                                    // 1
  formatDate: function () {                                                                                        // 1
    return formatDate;                                                                                             // 1
  },                                                                                                               // 1
  amPm: function () {                                                                                              // 1
    return amPm;                                                                                                   // 1
  },                                                                                                               // 1
  timeDisplay: function () {                                                                                       // 1
    return timeDisplay;                                                                                            // 1
  },                                                                                                               // 1
  mealSales: function () {                                                                                         // 1
    return mealSales;                                                                                              // 1
  },                                                                                                               // 1
  monthName: function () {                                                                                         // 1
    return monthName;                                                                                              // 1
  }                                                                                                                // 1
});                                                                                                                // 1
var Orders = void 0;                                                                                               // 1
module.import('./api/orders', {                                                                                    // 1
  "Orders": function (v) {                                                                                         // 1
    Orders = v;                                                                                                    // 1
  }                                                                                                                // 1
}, 0);                                                                                                             // 1
_ = lodash;                                                                                                        // 1
                                                                                                                   //
function formatDate(date) {                                                                                        // 5
  if (date) {                                                                                                      // 6
    return date.getFullYear() + '-' + _.padStart(date.getMonth() + 1, 2, '0') + '-' + _.padStart(date.getDate(), 2, '0');
  }                                                                                                                // 8
}                                                                                                                  // 9
                                                                                                                   //
function amPm(time) {                                                                                              // 11
  var appendSuffix = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : true;                     // 11
  var date = new Date(Date.parse('Jan 1 ' + time));                                                                // 12
  var hours = date.getHours();                                                                                     // 13
  var suffix = hours >= 12 ? "pm" : "am";                                                                          // 14
  hours = (hours + 11) % 12 + 1;                                                                                   // 15
  return hours + (appendSuffix ? '' + suffix : '');                                                                // 17
}                                                                                                                  // 18
                                                                                                                   //
function timeDisplay(time) {                                                                                       // 20
  if (time) {                                                                                                      // 21
    return amPm(time.start, false) + '-' + amPm(time.end);                                                         // 22
  }                                                                                                                // 23
}                                                                                                                  // 24
                                                                                                                   //
function mealSales(mealId, date) {                                                                                 // 26
  var orders = Orders.find({                                                                                       // 27
    'deliveryOptions.date': date,                                                                                  // 27
    state: 'completed',                                                                                            // 27
    bundles: {                                                                                                     // 27
      $elemMatch: {                                                                                                // 27
        mealSelections: {                                                                                          // 27
          $elemMatch: {                                                                                            // 27
            'meal._id': mealId                                                                                     // 27
          }                                                                                                        // 27
        }                                                                                                          // 27
      }                                                                                                            // 27
    }                                                                                                              // 27
  }).fetch();                                                                                                      // 27
  var sales = 0;                                                                                                   // 28
                                                                                                                   //
  for (var _iterator = orders, _isArray = Array.isArray(_iterator), _i = 0, _iterator = _isArray ? _iterator : _iterator[Symbol.iterator]();;) {
    var _ref;                                                                                                      // 29
                                                                                                                   //
    if (_isArray) {                                                                                                // 29
      if (_i >= _iterator.length) break;                                                                           // 29
      _ref = _iterator[_i++];                                                                                      // 29
    } else {                                                                                                       // 29
      _i = _iterator.next();                                                                                       // 29
      if (_i.done) break;                                                                                          // 29
      _ref = _i.value;                                                                                             // 29
    }                                                                                                              // 29
                                                                                                                   //
    var order = _ref;                                                                                              // 29
                                                                                                                   //
    for (var _iterator2 = order.bundles, _isArray2 = Array.isArray(_iterator2), _i2 = 0, _iterator2 = _isArray2 ? _iterator2 : _iterator2[Symbol.iterator]();;) {
      var _ref2;                                                                                                   // 30
                                                                                                                   //
      if (_isArray2) {                                                                                             // 30
        if (_i2 >= _iterator2.length) break;                                                                       // 30
        _ref2 = _iterator2[_i2++];                                                                                 // 30
      } else {                                                                                                     // 30
        _i2 = _iterator2.next();                                                                                   // 30
        if (_i2.done) break;                                                                                       // 30
        _ref2 = _i2.value;                                                                                         // 30
      }                                                                                                            // 30
                                                                                                                   //
      var bundle = _ref2;                                                                                          // 30
                                                                                                                   //
      for (var _iterator3 = bundle.mealSelections, _isArray3 = Array.isArray(_iterator3), _i3 = 0, _iterator3 = _isArray3 ? _iterator3 : _iterator3[Symbol.iterator]();;) {
        var _ref3;                                                                                                 // 31
                                                                                                                   //
        if (_isArray3) {                                                                                           // 31
          if (_i3 >= _iterator3.length) break;                                                                     // 31
          _ref3 = _iterator3[_i3++];                                                                               // 31
        } else {                                                                                                   // 31
          _i3 = _iterator3.next();                                                                                 // 31
          if (_i3.done) break;                                                                                     // 31
          _ref3 = _i3.value;                                                                                       // 31
        }                                                                                                          // 31
                                                                                                                   //
        var mealSelection = _ref3;                                                                                 // 31
                                                                                                                   //
        if (mealSelection.meal._id._str == mealId._str) {                                                          // 32
          sales += mealSelection.quantity;                                                                         // 33
          break;                                                                                                   // 34
        }                                                                                                          // 35
      }                                                                                                            // 36
    }                                                                                                              // 37
  }                                                                                                                // 38
                                                                                                                   //
  return sales;                                                                                                    // 39
}                                                                                                                  // 40
                                                                                                                   //
function monthName(month) {                                                                                        // 43
  switch (month + 1) {                                                                                             // 44
    case 1:                                                                                                        // 45
      return 'January';                                                                                            // 45
                                                                                                                   //
    case 2:                                                                                                        // 46
      return 'February';                                                                                           // 46
                                                                                                                   //
    case 3:                                                                                                        // 47
      return 'March';                                                                                              // 47
                                                                                                                   //
    case 4:                                                                                                        // 48
      return 'April';                                                                                              // 48
                                                                                                                   //
    case 5:                                                                                                        // 49
      return 'May';                                                                                                // 49
                                                                                                                   //
    case 6:                                                                                                        // 50
      return 'June';                                                                                               // 50
                                                                                                                   //
    case 7:                                                                                                        // 51
      return 'July';                                                                                               // 51
                                                                                                                   //
    case 8:                                                                                                        // 52
      return 'August';                                                                                             // 52
                                                                                                                   //
    case 9:                                                                                                        // 53
      return 'September';                                                                                          // 53
                                                                                                                   //
    case 10:                                                                                                       // 54
      return 'October';                                                                                            // 54
                                                                                                                   //
    case 11:                                                                                                       // 55
      return 'November';                                                                                           // 55
                                                                                                                   //
    case 12:                                                                                                       // 56
      return 'December';                                                                                           // 56
  }                                                                                                                // 44
}                                                                                                                  // 58
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

}]},"server":{"main.js":["meteor/meteor","../imports/api/users","../imports/helpers","../imports/date","../imports/StockCalculator","meteor/http","../imports/api/orders","../imports/api/portions","../imports/api/mealPlans","../imports/api/bundleTypes","../imports/api/meals","../imports/api/ingredients","../imports/api/timeSlots","../imports/api/blocks","../imports/api/locationSurcharges","../imports/api/fulfillmentSettings","../imports/api/promotions","../imports/api/mealStock","../imports/api/sides","../imports/api/surveys","../imports/api/addOns","../imports/api/partners","../imports/api/anomalyTriggers","../imports/api/deleted","../imports/api/stockCache",function(require,exports,module){

/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//                                                                                                                 //
// server/main.js                                                                                                  //
//                                                                                                                 //
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
                                                                                                                   //
var Meteor = void 0;                                                                                               // 1
module.import('meteor/meteor', {                                                                                   // 1
	"Meteor": function (v) {                                                                                          // 1
		Meteor = v;                                                                                                      // 1
	}                                                                                                                 // 1
}, 0);                                                                                                             // 1
module.import('../imports/api/users');                                                                             // 1
var formatDate = void 0,                                                                                           // 1
    mealSales = void 0;                                                                                            // 1
module.import('../imports/helpers', {                                                                              // 1
	"formatDate": function (v) {                                                                                      // 1
		formatDate = v;                                                                                                  // 1
	},                                                                                                                // 1
	"mealSales": function (v) {                                                                                       // 1
		mealSales = v;                                                                                                   // 1
	}                                                                                                                 // 1
}, 2);                                                                                                             // 1
var addDays = void 0,                                                                                              // 1
    today = void 0;                                                                                                // 1
module.import('../imports/date', {                                                                                 // 1
	"addDays": function (v) {                                                                                         // 1
		addDays = v;                                                                                                     // 1
	},                                                                                                                // 1
	"today": function (v) {                                                                                           // 1
		today = v;                                                                                                       // 1
	}                                                                                                                 // 1
}, 3);                                                                                                             // 1
var StockCalculator = void 0;                                                                                      // 1
module.import('../imports/StockCalculator', {                                                                      // 1
	"StockCalculator": function (v) {                                                                                 // 1
		StockCalculator = v;                                                                                             // 1
	}                                                                                                                 // 1
}, 4);                                                                                                             // 1
var HTTP = void 0;                                                                                                 // 1
module.import('meteor/http', {                                                                                     // 1
	"HTTP": function (v) {                                                                                            // 1
		HTTP = v;                                                                                                        // 1
	}                                                                                                                 // 1
}, 5);                                                                                                             // 1
var Orders = void 0;                                                                                               // 1
module.import('../imports/api/orders', {                                                                           // 1
	"Orders": function (v) {                                                                                          // 1
		Orders = v;                                                                                                      // 1
	}                                                                                                                 // 1
}, 6);                                                                                                             // 1
var Portions = void 0;                                                                                             // 1
module.import('../imports/api/portions', {                                                                         // 1
	"Portions": function (v) {                                                                                        // 1
		Portions = v;                                                                                                    // 1
	}                                                                                                                 // 1
}, 7);                                                                                                             // 1
var MealPlans = void 0;                                                                                            // 1
module.import('../imports/api/mealPlans', {                                                                        // 1
	"MealPlans": function (v) {                                                                                       // 1
		MealPlans = v;                                                                                                   // 1
	}                                                                                                                 // 1
}, 8);                                                                                                             // 1
var BundleTypes = void 0;                                                                                          // 1
module.import('../imports/api/bundleTypes', {                                                                      // 1
	"BundleTypes": function (v) {                                                                                     // 1
		BundleTypes = v;                                                                                                 // 1
	}                                                                                                                 // 1
}, 9);                                                                                                             // 1
var Meals = void 0;                                                                                                // 1
module.import('../imports/api/meals', {                                                                            // 1
	"Meals": function (v) {                                                                                           // 1
		Meals = v;                                                                                                       // 1
	}                                                                                                                 // 1
}, 10);                                                                                                            // 1
var Ingredients = void 0;                                                                                          // 1
module.import('../imports/api/ingredients', {                                                                      // 1
	"Ingredients": function (v) {                                                                                     // 1
		Ingredients = v;                                                                                                 // 1
	}                                                                                                                 // 1
}, 11);                                                                                                            // 1
var TimeSlots = void 0;                                                                                            // 1
module.import('../imports/api/timeSlots', {                                                                        // 1
	"TimeSlots": function (v) {                                                                                       // 1
		TimeSlots = v;                                                                                                   // 1
	}                                                                                                                 // 1
}, 12);                                                                                                            // 1
var Blocks = void 0;                                                                                               // 1
module.import('../imports/api/blocks', {                                                                           // 1
	"Blocks": function (v) {                                                                                          // 1
		Blocks = v;                                                                                                      // 1
	}                                                                                                                 // 1
}, 13);                                                                                                            // 1
var LocationSurcharges = void 0;                                                                                   // 1
module.import('../imports/api/locationSurcharges', {                                                               // 1
	"LocationSurcharges": function (v) {                                                                              // 1
		LocationSurcharges = v;                                                                                          // 1
	}                                                                                                                 // 1
}, 14);                                                                                                            // 1
var FulfillmentSettings = void 0;                                                                                  // 1
module.import('../imports/api/fulfillmentSettings', {                                                              // 1
	"FulfillmentSettings": function (v) {                                                                             // 1
		FulfillmentSettings = v;                                                                                         // 1
	}                                                                                                                 // 1
}, 15);                                                                                                            // 1
var Promotions = void 0;                                                                                           // 1
module.import('../imports/api/promotions', {                                                                       // 1
	"Promotions": function (v) {                                                                                      // 1
		Promotions = v;                                                                                                  // 1
	}                                                                                                                 // 1
}, 16);                                                                                                            // 1
var MealStock = void 0;                                                                                            // 1
module.import('../imports/api/mealStock', {                                                                        // 1
	"MealStock": function (v) {                                                                                       // 1
		MealStock = v;                                                                                                   // 1
	}                                                                                                                 // 1
}, 17);                                                                                                            // 1
var Sides = void 0;                                                                                                // 1
module.import('../imports/api/sides', {                                                                            // 1
	"Sides": function (v) {                                                                                           // 1
		Sides = v;                                                                                                       // 1
	}                                                                                                                 // 1
}, 18);                                                                                                            // 1
var Surveys = void 0;                                                                                              // 1
module.import('../imports/api/surveys', {                                                                          // 1
	"Surveys": function (v) {                                                                                         // 1
		Surveys = v;                                                                                                     // 1
	}                                                                                                                 // 1
}, 19);                                                                                                            // 1
var AddOns = void 0;                                                                                               // 1
module.import('../imports/api/addOns', {                                                                           // 1
	"AddOns": function (v) {                                                                                          // 1
		AddOns = v;                                                                                                      // 1
	}                                                                                                                 // 1
}, 20);                                                                                                            // 1
var Partners = void 0;                                                                                             // 1
module.import('../imports/api/partners', {                                                                         // 1
	"Partners": function (v) {                                                                                        // 1
		Partners = v;                                                                                                    // 1
	}                                                                                                                 // 1
}, 21);                                                                                                            // 1
var AnomalyTriggers = void 0;                                                                                      // 1
module.import('../imports/api/anomalyTriggers', {                                                                  // 1
	"AnomalyTriggers": function (v) {                                                                                 // 1
		AnomalyTriggers = v;                                                                                             // 1
	}                                                                                                                 // 1
}, 22);                                                                                                            // 1
var Deleted = void 0;                                                                                              // 1
module.import('../imports/api/deleted', {                                                                          // 1
	"Deleted": function (v) {                                                                                         // 1
		Deleted = v;                                                                                                     // 1
	}                                                                                                                 // 1
}, 23);                                                                                                            // 1
var StockCache = void 0;                                                                                           // 1
module.import('../imports/api/stockCache', {                                                                       // 1
	"StockCache": function (v) {                                                                                      // 1
		StockCache = v;                                                                                                  // 1
	}                                                                                                                 // 1
}, 24);                                                                                                            // 1
_ = lodash;                                                                                                        // 27
var api = new Restivus({// useDefaultAuth: true,                                                                   // 29
	// auth: {                                                                                                        // 31
	// 	token: 'auth.apiKey'                                                                                          // 32
	// }                                                                                                              // 33
}); // api.addRoute('compute-stock', {                                                                             // 29
// 	get: function() {                                                                                              // 37
// 		computeStock(new Date(Date.parse(this.queryParams.date)));                                                    // 38
// 		return '';                                                                                                    // 39
// 	}                                                                                                              // 40
// });                                                                                                             // 41
                                                                                                                   //
api.addRoute('export-inventory-status', {                                                                          // 43
	get: function () {                                                                                                // 44
		console.log(this.queryParams);                                                                                   // 45
		var filter = this.queryParams.filter;                                                                            // 46
		var query = {};                                                                                                  // 47
                                                                                                                   //
		if (filter) {                                                                                                    // 48
			var mealPlans = MealPlans.find({                                                                                // 49
				name: new RegExp(filter, 'i')                                                                                  // 49
			}).fetch().map(function (mealPlan) {                                                                            // 49
				return mealPlan._id;                                                                                           // 49
			});                                                                                                             // 49
			var portions = Portions.find({                                                                                  // 50
				name: new RegExp(filter, 'i')                                                                                  // 50
			}).fetch().map(function (portion) {                                                                             // 50
				return portion._id;                                                                                            // 50
			});                                                                                                             // 50
			query.$or = [{                                                                                                  // 51
				name: new RegExp(filter, 'i')                                                                                  // 51
			}, {                                                                                                            // 51
				sku: new RegExp(filter, 'i')                                                                                   // 51
			}, {                                                                                                            // 51
				mealPlan: {                                                                                                    // 51
					$in: mealPlans                                                                                                // 51
				}                                                                                                              // 51
			}, {                                                                                                            // 51
				portion: {                                                                                                     // 51
					$in: portions                                                                                                 // 51
				}                                                                                                              // 51
			}];                                                                                                             // 51
		}                                                                                                                // 52
                                                                                                                   //
		var meals = Meals.find(query).fetch();                                                                           // 53
		var rows = [];                                                                                                   // 54
                                                                                                                   //
		for (var _iterator = meals, _isArray = Array.isArray(_iterator), _i = 0, _iterator = _isArray ? _iterator : _iterator[Symbol.iterator]();;) {
			var _ref;                                                                                                       // 55
                                                                                                                   //
			if (_isArray) {                                                                                                 // 55
				if (_i >= _iterator.length) break;                                                                             // 55
				_ref = _iterator[_i++];                                                                                        // 55
			} else {                                                                                                        // 55
				_i = _iterator.next();                                                                                         // 55
				if (_i.done) break;                                                                                            // 55
				_ref = _i.value;                                                                                               // 55
			}                                                                                                               // 55
                                                                                                                   //
			var meal = _ref;                                                                                                // 55
			var stockCalculator = new StockCalculator(meal._id);                                                            // 56
			var values = stockCalculator.forDate(this.queryParams.date);                                                    // 57
			rows.push({                                                                                                     // 58
				'Product Name': meal.name,                                                                                     // 59
				'Meal Plan': MealPlans.findOne(meal.mealPlan).name,                                                            // 60
				'Portion': Portions.findOne(meal.portion).name,                                                                // 61
				'SKU': meal.sku,                                                                                               // 62
				'Initial': values.initial,                                                                                     // 63
				'Sales': values.sales,                                                                                         // 64
				'Non-sales': values.nonSales,                                                                                  // 65
				'Output': values.output,                                                                                       // 66
				'Restock': values.restock,                                                                                     // 67
				'Stock': values.stock                                                                                          // 68
			});                                                                                                             // 58
		}                                                                                                                // 70
                                                                                                                   //
		this.response.setHeader('Content-type', 'text/csv');                                                             // 71
		this.response.setHeader('Content-Disposition', 'attachment; filename=inventory-status.' + this.queryParams.date + '.csv');
		this.response.write('"' + _.keys(rows[0] || {}).join('","') + '"\n');                                            // 73
                                                                                                                   //
		for (var _iterator2 = rows, _isArray2 = Array.isArray(_iterator2), _i2 = 0, _iterator2 = _isArray2 ? _iterator2 : _iterator2[Symbol.iterator]();;) {
			var _ref2;                                                                                                      // 74
                                                                                                                   //
			if (_isArray2) {                                                                                                // 74
				if (_i2 >= _iterator2.length) break;                                                                           // 74
				_ref2 = _iterator2[_i2++];                                                                                     // 74
			} else {                                                                                                        // 74
				_i2 = _iterator2.next();                                                                                       // 74
				if (_i2.done) break;                                                                                           // 74
				_ref2 = _i2.value;                                                                                             // 74
			}                                                                                                               // 74
                                                                                                                   //
			var row = _ref2;                                                                                                // 74
			this.response.write('"' + _.values(row).join('","') + '"\n');                                                   // 75
		}                                                                                                                // 76
                                                                                                                   //
		this.done();                                                                                                     // 77
	}                                                                                                                 // 78
});                                                                                                                // 43
api.addRoute('migrate-meal-stock', {                                                                               // 81
	get: function () {                                                                                                // 82
		var mealStocks = MealStock.find({                                                                                // 83
			date: '2016-08-29',                                                                                             // 83
			initial: null                                                                                                   // 83
		}).fetch();                                                                                                      // 83
                                                                                                                   //
		for (var _iterator3 = mealStocks, _isArray3 = Array.isArray(_iterator3), _i3 = 0, _iterator3 = _isArray3 ? _iterator3 : _iterator3[Symbol.iterator]();;) {
			var _ref3;                                                                                                      // 84
                                                                                                                   //
			if (_isArray3) {                                                                                                // 84
				if (_i3 >= _iterator3.length) break;                                                                           // 84
				_ref3 = _iterator3[_i3++];                                                                                     // 84
			} else {                                                                                                        // 84
				_i3 = _iterator3.next();                                                                                       // 84
				if (_i3.done) break;                                                                                           // 84
				_ref3 = _i3.value;                                                                                             // 84
			}                                                                                                               // 84
                                                                                                                   //
			var mealStock = _ref3;                                                                                          // 84
			MealStock.update(mealStock._id, {                                                                               // 85
				$set: {                                                                                                        // 85
					initial: mealStock.stock                                                                                      // 85
				}                                                                                                              // 85
			});                                                                                                             // 85
		}                                                                                                                // 86
	}                                                                                                                 // 87
});                                                                                                                // 81
                                                                                                                   //
function recordStock() {                                                                                           // 90
	var _today = formatDate(today());                                                                                 // 91
                                                                                                                   //
	var yesterday = formatDate(addDays(today(), -1));                                                                 // 92
	var meals = Meals.find().fetch();                                                                                 // 93
                                                                                                                   //
	for (var _iterator4 = meals, _isArray4 = Array.isArray(_iterator4), _i4 = 0, _iterator4 = _isArray4 ? _iterator4 : _iterator4[Symbol.iterator]();;) {
		var _ref4;                                                                                                       // 94
                                                                                                                   //
		if (_isArray4) {                                                                                                 // 94
			if (_i4 >= _iterator4.length) break;                                                                            // 94
			_ref4 = _iterator4[_i4++];                                                                                      // 94
		} else {                                                                                                         // 94
			_i4 = _iterator4.next();                                                                                        // 94
			if (_i4.done) break;                                                                                            // 94
			_ref4 = _i4.value;                                                                                              // 94
		}                                                                                                                // 94
                                                                                                                   //
		var meal = _ref4;                                                                                                // 94
		var yesterdaysStock = MealStock.findOne({                                                                        // 95
			date: yesterday,                                                                                                // 95
			meal: meal._id                                                                                                  // 95
		});                                                                                                              // 95
		var values = StockCalculator.calculate(yesterdaysStock.initial, yesterday, meal._id, {                           // 96
			findMealStock: function (mealId, date) {                                                                        // 97
				return MealStock.findOne({                                                                                     // 98
					meal: mealId,                                                                                                 // 98
					date: date                                                                                                    // 98
				});                                                                                                            // 98
			}                                                                                                               // 99
		}); // console.log(values);                                                                                      // 96
                                                                                                                   //
		MealStock.update(yesterdaysStock._id, {                                                                          // 103
			$set: values                                                                                                    // 103
		});                                                                                                              // 103
                                                                                                                   //
		if (!MealStock.findOne({                                                                                         // 105
			date: _today,                                                                                                   // 105
			meal: meal._id                                                                                                  // 105
		})) {                                                                                                            // 105
			MealStock.insert(_.assign({                                                                                     // 106
				date: _today,                                                                                                  // 106
				meal: meal._id                                                                                                 // 106
			}, {                                                                                                            // 106
				initial: values.stock                                                                                          // 106
			}));                                                                                                            // 106
		} else {                                                                                                         // 107
			MealStock.update({                                                                                              // 109
				date: _today,                                                                                                  // 109
				meal: meal._id                                                                                                 // 109
			}, {                                                                                                            // 109
				$set: {                                                                                                        // 109
					initial: values.stock                                                                                         // 109
				}                                                                                                              // 109
			});                                                                                                             // 109
		}                                                                                                                // 110
	}                                                                                                                 // 111
}                                                                                                                  // 112
                                                                                                                   //
api.addRoute('record-stock', {                                                                                     // 114
	get: function () {                                                                                                // 115
		recordStock();                                                                                                   // 116
		return '';                                                                                                       // 117
	}                                                                                                                 // 118
});                                                                                                                // 114
api.addRoute('generate-stock-cache', {                                                                             // 121
	get: function () {                                                                                                // 122
		var meals = Meals.find().fetch();                                                                                // 123
		var firstDate = '2016-08-29';                                                                                    // 124
                                                                                                                   //
		for (var _iterator5 = meals, _isArray5 = Array.isArray(_iterator5), _i5 = 0, _iterator5 = _isArray5 ? _iterator5 : _iterator5[Symbol.iterator]();;) {
			var _ref5;                                                                                                      // 125
                                                                                                                   //
			if (_isArray5) {                                                                                                // 125
				if (_i5 >= _iterator5.length) break;                                                                           // 125
				_ref5 = _iterator5[_i5++];                                                                                     // 125
			} else {                                                                                                        // 125
				_i5 = _iterator5.next();                                                                                       // 125
				if (_i5.done) break;                                                                                           // 125
				_ref5 = _i5.value;                                                                                             // 125
			}                                                                                                               // 125
                                                                                                                   //
			var meal = _ref5;                                                                                               // 125
			var date = firstDate;                                                                                           // 126
			var lastDate = formatDate(today());                                                                             // 127
			var prevDate, prevValues;                                                                                       // 128
                                                                                                                   //
			do {                                                                                                            // 129
				var values = StockCalculator.calculate(date == firstDate ? (MealStock.findOne({                                // 130
					meal: meal._id,                                                                                               // 130
					date: date                                                                                                    // 130
				}) || {                                                                                                        // 130
					initial: 0                                                                                                    // 130
				}).initial : prevValues.stock, date, meal._id, {                                                               // 130
					findMealStock: function (mealId, date) {                                                                      // 131
						return MealStock.findOne({                                                                                   // 132
							meal: mealId,                                                                                               // 132
							date: date                                                                                                  // 132
						});                                                                                                          // 132
					}                                                                                                             // 133
				});                                                                                                            // 130
                                                                                                                   //
				if (!MealStock.findOne({                                                                                       // 135
					date: date,                                                                                                   // 135
					meal: meal._id                                                                                                // 135
				})) {                                                                                                          // 135
					MealStock.insert(_.assign({                                                                                   // 136
						date: date,                                                                                                  // 136
						meal: meal._id                                                                                               // 136
					}, values));                                                                                                  // 136
				} else {                                                                                                       // 137
					MealStock.update({                                                                                            // 139
						date: date,                                                                                                  // 139
						meal: meal._id                                                                                               // 139
					}, {                                                                                                          // 139
						$set: values                                                                                                 // 139
					});                                                                                                           // 139
				}                                                                                                              // 140
                                                                                                                   //
				prevDate = date;                                                                                               // 141
				prevValues = values;                                                                                           // 142
				date = formatDate(addDays(date, 1));                                                                           // 143
			} while (date != lastDate);                                                                                     // 144
		}                                                                                                                // 145
                                                                                                                   //
		return '';                                                                                                       // 146
	}                                                                                                                 // 147
});                                                                                                                // 121
api.addRoute('stock', {                                                                                            // 150
	get: function () {                                                                                                // 151
		var meals = Meals.find().fetch();                                                                                // 152
		var yesterday = addDays(today(), -1);                                                                            // 153
		var stockCache = StockCache.findOne({});                                                                         // 154
		var yesterdaysStock;                                                                                             // 155
                                                                                                                   //
		if (!stockCache || stockCache.timestamp.valueOf() != yesterday.valueOf()) {                                      // 156
			yesterdaysStock = {};                                                                                           // 157
                                                                                                                   //
			for (var _iterator6 = meals, _isArray6 = Array.isArray(_iterator6), _i6 = 0, _iterator6 = _isArray6 ? _iterator6 : _iterator6[Symbol.iterator]();;) {
				var _ref6;                                                                                                     // 158
                                                                                                                   //
				if (_isArray6) {                                                                                               // 158
					if (_i6 >= _iterator6.length) break;                                                                          // 158
					_ref6 = _iterator6[_i6++];                                                                                    // 158
				} else {                                                                                                       // 158
					_i6 = _iterator6.next();                                                                                      // 158
					if (_i6.done) break;                                                                                          // 158
					_ref6 = _i6.value;                                                                                            // 158
				}                                                                                                              // 158
                                                                                                                   //
				var meal = _ref6;                                                                                              // 158
				var stockCalculator = new StockCalculator(meal._id);                                                           // 159
				yesterdaysStock[meal._id._str] = (stockCalculator.forDate(yesterday) || {                                      // 160
					stock: 0                                                                                                      // 160
				}).stock;                                                                                                      // 160
			}                                                                                                               // 161
                                                                                                                   //
			if (stockCache) {                                                                                               // 162
				StockCache.update({                                                                                            // 163
					_id: stockCache._id                                                                                           // 163
				}, {                                                                                                           // 163
					$set: {                                                                                                       // 163
						timestamp: yesterday,                                                                                        // 163
						stock: yesterdaysStock                                                                                       // 163
					}                                                                                                             // 163
				});                                                                                                            // 163
			} else {                                                                                                        // 164
				StockCache.insert({                                                                                            // 166
					timestamp: yesterday,                                                                                         // 166
					stock: yesterdaysStock                                                                                        // 166
				});                                                                                                            // 166
			}                                                                                                               // 167
		} else {                                                                                                         // 168
			yesterdaysStock = stockCache.stock;                                                                             // 170
		}                                                                                                                // 171
                                                                                                                   //
		var stock = {};                                                                                                  // 172
                                                                                                                   //
		for (var _iterator7 = meals, _isArray7 = Array.isArray(_iterator7), _i7 = 0, _iterator7 = _isArray7 ? _iterator7 : _iterator7[Symbol.iterator]();;) {
			var _ref7;                                                                                                      // 173
                                                                                                                   //
			if (_isArray7) {                                                                                                // 173
				if (_i7 >= _iterator7.length) break;                                                                           // 173
				_ref7 = _iterator7[_i7++];                                                                                     // 173
			} else {                                                                                                        // 173
				_i7 = _iterator7.next();                                                                                       // 173
				if (_i7.done) break;                                                                                           // 173
				_ref7 = _i7.value;                                                                                             // 173
			}                                                                                                               // 173
                                                                                                                   //
			var _meal = _ref7;                                                                                              // 173
			stock[_meal._id._str] = StockCalculator.calculate(yesterdaysStock[_meal._id._str], formatDate(today()), _meal._id, {
				findMealStock: function (mealId, date) {                                                                       // 175
					return MealStock.findOne({                                                                                    // 176
						meal: mealId,                                                                                                // 176
						date: date                                                                                                   // 176
					});                                                                                                           // 176
				}                                                                                                              // 177
			}).stock;                                                                                                       // 174
		}                                                                                                                // 179
                                                                                                                   //
		return stock;                                                                                                    // 180
	}                                                                                                                 // 181
});                                                                                                                // 150
                                                                                                                   //
function computeStock(date) {                                                                                      // 184
	var previousDay = formatDate(addDays(date, -1));                                                                  // 185
	var mealStocks = MealStock.find({                                                                                 // 187
		date: previousDay                                                                                                // 187
	}).fetch();                                                                                                       // 187
                                                                                                                   //
	for (var _iterator8 = mealStocks, _isArray8 = Array.isArray(_iterator8), _i8 = 0, _iterator8 = _isArray8 ? _iterator8 : _iterator8[Symbol.iterator]();;) {
		var _ref8;                                                                                                       // 189
                                                                                                                   //
		if (_isArray8) {                                                                                                 // 189
			if (_i8 >= _iterator8.length) break;                                                                            // 189
			_ref8 = _iterator8[_i8++];                                                                                      // 189
		} else {                                                                                                         // 189
			_i8 = _iterator8.next();                                                                                        // 189
			if (_i8.done) break;                                                                                            // 189
			_ref8 = _i8.value;                                                                                              // 189
		}                                                                                                                // 189
                                                                                                                   //
		var mealStock = _ref8;                                                                                           // 189
		var sales = mealSales(mealStock.meal, previousDay);                                                              // 190
		var output = sales + (mealStock.nonSales || 0);                                                                  // 191
		var final = mealStock.stock - output + (mealStock.restock || 0);                                                 // 192
		MealStock.update({                                                                                               // 193
			meal: mealStock.meal,                                                                                           // 194
			date: formatDate(date)                                                                                          // 195
		}, {                                                                                                             // 193
			$set: {                                                                                                         // 196
				stock: final                                                                                                   // 197
			}                                                                                                               // 196
		}, {                                                                                                             // 196
			upsert: true                                                                                                    // 198
		});                                                                                                              // 198
	}                                                                                                                 // 199
}                                                                                                                  // 200
                                                                                                                   //
Meteor.startup(function () {});                                                                                    // 202
SyncedCron.add({                                                                                                   // 205
	name: 'Update stock for day.',                                                                                    // 206
	schedule: function (parser) {                                                                                     // 207
		return parser.cron('0 0 */1 * *');                                                                               // 208
	},                                                                                                                // 209
	job: function () {                                                                                                // 210
		recordStock();                                                                                                   // 211
	}                                                                                                                 // 212
});                                                                                                                // 205
SyncedCron.start();                                                                                                // 214
Meteor.methods({                                                                                                   // 216
	uploadImage: function (args) {                                                                                    // 217
		var result = HTTP.post(Meteor.settings.public.imageServerUrl + '/upload.php?type=' + (args.type || 'raster'), {  // 218
			content: args.data                                                                                              // 219
		});                                                                                                              // 218
		console.log(result);                                                                                             // 221
                                                                                                                   //
		if (result.data.result == 'success') {                                                                           // 222
			return result.data; // Meteor.users.update({_id:Meteor.userId()}, {$set:{'profile.picture':result.data.url}});  // 223
		}                                                                                                                // 225
	},                                                                                                                // 226
	clearStockCache: function () {                                                                                    // 227
		StockCache.remove({});                                                                                           // 228
	},                                                                                                                // 229
	sendResetPasswordEmail: function (userId) {                                                                       // 230
		Accounts.sendResetPasswordEmail(userId);                                                                         // 231
	}                                                                                                                 // 232
});                                                                                                                // 216
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

}]}},{"extensions":[".js",".json",".html",".ts"]});
require("./server/main.js");
//# sourceMappingURL=app.js.map
