import {  BiPencil } from "react-icons/bi";
import { BsCodeSlash } from "react-icons/bs";
import { AiOutlineMail } from "react-icons/ai";
import { FaCameraRetro, FaVideo, FaTabletAlt, FaRegNewspaper } from "react-icons/fa";
import { MobileFriendlyOutlined, SyncProblemOutlined, SystemSecurityUpdateGoodRounded } from "@mui/icons-material";

 

export const servicesData = [
    {
        id: 1,
        title: 'Content Writing',
        icon: <BiPencil /> 
    },
    {
        id: 2,
        title: 'Mobile App Development',
        icon: <MobileFriendlyOutlined />
    },
    {
        id: 3,
        title: 'Web Development',
        icon: <BsCodeSlash />
    },
    {
        id: 4,
        title: 'Systems Design',
        icon: <SystemSecurityUpdateGoodRounded />
    },
    {
        id: 5,
        title: 'Problem Solving',
        icon: <SyncProblemOutlined />
    },
    // {
    //     id: 10,
    //     title: 'Data Entry', 
    //     icon: <BsClipboardData />
    // },
    {
        id: 6,
        title: 'Blog Posting',
        icon: <FaRegNewspaper />
    },

]