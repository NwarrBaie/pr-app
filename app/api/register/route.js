import { connectMongoDB } from "@/lib/mongodb";
import User from "@/models/user";
import bcrypt from "bcryptjs";
import { NextResponse } from "next/server";

export async function POST(req) {
  try {
    const {
      etsType,
      etsName,
      etsAcademie,
      etsAdresse,
      vsMail,
      etsPassword,
      etsLicenceKey,
    } = await req.json();
    const hashedPassword = await bcrypt.hash(etsPassword, 10);
    const hashedVsMail = await bcrypt.hash(vsMail, 10);
    const hashedAdresse = await bcrypt.hash(etsAdresse, 10);
    const hashedLicenceKey = await bcrypt.hash(etsLicenceKey, 10);
    await connectMongoDB();
    await User.create({
      type: etsType,
      name: etsName,
      academie: etsAcademie,
      adresse: hashedAdresse,
      email: hashedVsMail,
      password: hashedPassword,
      LicenceKey: hashedLicenceKey,
    });

    return NextResponse.json(
      { message: "Inscription Confirmée" },
      { status: 201 }
    );
  } catch (error) {
    return NextResponse.json(
      { message: "Echec lors de l'inscription" },
      { status: 500 },
      console.log(error)
    );
  }
}
