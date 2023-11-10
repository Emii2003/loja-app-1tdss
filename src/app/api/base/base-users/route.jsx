import { promises as fs } from "fs";
import { NextResponse } from "next/server";

//Recuperar o arquivo json.
const file = await fs.readFile(
  process.cwd() + "/src/app/api/base/db.json",
  "utf-8"
);

export async function GET() {
  return NextResponse.json(JSON.parse(file));
}