import Iframe from "@/components/Iframe/Iframe";
import React, { useEffect } from "react";
import { useSelector } from "react-redux";

export default function IframeVideo() {
  const linkUrl = useSelector((state: any) => state.socialSlice.linkSocial);
  const linkVideo = useSelector((state: any) => state.socialSlice.linkVideo);
  useEffect(() => {
    console.log(linkVideo);
  });
  return (
    <div className="flex flex-wrap">
      {linkUrl[0] == null ? (
        "Vui long nhap Link Video"
      ) : linkVideo.link == "" ? (
        <>
          <div className="flex flex-col ">
            {linkUrl.map((v: any, i: number) => {
              if (i % 2 == 0) {
                return <Iframe key={i} urlLink={v.link} embed={v.embed} />;
              }
            })}
          </div>
          <div className="flex flex-col">
            {linkUrl.map((v: any, i: number) => {
              if (i % 2 == 1) {
                return <Iframe key={i} urlLink={v.link} embed={v.embed} />;
              }
            })}
          </div>
        </>
      ) : (
        <div className="flex flex-col">{<Iframe urlLink={linkVideo.link} embed={linkVideo.embed} />}</div>
      )}

      {}
    </div>
  );
}
