import React from 'react';

interface BaseButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant: 'success' | 'warning' | 'danger' | 'primary';
}

const BaseButton: React.FC<BaseButtonProps> = ({ variant, ...props }) => {
  const getButtonStyle = () => {
    switch (variant) {
      case 'success':
        return 'bg-green-500 hover:bg-green-600 text-white';
      case 'warning':
        return 'bg-orange-500 hover:bg-orange-600 text-white';
      case 'danger':
        return 'bg-red-500 hover:bg-red-600 text-white';
      case 'primary':
        return 'bg-blue-500 hover:bg-blue-600 text-white';
      default:
        return '';
    }
  };

  return (
    <button
      className={`px-4 py-2 rounded-md transition-colors duration-300 ${getButtonStyle()}`}
      {...props}
    >
      {props.children}
    </button>
  );
};

export default BaseButton;