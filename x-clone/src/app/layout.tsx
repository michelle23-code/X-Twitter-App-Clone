import React from "react";
import "./globals.css";
import LeftBar from "../../companents/LeftBar";
import RightBar from "../../companents/RightBar";

export default function RootLayout({
  childern,
}: Readonly<{  
childern: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>
        <div className="">
          <div className=""><LeftBar/></div>
          <div className="">{childern}</div>
          <div className=""><RightBar/></div>
        </div>
      </body>
    </html>
  );
}