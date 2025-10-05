import mongoose from 'mongoose';
import uuidv1 from 'uuidv1';
import moment from 'moment';

const userSchema = new mongoose.Schema(
  {
    firstName: {type: String, max: 120},
    lastName: {type: String, max: 20},
    userName: {type: String, trim: true, required: true},
    profilePic: {type: String, default: 'default.jpeg'},

    email: {type: String, required: true},
    password: {type: String, trim: true, required: true},

    address: {type: String, required: false},
    countryCode: {type: String, required: false},
    phoneNumber: {type: String, required: false},
    city: {type: String, required: false},
    state: {type: String, required: false},
    country: {type: String, required: false},
    zipCode: {type: String, required: false},
    timeZone: {type: String},
    verified: {type: Boolean, default: false},

    forgotPasswordToken: {type: String, default: uuidv1()},
    forgotTokenExpire: {type: Date, default: moment().add(1, 'day')?._d},
    passwordEmailSentCount: {type: Number, default: 0},

    emailVerificationToken: {type: String, default: uuidv1()},
    emailVerifiedAt: {type: Date},
    emailTokenExpire: {type: Date, default: moment().add(1, 'day')},
    verificationEmailSentCount: {type: Number, default: 0},

    walletKey: {type: String},
    platformKey: {type: String},
    isWalletLogin: {type: Boolean, default: false},
    totalActiveDuration: {type: Number, default: 0},
    earnedPoints: {type: Number, default: 0}, // can be float (ex: 0.5, 1, 2, 2.5 etc ..)
    totalIosUsage: {type: Number, default: 0},
    totalMacUsage: {type: Number, default: 0},
    totalAndroidUsage: {type: Number, default: 0},
    totalDesktopUsage: {type: Number, default: 0},
    isActive: {type: Boolean, default: false},
    lastLogin: {type: Date},
    platForm: {type: String},
    tokenExpireDate: {type: Date},

    createdAt: {type: Date, default: Date.now()},
    updatedAt: {type: Date, default: Date.now()},
  },
  {timestamps: true}
);

export default mongoose.model('userschema', userSchema);
