import React from "react";
import PhoneIcon from "@mui/icons-material/Phone";
import LockIcon from "@mui/icons-material/Lock";
import Title from "./Title";
function Input({ error, disabled, helperText, startIcon, endIcon, value, size, fullWidth, multiline, row }) {
  return (
    <div className={`my-5 pb-10 ${!fullWidth && "flex"} `}>
      <div>
        <Title
          text={`${
            (helperText && error && `<Input helperText=${helperText} error/>`) ||
            (error && "<Input error/>") ||
            (disabled && "<Input disabled/>") ||
            (helperText && `<Input helperText=${helperText}/>`) ||
            (startIcon && "<Input startIcon />") ||
            (endIcon && "<Input endIcon />") ||
            (size && `<Input size=${size} />`) ||
            (fullWidth && "<Input fullWidth />") ||
            (multiline && row && `<Input multiline row="${row}" />`) ||
            "<Input />"
          }`}
        />
        <div className={`flex flex-col group`}>
          <div
            className={`order-2 border p-2 rounded-lg group-focus:outline-none ${
              (error && "border-red-600 group-hover:border-black group-focus:border-red-600") ||
              (disabled && "border-gray-100 bg-gray-100 text-gray-200") ||
              (size === "sm" && "text-sm border-gray-400 group-hover:border-black group-focus:border-blue-600") ||
              (size === "md" && "text-md border-gray-400 group-hover:border-black group-focus:border-blue-600") ||
              "border-gray-400 group-hover:border-black group-focus:border-blue-600"
            }`}
          >
            {startIcon && <PhoneIcon className='text-gray-500' />}
            {(multiline && row && <textarea rows={row} cols='30'></textarea>) || (
              <input
                disabled={disabled}
                type='text'
                id='name'
                className={`border-none outline-none ${startIcon || endIcon ? "" : "w-full"}`}
                placeholder={value || `Placeholder`}
              />
            )}

            {endIcon && <LockIcon className='text-gray-500' />}
          </div>

          <label
            htmlFor='name'
            className={`order-1 group-hover:text-black ${(error && "text-red-600") || "group-focus:text-blue-600"}`}
          >
            label
          </label>
          {helperText && (
            <span
              className={`order-3 text-xs  ${
                (error && "text-red-600 group-focus:text-red-600") || "text-gray-500 group-focus:text-blue-600"
              }`}
            >
              {helperText}
            </span>
          )}
        </div>
      </div>
    </div>
  );
}

export default Input;
