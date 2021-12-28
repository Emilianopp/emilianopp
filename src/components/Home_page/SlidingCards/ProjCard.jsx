import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import Button from "@mui/material/Button";
import "styles/Home/ProjectCards.scss";
import "config/content.json";
import { Link } from "@mui/material";
import { css } from "@emotion/css";

export default function ProjCard({ item }) {
  item.link.map((link) => {
    console.log(link.src, link.title);
  });
  const after = {
    ":after": {
      height: 100,
      backgroundColor: "red",
    },
  };
  return (
    <>
      <div
        className={css({
          margin: "auto",
          width: "80%",
          position: "relative",
          transform: "skew(-18deg)",
          paddingBottom: "12px",
          paddingRight: "10px",
          zIndex: 99999,
          ":after": {
            content: '""',
            position: "absolute",
            left: "0",
            bottom: "0",
            borderBottomRightRadius: "8px",
            height: "92%",
            width: "100%",
            zIndex: "1",
            borderRight: `2px solid ${item.color}`,
            borderBottom: `2px solid ${item.color}`,
          },
        })}
      >
        <Card
          className={css({
            
            width: "100%",
            height: "100%",
            position: "relative",           
            borderRadius: "10px",
            position: "relative",
            border: `3px solid ${item.color}`,
            zIndex: 10000,
            
          })}

          style= {{
            backgroundColor:'#003041'
          }}
        >
          <div className="media">
            <item.src />
          </div>{" "}
          <div className="unskew-Project-card-content">
            <CardContent className="card-content">
              <h1
                style={{
                  color: item.color,
                  fontWeight: "bold",
                  fontSize: "35px",
                }}
              >
                {" "}
                {item.title}{" "}
              </h1>
              {item.content.map((item) => {
                return <p className="proj-content"> {item}</p>;
              })}
            </CardContent>
            {item.link.map((link) => {
              return (
                <Button
                  className="link-button"
                  size="small"
                  onclick={`window.location.href='${link.src}'`}
                >
                  {" "}
                  <Link href={link.src}> {link.title} </Link>
                </Button>
              );
            })}
          </div>
        </Card>
      </div>
    </>
  );
}
