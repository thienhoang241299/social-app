"use client";
import IframeVideo from "./components/IframeVideo/IframeVideo";
import InputLinks from "./components/InputLinks/InputLinks";
import ListLinks from "./components/ListLinks/ListLinks";

export default function Home() {
  return (
    <>
      <div className="flex m w-4/5" style={{ margin: "auto", marginTop: "2rem" }}>
        <div className="w-2/6 box-border">
          <InputLinks />
          <ListLinks />
        </div>
        <div>
          <IframeVideo />
        </div>
      </div>
    </>
  );
}
