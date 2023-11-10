// ShowUser.jsx
"use client";

import { useParams, useRouter } from "next/navigation";
import { useState, useEffect } from "react";
import styles from "./table.module.id.css";

const ShowUser = () => {
  // Redirecionamento:
  const router = useRouter();
  const { id } = useParams();
  const [user, setUser] = useState(null);

  useEffect(() => {
    const fetchUser = async () => {
      try {
        // ABORDAGEM QUE TENTEI USAR E NÃO FUNCIONOU
        // const response = await fetch(`http://localhost:3000/api/base/base-users/${id}`);
        const response = await fetch(`http://localhost:3000/api/base/base-users/${id}`);
        const data = await response.json();
        setUser(data);
      } catch (error) {
        console.error("Erro ao buscar o usuário:", error);
      }
    };

    if (id) {
      fetchUser();
    }
  }, [id]);

  if (!user) {
    return <p>Carregando...</p>;
  }

  return (
    <div className={styles.container}>
      <h1 className={styles.heading}>Detalhes do Usuário</h1>
      <div className={styles.details}>
        <p className={styles.label}>Id:</p>
        <p>{user.id}</p>
        <p className={styles.label}>Nome:</p>
        <p>{user.name}</p>
        <p className={styles.label}>Email:</p>
        <p>{user.email}</p>
      </div>
    </div>
  );
};

export default ShowUser;
