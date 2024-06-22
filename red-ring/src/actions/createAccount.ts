import { defineAction, z } from "astro:actions";
// import { z } from "astro:content";
import { createUserWithEmailAndPassword } from "firebase/auth";
import { projectAuth } from "../firebase/config";

export const createAccount = defineAction({
    accept: "form",
    input: z.object({ email: z.string().email(), password: z.string() }),
    handler: async ({email, password}) => {
        await createUserWithEmailAndPassword(projectAuth, email, password);
    }
});