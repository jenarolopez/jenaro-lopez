
import { Highlights } from "./component/Highlight";
import Body from "./layout/Body";
import LeftCol from "./layout/LeftCol";
import RightCol from "./layout/RightCol";

export default function Home() {



  return (
    <div className="relative bg-slate-900">
      <Highlights />
      <Body>
        <LeftCol />
        <RightCol />
      </Body>
      {/* <Body>
        <LeftColumn />
        <RightColumn />
      </Body> */}
    </div>
  );
}
