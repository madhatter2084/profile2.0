export default function PortfolioTile({
  source,
  title,
  description,
  github,
  url,
}) {
  return (
    <div className="portfolio__tile">
      <img
        className="screenShot"
        src={source}
        alt="Obriens construction screenshot"
      />
      <h1 className="tile__title">{title}</h1>
      <p>{description}</p>
      <div className="links">
        <a
          href={github && github}
          target="_blank"
          rel="noreferrer"
          className="portfolioLinks"
        >
          GitHub
        </a>
        <hr></hr>
        <a
          href={url}
          target="_blank"
          rel="noreferrer"
          className="portfolioLinks"
        >
          {title}
        </a>
      </div>
    </div>
  );
}
