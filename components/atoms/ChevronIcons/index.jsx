export const IconLeft = ({ handleClick, width, height }) => {
  return (
    <svg
      width={width}
      height={height}
      viewBox="0 0 30 30"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      onClick={handleClick}
    >
      <circle
        cx="15"
        cy="15"
        r="14"
        fill="white"
        stroke="#EBBEB3"
        stroke-width="2"
      />
      <path
        d="M21.4818 7.60453L21.2135 7.06517H21.5405H21.5451H21.8018C21.8391 7.08375 21.8731 7.1062 21.9025 7.13235C22.0654 7.27747 22.0191 7.48437 21.8019 7.59052L21.5397 7.72095L21.4818 7.60453Z"
        fill="#797B7A"
        stroke="#797B7A"
        stroke-width="57"
      />
    </svg>
  );
};

export const IconRight = ({ handleClick, width = '30px', height = '30px' }) => {
  return (
    <svg
      width={width}
      height={height}
      viewBox="0 0 30 30"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      onClick={handleClick}
    >
      <circle
        cx="15"
        cy="15"
        r="14"
        fill="white"
        stroke="#EBBEB3"
        stroke-width="2"
      />
      <path
        d="M8.51817 22.3955L8.7865 22.9348L8.45947 22.9348L8.45485 22.9348L8.1982 22.9348C8.1609 22.9162 8.1269 22.8938 8.09754 22.8676C7.93464 22.7225 7.9809 22.5156 8.1981 22.4095L8.46025 22.279L8.51817 22.3955Z"
        fill="#797B7A"
        stroke="#797B7A"
        stroke-width="57"
      />
    </svg>
  );
};
