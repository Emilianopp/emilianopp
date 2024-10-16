import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import Button from "@mui/material/Button";
import "styles/Home/ProjectCards.scss";
import "config/content.json";
import { Link } from "@mui/material";
import { css } from "@emotion/css";import { useMediaQuery } from 'react-responsive'

const mediaStyles = css`
  .media {
    width: 100%;
    height: 100%;
  }
  .media svg {
    width: 100%;
    height: 100%;
    object-fit: cover;
  }`;

export default function ProjCard({ item }) {
  const isDesktopOrLaptop = useMediaQuery({
    query: '(min-width: 800px)'
  })
  const isBigScreen = useMediaQuery({ query: '(min-width: 1824px)' })
  const Mobile = useMediaQuery({ query: '(max-width: 800px)' })
  const isPortrait = useMediaQuery({ query: '(orientation: portrait)' })
  const isRetina = useMediaQuery({ query: '(min-resolution: 2dppx)' })
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
    {isDesktopOrLaptop  &&
      <div
        className={css({
          margin: "auto",
          width: "50vw",
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
         <div className={mediaStyles}>
         <item.src />
</div>
          <div className="unskew-Project-card-content">
            <CardContent className="card-content">
              <h1
                style={{
                  color: item.color,
                  paddingTop: "2rem",
                  fontWeight: "bold",
                  fontSize: "2rem",
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
      </div>}
    
      {Mobile &&  <div
        className={css({
          margin: "auto",
          width: "80%",
          height:"70vh",
          paddingTop:"20px",
          position: "relative",
          transform: "skew(0deg)",
          paddingBottom: "10px",
          paddingRight: "10px",
          paddingLeft: "10px",
          zIndex: 99999,
          ":after": {
            content: '""',
            position: "absolute",
            left: "0",
            bottom: "0",
            borderBottomRightRadius: "8px",
            borderBottomLeftRadius: "8px",
            borderTopLeftRadius: "3px",
            height: "93%",

            width: "90%",
            zIndex: "1",
            borderRight: `2px solid ${item.color}`,
            borderBottom: `2px solid ${item.color}`,
            borderLeft: `2px solid ${item.color}`,
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
          {/* <div className="media">
            <item.src />
          </div>{" "} */}
          <div className="unskew-Project-card-content">
            <CardContent className="card-content">
              <h1
                style={{
                  color: item.color,
                  fontWeight: "bold",
                  fontSize: "25px",
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
    
    
  }
    </>
    
          
  );
}
