import mongoose, { Schema } from "mongoose";
import bcrypt from "bcrypt";

const userSchema = new Schema(
  {
    name: {
      type: String,
      required: true,
      unique: true,
      lowercase: true, // صححت
      trim: true,
      minlength: 1,
      maxlength: 30
    },
    password: {
      type: String,
      required: true,
      trim: true,
      minlength: 6,
      maxlength: 30
    },
    email: {
      type: String,
      required: true,
      unique: true,
      lowercase: true, // صححت
      trim: true
    }
  },
  {
    timestamps: true // يجب أن يكون هنا، كـ argument ثاني
  }
);
//before saving any password we must hash it
userSchema.pre("save", async function () {
  if (this.isModified("password")) {
    this.password = await bcrypt.hash(this.password, 10);
  }
});


//compare password 
userSchema.methods.comparePassword = async function (Password) {
  return await bcrypt.compare(Password, this.password);
};

// ✅ تصدير النموذج
export const User = mongoose.model("User", userSchema);
