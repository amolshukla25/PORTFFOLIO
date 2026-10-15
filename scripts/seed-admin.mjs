/**
 * Creates (or resets) the admin account for the training portal.
 *
 * Usage:
 *   node --env-file=.env scripts/seed-admin.mjs
 *
 * Override the defaults with SEED_ADMIN_NAME / SEED_ADMIN_EMAIL /
 * SEED_ADMIN_PASSWORD. Running it again updates the existing admin's
 * password instead of creating a duplicate.
 */
import bcrypt from "bcryptjs";
import mongoose from "mongoose";

const ADMIN_NAME = process.env.SEED_ADMIN_NAME ?? "Amol Shukla";
const ADMIN_EMAIL = (
  process.env.SEED_ADMIN_EMAIL ?? "admin@amolshukla.online"
)
  .toLowerCase()
  .trim();
const ADMIN_PASSWORD = process.env.SEED_ADMIN_PASSWORD ?? "Admin@12345";

const uri = process.env.MONGODB_URI;
if (!uri) {
  console.error("✖ MONGODB_URI is not set. Run with: node --env-file=.env scripts/seed-admin.mjs");
  process.exit(1);
}

const UserSchema = new mongoose.Schema(
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
    batch: { type: mongoose.Schema.Types.ObjectId, ref: "Batch", default: null },
    active: { type: Boolean, default: true },
  },
  { timestamps: true }
);

const User = mongoose.models.User ?? mongoose.model("User", UserSchema);

try {
  await mongoose.connect(uri);
  const passwordHash = await bcrypt.hash(ADMIN_PASSWORD, 10);
  const existing = await User.findOne({ email: ADMIN_EMAIL });

  if (existing) {
    await User.updateOne(
      { _id: existing._id },
      { $set: { name: ADMIN_NAME, passwordHash, role: "admin", active: true } }
    );
    console.log(`✔ Updated admin account: ${ADMIN_EMAIL}`);
  } else {
    await User.create({
      name: ADMIN_NAME,
      email: ADMIN_EMAIL,
      passwordHash,
      role: "admin",
      batch: null,
      active: true,
    });
    console.log(`✔ Created admin account: ${ADMIN_EMAIL}`);
  }

  console.log(`  Password: ${ADMIN_PASSWORD}`);
  console.log(
    "  To change it: SEED_ADMIN_PASSWORD='new-password' node --env-file=.env scripts/seed-admin.mjs"
  );
} catch (error) {
  console.error("✖ Seeding failed:", error.message);
  process.exitCode = 1;
} finally {
  await mongoose.disconnect();
}
