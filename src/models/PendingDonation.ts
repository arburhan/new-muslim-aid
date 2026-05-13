import mongoose, { Schema, Document, Model } from 'mongoose';

export interface IPendingDonation extends Document {
  invoiceNumber: string;
  referralCode?: string;
  donorName: string;
  donorEmail: string;
  pageType: 'donation' | 'zakat';
  createdAt: Date;
}

const PendingDonationSchema = new Schema<IPendingDonation>(
  {
    invoiceNumber: {
      type: String,
      required: true,
      unique: true,
      trim: true,
    },
    referralCode: {
      type: String,
      trim: true,
      default: undefined,
    },
    donorName: {
      type: String,
      trim: true,
      default: '',
    },
    donorEmail: {
      type: String,
      trim: true,
      lowercase: true,
      default: '',
    },
    pageType: {
      type: String,
      enum: ['donation', 'zakat'],
      default: 'donation',
    },
  },
  {
    timestamps: true,
  }
);

// ১ ঘণ্টা পরে auto-delete (TTL index)
PendingDonationSchema.index({ createdAt: 1 }, { expireAfterSeconds: 3600 });

const PendingDonation: Model<IPendingDonation> =
  mongoose.models.PendingDonation ||
  mongoose.model<IPendingDonation>('PendingDonation', PendingDonationSchema);

export default PendingDonation;
