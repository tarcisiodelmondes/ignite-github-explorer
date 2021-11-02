import { RepositoryItem } from "./RepositoryItem";

import "../styles/repositories.scss";
import { useEffect, useState } from "react";

export function RepositoryList() {
  const [repositories, setRepositories] = useState([]);

  useEffect(() => {
    const url = "https://api.github.com/orgs/rocketseat/repos";

    fetch(url)
      .then((res) => res.json())
      .then((data) => setRepositories(data));
  }, []);

  return (
    <section className="repository-list">
      <h1>Lista de repositórios</h1>

      <ul>
        {repositories.map((repository) => (
          <RepositoryItem key={repository.name} repository={repository} />
        ))}
      </ul>
    </section>
  );
}
