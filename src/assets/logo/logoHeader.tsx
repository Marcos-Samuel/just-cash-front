import React from 'react';

interface LogoImgProps extends React.SVGProps<SVGSVGElement> {
  colorType?: 'primary' | 'secondary'; 
}

const LogoImg: React.FC<LogoImgProps> = ({ colorType = 'primary', ...props }) => {
  const primaryColor =  '#072854'; 
  const secondaryColor = '#FFFFFF'; 

  const color = colorType === 'primary' ? primaryColor : secondaryColor;
   
  return (
    <svg
      width="158"
      height="24"
      viewBox="0 0 158 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <g clipPath="url(#clip0)">
        <g clipPath="url(#clip1)">
          <g clipPath="url(#clip2)">
            <path d="M41.266 0.309998V16.144C41.254 20.544 38.116 23.329 33.515 23.329C29.402 23.329 26.1629 21.166 26.1859 16.629H30.965C30.9333 17.0063 30.9834 17.3861 31.1117 17.7423C31.2401 18.0986 31.4437 18.4229 31.7088 18.6933C31.9739 18.9637 32.2942 19.1738 32.6478 19.3092C33.0014 19.4446 33.3801 19.5022 33.758 19.478C35.532 19.478 36.5069 18.325 36.5189 16.142V0.309998H41.266Z" fill={color} />
            <path d="M56.058 5.987H60.782V23.018H56.248V19.925H56.07C55.6686 20.9518 54.9528 21.8254 54.0249 22.4209C53.0971 23.0163 52.0047 23.303 50.904 23.24C47.477 23.24 45.148 20.812 45.137 16.831V5.987H49.8579V15.987C49.8669 17.993 51.0199 19.246 52.8059 19.246C53.2546 19.2534 53.6998 19.1665 54.1128 18.991C54.5258 18.8156 54.8974 18.5554 55.2035 18.2273C55.5097 17.8992 55.7436 17.5105 55.8901 17.0864C56.0365 16.6622 56.0924 16.2121 56.054 15.765L56.058 5.987Z" fill={color} />
            <path d="M74.402 11.111C74.2462 10.4908 73.8724 9.94735 73.3489 9.58011C72.8254 9.21286 72.1871 9.04635 71.5509 9.11101C70.0879 9.11101 68.935 9.776 68.945 10.797C68.935 11.617 69.522 12.161 71.109 12.504L74.191 13.124C77.491 13.801 79.104 15.276 79.114 17.738C79.104 21.097 75.9429 23.348 71.5299 23.348C67.0169 23.348 64.2449 21.341 63.8009 18.081L68.447 17.838C68.735 19.224 69.855 19.944 71.541 19.944C73.192 19.944 74.29 19.224 74.312 18.215C74.29 17.361 73.612 16.815 72.128 16.515L69.178 15.926C65.852 15.261 64.244 13.609 64.256 11.059C64.244 7.77801 67.117 5.759 71.474 5.759C75.774 5.759 78.305 7.701 78.725 10.838L74.402 11.111Z" fill={color} />
            <path d="M97.365 8.25999C97.2192 7.09198 96.6306 6.02449 95.7207 5.27777C94.8108 4.53105 93.649 4.16209 92.475 4.24699C88.96 4.24699 86.654 6.94099 86.654 11.665C86.654 16.522 88.993 19.083 92.441 19.083C93.5903 19.1716 94.7315 18.8288 95.6418 18.1216C96.5522 17.4145 97.1665 16.3935 97.365 15.258L102.221 15.28C101.7 19.46 98.186 23.33 92.364 23.33C86.288 23.33 81.788 19.071 81.788 11.665C81.788 4.23499 86.366 0 92.364 0C97.62 0 101.59 3.01599 102.221 8.25999H97.365Z" fill={color} />
            <path d="M104.786 18.262C104.786 14.462 107.812 13.328 111.186 13.018C114.146 12.73 115.309 12.586 115.309 11.488V11.423C115.309 10.023 114.39 9.21701 112.781 9.21701C112.128 9.14466 111.469 9.30062 110.918 9.65842C110.366 10.0162 109.955 10.5538 109.755 11.18L105.387 10.825C106.04 7.725 108.723 5.767 112.804 5.767C116.595 5.767 120.033 7.475 120.033 11.535V23.023H115.553V20.661H115.414C114.929 21.5386 114.201 22.2581 113.319 22.7338C112.436 23.2095 111.435 23.4213 110.435 23.344C107.192 23.34 104.786 21.633 104.786 18.262ZM115.341 16.932V15.123C114.291 15.539 113.185 15.7969 112.059 15.888C110.396 16.12 109.298 16.775 109.298 18.105C109.298 19.405 110.34 20.079 111.793 20.079C112.235 20.1173 112.68 20.0651 113.102 19.9257C113.523 19.7862 113.911 19.5625 114.243 19.268C114.575 18.9736 114.844 18.6146 115.033 18.213C115.221 17.8113 115.326 17.3755 115.341 16.932Z" fill={color} />
            <path d="M133.55 11.111C133.395 10.4908 133.021 9.94723 132.498 9.57994C131.974 9.21265 131.336 9.04618 130.7 9.11101C129.236 9.11101 128.084 9.776 128.1 10.797C128.089 11.617 128.676 12.161 130.262 12.504L133.344 13.124C136.644 13.801 138.256 15.276 138.267 17.738C138.256 21.097 135.096 23.348 130.684 23.348C126.171 23.348 123.399 21.341 122.955 18.081L127.601 17.838C127.888 19.224 129.008 19.944 130.694 19.944C132.346 19.944 133.444 19.224 133.465 18.215C133.444 17.361 132.765 16.815 131.281 16.515L128.331 15.926C125.005 15.261 123.398 13.609 123.41 11.059C123.399 7.77801 126.27 5.759 130.627 5.759C134.927 5.759 137.458 7.701 137.879 10.838L133.55 11.111Z" fill={color} />
            <path d="M145.971 23.019H141.247V0.309998H145.837V8.992H146.037C146.424 7.97724 147.128 7.11473 148.045 6.53316C148.963 5.95159 150.043 5.68213 151.126 5.765C154.675 5.765 157.026 8.183 157.015 12.175V23.019H152.291V13.019C152.303 10.919 151.172 9.69301 149.253 9.69301C148.8 9.67491 148.348 9.7542 147.929 9.92554C147.509 10.0969 147.131 10.3563 146.82 10.6862C146.509 11.0161 146.272 11.4089 146.126 11.8381C145.98 12.2673 145.927 12.7228 145.972 13.174L145.971 23.019Z" fill={color} />
            <path d="M19.772 14.189L20.287 13.909L21.102 15.309C21.569 13.4797 21.5133 11.5561 20.9415 9.7569C20.3696 7.95767 19.3044 6.35497 17.867 5.131C16.5646 4.00063 15.0008 3.21307 13.3172 2.83968C11.6336 2.4663 9.88343 2.51889 8.22529 2.99268C6.56714 3.46648 5.05339 4.3465 3.82124 5.55303C2.58908 6.75956 1.67743 8.25447 1.16889 9.90229C0.660352 11.5501 0.571024 13.2988 0.908943 14.9898C1.24686 16.6809 2.00138 18.261 3.10413 19.5868C4.20688 20.9127 5.62298 21.9424 7.22419 22.5828C8.8254 23.2231 10.5611 23.4538 12.274 23.254V23.868C10.3701 24.1126 8.43535 23.8458 6.66871 23.095C4.90207 22.3442 3.36724 21.1365 2.22199 19.596C0.815041 17.726 0.0377348 15.4578 0.00196025 13.1179C-0.0338143 10.7781 0.673769 8.48716 2.0229 6.57503C3.37202 4.66291 5.29308 3.22817 7.50953 2.47738C9.72598 1.72658 12.1235 1.69843 14.357 2.39699C17.0001 3.19311 19.2396 4.96833 20.618 7.36001C22.0382 9.76508 22.4956 12.6186 21.898 15.347L23.14 14.402L23.532 14.843C22.85 15.378 22.19 15.9 21.527 16.417C21.296 16.597 21.108 16.554 20.964 16.293C20.572 15.609 20.186 14.923 19.772 14.189Z" fill="#00B65B" />
            <path d="M16.303 22.281C15.9472 22.3013 15.5974 22.1833 15.3266 21.9517C15.0558 21.72 14.885 21.3926 14.85 21.038H15.416C15.4474 21.249 15.555 21.4411 15.7184 21.5782C15.8818 21.7153 16.0898 21.7878 16.303 21.782V20.105L16.126 20.055C15.417 19.855 14.974 19.487 14.974 18.877C14.9922 18.5372 15.1403 18.2173 15.3876 17.9836C15.6349 17.7498 15.9627 17.62 16.303 17.621V17.104H16.666V17.614C17.0058 17.599 17.3386 17.7138 17.5969 17.9352C17.8553 18.1566 18.0197 18.4679 18.057 18.806H17.525C17.4879 18.6065 17.3811 18.4267 17.2238 18.2985C17.0665 18.1703 16.8689 18.1021 16.666 18.106V19.681L16.843 19.73C17.312 19.854 18.119 20.13 18.119 20.98C18.119 21.67 17.596 22.22 16.666 22.28V22.773H16.303V22.281ZM16.303 18.109C15.815 18.173 15.503 18.466 15.503 18.85C15.503 19.298 15.964 19.485 16.303 19.58V18.109ZM17.589 20.967C17.589 20.515 17.163 20.347 16.689 20.214L16.67 20.209V21.782C17.202 21.723 17.589 21.413 17.589 20.967Z" fill="#00B65B" />
            <path d="M11.657 6.336H11.036V14.378H11.657V6.336Z" fill="#00B65B" />
            <path d="M14.6003 10.3253L14.196 9.854L9.64805 13.7548L10.0523 14.2261L14.6003 10.3253Z" fill="#00B65B" />
          </g>
        </g>
      </g>
      <defs>
        <clipPath id="clip0">
          <rect width="158" height="24" fill="white" />
        </clipPath>
        <clipPath id="clip1">
          <rect width="158" height="24" fill="white" />
        </clipPath>
        <clipPath id="clip2">
          <rect width="158" height="24" fill="white" />
        </clipPath>
      </defs>
    </svg>
  );
};

export default LogoImg;
