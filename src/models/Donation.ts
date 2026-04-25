import mongoose, { Schema, Document, Model } from 'mongoose';

export interface IDonation extends Document {
  donorName: string;
  donorEmail: string;
  donorPhone: string;
  amount: number;
  transactionId: string;
  paymentMethod: string;
  status: string;
  type: 'donation' | 'zakat';
  referralCode?: string; // যার লিঙ্ক থেকে এসেছে
  date: Date;
  createdAt: Date;
}

const DonationSchema = new Schema<IDonation>(
  {
    donorName: {
      type: String,
      required: true,
      trim: true,
    },
    donorEmail: {
      type: String,
      required: true,
      lowercase: true,
      trim: true,
    },
    donorPhone: {
      type: String,
      default: '',
    },
    amount: {
      type: Number,
      required: true,
      min: 1,
    },
    transactionId: {
      type: String,
      required: true,
      unique: true,
      trim: true,
    },
    paymentMethod: {
      type: String,
      default: '',
    },
    status: {
      type: String,
      default: 'Successful',
    },
    type: {
      type: String,
      enum: ['donation', 'zakat'],
      default: 'donation',
    },
    referralCode: {
      type: String,
      default: undefined, // কোনো referral ছাড়া দান হলে undefined
    },
    date: {
      type: Date,
      default: Date.now,
    },
  },
  {
    timestamps: true,
  }
);

// Indexes for faster queries
DonationSchema.index({ donorEmail: 1 });
DonationSchema.index({ referralCode: 1 });
DonationSchema.index({ date: -1 });

const Donation: Model<IDonation> =
  mongoose.models.Donation ||
  mongoose.model<IDonation>('Donation', DonationSchema);

export default Donation;
