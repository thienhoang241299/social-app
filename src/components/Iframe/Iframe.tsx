import React, { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { InstagramEmbed, TikTokEmbed, YouTubeEmbed } from "react-social-media-embed";

export default function Iframe(link: any) {
  const [linkEmbed, SetLinkEmbed] = useState<React.ReactNode>(null);
  useEffect(() => {
    switch (link.embed) {
      case "tiktok":
        SetLinkEmbed(<TikTokEmbed url={link.urlLink} width={325} />);
        break;
      case "youtube":
        SetLinkEmbed(<YouTubeEmbed url={link.urlLink} width={325} />);
        break;
      case "instagram":
        SetLinkEmbed(<InstagramEmbed url={link.urlLink} width={325} />);
        break;

      default:
        break;
    }
  }, [link.embed, link.urlLink]);
  return <div className="m-2 rounded-3xl">{linkEmbed}</div>;
}
