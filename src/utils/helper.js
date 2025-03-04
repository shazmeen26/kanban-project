import { BiRadioCircle, BiSignal2, BiSignal3, BiSignal4 } from 'react-icons/bi';
import { LuMoreHorizontal } from 'react-icons/lu';
import { TbProgress } from 'react-icons/tb';
import { IoCheckmarkDoneCircle } from 'react-icons/io5';
import { AiFillCloseCircle, AiFillWarning } from 'react-icons/ai';

// Function to get the priority icon based on the priority string
export const getPriorityIcon = (priority) => {
    switch (priority) {
        case "No priority":
            return <LuMoreHorizontal color="#797d84" size={14} />;
        case "Low":
            return <BiSignal2 color='#6b6f76' size={14} />;
        case "Medium":
            return <BiSignal3 color='#6b6f76' size={14} />;
        case "High":
            return <BiSignal4 color='#6b6f76' size={14} />;
        case "Urgent":
            return <AiFillWarning color='#fc7840' size={14} />;
        default:
            return <AiFillWarning color='#fc7840' size={14} />;
    }
}

// Function to get the status icon based on the status string
export const getStatusIcon = (status) => {
    switch (status) {
        case "Backlog":
        case "Todo":
            return <BiRadioCircle color='#e2e2e2' size={24} />;
        case "In progress":
            return <TbProgress color='#f1ca4b' size={16} />;
        case "Done":
            return <IoCheckmarkDoneCircle color='#5e6ad2' size={16} />;
        case "Canceled":
            return <AiFillCloseCircle color='#94a2b3' size={16} />;
        default:
            return <AiFillCloseCircle color='#94a2b3' size={16} />;
    }
}
