import React from 'react';

interface IconStep2Props {
  width?: number;
  height?: number;
  stroke?: string;
  fill?: string;
  fillCircle: string;
}

const IconStep2: React.FC<IconStep2Props> = ({
  width = 24,
  height = 24,
  stroke = "#C5CBE0",
  fill = "white",
  fillCircle
}) => (
  <svg
    width={width}
    height={height}
    viewBox="0 0 24 24"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    style={{marginRight: '10px'}}
  >
    <circle cx="12" cy="12" r="11.5" stroke={stroke} fill={fillCircle}/>
    <path
      d="M14.4055 15.62C14.5655 15.62 14.6915 15.666 14.7835 15.758C14.8795 15.846 14.9275 15.964 14.9275 16.112V17H8.97553V16.508C8.97553 16.408 8.99553 16.304 9.03553 16.196C9.07953 16.084 9.14753 15.984 9.23953 15.896L11.8735 13.256C12.0935 13.032 12.2895 12.818 12.4615 12.614C12.6375 12.41 12.7835 12.208 12.8995 12.008C13.0155 11.808 13.1035 11.606 13.1635 11.402C13.2275 11.194 13.2595 10.976 13.2595 10.748C13.2595 10.54 13.2295 10.358 13.1695 10.202C13.1095 10.042 13.0235 9.908 12.9115 9.8C12.8035 9.692 12.6715 9.612 12.5155 9.56C12.3635 9.504 12.1915 9.476 11.9995 9.476C11.8235 9.476 11.6595 9.502 11.5075 9.554C11.3595 9.602 11.2275 9.672 11.1115 9.764C10.9955 9.852 10.8975 9.956 10.8175 10.076C10.7375 10.196 10.6775 10.328 10.6375 10.472C10.5695 10.656 10.4815 10.778 10.3735 10.838C10.2655 10.898 10.1095 10.912 9.90553 10.88L9.12553 10.742C9.18553 10.326 9.30153 9.962 9.47353 9.65C9.64553 9.334 9.85953 9.072 10.1155 8.864C10.3755 8.652 10.6715 8.494 11.0035 8.39C11.3395 8.282 11.6995 8.228 12.0835 8.228C12.4835 8.228 12.8495 8.288 13.1815 8.408C13.5135 8.524 13.7975 8.69 14.0335 8.906C14.2695 9.122 14.4535 9.382 14.5855 9.686C14.7175 9.99 14.7835 10.328 14.7835 10.7C14.7835 11.02 14.7355 11.316 14.6395 11.588C14.5475 11.86 14.4215 12.12 14.2615 12.368C14.1055 12.616 13.9215 12.856 13.7095 13.088C13.4975 13.32 13.2755 13.556 13.0435 13.796L11.0875 15.794C11.2755 15.738 11.4615 15.696 11.6455 15.668C11.8335 15.636 12.0115 15.62 12.1795 15.62H14.4055Z"
      fill={fill}
    />
  </svg>
);

export default IconStep2;