"use server";

import { UserService } from "@/services/UserService";
import { ProfileSchema, ProfileValue } from "@/validations/profile.validation";

export async function profileUpdate(id: string, payload: ProfileValue) {
  const parsedData = ProfileSchema.safeParse(payload);
  if (!parsedData.success) {
    return {
      success: false,
      message: parsedData.error.flatten().fieldErrors,
    };
  }
  try {
    const response = await UserService.updateProfile(id, payload);
    return response;
  } catch (error) {
    console.log(error);
  }
}

export async function getProfile(id: string) {}
