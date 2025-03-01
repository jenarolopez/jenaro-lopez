
import { Highlights } from "./component/Highlight";
import Body from "./layout/Body";
import LeftCol from "./layout/LeftCol";
import RightColumn from "./layout/RightColumn";

export default function Home() {



  return (
    <div className="relative bg-slate-900">
      <Highlights />
      <Body>
        <LeftCol />
        <RightColumn />
      </Body>
      {/* <Body>
        <LeftColumn />
        <RightColumn />
      </Body> */}
    </div>
  );
}
