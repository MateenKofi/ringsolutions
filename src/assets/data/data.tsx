import { GiIciclesFence } from "react-icons/gi";
import { GiGate } from "react-icons/gi";
import { GiCctvCamera } from "react-icons/gi";
import broadbandImg from "../svgs/broadband.svg";
import voiceImg from "../svgs/voice.svg";
import cctvImg from "../svgs/cctv.svg";



// export type Service = {
//     id: number;
//     title: string;
//     image:  JSX.Element;
// };

export const security = [
    {
        id: 1,
        title: 'Electic Fencing',
        image: <GiIciclesFence/>,
    },
    {
        id: 2,
        title: 'Automated Gates',
        image: <GiGate/>,
    },
    {
        id: 3,
        title: 'CCTV Surveillance and Alarm System',
        image: <GiCctvCamera/>,
    },
   
];

export const CCTV_DATA = [
    {
      id: 1,
      title: "broadband",
      description: "Truly Unlimited Internet With Speed Up-To 1000 Mbps !",
      image: broadbandImg,
    },
    {
      id: 2,
      title: "VOICE",
      description:
        "Crystal Clear Truly Unlimited STD And Local Calls With Eagle Eye Smart Telephony",
      image: voiceImg,
    },
    {
      id: 3,
      title: "CCTV",
      description: "Enterprise Business Solutions Internet Leased Line",
      image: cctvImg,
    },
  ];
  
