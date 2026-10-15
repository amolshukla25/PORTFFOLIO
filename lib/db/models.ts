import mongoose, { Schema, model, models, type Model } from "mongoose";

/**
 * Mongoose models for the admin/student training portal.
 *
 * Every model is registered through `models.X || model(...)` so Next.js
 * hot reloads in development do not throw "OverwriteModelError".
 */

const ObjectId = Schema.Types.ObjectId;

export type UserRole = "admin" | "student";

export interface IUser {
  name: string;
  email: string;
  passwordHash: string;
  role: UserRole;
  batch: mongoose.Types.ObjectId | null;
  active: boolean;
  createdAt: Date;
  updatedAt: Date;
}

export interface IBatch {
  name: string;
  description: string;
  startDate: Date | null;
  endDate: Date | null;
  active: boolean;
  createdAt: Date;
  updatedAt: Date;
}

export interface IActivity {
  student: mongoose.Types.ObjectId;
  batch: mongoose.Types.ObjectId | null;
  /** Local calendar day as YYYY-MM-DD — one entry per student per day. */
  date: string;
  topic: string;
  notes: string;
  hours: number | null;
  /** How much the student feels they got from the session: 1 (nothing) to 5. */
  rating: number;
  createdAt: Date;
  updatedAt: Date;
}

export interface ITodo {
  owner: mongoose.Types.ObjectId;
  date: string;
  title: string;
  notes: string;
  done: boolean;
  createdAt: Date;
  updatedAt: Date;
}

export interface IAssignment {
  batch: mongoose.Types.ObjectId;
  title: string;
  description: string;
  givenAt: Date;
  dueDate: Date | null;
  createdBy: mongoose.Types.ObjectId | null;
  createdAt: Date;
  updatedAt: Date;
}

export interface ISubmission {
  assignment: mongoose.Types.ObjectId;
  student: mongoose.Types.ObjectId;
  submittedAt: Date;
  note: string;
  link: string;
  createdAt: Date;
  updatedAt: Date;
}

const UserSchema = new Schema<IUser>(
  {
    name: { type: String, required: true, trim: true },
    email: {
      type: String,
      required: true,
      unique: true,
      lowercase: true,
      trim: true,
    },
    passwordHash: { type: String, required: true },
    role: { type: String, enum: ["admin", "student"], default: "student" },
    batch: { type: ObjectId, ref: "Batch", default: null },
    active: { type: Boolean, default: true },
  },
  { timestamps: true }
);

const BatchSchema = new Schema<IBatch>(
  {
    name: { type: String, required: true, unique: true, trim: true },
    description: { type: String, default: "" },
    startDate: { type: Date, default: null },
    endDate: { type: Date, default: null },
    active: { type: Boolean, default: true },
  },
  { timestamps: true }
);

const ActivitySchema = new Schema<IActivity>(
  {
    student: { type: ObjectId, ref: "User", required: true, index: true },
    batch: { type: ObjectId, ref: "Batch", default: null, index: true },
    date: { type: String, required: true, index: true },
    topic: { type: String, required: true, trim: true },
    notes: { type: String, default: "" },
    hours: { type: Number, default: null, min: 0, max: 24 },
    rating: { type: Number, required: true, min: 1, max: 5 },
  },
  { timestamps: true }
);
ActivitySchema.index({ student: 1, date: 1 }, { unique: true });

const TodoSchema = new Schema<ITodo>(
  {
    owner: { type: ObjectId, ref: "User", required: true, index: true },
    date: { type: String, required: true, index: true },
    title: { type: String, required: true, trim: true },
    notes: { type: String, default: "" },
    done: { type: Boolean, default: false },
  },
  { timestamps: true }
);

const AssignmentSchema = new Schema<IAssignment>(
  {
    batch: { type: ObjectId, ref: "Batch", required: true, index: true },
    title: { type: String, required: true, trim: true },
    description: { type: String, default: "" },
    givenAt: { type: Date, required: true, default: Date.now },
    dueDate: { type: Date, default: null },
    createdBy: { type: ObjectId, ref: "User", default: null },
  },
  { timestamps: true }
);

const SubmissionSchema = new Schema<ISubmission>(
  {
    assignment: {
      type: ObjectId,
      ref: "Assignment",
      required: true,
      index: true,
    },
    student: { type: ObjectId, ref: "User", required: true, index: true },
    submittedAt: { type: Date, required: true, default: Date.now },
    note: { type: String, default: "" },
    link: { type: String, default: "" },
  },
  { timestamps: true }
);
SubmissionSchema.index({ assignment: 1, student: 1 }, { unique: true });

export const User: Model<IUser> =
  (models.User as Model<IUser>) || model<IUser>("User", UserSchema);

export const Batch: Model<IBatch> =
  (models.Batch as Model<IBatch>) || model<IBatch>("Batch", BatchSchema);

export const Activity: Model<IActivity> =
  (models.Activity as Model<IActivity>) ||
  model<IActivity>("Activity", ActivitySchema);

export const Todo: Model<ITodo> =
  (models.Todo as Model<ITodo>) || model<ITodo>("Todo", TodoSchema);

export const Assignment: Model<IAssignment> =
  (models.Assignment as Model<IAssignment>) ||
  model<IAssignment>("Assignment", AssignmentSchema);

export const Submission: Model<ISubmission> =
  (models.Submission as Model<ISubmission>) ||
  model<ISubmission>("Submission", SubmissionSchema);
