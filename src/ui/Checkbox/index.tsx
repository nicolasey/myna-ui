import { FC } from "react";

export type CheckboxProps = {
  text: string;
  disabled?: boolean;
}

const Checkbox: FC<CheckboxProps> = ({ text, disabled }) => {
  return (
    <div className="inline-flex items-center space-x-1.5">
      <input
        disabled={disabled}
        id="disabled"
        type="checkbox"
        className="cursor-pointer rounded border-gray-300 text-blue-600 transition focus:ring-blue-600 disabled:cursor-not-allowed disabled:bg-gray-200 disabled:opacity-75" />
      <label htmlFor="disabled" className="cursor-pointer truncate text-xs font-medium text-gray-500"> {text} </label>
    </div>
  )
}

export default Checkbox