import LeftSidePanel from "./LeftSidePanel";
import RightSidePanel from "./RightSidePanel";

export default function DisplayContent() {
  return (
    <div style={{ display: "flex" }}>
      <div>
        <LeftSidePanel />
      </div>
      <div>
        <RightSidePanel />
      </div>
    </div>
  );
}
