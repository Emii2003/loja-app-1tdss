import { promises as fs } from "fs";
import { NextResponse } from "next/server";

//Recuperar o arquivo json.
const file = await fs.readFile(
  process.cwd() + "/src/app/api/base/db.json",
  "utf-8"
);

export async function GET (request, {params}) {
  const id = params.id;
  const data = JSON.parse(file);
  const usuario = data.usuarios.find((user) => user.id === parseInt(id));
  if (usuario) {
    return NextResponse.json(usuario);
  } else {
    return NextResponse.json({ error: "Usuário não encontrado" }, { status: 404 });
  }
}