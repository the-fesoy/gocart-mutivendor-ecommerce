import { serve } from "inngest/next";
import { inngest } from "../../../inngest/client";
import {
  helloWorld,
  syncUserCreation,
  syncUserDeletion,
  syncUserUpdation,
} from "../../../inngest/functions";

export const { GET, POST, PUT } = serve({
  client: inngest,
  functions: [
    helloWorld,
    syncUserDeletion,
    syncUserUpdation,
    syncUserCreation,
    // <-- This is where you'll always add all your functions
  ],
});
