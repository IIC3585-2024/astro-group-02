import { defineAction, z } from "astro:actions";
import { projectAuth } from "../firebase/config";

export const logoutAccount = defineAction({
    input: z.object({}),
    handler: async () => {
        await projectAuth.signOut();
    }
});