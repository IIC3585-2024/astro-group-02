/// <reference path="../.astro/actions.d.ts" />
/// <reference types="astro/client" />

// import type { App } from "astro/app";

declare namespace App {
  interface Locals {
    userEmail?: string | null;
  }
}