// app/actions.ts
"use server";
export async function sendMessage(formData: FormData) {
  const name = formData.get("name");
  const email = formData.get("email");
  const message = formData.get("message");
  // send via Resend, Nodemailer, or a forms API of your choice
}
