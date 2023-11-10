// AllUsersPage.jsx
"use client";
import Link from "next/link";
import { useState, useEffect } from "react";
import styles from "./table.module.css";

const AllUsersPage = () => {
  const [users, setUsers] = useState([]);

  useEffect(() => {
    const fetchUsers = async () => {
      try {
        const response = await fetch("http://localhost:3000/api/base/base-users");
        const data = await response.json();
        setUsers(data.usuarios || []);
      } catch (error) {
        console.error("Erro ao buscar usuários:", error);
      }
    };

    fetchUsers();
  }, []);

  return (
    <div className={styles.tableContainer}>
      <h1>Todos os Usuários</h1>
      <table className={styles.table}>
        <thead className={styles.thead}>
          <tr>
            <th className={styles.th}>ID</th>
            <th className={styles.th}>Nome</th>
            <th className={styles.th}>Email</th>
            {/* Adicione mais colunas conforme necessário */}
          </tr>
        </thead>
        <tbody>
          {users.map((user) => (
            <tr className={styles.tr} key={user.id}>
              <td className={styles.td}>{user.id}</td>
              <td className={styles.td}>{user.name}</td>
              <td className={styles.td}>{user.email}</td>
              {/* Adicione mais colunas conforme necessário */}
              <td className={styles.td}>
                <Link href={`/UserAll/${user.id}`} className={styles.link}>
                  Detalhes
                </Link>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default AllUsersPage;
