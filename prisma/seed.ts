import db from "@/lib/db";
import { hashPassword } from "@/lib/helper";

/**
 * seeding for admin account
 */
export async function main() {
  const now = new Date();
  await db.user.upsert({
    where: { email: "super@admin.com" },
    update: {},
    create: {
      name: "Super Admin",
      email: "super@admin.com",
      emailVerified: true,
      image: null,
      password: await hashPassword("asdasd@9i8u"),
    },
  });
}

main();
