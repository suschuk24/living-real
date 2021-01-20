const mongoose = require('mongoose');
const { Schema } = mongoose;

const User = require('./User')

const adminPropertyDetails = new Schema ({
    mortgage: {
        type: Number,
        trim: true,
        required: true
    },
    propertyTaxes: {
        type: Number,
        trim: true,
        required: true
    },
    propertyInsurance: {
        type: Number,
        trim: true,
        required: true
    },
    availability: {
        type: Boolean,
        required: true
    },
    //tenant: [User]
})

const propertySchema = new Schema ({
    propertyName: {
        type: String,
        required: true,
        trim: true
    },
    propertyType: {
        type: String,
        required: true,
        trim: true
    },
    streetAddress: {
        type: String,
        required: true,
        trim: true
    },
    city: {
        type: String,
        required: true,
        trim: true
    },
    state: {
        type: String,
        required: true,
        trim: true
    },
    zipCode: {
        type: Number,
        required: true,
        trim: true
    },
    sqFeet: {
        type: Number,
        required: true,
        trim: true
    },
    numBathrooms: {
        type: Number,
        required: true,
        trim: true
    },
    numBedroom: {
        type: Number,
        required: true,
        trim: true
    },
    balcony: {
        type: Boolean,
        required: true,
        trim: true
    },
    rent: {
        type: Number,
        required: true,
        trim: true
    },
    petDeposit: {
        type: Number,
        required: true,
        trim: true
    },
    renterDeposit: {
        type: Number,
        required: true,
        trim: true
    },
    appFee: {
        type: Number,
        required: true,
        trim: true
    },
    adminPropertyDetails: adminPropertyDetails
})

const Property = mongoose.model('Property', propertySchema);

module.exports = Property