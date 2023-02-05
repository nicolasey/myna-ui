import { FC } from "react";
import cn from 'classnames';

const AvatarIndicator: FC<{ color: string }> = ({ color }) => {
  const colorGradient = 500;

  return (
    <span aria-hidden="true" className={cn(
      "absolute bottom-0 right-0 h-3 w-3 rounded-full ring ring-white",
      'bg-' + color + colorGradient
    )}></span>
  )
}

export default AvatarIndicator