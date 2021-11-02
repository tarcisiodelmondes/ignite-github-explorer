export function RepositoryItem({ repository: { name, description, link } }) {
  return (
    <li>
      <strong>{name ?? "Default"}</strong> <p>{description ?? "Default"}</p>
      <a href={link ?? "Default"}>Acessar repositório</a>
    </li>
  );
}
