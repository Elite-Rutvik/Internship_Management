import mongoose, { Schema, models } from "mongoose";

const teamSchema = new Schema(
  {
    teamName: {
      type: String,
      required: true,
      trim: true,
    },
    mentors: [{
      type: String,
      required: true,
      trim: true,
    }],
    interns: [{
      type: String,
      required: true,
      trim: true,
    }],
    panelists: [{
      type: String,
      required: true,
      trim: true,
    }],
    description: {
      type: String,
      required: true,
      trim: true,
    },
    organizationName: {
      type: String,
      required: true,
      trim: true,
    },
    organizationId: {
      type: String,
      required: true,
      trim: true,
    },
    status: {
      type: String,
      enum: ["active", "underReview", "completed"],
      default: "active",
    },
    assignments: [String],
    createdAt: {
      type: Date,
      default: Date.now,
    },
    updatedAt: {
      type: Date,
      default: Date.now,
    },
  },
  {strict: false}
);

teamSchema.pre("updateOne", function () {
  this.set({ updatedAt: new Date() });
});

const Team = models.Team || mongoose.model("Team", teamSchema);

export default Team;
