import { InputText } from './style';

export default function Input({ handleKeyUp, handleChange }) {
    return (
        <div>
            <InputText onKeyUp={handleKeyUp} onChange={handleChange} type="text" placeholder="Digite o nome da cidade"/>
        </div>
    )
}