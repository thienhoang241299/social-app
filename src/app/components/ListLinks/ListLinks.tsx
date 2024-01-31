import { chooseVideo, deleteVideo } from "@/redux/slice/socialSlice";
import React from "react";
import { useDispatch, useSelector } from "react-redux";

export default function ListLinks() {
  const linkUrl = useSelector((state: any) => state.socialSlice.linkSocial);
  const dispatch = useDispatch();
  const handelChooseVideo = (n: string) => {
    dispatch(chooseVideo(n));
    console.log(n);
  };
  const deleteIframe = (n: number) => {
    dispatch(deleteVideo(n));
  };
  return (
    <div className="list-none w-4/5 border-2 rounded-3xl my-12 p-2">
      {linkUrl.map((v: any, i: number) => {
        return (
          <div key={i} className="flex items-center mt-2">
            <li className="box-content break-words border-2 rounded-3xl m-2 p-2 w-10/12" onClick={() => handelChooseVideo(v)}>
              {v.link}
            </li>
            <span onClick={() => deleteIframe(i)} className="rounded-full p-1 border-2 border-gray-600">
              x
            </span>
          </div>
        );
      })}
    </div>
  );
}
