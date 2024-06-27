import { defineAction, z } from "astro:actions";
import { signInWithEmailAndPassword } from "firebase/auth";
import { projectAuth } from "../firebase/config";

export const loginAccount = defineAction({
    accept: "form",
    input: z.object({ email: z.string().email(), password: z.string() }),
    handler: async ({email, password}) => {
        await signInWithEmailAndPassword(projectAuth, email, password);
    }
});