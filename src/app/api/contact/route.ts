import { NextRequest, NextResponse } from "next/server";
import mongoose from "mongoose";

const MONGODB_URI = process.env.MONGODB_URI!;

async function connectDB() {
  if (mongoose.connection.readyState === 0) {
    await mongoose.connect(MONGODB_URI);
  }
}

const contactSchema = new mongoose.Schema({
  name: String,
  email: String,
  message: String,
  createdAt: { type: Date, default: Date.now },
});

const Contact = mongoose.models.Contact || mongoose.model("Contact", contactSchema);

export async function POST(req: NextRequest) {
  try {
    await connectDB();
    const { name, email, message } = await req.json();
    await Contact.create({ name, email, message });
    return NextResponse.json({ success: true, message: "Message sent successfully!" });
  } catch (error) {
    return NextResponse.json({ success: false, error: "Something went wrong" }, { status: 500 });
  }
}