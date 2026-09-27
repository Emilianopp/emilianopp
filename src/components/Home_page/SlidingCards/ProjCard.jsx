import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import Button from "@mui/material/Button";
import "styles/Home/ProjectCards.scss";
import "config/content.json";
import { Link } from "@mui/material";
import { css } from "@emotion/css";

const mediaStyles = css`
  .media {
    width: 100%;
    height: 100%;
  }
  .media svg {
    width: 100%;
    height: 100%;
    object-fit: cover;
  }
`;

export default function ProjCard({ item, minHeight }) {
  const containerStyle = { margin: 'auto', width: '100%', maxWidth: '720px', position: 'relative' };

  return (
    <div className="Outer-Project-card-content" style={containerStyle}>
      <Card className="Project-card-content" style={{ borderLeft: `4px solid ${item.color}`, minHeight }}>
        <div className="media">
          {/* SVG or image component provided in item.src */}
          <item.src />
        </div>

        <div className="card-content">
          <h3 className="proj-title" style={{ color: item.color }}>{item.title}</h3>

          {item.content && item.content.map((c, i) => (
            <p className="proj-content" key={i}>{c}</p>
          ))}

          <div className="link-button">
            {item.link && item.link.map((link, idx) => (
              <Button
                key={idx}
                size="small"
                component="a"
                href={link.src}
                target="_blank"
                rel="noopener noreferrer"
                className="pub-open-btn"
              >
                {link.title}
              </Button>
            ))}
          </div>
        </div>
      </Card>
    </div>
  );
}
