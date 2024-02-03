import { z } from "zod";

// const logInSchema = z.object({
//   email: z.email({ message: "Invalid email address" }),
//   password: z.string().min(5).includes(),
// });

export async function loginAuth({ request }) {
  const t = await request.formData();

  return Object.fromEntries(t);
}
