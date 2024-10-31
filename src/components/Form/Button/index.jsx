import { FaSearch } from "react-icons/fa";

import { Btn } from './style';

export default function Button({ handleClick }) {
    return (
        <Btn onClick={handleClick}>
            <FaSearch />
        </Btn>
    );
}