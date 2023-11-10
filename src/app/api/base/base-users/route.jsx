import { promises as fs } from "fs";
import { NextResponse } from "next/server";

//Recuperar o arquivo json.
const file = await fs.readFile(
  process.cwd() + "/src/app/api/base/db.json",
  "utf-8"
);

export async function GET(request, { params }) {
   return NextResponse.json(JSON.parse(file));
  } 

  export async function GET_BY_ID(request) {
    try {
      const { id } = request.params;
      const data = JSON.parse(file);
      const users = data.usuarios || [];
  
      if (id) {
        const user = users.find((user) => user.id === parseInt(id, 10));
  
        if (user) {
          return NextResponse.json(user);
        } else {
          return NextResponse.error("Usuário não encontrado", 404);
        }
      }
  
      return NextResponse.error("ID não fornecido", 400);
    } catch (error) {
      console.error("Erro ao processar a requisição:", error);
      return NextResponse.error("Erro interno no servidor", 500);
    }
  }
  



  