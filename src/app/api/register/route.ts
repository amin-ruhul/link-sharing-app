import { createHashPassword } from "@/lib/bcrypt";
import prisma from "@/lib/prisma";
import { NextResponse } from "next/server";
import { userSchema } from "@/lib/schema";
import { structureError } from "@/lib/utils";

export async function POST(req: Request) {
  try {
    const payload = await req.json();
    const validate = userSchema.safeParse(payload);

    if (!validate.success) {
      const errors = structureError(validate.error.issues);

      return NextResponse.json(
        { message: "validation error", errors },
        { status: 422 }
      );
    }

    const { username, firstName, lastName, password } = payload;

    const existingUser = await prisma.user.findUnique({
      where: { username },
    });

    if (existingUser) {
      return NextResponse.json({ message: "Username taken" }, { status: 422 });
    }

    const user = await prisma.user.create({
      data: {
        username,
        firstName,
        lastName,
        password: await createHashPassword(password),
      },
    });

    return NextResponse.json(
      {
        message: "Register success. you may login now",
        user: {
          username: user.username,
          firstName: user.firstName,
          lastName: user.lastName,
        },
      },
      { status: 201 }
    );
  } catch (error) {
    return NextResponse.json(
      { message: "something went wrong" },
      { status: 500 }
    );
  }
}
