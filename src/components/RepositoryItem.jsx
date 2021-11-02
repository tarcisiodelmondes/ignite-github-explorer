export function RepositoryItem({
  repository: { name, description, html_url },
}) {
  return (
    <li>
      <strong>{name}</strong> <p>{description}</p>
      <a href={html_url}>Acessar repositório</a>
    </li>
  );
}
