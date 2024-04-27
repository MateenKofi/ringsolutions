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
      title: "Access",
      description: "Having access where ever you are. just tap on it!",
      image: broadbandImg,
    },
    {
      id: 2,
      title: "Alert",
      description: "Get alert when something is going wrong",
      image: voiceImg,
    },
    {
      id: 3,
      title: " surveillance",
      description: "Keep an eye on your property",
      image: cctvImg,
    },
  ];
  
