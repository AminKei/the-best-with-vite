import React from "react";
import Button from "../../ui/button";
import Typography from "../../ui/typography";
import { LockClosedIcon } from "@heroicons/react/24/outline";

interface ModalProps {
  isOpen: boolean;
  onClose: () => void;
  title?: string | React.ReactNode;
  children?: React.ReactNode;
  footer?: React.ReactNode;
  size?: "sm" | "md" | "lg" | "xl";
  overlayClosable?: boolean;
  closeIcon?: boolean;
  fullScreen?: boolean;
}

const Modal: React.FC<ModalProps> = ({
  isOpen,
  onClose,
  title,
  children,
  footer,
  size = "md",
  overlayClosable = true,
  closeIcon = true,
  fullScreen = false,
}) => {
  if (!isOpen) return null;

  const sizeClasses: Record<string, string> = {
    sm: "max-w-sm",
    md: "max-w-md",
    lg: "max-w-lg",
    xl: "max-w-xl",
  };

  const containerClassName = `bg-white text-black rounded-lg shadow-lg w-full ${
    fullScreen ? "h-full max-h-screen rounded-none m-0" : sizeClasses[size]
  } max-h-[90vh] overflow-y-auto p-6 relative`;

  return (
    <div
      className="fixed inset-0 bg-opacity-50 flex items-center justify-center z-50"
      onClick={overlayClosable ? onClose : undefined}
    >
      <div className={containerClassName} onClick={(e) => e.stopPropagation()}>
        {title && (
          <div className="flex justify-between items-center mb-4">
            <Typography variant="h2">{title}</Typography>
            {closeIcon && (
              <Button onClick={onClose} aria-label="Close">
                <LockClosedIcon/>
              </Button>
            )}
          </div>
        )}

        <div>{children}</div>

        {footer && <div className="mt-4 flex gap-2">{footer}</div>}
      </div>
    </div>
  );
};

export default Modal;
