import "./LeftSidePanel.css";

export default function LeftSidePanel() {
  return (
    <div className="leftSide">
      <div className="leftSide-header">Brand</div>
      <div className="leftSide-brandName">
        <label className="brandName">
          <input type="checkbox" value="Apple" />
          Apple
        </label>
        <label className="brandName">
          <input type="checkbox" value="Redmi" />
          Redmi
        </label>
        <label className="brandName">
          <input type="checkbox" value="Samsung" />
          Samsung
        </label>
        <label className="brandName">
          <input type="checkbox" value="Realme" />
          Realme
        </label>
      </div>
    </div>
  );
}
