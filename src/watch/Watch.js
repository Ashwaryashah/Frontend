import { ArrowBackOutlined } from "@material-ui/icons";
import "./watch.scss";

export default function Watch() {
  return (
    <div className="watch">
      <div className="back">
        <ArrowBackOutlined />
        Home
      </div>
      <video
        className="video"
        autoPlay
        progress
        controls
        src="./Praise (Official Video)- Rish X Yawar - Moit - Latest Punjabi Song 2021.mkv"
      />
    </div>
  );
}
